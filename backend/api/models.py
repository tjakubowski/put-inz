from django.db import models


# Appointment model
class Appointment(models.Model):
    doctor = models.ForeignKey('users.Staff', blank=False, on_delete=models.CASCADE)
    patient = models.ForeignKey('users.Patient', blank=False, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    note = models.CharField(max_length=160, blank=True)
