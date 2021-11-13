from django.urls import path
from .views import reservationsPage, emergencyContactPage, schedulerTestPage

urlpatterns = [
    path("", reservationsPage, name="reservations"),
    path("emergencyContact/", emergencyContactPage, name="emergencyContact"),
    path("schedulerTest/", schedulerTestPage, name="schedulerTest"),
]