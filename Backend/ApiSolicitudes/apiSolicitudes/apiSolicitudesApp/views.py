from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
#from apiConciliacionApp.base.general_views import GeneralListAPIView
from apiSolicitudesApp.general.general_views import  *
from django.contrib.auth.models import User, Group
# from django_filters import FilterSet, AllValuesFilter
# from django_filters import DateTimeFilter, NumberFilter
# from apiInventarioApp.pagination import StandardResultsSetPagination


# Create your views here.
class PaisViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PaisSerializer


class DepartamentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = DepartamentoSerializer

class CiudadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = CiudadSerializer


class Tipo_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_personaSerializer

class SolicitudViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SolicitudSerializer
class DocumentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = DocumentoSerializer

class Relacion_persona_solicitudViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Relacion_persona_solicitudSerializer

class SexoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SexoSerializer


class GeneroViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = GeneroSerializer

class Tipo_documentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_documentoSerializer


class ApoderadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = ApoderadoSerializer

class PersonaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = PersonaSerializer


class Tipo_clienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_clienteSerializer

class HechosViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = HechosSerializer



    
class UsuariosViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
   queryset = User.objects.all()
   serializer_class=ListaUsuarioSerializer
   
   filter_backends = [DjangoFilterBackend]
   filterset_fields = '__all__'
#    permission_classes = [DjangoModelPermissions]
   
   def perform_create(self, serializer):
        usuario=serializer.save()
        usuario.set_password(usuario.password)
        usuario.save()
        
class GruposViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
   queryset = Group.objects.all()
   serializer_class= ListaGrupoSerializer  