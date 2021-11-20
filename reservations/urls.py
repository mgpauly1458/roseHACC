from django.urls import path
from .views import reservationsPage, emergencyContactPage

urlpatterns = [
    path("", reservationsPage, name="reservations"),
    path("emergencyContact/", emergencyContactPage, name="emergencyContact"),
]