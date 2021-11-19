import dramatiq
import requests

import os
from twilio.rest import Client
from django.core.mail import send_mail
import requests

account_sid = os.environ.get('TWILIO_SID')
auth_token = os.environ.get('TWILIO_AUTH_TOKEN')

@dramatiq.actor
def send_sms(phone_number, msg):
    client = Client(account_sid, auth_token)
    client.messages.create(
        body=msg,
        from_= "+17608402283",
        to=phone_number
    )

