from .views import  AppointmentAPI
from django.urls import path

urlpatterns = [
    path('appointment', AppointmentAPI.as_view(), name='appointment'),
]
