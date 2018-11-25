# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDos', '0002_auto_20181125_1210'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todoitems',
            old_name='item',
            new_name='todo',
        ),
    ]
