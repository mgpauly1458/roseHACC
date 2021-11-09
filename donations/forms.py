from .models import Donation
from django import forms

class DonationForm(forms.Form):
    amount = forms.DecimalField(max_digits=8, decimal_places=2)