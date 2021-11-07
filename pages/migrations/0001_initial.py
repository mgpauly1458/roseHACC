
                ('hike_name', models.CharField(max_length=50)),
                ('hike_difficulty', models.IntegerField(default=3)),
                ('hike_rating', models.IntegerField(default=4)),
                ('hike_images', models.CharField(default='', max_length=50)),
                ('hike_description', models.CharField(default='', max_length=500)),
                ('hike_location', models.CharField(default='', max_length=50)),
                ('hike_route', models.CharField(default='', max_length=500)),
                ('hike_length', models.FloatField(default=2)),
                ('hike_elevation', models.IntegerField(default=100)),
                ('hike_duration', models.IntegerField()),
            ],
        ),
    ]
