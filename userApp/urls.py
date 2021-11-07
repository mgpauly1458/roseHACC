from django.urls import path, include
from .views import loginPage, signupPage, profilePage
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("", include('django.contrib.auth.urls')),
    path("signup/", signupPage, name="signup"),
    path("profile/<int:pk>", profilePage, name="profile"),
    path("logout/", auth_views.logout_then_login, name="logout"),

    #auth override
    path("login/", auth_views.LoginView.as_view(template_name="registration/loginPage.html"), name="login"),
    path("passwordReset/", auth_views.PasswordResetView.as_view(template_name="registration/passwordResetPage.html"), name="passwordReset"),


]