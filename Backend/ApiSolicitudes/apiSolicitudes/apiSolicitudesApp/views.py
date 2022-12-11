from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
#from apiConciliacionApp.base.general_views import GeneralListAPIView
from apiSolicitudesApp.general.general_views import  *

from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
# from django_filters import FilterSet, AllValuesFilter
# from django_filters import DateTimeFilter, NumberFilter
# from apiInventarioApp.pagination import StandardResultsSetPagination


# Create your views here.
class PaisViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PaisSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

class DepartamentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = DepartamentoSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    search_fields=['nombre','pais_id__nombre']
class CiudadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = CiudadSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]


class Tipo_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_personaSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

class Estado_solicitudViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Estado_solicitudSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

class Centro_conciliacion(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Centro_conciliacionSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

class SolicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    search_fields=['numero_radicado','fecha_registro','estado_solicitud_id__nombre']
    serializer_class = SolicitudSerializer
    #permission_classes = [CustomDjangoModelPermission]
class Documento_solicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = ['solicitud_id']
    ordering_fields = '__all__'
    serializer_class = DocumentoSerializer
    #permission_classes = [CustomDjangoModelPermission]

class Relacion_persona_solicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    serializer_class = Relacion_persona_solicitudSerializer
    search_fields=['=solicitud_id__numero_radicado','=persona_id__identificacion','solicitud_id__fecha_registro']
    #permission_classes = [CustomDjangoModelPermission]

class SexoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SexoSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

class GeneroViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = GeneroSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
class Tipo_documentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_documentoSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
class Estrato_socioeconomicoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Estrato_socioeconomicoSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

class Apoderado_solicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    serializer_class = ApoderadoSerializer
    #permission_classes = [CustomUpdateDjangoModelPermission]
    search_fields=['nombres','apellidos','identificacion','tarjeta_profesional']
 
class Persona_solicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    search_fields=['nombres','apellidos','identificacion']
    serializer_class = Persona_solicitudSerializer
    #permission_classes = [CustomDjangoModelPermission]

class Tipo_clienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_clienteSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
class Hechos_solicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    serializer_class = HechosSerializer
    #permission_classes = [CustomDjangoModelPermission]
    
    
        
        
class UsuariosViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
   queryset = User.objects.all()
   serializer_class=ListaUsuarioSerializer
   
   filter_backends = [DjangoFilterBackend]
   filterset_fields = '__all__'
#    #permission_classes = [DjangoModelPermissions]
   
   def perform_create(self, serializer):
        usuario=serializer.save()
        usuario.set_password(usuario.password)
        usuario.save()
        
class GruposViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
   queryset = Group.objects.all()
   serializer_class= ListaGrupoSerializer  
#    filter_backends = [DjangoFilterBackend]
#    filterset_fields = '__all__'
#    #permission_classes = [DjangoModelPermissions]
   
