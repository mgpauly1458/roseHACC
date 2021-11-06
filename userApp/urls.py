from django.urls import path
from .views import loginPage, signupPage

urlpatterns = [
    path("login/", loginPage, name="login"),
    path("signup/", signupPage, name="signup"),
]