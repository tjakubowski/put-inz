from rest_framework import generics, permissions
from rest_framework.response import Response
# from .serializers import AppointmentSerializer
from django.shortcuts import redirect
from .models import Appointment
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from users.models import Doctor, Receptionist, User, Patient
from django.utils.dateparse import parse_datetime
from rest_framework.views import APIView
from rest_framework import serializers
from django.core import serializers
from .serializers import StaffSerializer, PatientSerializer


class AppointmentAPI(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def post(self, request):
        appointment = Appointment()
        date = request.data.get('appointment_date')
        appointment.appointment_date = parse_datetime(date)
        doctor = Doctor.objects.filter(user_id=request.data.get('doctor')).first()
        appointment.doctor = doctor
        patient = Patient.objects.filter(user_id=request.data.get('patient')).first()
        appointment.patient = patient
        appointment.note = request.data.get('note')
        appointment.save()
        return Response(status=status.HTTP_201_CREATED)


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


class DoctorInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        if Doctor.objects.filter(user_id=pk).exists():
            staff = Doctor.objects.filter(user_id=pk)
            serializer = StaffSerializer(staff, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


# Class base view returning full Staff list
class DoctorListView(APIView):

    def get(self, request):
        queryset = Doctor.objects.all()
        serializer = StaffSerializer(queryset, many=True)

        return Response(data=serializer.data)