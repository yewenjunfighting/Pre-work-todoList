from toDos import models
from django.http import HttpResponse
from django.core import serializers
import json

# Create your views here.


def sendRes(data, status):
    response = HttpResponse(data, content_type="application/json")
    response.status_code = status
    return response


def index(request):
    if request.method == 'GET':
         todoItems = models.ToDoItems.objects.all()
         items = serializers.serialize('json', todoItems)
         return sendRes(items, 200)
    else:
        return sendRes('not allowed', 405)


def add(request):
    if request.method == 'POST':
        todo = request.POST['todo'].strip()
        isDone = request.POST['isDone']
        expireDate = request.POST['expireDate']
        priority = request.POST['priority']
        only = request.POST['only']
        newItem = models.ToDoItems(todo=todo, isDone=isDone, expireDate=expireDate, priority=priority, only=only)
        newItem.save()
        return sendRes("add date", 200)
    else:
        return sendRes('not allowed', 405)


def delete(request):
    if request.method == 'DELETE':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        only = body['only']
        models.ToDoItems.objects.filter(only=only).delete()
        return sendRes("delete date success", 200)
    else:
         return sendRes('not allowed', 405)


def complete(request):
    if request.method == 'PATCH':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        only = body['only']
        models.ToDoItems.objects.filter(only=only).update(isDone=1)
        return sendRes("update date success", 200)
    else:
        return sendRes('not allowed', 405)



