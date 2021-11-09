from django.urls import path
from .views import homePage, discoverPage, contactPage, aboutPage, trailMapPage, pointsVerification, trailMapPageWithDate

#test react
from .views import testReactPage

urlpatterns = [
    path('', homePage, name="home"),
    path('discover/', discoverPage, name="discover"),
    path('contact/', contactPage, name="contact"),
    path('about/', aboutPage, name="about"),
    path('trailmap/', trailMapPage, name="trailmap"),
    path('trailmap/<str:date>', trailMapPageWithDate, name="trailmapWithDate"),
    path('pointsVerification/', pointsVerification, name="pointsVerification"),
    path('testReact/', testReactPage, name="testReact"),
]