import dramatiq

from django.core.mail import send_mail

@dramatiq.actor
def email_test():
    send_mail(
        "test subject",
        "test message",
        "rosehacc@gmail.com",
        ['maxwellpauly32@gmail.com',]
    )

import dramatiq
import requests


@dramatiq.actor
def count_words(url):
    response = requests.get(url)
    count = len(response.text.split(" "))
    print(f"There are {count} words at {url!r}.")

@dramatiq.actor
def hello():
    print("Hello")