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