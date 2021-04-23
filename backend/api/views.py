from rest_framework import generics, permissions
from rest_framework.response import Response
# from .serializers import AppointmentSerializer
from django.shortcuts import redirect
from .models import Appointment
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from users.models import Staff, Receptionist,User, Patient
import uuid
from django.utils.dateparse import parse_datetime

# Create your views here.


# class AppointmentAPI(generics.GenericAPIView):
#         serializer_class = AppointmentSerializer
#
#         def post(self, request, *args, **kwargs):
#             serializer = self.get_serializer(data=request.data)
#             serializer.is_valid(raise_exception=True)
#             appointment = Appointment(doctorId=request.POST['doctorId'], userId=request.POST['userId'],
#             datetime = request.POST['datetime'],phone=request.POST['phone'],email=request.POST['email'],
#             note = request.POST['note'] )
#             appointment.save()
#
#             content={'':''}
#             return Response(content,status=status.HTTP_201_CREATED)

class AppointmentAPI(generics.GenericAPIView):
    permission_classes = [AllowAny]
    def post(self, request):
        appointment = Appointment()
        date=request.data.get('appointment_date')
        appointment.appointment_date=parse_datetime(date)
        doctor = Staff.objects.filter(user_id=request.data.get('doctor')).first()
        appointment.doctor=doctor
        patient = Patient.objects.filter(user_id=request.data.get('patient')).first()
        appointment.patient=patient
        appointment.note=request.data.get('note')
        appointment.save()
        return Response(status=status.HTTP_201_CREATED)

