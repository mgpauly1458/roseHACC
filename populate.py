from pages.models import Traffic
from itertools import islice
import random

batch_size = 154
Object = (Traffic(hike_id=i, date=111921, num_people_1=random.randint(1, 25), num_people_2=random.randint(10, 35), num_people_3=random.randint(15, 75), num_people_4=random.randint(15, 75), num_people_5=random.randint(1, 25), num_people_6=random.randint(1, 19)) for i in range(1, 154))
while True:
    batch = list(islice(Object, batch_size))
    if not batch:
        break
    Traffic.objects.bulk_create(batch, batch_size)
