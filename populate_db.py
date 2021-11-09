from pages.models import Traffic
from itertools import islice
from random import randint

batch_size = 154
Object = (Traffic(hikeID=i, date=102621, num_people_1=randint(1, 25), num_people_2=randint(10, 35), num_people_3=randint(15, 75), num_people_4=randint(15, 75), num_people_5=randint(1, 40), num_people_6=randint(1, 22)) for i in range(154))
while True:
    batch = list(islice(Object, batch_size))
    if not batch:
        break
    Traffic.objects.bulk_create(batch, batch_size)
