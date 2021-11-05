from django.shortcuts import render

def homePage(request):
    return render(request, 'homePage.html', {})

def discoverPage(request):
    return render(request, 'discoverPage.html', {})