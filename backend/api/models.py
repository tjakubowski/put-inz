from django.db import models
import uuid

# Create your models here.

class User(models.Model):
    email = models.EmailField(max_length=254, blank=False)
    password = models.CharField(max_length=30, blank=False)
    userPublicId = models.UUIDField(default=uuid.uuid4)


class Appointment(models.Model):
    doctorId = models.IntegerField() 
    userId = models.IntegerField(blank=True) 
    datetime = models.DateTimeField(auto_now=False, auto_now_add=False) 
    phone= models.CharField(max_length=16) 
    email = models.EmailField(max_length=254, blank=False)
    note = models.CharField(max_length=160, blank=True) 




