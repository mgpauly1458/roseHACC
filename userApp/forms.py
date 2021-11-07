from django.forms import ModelForm
from .models import CustomUser
from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField, AuthenticationForm
from django.core.exceptions import ValidationError

class CustomUserCreationForm(ModelForm):

    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
<<<<<<< HEAD
        fields = ['email', 'profile_picture']
=======
        fields = ['email',]
>>>>>>> 44dd2cd44c5e54f38b7a3c636fb7a42fe09fc1a9

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

class CustomUserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()
    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'is_active',)


# class CustomAuthenticationForm(AuthenticationForm):
#     def confirm_login_allowed(self, user):
