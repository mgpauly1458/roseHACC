from django.urls import path
from .views import homePage
from .views import discoverPage

urlpatterns = [
    path('', homePage, name="home"),
    path('discover', discoverPage, name="discover"),
]