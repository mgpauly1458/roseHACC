import dramatiq
import requests

@dramatiq.actor
def hello():
    print('hello')