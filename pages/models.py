from django.db import models

# Create your models here.
class Hike(models.Model):
    hike_name = models.CharField(max_length=50)
    hike_difficulty = models.IntegerField(default=3)
    hike_traffic = models.IntegerField(default=3)

    def __str__(self):
        return self.hike_name