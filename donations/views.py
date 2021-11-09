from django.shortcuts import render
from .forms import DonationForm
from .models import Donation
import stripe
# Create your views here.

def donationsPage(request):
    form = DonationForm()
    if request.method == 'POST':
        form = DonationForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            donation = Donation(
                user=request.user,
                amount=data['amount'],
            )
            donation.save()
            
        

    return render(request, 'donations.html', {'form': form})



