from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Role(models.Model):
    """Roles entries"""

    STAFF = 1
    PATIENT = 2

    ROLE_CHOICES = (
        (STAFF, 'staff'),
        (PATIENT, 'patient'),
    )

    id = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, primary_key=True)

    def __str__(self):
        return self.get_id_display()


class User(AbstractUser):
    role = models.OneToOneField(Role, blank=False, on_delete=models.CASCADE, default=Role.PATIENT)
    email = models.EmailField(max_length=30, blank=False)
    password = models.CharField(max_length=35, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.role}  Mail:{self.email}, Created at:{self.created_at}'


class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    ssn = models.CharField(max_length=11, blank=False)


class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=35, blank=True)
    specialization = models.CharField(max_length=40, blank=True)