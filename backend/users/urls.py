from django.contrib import admin
from django.urls import path, include
from .views import PatientCreateView, ReceptionsitCreateView, LoginView, PatientListView, PatientInfoView, StaffInfoView, ReceptionsitCreateView, DoctorCreateView

urlpatterns = [
    path('patient_registration/', PatientCreateView.as_view(), name="PatientCreation"),
    path('receptionsit_registration/', ReceptionsitCreateView.as_view(), name="ReceptionsitCreation"),
    path('doctor_registration/', DoctorCreateView.as_view(), name="DoctorCreation"),
    path('login/',LoginView.as_view(), name="PatientLogin"),
    path('patient_list/',PatientListView.as_view(),name="PatientList"),
    path('patient_info/',PatientInfoView.as_view(),name="PatientInfoView"),
    path('staff_info/', StaffInfoView.as_view(), name="StaffInfoView")
    
]