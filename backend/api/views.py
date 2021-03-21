from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer, AppointmentSerializer
from django.shortcuts import redirect
from .models import User, Appointment
import uuid

# Create your views here.

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True) 
        user = User(email=request.POST['email'], password=request.POST['password'], userPublicId=uuid.uuid4())
        user.save()
        
        x = serializer.save()
        return redirect("/")


class AppointmentAPI(generics.GenericAPIView):
        serializer_class = AppointmentSerializer

        def post(self, request, *args, **kwargs):
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True) 
            appointment = Appointment(doctorId=request.POST['doctorId'],userId=request.POST['userId'],
            datetime=request.POST['datetime'],phone=request.POST['phone'],email=request.POST['email'],
            note=request.POST['note'] )
            appointment.save()
        
            x = serializer.save()
            return redirect("/")
        