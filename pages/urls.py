from django.urls import path
from .views import homePage
from .views import discoverPage
from .views import contactPage
from .views import aboutPage
from .views import trailMapPage

urlpatterns = [
    path('', homePage, name="home"),
    path('discover', discoverPage, name="discover"),
    path('contact', contactPage, name="contact"),
    path('about', aboutPage, name="about"),
    path('trailmap', trailMapPage, name="trailmap")
]