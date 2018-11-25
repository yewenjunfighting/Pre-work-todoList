# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDos', '0006_remove_todoitems_only'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitems',
            name='only',
            field=models.CharField(default=b'', max_length=100),
        ),
    ]
