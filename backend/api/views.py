from rest_framework import generics, permissions
from rest_framework.response import Response
# from .serializers import AppointmentSerializer
from .models import Appointment, PatientDocumentation
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from users.models import Doctor, Receptionist, User, Patient
from django.utils.dateparse import parse_datetime
from datetime import date, timedelta, datetime
from dateutil.relativedelta import relativedelta
from django.utils import dateparse
from rest_framework.views import APIView
from .serializers import DoctorSerializer, PatientSerializer, AppointmentCreateSerializer, AppointmentSerializer,\
    InputDatetimeSerializer, OutputDatetimeSerializer, PatientDocumentationCreateSerializer, PatientDocumentationSerializer


class AvailableDates(APIView):
    permission_classes = [AllowAny]
    serializer_class = InputDatetimeSerializer

    def post(self, request):
        start_date = dateparse.parse_datetime(str(request.data.get('start_date')))
        end_date = dateparse.parse_datetime(str(request.data.get('end_date')))
        start_date = start_date.replace(minute=0)
        dates = []
        nxt = start_date
        delta = relativedelta(**{'hours': 1})

        while nxt <= end_date:
            dates.append(nxt)
            nxt += delta

        json_list = []
        for i in dates:
            _json = {"date": i}
            json_list.append(_json)

        serializer = OutputDatetimeSerializer(json_list, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


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
                queryset = Appointment.objects.all()
                serializer = AppointmentSerializer(queryset, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            if request.user.role.id == 2:
                doctor = Doctor.objects.get(pk=request.user.pk)

                if Appointment.objects.filter(doctor=doctor).exists():
                    appointment = Appointment.objects.filter(doctor=doctor)
                    serializer = DoctorSerializer(appointment, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)

            if request.user.role.id == 3:
                patient = Patient.objects.get(pk=request.user.pk)

                if Appointment.objects.filter(patient=patient).exists():
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


class DocumentationInfoView(APIView):
    permission_classes = [AllowAny]
    serializer_class = PatientDocumentationCreateSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            doctor = Doctor.objects.get(user=serializer.data.get('doctor_id'))
            patient = Patient.objects.get(user=serializer.data.get('patient_id'))
            rel_appointment = Appointment.objects.get(pk=serializer.data.get('related_appointment_id'))

            patient_documentation = PatientDocumentation(
                doctor=doctor,
                patient=patient,
                related_appointment=rel_appointment,
                description=serializer.data.get('description')
            )
            patient_documentation.save()

            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        queryset = PatientDocumentation.objects.all()
        serializer = PatientDocumentationSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
