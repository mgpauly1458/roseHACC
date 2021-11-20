from django.shortcuts import render
from pages.models import Hike, Traffic
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import HikeSerializer, TrafficSerializer


def loginPage(request):
    return render(request, 'loginPage.html', {})

def signupPage(request):
    return render(request, 'signUpPage.html', {})

def trailMapPage(request):
    return render(request, 'trailMapPage.html', {'hike_list' : Hike.objects.all()})

def hikingSafetyPage(request):
    return render(request, 'hikingSafetyPage.html', {})

#api
@api_view(['GET'])
def getTrafficData(request, date):
    dateTrafficData = Traffic.objects.filter(date=date)
    serializer = TrafficSerializer(dateTrafficData, many=True)
    return Response(serializer.data)
    pass

@api_view(['GET'])
def getHikeData(request):
    hike_list = Hike.objects.all()
    serializer = HikeSerializer(hike_list, many=True)
    return Response(serializer.data)
    pass

# Testing React
def testReactPage(request):
    return render(request,'testReact.html', {})