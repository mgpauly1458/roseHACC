from django.shortcuts import render
from pages.models import Hike

def homePage(request):
    return render(request, 'homePage.html', {})

def discoverPage(request):
    return render(request, 'discoverPage.html', {})
    
def contactPage(request):
    return render(request, 'contactPage.html', {})

def aboutPage(request):
    return render(request, 'aboutPage.html', {})

def trailMapPage(request):
    return render(request, 'trailMapPage.html', {'hike_list': Hike.objects.all() })

def loginPage(request):
    return render(request, 'loginPage.html', {})

def signupPage(request):
    return render(request, "signupPage.html", {})
