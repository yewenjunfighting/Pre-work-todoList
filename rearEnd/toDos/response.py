from .models import ToDoItems
from django.core import serializers
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect


# Model instance serialization
def index(request):
    items = ToDoItems.objects.all()
    data = serializers.serialize('json', items)
    print(data + 'index')
    return HttpResponse(data, content_type="application/json")

