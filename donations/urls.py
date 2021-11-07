
from django.urls import path
from .views import donationsPage

urlpatterns = [
    path("", donationsPage, name="donations")
]