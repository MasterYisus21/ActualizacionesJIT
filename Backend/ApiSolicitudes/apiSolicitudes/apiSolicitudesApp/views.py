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

class SolicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SolicitudSerializer
class DocumentoViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = DocumentoSerializer

class Relacion_persona_solicitudViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Relacion_persona_solicitudSerializer

class SexoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SexoSerializer


class GeneroViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = GeneroSerializer

class Tipo_documentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_documentoSerializer


class ApoderadoViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = ApoderadoSerializer

class PersonaViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = PersonaSerializer
    

class Tipo_clienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_clienteSerializer

class HechosViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = HechosSerializer



    
