from rest_framework import serializers
from .models import Appointment
from users.models import Doctor, Patient, User, Specialization, Receptionist, Role


# Specialization serializer
class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = (
            'id'
        )


# Role instance serializer returning role's name
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'


# User Instance serializer
class UserSerializer(serializers.ModelSerializer):
    role = RoleSerializer()

    class Meta:
        model = User
        fields = (
            'pk',
            'role',
            'email',
            'date_joined'
        )


# User create serializer
class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email',
            'password'
        )


# Doctor instance serializer
class DoctorSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    specializations = SpecializationSerializer(many=True)

    class Meta:
        model = Doctor
        fields = (
            'user',
            'first_name',
            'last_name',
            'specializations'
        )


# Doctor create serializer
class DoctorCreateSerializer(serializers.ModelSerializer):
    user = UserCreateSerializer()

    class Meta:
        model = Doctor
        fields = (
            'user',
            'first_name',
            'last_name',
        )


# Patient create serializer
class PatientCreateSerializer(serializers.ModelSerializer):
    user = UserCreateSerializer()

    class Meta:
        model = Patient
        fields = (
            'user',
            'first_name',
            'last_name',
            'pesel_number',
            'phone_number'
        )


# Patient instance serializer with user info
class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Patient
        fields = (
            'user',
            'first_name',
            'last_name',
            'pesel_number',
            'phone_number'
        )


# Appointment instance serializer
class AppointmentSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer()
    patient = PatientSerializer()

    class Meta:
        model = Appointment
        fields = (
            'doctor',
            'patient',
            'appointment_date',
            'is_confirmed',
            'created_at',
            'note'
        )


# Receptionist create serializer
class ReceptionistCreateSerializer(serializers.ModelSerializer):
    user = UserCreateSerializer()

    class Meta:
        model = Receptionist
        fields = (
            'user',
            'first_name',
            'last_name'
        )


# Receptionist instance serializer
class ReceptionistSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Receptionist
        fields = (
            'user',
            'first_name',
            'last_name'
        )