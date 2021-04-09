from django.contrib import admin
from django.urls import path, include
from .views import PatientCreateView, StaffCreateView

urlpatterns = [
    path('patient_registration/', PatientCreateView.as_view(), name="PatientCreation"),
    path('staff_registration/', StaffCreateView.as_view(), name="StaffCreation"),
    
]