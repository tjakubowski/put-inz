from .views import AppointmentAPI
from django.urls import path
from .views import PatientListView, PatientInfoView, StaffInfoView

urlpatterns = [
    path('appointment/', AppointmentAPI.as_view(), name='AppointmentList'),
    path('patient_list/', PatientListView.as_view(), name='PatientList'),
    path('patient_info/', PatientInfoView.as_view(), name='PatientInfoView'),
    path('staff_info/', StaffInfoView.as_view(), name='StaffInfoView')
]
