from django.shortcuts import render
from pages.models import Hike
from pages.models import Traffic
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
# from rest_framework.response import Response
# from rest_framework import authentication, permissions
# from rest_framework.decorators import api_view
from .serializers import HikeSerializer, TrafficSerializer

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
    return render(request, 'trailMapPage.html', {'hike_list' : Hike.objects.all()})

def pointsVerification(request):
    return render(request, 'pointsVerification.html', {})




#api
@api_view(['GET'])
def getTrafficData(request, date):
    dateTrafficData = Traffic.objects.filter(date=date)
    serializer = TrafficSerializer(dateTrafficData, many=True)
    return Response(serializer.data)
    

@api_view(['GET'])
def getHikeData(request):
    hike_list = Hike.objects.all()
    serializer = HikeSerializer(hike_list, many=True)
    print(serializer)
    return Response(serializer.data)
    pass

# Testing React
def testReactPage(request):
    return render(request,'testReact.html', {})