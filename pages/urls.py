from django.urls import path
<<<<<<< HEAD
from .views import homePage, discoverPage, contactPage, aboutPage, trailMapPage, pointsVerification
=======
from django.conf.urls import include

from .views import homePage, discoverPage, contactPage, aboutPage, trailMapPage, loginPage, signupPage
>>>>>>> 898f7f890b2c301f9f12ee84f9812c3012681f52

urlpatterns = [
    path('', homePage, name="home"),
    path('discover/', discoverPage, name="discover"),
    path('contact/', contactPage, name="contact"),
    path('about/', aboutPage, name="about"),
    path('trailmap/', trailMapPage, name="trailmap"),
<<<<<<< HEAD
    path('pointsVerification/', pointsVerification, name="pointsVerification"),
=======
    path("login/", loginPage, name="login"),
    path("signup/", signupPage, name="signup"),

>>>>>>> 898f7f890b2c301f9f12ee84f9812c3012681f52
]