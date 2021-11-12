from django import forms
from .models import Reservation, EmergencyContact
from django.forms.widgets import DateInput, TimeInput
from django.core.validators import RegexValidator

class CreateReservationForm(forms.ModelForm):

    class Meta:
        model = Reservation
        fields = ['hike', 'time', 'date', 'number_of_people', 'emergency_contact', ]
        widgets = {
            'date': DateInput(attrs={'type':'date'}),
            'time': TimeInput(attrs={'type':'time'}),
        }

class CreateEmergencyContactForm(forms.Form):
    name=forms.CharField(max_length=100)
    phone_number=forms.CharField(max_length=10, validators=[RegexValidator(r'^\d{10}$')])