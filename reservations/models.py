from django.db import models
from django.contrib.auth import get_user_model
from pages.models import Hike
from django.core.validators import RegexValidator

class EmergencyContact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number_verified = models.BooleanField(default=False)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20, validators=[RegexValidator(regex='^\d{10}$', message='Phone number must be entered in the format: "9999999999".', code='nomatch')])

    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Reservation(models.Model):
    hike = models.ForeignKey(Hike, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    time = models.TimeField()
    date = models.DateField()
    number_of_people = models.IntegerField()
    emergency_contact = models.ForeignKey(EmergencyContact, on_delete=models.CASCADE, blank=True, null=True)
    reservation_verified = models.BooleanField(default=False)
    
    def __sts__(self):
        return self.hike

