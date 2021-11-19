from django.urls import path
from .views import reservationsPage, emergencyContactPage, send_sms_api, schedulerTest

urlpatterns = [
    path("", reservationsPage, name="reservations"),
    path("emergencyContact/", emergencyContactPage, name="emergencyContact"),
    path("makeCall", send_sms_api, name="makeCall"),
    path("schedulerTest/", schedulerTest, name="schedulerTest"),
]