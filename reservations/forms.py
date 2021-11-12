from django import forms
from .models import Reservation, EmergencyContact
from django.forms.widgets import DateInput, TimeInput
from django.core.validators import RegexValidator

class CreateReservationForm(forms.ModelForm):

    def __init__(self, user, *args, **kwargs):
        super(CreateReservationForm, self).__init__(*args, **kwargs)
        self.fields['emergency_contact'].queryset = EmergencyContact.objects.filter(user=user)
    class Meta:
        model = Reservation
        fields = ['hike', 'time', 'date', 'number_of_people', 'emergency_contact', ]
        widgets = {
            'date': DateInput(attrs={'type':'date'}),
            'time': TimeInput(attrs={'type':'time'}),
        }

class CreateEmergencyContactForm(forms.Form):
    first_name=forms.CharField(max_length=100)
    last_name=forms.CharField(max_length=100)
    phone_number=forms.CharField(max_length=10, validators=[RegexValidator(r'^\d{10}$')])