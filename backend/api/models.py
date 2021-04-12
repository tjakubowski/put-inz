from django.db import models
from django.utils import timezone


# Appointment model
class Appointment(models.Model):
    doctor = models.ForeignKey('users.Staff', blank=False, default=1, on_delete=models.CASCADE)
    patient = models.ForeignKey('users.Patient', blank=False, default=1, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField(blank=False, default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)
    note = models.CharField(max_length=160, blank=True)
