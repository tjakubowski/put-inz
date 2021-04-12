from rest_framework import serializers
from .models import Appointment
from users.models import Staff, Patient, User


# Appointment Instance Serializer
# class AppointmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Appointment
#         fields = ('doctorId', 'userId', 'datetime', 'phone', 'email', 'note')


# User Instance Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email',
            'date_joined'
        )


# Patient Instance Serializer
# class StaffSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Staff
#         fields = ('')
