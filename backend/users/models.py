from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _


class CustomizedUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, password, role, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.role = role
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
        return self.create_user(email, password, role=1, **extra_fields)


class Role(models.Model):
    """Roles entries"""

    ADMIN = 1
    STAFF = 2
    PATIENT = 3

    ROLE_CHOICES = (
        (ADMIN, 'admin'),
        (STAFF, 'staff'),
        (PATIENT, 'patient')
    )

    id = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, primary_key=True)

    def __str__(self):
        return self.get_id_display()


class User(AbstractUser):
    username = None
    email = models.EmailField(max_length=30, unique=True)
    role = models.OneToOneField(Role, blank=False, on_delete=models.CASCADE, default=Role.PATIENT)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = CustomizedUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.role}  Mail:{self.email}, Created at:{self.created_at}'


class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, primary_key=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    ssn = models.CharField(max_length=11, blank=True, unique=True)
    phone_number = models.CharField(max_length=15, blank=True)


class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=35, blank=True)
    specialization = models.CharField(max_length=40, blank=True)