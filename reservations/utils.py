from .tasks import send_sms
import arrow
def queText(reservation):
    date = reservation.date
    user = reservation.user
    arr = arrow.now()
    now = arrow.now()
    arr = arr.shift(hours=8)
    time = int((arr-now).total_seconds())
    message = "Hello, {} {} listed you as an emergency contact for their hike. They signed up on https://www.alakai.xyz, an online platform built to assist hikers with all their hiking needs. {} signed up to go on {} at {} on {}. This message was scheduled to send 8 hours after their expected start time. Would you check up on them and make sure they arrived back safely. Mahalo!".format(user.first_name, user.last_name, user.first_name, reservation.hike.hike_name, reservation.time, reservation.date)
    send_sms.send_with_options(phone_number=reservation.emergency_contact.phone_number, msg=message, delay=time*1000)