# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDoItems',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('todo_id', models.IntegerField(default=0)),
                ('todo_isDone', models.IntegerField(default=0)),
                ('todo_expireDate', models.CharField(max_length=10)),
                ('todo_item', models.CharField(max_length=200)),
                ('todo_priority', models.IntegerField(default=0)),
            ],
        ),
    ]
