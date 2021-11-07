from django.db import models

# Create your models here.
class Hike(models.Model):
    hike_name = models.CharField(max_length=50)
    hike_difficulty = models.IntegerField(default=3)

    hike_rating = models.IntegerField(default=4)
    hike_images = models.CharField(max_length=50, default="")
    hike_description = models.CharField(max_length=500, default="")
    hike_location = models.CharField(max_length=50, default="")
    hike_route = models.CharField(max_length=500, default="")

    def __str__(self):
        return self.hike_name

