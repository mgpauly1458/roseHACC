from django.db import models
from django.contrib.auth import get_user_model
from pages.models import Hike
from django.core.validators import RegexValidator

class Reservation(models.Model):
    hike = models.ForeignKey(Hike, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    time = models.TimeField()
    date = models.DateField()
    number_of_people = models.IntegerField()
    emergency_contact_name = models.CharField(null=True, blank=True, max_length=100)

    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    emergency_contact_phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True, null=True)
    

    def __sts__(self):
        return self.hike