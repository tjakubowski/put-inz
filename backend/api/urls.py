from .views import AppointmentCreateView
from django.urls import path
from .views import PatientListView, PatientInfoView, DoctorInfoView, AppointmentInfoView, DoctorListView, DoctorAppointmentListView, PatientAppointmentListView

urlpatterns = [
    path('appointments', AppointmentCreateView.as_view(), name='AppointmentList'),
    path('appointments/<int:pk>', AppointmentInfoView.as_view(), name='AppointmentInfo'),
    path('patients', PatientListView.as_view(), name='PatientList'),
    path('patients/<int:pk>', PatientInfoView.as_view(), name='PatientInfoView'),
    path('doctors/<int:pk>', DoctorInfoView.as_view(), name='StaffInfoView'),
    path('doctors', DoctorListView.as_view(), name='DoctorList'),
    path('doctor-appointment/<int:pk>',DoctorAppointmentListView.as_view(), name='DoctorAppointmentList'),
    path('patient-appointment/<int:pk>',PatientAppointmentListView.as_view(), name='PatientAppointmentList')
    
]
