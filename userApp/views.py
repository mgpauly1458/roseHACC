from django.shortcuts import render

def loginPage(request):
    return render(request, 'loginPage.html', {})

def signupPage(request):
    return render(request, "signupPage.html", {})