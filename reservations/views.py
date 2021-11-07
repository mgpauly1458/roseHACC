from django.shortcuts import render
from .forms import CreateReservationForm
from .models import Reservation

def reservationsPage(request):

    if request.method == 'POST':
        form = CreateReservationForm(request.POST)
        user = request.user
        if form.is_valid():
            newRes = Reservation()
            newRes.hike = form.cleaned_data['hike']
            newRes.user = request.user
            newRes.time = form.cleaned_data['time']
            newRes.date = form.cleaned_data['date']
            newRes.number_of_people = form.cleaned_data['number_of_people']
            newRes.emergency_contact_name = form.cleaned_data['emergency_contact_name']
            newRes.emergency_contact_phone_number = form.cleaned_data['emergency_contact_phone_number']
            newRes.save()
            

    else:
        form = CreateReservationForm()
        
    return render(request, "reservationsPage.html", {'form':form})