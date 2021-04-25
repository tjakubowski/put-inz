from .views import AppointmentAPI
from django.urls import path
from .views import PatientListView, PatientInfoView, DoctorInfoView

urlpatterns = [
    path('appointment', AppointmentAPI.as_view(), name='AppointmentList'),
    path('patient-list', PatientListView.as_view(), name='PatientList'),
    path('patient-info/<int:pk>', PatientInfoView.as_view(), name='PatientInfoView'),
    path('staff-info/<int:pk>', DoctorInfoView.as_view(), name='StaffInfoView')
]
