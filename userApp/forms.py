from django.forms import ModelForm
from .models import CustomUser
from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField, AuthenticationForm
from django.core.exceptions import ValidationError



class CustomUserCreationForm(forms.Form):

        #Choices
    MALE = 'M'
    FEMALE = "F"
    OTHER = "O"
    SEX_CHOICES = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other")
    ]
    VERYLOW = "Very Unfit"
    LOW = "Unfit"
    MODERATE = "Moderate"
    HIGH = "Athletic"
    VERYHIGH = "Very Athletic"
    FITNESS_CHOICES = [
        (0, VERYLOW),
        (1, LOW),
        (2, MODERATE),
        (3, HIGH),
        (4, VERYHIGH)
    ]
    VI = "Very Inexperienced"
    I = "Inexperienced"
    M = "Moderate"
    E = "Experienced"
    VE = "Very Experienced"
    EXPERIENCE_CHOICES = [
        ('VI', VI),
        ("I", I),
        ("M", M),
        ("E", E),
        ("VE", VE)
    ]

    first_name = forms.CharField(label="First Name")
    last_name = forms.CharField(label="Last Name")
    age = forms.IntegerField()
    sex = forms.ChoiceField(choices=SEX_CHOICES)
    email = forms.EmailField()
    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Confirm Password", widget=forms.PasswordInput)
    fitness_level = forms.ChoiceField(choices=FITNESS_CHOICES)
    hiking_experience = forms.ChoiceField(choices=EXPERIENCE_CHOICES)
    profile_picture = forms.ImageField(label="Optional Profile Picture", required=False)


class CustomUserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()
    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'is_active',)

class CustomAuthenticationForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(label="Password", widget=forms.PasswordInput)