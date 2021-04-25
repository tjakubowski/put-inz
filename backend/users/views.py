from .models import User, Patient, Staff, Role, Specialization, Receptionist
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from api.serializers import PatientSerializer, PatientCreateSerializer, ReceptionistSerializer, \
    ReceptionistCreateSerializer


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

            user.save()
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

            user.save()
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
