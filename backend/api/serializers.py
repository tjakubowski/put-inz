from rest_framework import serializers
from .models import Appointment


# Appointment Serializer
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('doctorId', 'userId', 'datetime', 'phone', 'email', 'note')
