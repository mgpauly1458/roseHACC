from django.forms import ModelForm
from .models import Reservation
from django.forms.widgets import DateInput, TimeInput

class CreateReservationForm(ModelForm):
    class Meta:
        model = Reservation
        fields = ['hike', 'time', 'date', 'number_of_people', 'emergency_contact_name', 'emergency_contact_phone_number']
        widgets = {
            'date': DateInput(attrs={'type':'date'}),
            'time': TimeInput(attrs={'type':'time'}),
        }