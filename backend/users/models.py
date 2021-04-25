from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone


class CustomizedUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """

    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=self.normalize_email(email), **extra_fields)
        patient_instance = Patient.objects.create(user=user)
        patient_instance.save()
        user.set_password(password)
        user.save()
        return user

    def create_staffuser(self, email, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
            is_staff=True
        )
        staff_instance = Staff.objects.create(user=user)
        staff_instance.save()
        user.staff = True
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user


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
    role = models.OneToOneField(Role, on_delete=models.CASCADE)
    username = None
    email = models.EmailField(max_length=30, unique=True, blank=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomizedUserManager()

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
class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, primary_key=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=35, blank=True)
    specializations = models.ManyToManyField(Specialization, blank=True)


# Model of receptionist
class Receptionist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, primary_key=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=20, blank=True)
