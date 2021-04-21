from django.contrib import admin
from django.urls import path, include
from .views import PatientCreateView, StaffCreateView, PatientLoginView, PatientListView

urlpatterns = [
    path('patient_registration/', PatientCreateView.as_view(), name="PatientCreation"),
    path('staff_registration/', StaffCreateView.as_view(), name="StaffCreation"),
    path('patient_login/',PatientLoginView.as_view(), name="PatientLogin"),
    path('patient_list/',PatientListView.as_view(),name="PatientList"),
    
]