# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDos', '0005_auto_20181125_1509'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todoitems',
            name='only',
        ),
    ]
