import django_filters
from apiConciliacionApp.models import *

class PaisFilter(django_filters.FilterSet):
    class Meta:
        model:Pais
        fields = "__all__"   
  