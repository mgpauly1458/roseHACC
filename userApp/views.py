from django.shortcuts import render
from .forms import CustomUserCreationForm, CustomUserChangeForm, CustomAuthenticationForm
from .models import CustomUser
from django.shortcuts import redirect
from django.views.generic import DetailView
from reservations.models import Reservation
from django.core.files.uploadedfile import SimpleUploadedFile
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.urls import reverse
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
import jwt, json


def loginPage(request):
    #redirect if logged in
    if request.user.is_authenticated:
        print(request.user)
        url = "/users/profile/"+str(request.user.pk)
        return redirect(url)

    # check for errors
    error = None
    if request.GET.get('error') == "invalid_credentials":
        error = "Your username or password is incorrect."
    form = CustomAuthenticationForm()

    if request.method == 'POST':
        form = CustomAuthenticationForm(request.POST)
        data = form.data
        user = authenticate(email=data['email'], password=data['password'])
        if user is not None:
            login(request, user)
            url = "/users/profile/"+str(user.pk)
            return redirect(url)
        else:
            url = reverse('loginPage') + "?error=invalid_credentials"
            return redirect(url)

    return render(request, 'registration/loginPage.html', {'form':form, 'error':error})

def signupPage(request):
    # Error checks
    error = None
    if request.GET.get('error') == 'email_exists':
        error = 'An account with this email already exists, try to login or recover your password'

    form = CustomUserCreationForm()
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
                data = form.cleaned_data
                #if email already exists, redirect to login
                print(CustomUser.objects.filter(email=data['email']))
                if CustomUser.objects.filter(email=data['email']):
                    url = reverse('signup') + '?error=email_exists'
                    return redirect(url)
                else:
                    user = CustomUser(
                        first_name = data['first_name'],
                        last_name = data['last_name'],
                        age = data['age'],
                        sex = data['sex'],
                        email = data['email'],
                        fitness_level = data['fitness_level'],
                        hiking_experience = data['hiking_experience'],
                        password=make_password(data['password2']),
                        profile_picture=data['profile_picture']
                    )
                    user.save()
                    login(request, user)
                    url = "/users/profile/"+str(user.pk)
                    return redirect(url)
    return render(request, "signupPage.html", {'form':form, 'error':error})

@login_required(redirect_field_name="home")
def profilePage(request, pk):
    if request.user.pk != pk:
        raise PermissionDenied
    user = CustomUser.objects.get(pk=pk)
    res_list = Reservation.objects.filter(user=user)
    return render(request, 'profilePage.html', {'user':user, 'res_list':res_list})

def confirmEmailPage(request, token):
    print(request.GET.get("jwt"))
    return HttpResponse


# email example
# def email(request):
#     subject = 'Thank you for registering to our site'
#     message = ' it  means a world to us '
#     email_from = settings.EMAIL_HOST_USER
#     recipient_list = ['receiver@gmail.com',]
#     send_mail( subject, message, email_from, recipient_list )
#     return redirect('redirect to a new page')