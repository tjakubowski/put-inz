from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone


# Role's model
class Role(models.Model):
    RECEPTIONIST = 1
    DOCTOR = 2
    PATIENT = 3
    ROLE_CHOICES = (
        (RECEPTIONIST, 'receptionist'),
        (DOCTOR, 'doctor'),
        (PATIENT, 'patient')
    )

    id = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, primary_key=True)


# Specialization model
class Specialization(models.Model):
    CARDIOLOGIST = 1
    DENTIST = 2
    PSYCHIATRIST = 3
    OCULIST = 4
    SPECIALIZATION_CHOICES = (
        (CARDIOLOGIST, 'cardiologist'),
        (DENTIST, 'dentist'),
        (PSYCHIATRIST, 'psychiatrist'),
        (OCULIST, 'oculist')
    )

    id = models.PositiveSmallIntegerField(choices=SPECIALIZATION_CHOICES, primary_key=True)


# Account model
class User(AbstractUser):
    role = models.ForeignKey(Role, blank=False, on_delete=models.CASCADE)
    username = None
    email = models.EmailField(max_length=30, unique=True, blank=False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.role}  Mail:{self.email}, Created at:{self.date_joined}'


# Model of patient attending the clinic
class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, primary_key=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    pesel_number = models.CharField(max_length=11, blank=False, unique=True, default='')
    phone_number = models.CharField(max_length=15, blank=True)


# Model of staff working in a clinic
class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, primary_key=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=35, blank=True)
    specializations = models.ManyToManyField(Specialization, blank=True)


# Model of receptionist
class Receptionist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, primary_key=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=20, blank=True)
