from django.urls import path, include
from .views import PatientCreateView, ReceptionistCreateView, DoctorCreateView, Login, Refresh, Logout


urlpatterns = [
    path('register', PatientCreateView.as_view(), name='PatientCreation'),
    path('receptionist-registration', ReceptionistCreateView.as_view(), name='ReceptionistCreation'),
    path('doctor-registration', DoctorCreateView.as_view(), name='DoctorCreation'),
    #path('login', LoginView.as_view(), name='PatientLogin'),
    path('login', Login.as_view(),name='Login'),
    path('refresh', Refresh.as_view(), name='Refresh'),
    path('logout', Logout.as_view(), name='Logout')
]