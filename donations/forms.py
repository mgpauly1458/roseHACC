from .models import Donation
from django import forms

class DonationForm(forms.Form):
    amount = forms.IntegerField()
