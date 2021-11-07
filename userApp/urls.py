from django.urls import path, include
from .views import loginPage, signupPage, ProfilePage

urlpatterns = [
    path("", include('django.contrib.auth.urls')),
    path("signup/", signupPage, name="signup"),
    path("<int:pk>/", ProfilePage.as_view(), name="profile"),

]