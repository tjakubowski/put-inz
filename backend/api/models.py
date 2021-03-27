from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid


class Appointment(models.Model):
    doctorId = models.IntegerField()
    userId = models.IntegerField(blank=True)
    datetime = models.DateTimeField(auto_now=False, auto_now_add=False)
    phone = models.CharField(max_length=16)
    email = models.EmailField(max_length=254, blank=False)
    note = models.CharField(max_length=160, blank=True)
