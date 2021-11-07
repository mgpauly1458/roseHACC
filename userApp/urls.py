from django.urls import path, include
from .views import loginPage, signupPage, profilePage
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("", include('django.contrib.auth.urls')),
    path("signup/", signupPage, name="signup"),
    path("profile/<int:pk>", profilePage, name="profile"),
    path("logout/", auth_views.logout_then_login, name="logout"),

]