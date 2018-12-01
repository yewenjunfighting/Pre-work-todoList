from django.db import models

# Create your models here.

# Create table model


class ToDoItems (models.Model):
    todo_id = models.IntegerField(default=0)
    isDone = models.IntegerField(default=0)
    expireDate = models.CharField(max_length=10)
    todo = models.CharField(max_length=200)
    priority = models.IntegerField(default=0)
    only = models.CharField(max_length=100, default='')
