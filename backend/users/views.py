from .models import User, Patient, Staff, Role, Specialization, Receptionist
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.core import serializers


class PatientCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if User.objects.filter(email=request.data.get('email')).exists():
            res = {'error': 'user with this email exists'}
            return Response(res, status=status.HTTP_409_CONFLICT)

        if Patient.objects.filter(pesel_number=request.data.get('pesel_number')).exists():
            res = {'error': 'user with this pesel'}
            return Response(res, status=status.HTTP_409_CONFLICT)

        user = User()
        user.email = request.data.get('email')
        user.set_password(request.data.get('password'))
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
            res = {'error': 'user with this email exists'}
            return Response(res, status=status.HTTP_409_CONFLICT)

        user = User()
        user.email = request.data.get('email')
        user.set_password(request.data.get('password'))
        staff = Staff(user=user)
        staff.first_name = request.data.get('first_name')
        staff.last_name = request.data.get('last_name')
        receptionist = Receptionist(first_name=request.data.get('first_name'), last_name=request.data.get('last_name'))
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
            res = {'error': 'user with this email exists'}
            return Response(res, status=status.HTTP_409_CONFLICT)

        user = User(email=request.data.get('email'))
        user.set_password(request.data.get('password'))
        user.save()
        staff = Staff(user=user)
        staff.first_name = request.data.get('first_name')
        staff.last_name = request.data.get('last_name')

        role = Role(id=2)
        role.save()
        user.role.add(role)

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
                user = User.objects.get(email=email)
                try:

                    if check_password(password, user.password):
                        user_details = {}
                        user_details['email'] = user.email
                        refresh = RefreshToken.for_user(user)
                        user_details['refresh'] = str(refresh)
                        user_details['access'] = str(refresh.access_token)
                        user_details['role'] = serializers.serialize('json', user.role.all())
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
