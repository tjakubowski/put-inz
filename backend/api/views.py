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
            patient = Patient.objects.filter(user=pk)
            serializer = PatientSerializer(patient, many=True)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class PatientListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = Patient.objects.all()
        serializer = PatientSerializer(queryset, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


# Class based view returning single doctor info
class DoctorInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        if Doctor.objects.filter(user_id=pk).exists():
            doctor = Doctor.objects.filter(user_id=pk)
            serializer = DoctorSerializer(doctor, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


# Class based view returning full Staff list
class DoctorListView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        queryset = Doctor.objects.all()
        serializer = DoctorSerializer(queryset, many=True)

        return Response(data=serializer.data)


# Class based Appointment create view
class AppointmentCreateView(APIView):
    permission_classes = [AllowAny]
    serializer_class = AppointmentCreateSerializer

    def get(self, request):
        queryset = Appointment.objects.all()
        serializer = AppointmentSerializer(queryset, many=True)

        return Response(data=serializer.data)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            doctor = Doctor.objects.filter(user=serializer.data.get('doctor_id')).first()
            patient = Patient.objects.filter(user=serializer.data.get('patient_id')).first()

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

    def get(self, request, pk):
        if Appointment.objects.filter(user_id=pk).exists():
            app = Appointment.objects.filter(user_id=pk)
            serializer = DoctorSerializer(app, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)