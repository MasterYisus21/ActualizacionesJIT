from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
#from apiConciliacionApp.base.general_views import GeneralListAPIView
from django.shortcuts import render
from .serializers import*
from apiConciliacionApp.base.general_views import  GeneralViewSet



class PaisViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PaisSerializer
  

class DepartamentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = DepartamentoSerializer


class CiudadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = CiudadSerializer

class LocalidadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = LocalidadSerializer

class BarrioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = BarrioSerializer

class AreaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = AreaSerializer

class TemaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = TemaSerializer

class SubtemaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = SubtemaSerializer

class Objetivo_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Objetivo_servicioSerializer

class Tipo_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_servicioSerializer

class Tipo_resultadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_resultadoSerializer

class SolicitudViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = SolicitudSerializer

class HechosViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = HechosSerializer

class Tipo_estadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_estadoSerializer

class DocumentoViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
   
    serializer_class = DocumentoSerializer
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(State=True)
 
        return model.filter(State=True, Id=pk).first() # retorna todos los valores con estado = true
    


class Historico_solicitudViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Historico_solicitudSerializer

class Tipo_medioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_medioSerializer

class TurnoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = TurnoSerializer

class CitacionViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = CitacionSerializer

class Estrato_socioeconomicoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Estrato_socioeconomicoSerializer

class Tipo_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_personaSerializer

class Tipo_cargoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_cargoSerializer

class Tipo_documentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_documentoSerializer

class Tipo_viviendaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_viviendaSerializer

class Rol_permisoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Rol_permisoSerializer

class RolViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = RolSerializer

class PerfilViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PerfilSerializer

class PersonaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PersonaSerializer

class UsuarioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = UsuarioSerializer

class Relacion_citacion_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Relacion_citacion_personaSerializer

class Tipo_clienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_clienteSerializer

class Relacion_solicitud_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Relacion_solicitud_personaSerializer

class Relacion_area_perfilViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Relacion_area_perfilSerializer

class PreguntaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PreguntaSerializer

class Medio_conocimientoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Medio_conocimientoSerializer

class EncuestaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = EncuestaSerializer

class RespuestaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = RespuestaSerializer

class Solicitante_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Solicitante_servicioSerializer


class Inicio_conflictoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Inicio_conflictoSerializer










    


