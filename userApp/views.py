from django.shortcuts import render
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser
from django.shortcuts import redirect
from django.contrib.auth.forms import AuthenticationForm
from django.views.generic import DetailView
from reservations.models import Reservation
from django.core.files.uploadedfile import SimpleUploadedFile

def loginPage(request):
    form = AuthenticationForm()
    if request.method == "POST":
        form = AuthenticationForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            email = data['email']
    return render(request, 'loginPage.html', {'form':form})

def signupPage(request):
    form = CustomUserCreationForm()
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST, request.FILES)
        print(request.POST)
        print(request.FILES)
        print(form.is_valid())
        if form.is_valid():
            data = form.cleaned_data
            user = CustomUser(
                email=data['email'],
                password=data['password2'],
                profile_picture=data['profile_picture']
            )
            user.save()
    return render(request, "signupPage.html", {'form':form})


def profilePage(request, pk):
    user = CustomUser.objects.get(pk=pk)
    res_list = Reservation.objects.filter(user=user)
    return render(request, 'profilePage.html', {'user':user, 'res_list':res_list})




# email example
# def email(request):
#     subject = 'Thank you for registering to our site'
#     message = ' it  means a world to us '
#     email_from = settings.EMAIL_HOST_USER
#     recipient_list = ['receiver@gmail.com',]
#     send_mail( subject, message, email_from, recipient_list )
#     return redirect('redirect to a new page')