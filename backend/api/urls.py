from .views import AppointmentCreateView
from django.urls import path
from .views import PatientListView, PatientInfoView, DoctorInfoView, AppointmentInfoView, DoctorListView, AvailableDates, DocumentationInfoView

urlpatterns = [
    path('appointments', AppointmentInfoView.as_view(), name='AppointmentList'),
    path('appointments/<int:pk>', AppointmentInfoView.as_view(), name='AppointmentInfo'),
    path('patients', PatientListView.as_view(), name='PatientList'),
    path('patients/<int:pk>', PatientInfoView.as_view(), name='PatientInfoView'),
    path('doctors/<int:pk>', DoctorInfoView.as_view(), name='StaffInfoView'),
    path('doctors', DoctorListView.as_view(), name='DoctorList'),
    path('available-dates', AvailableDates.as_view(), name='AvailableDates'),
    path('patient-documentation', DocumentationInfoView.as_view(), name='PatientDocumentation')
]
