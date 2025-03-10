from apiSolicitudesApp.serializer import *
from rest_framework import generics, status, viewsets
from apiSolicitudesApp.models import *
from rest_framework.response import Response
from apiSolicitudesApp.pagination import * 
from rest_framework.permissions import IsAuthenticatedOrReadOnly,DjangoModelPermissions,DjangoModelPermissionsOrAnonReadOnly,IsAuthenticated
# from rest_framework_api_key.permissions import HasAPIKey
from copy import deepcopy
from rest_framework import filters

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_api_key.permissions import HasAPIKey




class CustomCreateDjangoModelPermission(DjangoModelPermissionsOrAnonReadOnly):
    def __init__(self):
        self.perms_map= deepcopy(self.perms_map)
        self.perms_map['POST']=[]
    
      

class CustomUpdateDjangoModelPermission(DjangoModelPermissionsOrAnonReadOnly):
    def __init__(self):
        self.perms_map= deepcopy(self.perms_map)
        self.perms_map['POST']=[]
        self.perms_map['PATCH']=[]

class CustomDjangoModelPermission(DjangoModelPermissions):

    def has_permission(self, request, view):
    # Workaround to ensure DjangoModelPermissions are not applied
    # to the root view when using DefaultRouter.
        if getattr(view, '_ignore_model_permissions', False):
            return True
        if 'Id' in request.headers:
            user=User.objects.get(username=request.headers['Id'])
            queryset = self._queryset(view)
            perms = self.get_required_permissions(request.method, queryset.model)

            return user.has_perms(perms)  
        else:
            return False 
class GeneralViewSet(viewsets.ModelViewSet):# Lista los objetos con ListAPIVIEW
    
    serializer_class = None
    pagination_class= StandardResultsSetPagination
    permission_classes = [(HasAPIKey & IsAuthenticatedOrReadOnly )|((HasAPIKey|IsAuthenticated) & CustomDjangoModelPermission) ]

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
    permission_classes = [(HasAPIKey & IsAuthenticatedOrReadOnly )|(HasAPIKey & CustomDjangoModelPermission) ]

    # filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    # filterset_fields = '__all__'
    # ordering_fields = '__all__'
    # permission_classes = [CustomDjangoModelPermission]
    
   
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(estado=True)
 
        return model.filter(estado=True, id=pk).first() # retorna todos los valores con estado = true
    def create(self, request, *args, **kwargs): 
        is_many = isinstance(request.data,list)
        if not is_many:
            return super(EspecificViewSet,self).create(request, *args, **kwargs)
           
        else:
            serializer = self.get_serializer(data=request.data, many=True)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    