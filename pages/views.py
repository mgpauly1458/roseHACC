from django.shortcuts import render
from pages.models import Hike
from pages.models import Traffic
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers


def homePage(request):
    return render(request, 'homePage.html', {})

def discoverPage(request):
    return render(request, 'discoverPage.html', {})
    
def contactPage(request):
    return render(request, 'contactPage.html', {})

def aboutPage(request):
    return render(request, 'aboutPage.html', {})

def loginPage(request):
    return render(request, 'loginPage.html', {})

def signupPage(request):
    return render(request, 'signUpPage.html', {})

def trailMapPage(request):
    dateTrafficData = serializers.serialize("json", Traffic.objects.filter(date='110821'))
    return render(request, 'trailMapPage.html', {'hike_list': Hike.objects.all(), 'traffic_data': dateTrafficData})

def trailMapPageWithDate(request, date):
    dateTrafficData = serializers.serialize("json", Traffic.objects.filter(date=date))
    return render(request, 'trailMapPage.html', {'hike_list': Hike.objects.all(), 'traffic_data': dateTrafficData})

def pointsVerification(request):
    return render(request, 'pointsVerification.html', {})







# Testing React
def testReactPage(request):
    return render(request,'testReact.html', {})