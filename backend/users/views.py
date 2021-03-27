from django.shortcuts import render
from django.views.generic import CreateView
from .models import User
from .forms import StaffSignUpForm
from django.contrib.auth import login
from django.shortcuts import redirect
from .forms import PatientRegisterForm
from django.contrib import messages


def patient_register(request):
    if request.method == 'POST':
        creation_form = PatientRegisterForm(request.POST)
        if creation_form.is_valid():
            creation_form.save()
            email = creation_form.cleaned_data.get('email')
            messages.success(request, f'Account created successfully for {email}')
            return redirect('/')
    else:
        creation_form = PatientRegisterForm()
    return redirect('/x/')