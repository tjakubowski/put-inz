import jwt
from rest_framework import response
from .models import User, Patient, Doctor, Role, Specialization, Receptionist
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from api.serializers import PatientSerializer, PatientCreateSerializer, ReceptionistSerializer, \
    ReceptionistCreateSerializer, DoctorCreateSerializer, DoctorSerializer, UserLoginSerializer, RoleSerializer
import jwt
from backend.settings import SECRET_KEY


class PatientCreateView(APIView):
    serializer_class = PatientCreateSerializer
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = Patient.objects.all()
        serializer = PatientSerializer(queryset, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            user_data = serializer.data.pop('user')
            user = User(email=user_data['email'])
            user.set_password(user_data['password'])
            role = Role(id=3)
            role.save()

            user.role = role
            user.save()
            patient = Patient(
                user=user,
                first_name=serializer.data.get('first_name'),
                last_name=serializer.data.get('last_name'),
                phone_number=serializer.data.get('phone_number'),
                pesel_number=serializer.data.get('pesel_number')
            )
            patient.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


class ReceptionistCreateView(APIView):
    serializer_class = ReceptionistCreateSerializer
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = Receptionist.objects.all()
        serializer = ReceptionistSerializer(queryset, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            user_data = serializer.data.pop('user')
            user = User(email=user_data['email'])
            user.set_password(user_data['password'])
            role = Role(id=1)
            role.save()

            user.role = role
            user.save()
            receptionist = Receptionist(
                user=user,
                first_name=serializer.data.get('first_name'),
                last_name=serializer.data.get('last_name')
            )
            receptionist.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


class DoctorCreateView(APIView):
    serializer_class = DoctorCreateSerializer
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = Doctor.objects.all()
        serializer = DoctorSerializer(queryset, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            user_data = serializer.data.pop('user')
            user = User(email=user_data['email'])
            user.set_password(user_data['password'])
            role = Role(id=2)
            role.save()

            user.role = role
            user.save()
            doctor = Doctor(
                user=user,
                first_name=serializer.data.get('first_name'),
                last_name=serializer.data.get('last_name'),
            )
            doctor.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


#old version
class LoginView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer

    def post(self, request):
        

        email = request.data.get('email')
        password = request.data.get('password')
        if User.objects.filter(email=email).exists():
            user= User.objects.get(email=email)
            if(check_password(password, user.password)):
                user_details = {}
                user_details['email'] = user.email
                refresh = RefreshToken.for_user(user)
                user_details['refresh'] = str(refresh)
                user_details['access'] = str(refresh.access_token)
                role_name="PATIENT"
                if user.role.id==1:
                    role_name="RECEPTIONIST"
                if user.role.id==2:
                    role_name="DOCTOR"
                if user.role.id==3:
                    role_name="PATIENT"

                user_details['role'] = role_name
                return Response(user_details, status=status.HTTP_200_OK)
            else:
                return Response({'Error':'Wrong password'}, status.HTTP_403_FORBIDDEN)
        else: 
            return Response({'Error': 'Account not active or bad request'}, status=status.HTTP_400_BAD_REQUEST)

           

class Login(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer  

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if User.objects.filter(email=email).exists():
            user= User.objects.get(email=email)
            if(check_password(password, user.password)):
                user_details = {}
                user_details['email'] = user.email
                refresh = RefreshToken.for_user(user)
                user_details['access'] = str(refresh.access_token)
                role_name="PATIENT"
                if user.role.id==1:
                    role_name="RECEPTIONIST"
                if user.role.id==2:
                    role_name="DOCTOR"
                if user.role.id==3:
                    role_name="PATIENT"
                user_details['role'] = role_name
                response = Response(user_details, status=status.HTTP_200_OK)
                response.set_cookie('refresh_token',str(refresh), httponly=True, secure=False, expires=300, samesite=None, max_age=300, path="/")
                return response
            else:
                return Response({'Error':'Wrong password'}, status.HTTP_403_FORBIDDEN)
        else: 
            return Response({'Error': 'Account not active or bad request'}, status=status.HTTP_400_BAD_REQUEST)


class Refresh(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if request.COOKIES.get('refresh_token'):
            old_refresh = jwt.decode(request.COOKIES.get('refresh_token'), SECRET_KEY, algorithms=["HS256"])
            user = User.objects.filter(id=old_refresh['user_id']).first()
            refresh = RefreshToken.for_user(user)
            user_details={}
            user_details['access']=str(refresh.access_token)
            user_details['expires']=300
            response = Response(user_details, status=status.HTTP_200_OK)
            response.set_cookie('refresh_token', str(refresh), httponly=True, secure=False, expires=300, samesite=None, max_age=300, path="/")
            return response
        else:
            return Response({'Error':'no refresh_token cookie'}, status=status.HTTP_400_BAD_REQUEST)
            



class Logout(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if request.COOKIES.get('refresh_token'):
            response = Response({}, status=status.HTTP_200_OK)
            response.delete_cookie('refresh_token')
            return response
        else:
            return Response({'Error':'can not clear cookies'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        

