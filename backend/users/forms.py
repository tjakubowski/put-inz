from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction
from .models import User, Staff, Patient, Role
from django.views.generic import CreateView


class StaffSignUpForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.role = Role.STAFF
        user.save()
        staff = Staff.objects.create(user=user)
        staff.email = User.email
        return user


class PatientRegisterForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.role = Role.PATIENT
        patient = Patient.objects.create(user=user)
        patient.user = user
        user.save()

        return user
