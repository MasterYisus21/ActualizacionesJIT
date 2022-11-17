from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
#from apiConciliacionApp.base.general_views import GeneralListAPIView
from apiExpedientesApp.general.general_views import  *
# from rest_framework import filters

# from django_filters.rest_framework import DjangoFilterBackend
# from django_filters import FilterSet, AllValuesFilter
# from django_filters import DateTimeFilter, NumberFilter
# from apiInventarioApp.pagination import StandardResultsSetPagination


# Create your views here.
class PaisViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PaisSerializer
    # filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    # filter_fields ='__all__'
    # search_fields = ['id','nombre']
    # ordering_fields = '__all__'