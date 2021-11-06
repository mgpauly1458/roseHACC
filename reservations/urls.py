from django.urls import path
from .views import reservationsPage

urlpatterns = [
    path("", reservationsPage, name="reservations"),
]