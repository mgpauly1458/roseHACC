from django.urls import path
from .views import getTrafficData, getHikeData, trailMapPage, hikingSafetyPage

#test react
from .views import testReactPage

urlpatterns = [
    path('', trailMapPage, name="home"),
    path('testReact/', testReactPage, name="testReact"),
    path("getTrafficData/<int:date>", getTrafficData),
    path("getHikeData/", getHikeData),
    path("hikingSafety/", hikingSafetyPage, name="hikingSafety"),
]