from django.urls import path
from .views import homePage
from .views import discoverPage
from .views import contactPage
from .views import aboutPage

urlpatterns = [
    path('', homePage, name="home"),
    path('discover', discoverPage, name="discover"),
    path('contact', contactPage, name="contact"),
    path('about', aboutPage, name="about")
]