from .models import User, Patient, Staff
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny



class PatientCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self,request):
        user = User()
        user.email = request.data.get('email')
        password = make_password(request.data.get('password'))
        user.set_password(password)
        patient = Patient(user=user, pesel_number=request.data.get('pesel_number'))
        user.save()
        patient.save()
        return Response(status=status.HTTP_201_CREATED)

class StaffCreateView(APIView):
    def post(self, request):
        user = User()
        user.email = request.data.get('email')
        password = make_password(request.data.get('password'))
        user.set_password(password)
        patient = Staff(user=user)
        user.save()
        patient.save()
        return Response(status=status.HTTP_201_CREATED)