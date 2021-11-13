from django.apps import AppConfig
from .utils import start

class ReservationsConfig(AppConfig):
    name = 'reservations'

    def ready(self):
        start()