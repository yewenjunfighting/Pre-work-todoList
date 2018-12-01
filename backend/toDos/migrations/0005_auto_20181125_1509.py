# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDos', '0004_todoitems_time'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todoitems',
            old_name='time',
            new_name='only',
        ),
    ]
