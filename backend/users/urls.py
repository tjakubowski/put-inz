from django.contrib import admin
from django.urls import path, include
from .views import PatientCreateView, ReceptionistCreateView, LoginView, PatientListView, PatientInfoView, StaffInfoView, DoctorCreateView

urlpatterns = [
    path('patient_registration/', PatientCreateView.as_view(), name="PatientCreation"),
    path('receptionist_registration/', ReceptionistCreateView.as_view(), name="ReceptionistCreation"),
    path('doctor_registration/', DoctorCreateView.as_view(), name="DoctorCreation"),
    path('login/',LoginView.as_view(), name="PatientLogin"),
    path('patient_list/',PatientListView.as_view(),name="PatientList"),
    path('patient_info/',PatientInfoView.as_view(),name="PatientInfoView"),
    path('staff_info/', StaffInfoView.as_view(), name="StaffInfoView")
    
]