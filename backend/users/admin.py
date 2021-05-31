from django.contrib import admin
from .models import User, Patient, Doctor, Receptionist
from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin


admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(Receptionist)