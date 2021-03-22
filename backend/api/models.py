from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid

class Role(models.Model):
    """Roles entries"""

    CLINIC = 1
    DOCTOR = 2
    PATIENT = 3

    ROLE_CHOICES = (
        (CLINIC, 'clinic'),
        (DOCTOR, 'doctor'),
        (PATIENT, 'patient'),
    )

    id = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, primary_key=True)

    def __str__(self):
        return self.get_id_display()


class User(models.Model):
    is_clinic = models.BooleanField(default=False)
    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)

    role = models.OneToOneField(Role, blank=False, default=Role.PATIENT)
    email = models.EmailField(max_length=30, blank=False)
    password = models.CharField(max_length=35, blank=False)
    userPublicId = models.UUIDField(max_length=50, auto_created=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.role}  Mail:{self.email}, Created at:{self.created_at}'


# class Clinic(models.Model):

#     user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
#     name = clinic1
#     address = Poznan Hetmanska
#     phone_number = 123456789




class Appointment(models.Model):
    doctorId = models.IntegerField()
    userId = models.IntegerField(blank=True)
    datetime = models.DateTimeField(auto_now=False, auto_now_add=False)
    phone = models.CharField(max_length=16)
    email = models.EmailField(max_length=254, blank=False)
    note = models.CharField(max_length=160, blank=True)
