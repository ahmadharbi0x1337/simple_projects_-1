from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('/add', views.add_to_list, name='add-to-list'),
]