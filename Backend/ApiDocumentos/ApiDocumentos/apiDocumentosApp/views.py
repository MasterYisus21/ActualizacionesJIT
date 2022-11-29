from apiDocumentosApp.serializer import *
from rest_framework import generics, status, viewsets
from apiDocumentosApp.models import *
from rest_framework.response import Response
from apiDocumentosApp.pagination import * 
from rest_framework.permissions import DjangoModelPermissions
from copy import deepcopy
from rest_framework import filters

from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.


class CustomDjangoModelPermission(DjangoModelPermissions):
    def __init__(self):
        self.perms_map= deepcopy(self.perms_map)
        self.perms_map['GET']=['%(app_label)s.view_%(model_name)s']
class DocumentosViewSet(viewsets.ModelViewSet):# Lista los objetos con ListAPIVIEW
    serializer_class = DocumentoSerializer
    pagination_class= StandardResultsSetPagination
    # permission_classes = [CustomDjangoModelPermission]
    
   
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(estado=True)
 
        return model.filter(estado=True, id=pk).first() # retorna todos los valores con estado = true
    