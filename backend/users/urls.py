from django.contrib import admin
from django.urls import path, include
from .views import patient_register


urlpatterns = [
    path('staff_signup/', patient_register, name='Staff_SignUp'),
]