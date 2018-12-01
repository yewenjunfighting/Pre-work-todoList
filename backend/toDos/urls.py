from django.conf.urls import url
# from .import response
from . import views

# Registered url

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add/$', views.add, name='add'),
    url(r'^delete/$', views.delete, name='delete'),
    url(r'^complete/$', views.complete, name='complete'),
]

