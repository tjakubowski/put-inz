from .views import RegisterAPI, AppointmentAPI
from django.urls import path

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('appointment', AppointmentAPI.as_view(), name='appointment'),
]
