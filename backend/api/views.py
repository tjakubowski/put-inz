from rest_framework import generics, permissions
from rest_framework.response import Response
# from .serializers import AppointmentSerializer
from .models import Appointment
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from users.models import Doctor, Receptionist, User, Patient
from django.utils.dateparse import parse_datetime
from rest_framework.views import APIView
from .serializers import DoctorSerializer, PatientSerializer, AppointmentCreateSerializer, AppointmentSerializer


class PatientInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        if Patient.objects.filter(user=pk).exists():
            queryset = Patient.objects.get(user=pk)
            serializer = PatientSerializer(queryset, many=False)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        if Patient.objects.filter(user=pk).exists():
            Patient.objects.filter(user=pk).delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)


class PatientListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):

        if Patient.objects.count() == 1:
            queryset = Patient.objects.first()
            serializer = PatientSerializer(queryset, many=False)
        else:
            queryset = Patient.objects.all()
            serializer = PatientSerializer(queryset, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


# Class based view returning single doctor info
class DoctorInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        if Doctor.objects.filter(user_id=pk).exists():
            doctor = Doctor.objects.get(user_id=pk)
            serializer = DoctorSerializer(doctor, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        if Doctor.objects.filter(user=pk).exists():
            Doctor.objects.filter(user=pk).delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)


# Class based view returning full Staff list
class DoctorListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):

        if Doctor.objects.count() == 1:
            queryset = Doctor.objects.first()
            serializer = DoctorSerializer(queryset, many=False)
        else:
            queryset = Doctor.objects.all()
            serializer = DoctorSerializer(queryset, many=True)

        return Response(data=serializer.data)


# Class based Appointment create view
class AppointmentCreateView(APIView):
    permission_classes = [AllowAny]
    serializer_class = AppointmentCreateSerializer

    def get(self, request):
        if Appointment.objects.count() == 1:
            queryset = Appointment.objects.first()
            serializer = AppointmentSerializer(queryset, many=False)
        else:
            queryset = Appointment.objects.all()
            serializer = AppointmentSerializer(queryset, many=True)
        return Response(data=serializer.data)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            doctor = Doctor.objects.get(user=serializer.data.get('doctor_id'))
            patient = Patient.objects.get(user=serializer.data.get('patient_id'))

            appointment = Appointment(
                doctor=doctor,
                patient=patient,
                appointment_date=serializer.data.get('appointment_date'),
                is_confirmed=False,
                note=serializer.data.get('note')
            )
            appointment.save()

            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


# Class based view returning info about appointment
class AppointmentInfoView(APIView):
    permission_classes = [AllowAny]
    serializer_class = AppointmentCreateSerializer

    def get(self, request):
        if request.user.is_authenticated:
            if request.user.role.id == 1:

                if Appointment.objects.count() == 1:
                    queryset = Appointment.objects.first()
                    serializer = AppointmentSerializer(queryset, many=False)
                else:
                    queryset = Appointment.objects.all()
                    serializer = AppointmentSerializer(queryset, many=False)
                return Response(serializer.data, status=status.HTTP_200_OK)

            if request.user.role.id == 2:
                doctor = Doctor.objects.get(pk=request.user.pk)

                if Appointment.objects.filter(doctor=doctor).exists():
                    if Appointment.objects.filter(doctor=doctor).count() == 1:
                        appointment = Appointment.objects.get(doctor=doctor)
                        serializer = AppointmentSerializer(appointment, many=False)
                    else:
                        appointment = Appointment.objects.filter(doctor=doctor)
                        serializer = DoctorSerializer(appointment, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)

            if request.user.role.id == 3:
                patient = Patient.objects.get(pk=request.user.pk)

                if Appointment.objects.filter(patient=patient).exists():
                    if Appointment.objects.filter(patient=patient).count() == 1:
                        appointment = Appointment.objects.get(patient=patient)
                        serializer = AppointmentSerializer(appointment, many=False)
                    else:
                        appointment = Appointment.objects.filter(patient=patient)
                        serializer = AppointmentSerializer(appointment, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            doctor = Doctor.objects.get(user=serializer.data.get('doctor_id'))
            patient = Patient.objects.get(user=serializer.data.get('patient_id'))

            appointment = Appointment(
                doctor=doctor,
                patient=patient,
                appointment_date=serializer.data.get('appointment_date'),
                is_confirmed=False,
                note=serializer.data.get('note')
            )
            appointment.save()

            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

# class DoctorAppointmentListView(APIView):
#     permission_classes = [AllowAny]
#
#     def get(self, request, pk):
#         if Appointment.objects.filter(doctor=pk).exist():
#             queryset = Appointment.objects.filter(doctor=pk)
#             serializer = AppointmentSerializer(queryset, many=True)
#             return Response(data=serializer.data, status=status.HTTP_200_OK)
#         else:
#             return Response(status=status.HTTP_400_BAD_REQUEST)
#
#
# class PatientAppointmentListView(APIView):
#     permission_classes = [AllowAny]
#
#     def get(self, request, pk):
#         if Appointment.objects.filter(patient=pk).exists():
#             queryset = Appointment.objects.filter(patient=pk)
#             serializer = AppointmentSerializer(queryset, many=True)
#             return Response(data=serializer.data, status=status.HTTP_200_OK)
#         else:
#             return Response(status=status.HTTP_400_BAD_REQUEST)