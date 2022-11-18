from apiSolicitudesApp.serializer import *
from rest_framework import generics, status, viewsets
from apiSolicitudesApp.models import *
from rest_framework.response import Response
from apiSolicitudesApp.pagination import * 
from rest_framework.permissions import DjangoModelPermissions,DjangoModelPermissionsOrAnonReadOnly
from copy import deepcopy
from rest_framework import filters

from django_filters.rest_framework import DjangoFilterBackend

class CustomDjangoModelPermission(DjangoModelPermissionsOrAnonReadOnly):
    def __init__(self):
        self.perms_map= deepcopy(self.perms_map)
        self.perms_map['POST']=[]
class GeneralViewSet(viewsets.ModelViewSet):# Lista los objetos con ListAPIVIEW
    
    serializer_class = None
    pagination_class= StandardResultsSetPagination
    permission_classes = [CustomDjangoModelPermission]

    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    search_fields = ['nombre']
    ordering_fields = '__all__'
   
   
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(estado=True)
    
        return model.filter(estado=True, id=pk).first() # retorna todos los valores con estado = true
   
   
    def create(self, request, *args, **kwargs): 
        is_many = isinstance(request.data,list)
        if not is_many:
            return super(GeneralViewSet,self).create(request, *args, **kwargs)
           
        else:
            serializer = self.get_serializer(data=request.data, many=True)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    

    def destroy(self,request,pk=None):
            
        queryset = self.get_queryset().filter(id=pk).first()
        if  queryset:
            queryset.estado= False
            queryset.save()
            return Response (queryset.id)
        return Response(status = status.HTTP_404_NOT_FOUND)

class EspecificViewSet(viewsets.ModelViewSet):# Lista los objetos con ListAPIVIEW
    serializer_class = None
    pagination_class= StandardResultsSetPagination
    permission_classes = [CustomDjangoModelPermission]
    
   
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(estado=True)
 
        return model.filter(estado=True, id=pk).first() # retorna todos los valores con estado = true
    