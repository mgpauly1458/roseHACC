from django.shortcuts import render
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser
from django.shortcuts import redirect
from django.contrib.auth.forms import AuthenticationForm
<<<<<<< HEAD
from django.views.generic import DetailView
=======
<<<<<<< HEAD
from django.views.generic import DetailView
=======
>>>>>>> 44dd2cd44c5e54f38b7a3c636fb7a42fe09fc1a9
>>>>>>> db003cedbbe4df223febf45f3dbd52078401b5eb
def loginPage(request):
    form = AuthenticationForm()
    if request.method == "POST":
        form = AuthenticationForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            email = data['email']
            p
    return render(request, 'loginPage.html', {'form':form})

def signupPage(request):
    form = CustomUserCreationForm()
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("home")
    return render(request, "signupPage.html", {'form':form})

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> db003cedbbe4df223febf45f3dbd52078401b5eb
class ProfilePage(DetailView):
    model = CustomUser
    context_object_name = 'user'
    template_name = "profilePage.html"
<<<<<<< HEAD

=======
=======
>>>>>>> 44dd2cd44c5e54f38b7a3c636fb7a42fe09fc1a9
>>>>>>> db003cedbbe4df223febf45f3dbd52078401b5eb
