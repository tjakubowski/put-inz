from django.urls import path, include
from .views import PatientCreateView, ReceptionistCreateView, LoginView, DoctorCreateView


urlpatterns = [
    path('patient_registration/', PatientCreateView.as_view(), name='PatientCreation'),
    path('receptionist_registration/', ReceptionistCreateView.as_view(), name='ReceptionistCreation'),
    path('doctor_registration/', DoctorCreateView.as_view(), name='DoctorCreation'),
    path('login/', LoginView.as_view(), name='PatientLogin')
]