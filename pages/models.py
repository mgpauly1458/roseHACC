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
    hike_length = models.FloatField(default= 2)
    hike_elevation = models.IntegerField(default =100)
    hike_duration = models.IntegerField()
    hike_attributes = models.CharField(max_length=500, default="")
    
    def __str__(self):
        return self.hike_name


class Traffic(models.Model):
    hikeID = models.IntegerField(default = 0    )
    date = models.IntegerField(default = 0)
    num_people_1 = models.IntegerField(default = 0)
    num_people_2 = models.IntegerField(default = 0)
    num_people_3 = models.IntegerField(default = 0)
    num_people_4 = models.IntegerField(default = 0)
    num_people_5 = models.IntegerField(default = 0)
    num_people_6 = models.IntegerField(default = 0)

