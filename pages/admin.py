from django.contrib import admin
from .models import Hike
from .models import Traffic

admin.site.register(Hike)
admin.site.register(Traffic)