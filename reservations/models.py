from django.db import models
from django.contrib.auth import get_user_model
from pages.models import Hike

class Reservation(models.Model):
    hike = models.ForeignKey(Hike, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    time = models.TimeField()
    date = models.DateField()
    number_of_people = models.IntegerField()
    

    def __sts__(self):
        return self.hike