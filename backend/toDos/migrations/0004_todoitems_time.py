# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('toDos', '0003_auto_20181125_1219'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitems',
            name='time',
            field=models.CharField(default=datetime.datetime(2018, 11, 25, 6, 54, 59, 854000, tzinfo=utc), max_length=50),
            preserve_default=False,
        ),
    ]
