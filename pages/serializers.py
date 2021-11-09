from rest_framework import serializers
from .models import Traffic, Hike

class TrafficSerializer(serializers.Serializer):
    hike_id = serializers.IntegerField()
    date = serializers.IntegerField()
    num_people_1 = serializers.IntegerField()
    num_people_2 = serializers.IntegerField()
    num_people_3 = serializers.IntegerField()
    num_people_4 = serializers.IntegerField()
    num_people_5 = serializers.IntegerField()
    num_people_6 = serializers.IntegerField()

class HikeSerializer(serializers.Serializer):
    hike_id = serializers.IntegerField()
    hike_name = serializers.CharField()
    hike_description = serializers.CharField()
    hike_route = serializers.CharField()
    hike_tags = serializers.CharField()
    hike_images = serializers.CharField()
    hike_difficulty = serializers.IntegerField()
    hike_duration = serializers.IntegerField()
    hike_length = serializers.IntegerField()




