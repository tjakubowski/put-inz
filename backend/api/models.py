from django.db import models
from users.models import Staff, Patient


class Appointment(models.Model):
    doctor = models.ForeignKey(Staff, blank=False, on_delete=models.SET_NULL)
    patient = models.ForeignKey(Patient, blank=False, on_delete=models.SET_NULL)
    appointment_date = models.DateTimeField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    note = models.CharField(max_length=160, blank=True)
