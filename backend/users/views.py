from .models import User, Patient, Staff, Role, Specialization, Receptionist
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
import jwt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.core import serializers
import json


class PatientCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        if User.objects.filter(email=request.data.get('email')).exists():
            res={'error':'user with this email exists'}
            return Response(res, status=status.HTTP_409_CONFLICT)

        if Patient.objects.filter(pesel_number=request.data.get('pesel_number exist')).exists():
            res={'error':'user with this pesel'}
            return Response(res, status=status.HTTP_409_CONFLICT)

        user = User()
        user.email = request.data.get('email')
        password = make_password(request.data.get('password'))
        user.set_password(password)
        role = Role(id=3)
        role.save()
        user.save()
        user.role.add(role)
        user.save()
        patient = Patient(user=user, pesel_number=request.data.get('pesel_number'))
        patient.first_name = request.data.get('first_name')
        patient.last_name = request.data.get('last_name')
        patient.phone_number = request.data.get('phone_number')  
        patient.save()
        return Response(status=status.HTTP_201_CREATED)

class ReceptionistCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        if User.objects.filter(email=request.data.get('email')).exists():
            res={'error':'user with this email exists'}
            return Response(res, status=status.HTTP_409_CONFLICT)

        user = User()
        user.email = request.data.get('email')
        password = make_password(request.data.get('password'))
        user.set_password(password)
        staff = Staff(user=user)
        staff.first_name=request.data.get('first_name')
        staff.last_name=request.data.get('last_name')
        receptionist=Receptionist(first_name=request.data.get('first_name'),last_name=request.data.get('last_name'))
        receptionist.save()
        user.save()
        role = Role(id=1)
        role.save()
        user.role.add(role)
        user.save()
        staff.save()
        return Response(status=status.HTTP_201_CREATED)


class DoctorCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        if User.objects.filter(email=request.data.get('email')).exists():
            res={'error':'user with this email exists'}
            return Response(res, status=status.HTTP_409_CONFLICT)


        user = User()
        user.email = request.data.get('email')
        password = make_password(request.data.get('password'))
        user.set_password(password)
        staff = Staff(user=user)
        staff.first_name=request.data.get('first_name')
        staff.last_name=request.data.get('last_name')
        user.save()
        role=Role(id=2)
        role.save()
        user.role.add(role)
        #specialization=Specialization(id=request.data.get('specialization'))
        #specialization.save()
        #staff.specialization.add(specialization)
        user.save()
        staff.save()
        return Response(status=status.HTTP_201_CREATED)
        

class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        try:
            email = request.data['email']
            password = request.data['password']

            if User.objects.filter(email=email).exists():
                user=User.objects.get(email=email)
                try:
                    valid = user.check_password(password)
                    if valid: 
                        user_details = {}
                        user_details['email'] = user.email
                        refresh = RefreshToken.for_user(user)
                        user_details['refresh']=str(refresh)
                        user_details['access']=str(refresh.access_token)
                        user_details['role']=serializers.serialize('json', user.role.all())
                        return Response(user_details, status=status.HTTP_200_OK)  
                    else:
                        res = {'error': 'wrong password'}
                        return Response(res, status=status.HTTP_403_FORBIDDEN)

                except Exception as e:
                    raise e
            else:
                res = {
                    'error': 'can not authenticate with the given credentials or the account has been deactivated'}
                return Response(res, status=status.HTTP_403_FORBIDDEN)
        except KeyError:
            res = {'error': 'please provide a email and a password'}
            return Response(res)

        
class PatientListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        patients =  serializers.serialize("json", Patient.objects.all())
        return Response(patients, status=status.HTTP_200_OK)



class PatientInfoView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user_id = request.data['user_id']
        if Patient.objects.filter(user_id=user_id).exists():
            patient = Patient.objects.filter(user_id=user_id).first()
            res={}
            res['first_name']=patient.first_name
            res['last_name']=patient.last_name
            res['pesel_number']=patient.pesel_number
            res['phone_numer']=patient.phone_number
            return Response(res, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class StaffInfoView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user_id = request.data['user_id']
        if Staff.objects.filter(user_id=user_id).exists():
            patient = Staff.objects.filter(user_id=user_id).first()
            res={}
            res['first_name']=patient.first_name
            res['last_name']=patient.last_name
            #res['specialization']=patient.specialization
            return Response(res, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
