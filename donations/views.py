from django.shortcuts import render

# Create your views here.

def donationsPage(request):
    return render(request, 'donationsPage.html', {})



