from django.contrib import admin
from .models import Reservation, EmergencyContact

admin.site.register(Reservation)
admin.site.register(EmergencyContact)
