from django.contrib import admin
from django.urls import path, include
from .views import RegisterPatientView
from .views import RegisterStaffView

urlpatterns = [
    path('patient_signup/', RegisterPatientView, name='PatientSignUp'),
    path('staff_signup/', RegisterStaffView, name='StaffSignUp')
]