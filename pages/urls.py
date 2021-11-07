from django.urls import path
from .views import homePage, discoverPage, contactPage, aboutPage, trailMapPage, pointsVerification


urlpatterns = [
    path('', homePage, name="home"),
    path('discover/', discoverPage, name="discover"),
    path('contact/', contactPage, name="contact"),
    path('about/', aboutPage, name="about"),
    path('trailmap/', trailMapPage, name="trailmap"),
    path('pointsVerification/', pointsVerification, name="pointsVerification"),
]
