from .views import AppointmentAPI
from django.urls import path
from .views import PatientListView, PatientInfoView, DoctorInfoView

urlpatterns = [
    path('appointments', AppointmentAPI.as_view(), name='AppointmentList'),
    path('patients', PatientListView.as_view(), name='PatientList'),
    path('patients/<int:pk>', PatientInfoView.as_view(), name='PatientInfoView'),
    path('doctors/<int:pk>', DoctorInfoView.as_view(), name='StaffInfoView')
]
