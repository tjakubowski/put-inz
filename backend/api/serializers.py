from rest_framework import serializers
from .models import Appointment
from users.models import Staff, Patient, User, Specialization


# User Instance serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email',
            'date_joined'
        )


# Specialization serializer
class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = (
            'id'
        )


# Staff instance serializer
class StaffSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    specializations = SpecializationSerializer(source='specialization_set', many=True)

    class Meta:
        model = Staff
        fields = (
            'user'
            'first_name',
            'last_name',
            'specializations'
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
    doctor = StaffSerializer()
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
