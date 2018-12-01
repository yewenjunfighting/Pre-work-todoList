# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toDos', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todoitems',
            old_name='todo_expireDate',
            new_name='expireDate',
        ),
        migrations.RenameField(
            model_name='todoitems',
            old_name='todo_isDone',
            new_name='isDone',
        ),
        migrations.RenameField(
            model_name='todoitems',
            old_name='todo_item',
            new_name='item',
        ),
        migrations.RenameField(
            model_name='todoitems',
            old_name='todo_priority',
            new_name='priority',
        ),
    ]
