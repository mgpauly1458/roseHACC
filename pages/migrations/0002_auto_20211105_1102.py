# Generated by Django 3.2.8 on 2021-11-05 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hike',
            name='hike_difficulty',
            field=models.IntegerField(default=3),
        ),
        migrations.AddField(
            model_name='hike',
            name='hike_traffic',
            field=models.IntegerField(default=3),
        ),
    ]
