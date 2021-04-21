from .models import User, Patient, Staff
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password
from django.core import serializers
import json


class PatientCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        user = User()
        user.email = request.data.get('email')
        password = make_password(request.data.get('password'))
        #user.role=3
        user.set_password(password)
        patient = Patient(user=user, pesel_number=request.data.get('pesel_number'))
        patient.first_name = request.data.get('first_name')
        patient.last_name = request.data.get('last_name')
        patient.phone_number = request.data.get('phone_number')  
        user.save()
        patient.save()
        return Response(status=status.HTTP_201_CREATED)

class StaffCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        user = User()
        user.email = request.data.get('email')
        password = make_password(request.data.get('password'))
        user.set_password(password)
        patient = Staff(user=user)
        patient.first_name=request.data.get('first_name')
        patient.last_name=request.data.get('last_name')
        user.save()
        patient.save()
        return Response(status=status.HTTP_201_CREATED)

class PatientLoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        try:
            email = request.data['email']
            password = request.data['password']

            if User.objects.filter(email=email).exists():
                #user = User.objects.filter(email=email).first()
                user=User.objects.get(email=email)
                print(user)
                try:
                    
                    valid = user.check_password(password)
                    #valid = check_password(password, user.password)
                    #valid = authenticate(email=email,password=password)
                    #valid = validate_password(password=password,user=user)
                    
                    print(valid)
                    print(password)
                    print(user)
                    if valid: 
                        payload = jwt_payload_handler(user)
                        token = jwt.encode(payload, settings.SECRET_KEY)
                        user_details = {}
                        user_details['email'] = user.email
                        user_details['token'] = token
                        user_logged_in.send(sender=user.__class__,
                                    request=request, user=user)
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
    permission_classes = [AllowAny]
    def get(self, request):
        patients =  serializers.serialize("json", Patient.objects.all())
        return Response(patients, status=status.HTTP_200_OK)



class PatientInfoView(APIView):
    permission_classes = [AllowAny]
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