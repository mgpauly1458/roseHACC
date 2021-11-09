from django.db import models
from userApp.models import CustomUser

class Donation(models.Model):
    amount = models.IntegerField(default=0)
    date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.amount} on {self.date}'