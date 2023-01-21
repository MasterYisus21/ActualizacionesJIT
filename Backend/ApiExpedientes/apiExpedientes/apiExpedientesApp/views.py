from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
#from apiConciliacionApp.base.general_views import GeneralListAPIView
from django_filters.rest_framework import DjangoFilterBackend
from apiExpedientesApp.general.general_views import  *
from django.contrib.auth.models import User, Group
from django_filters import FilterSet, AllValuesFilter

from django_filters import DateTimeFilter, NumberFilter
# from apiInventarioApp.pagination import StandardResultsSetPagination


# Create your views here.
class PaisViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PaisSerializer
    
class DepartamentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = DepartamentoSerializer
    search_fields = ['id','nombre']
class CiudadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = CiudadSerializer

class LocalidadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = LocalidadSerializer

class BarrioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = BarrioSerializer

class Estado_civilViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Estado_civilSerializer

class Estrato_socioeconomicoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Estrato_socioeconomicoSerializer


class Grupo_etnicoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Grupo_etnicoSerializer

class Tipo_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_personaSerializer



class SexoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SexoSerializer

class Tipo_discapacidadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_discapacidadSerializer

class GeneroViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = GeneroSerializer

class Tipo_documentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_documentoSerializer


class Tipo_viviendaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_viviendaSerializer

class AreaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = AreaSerializer

class PerfilViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = PerfilSerializer

class Tipo_cargoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_cargoSerializer

class EscolaridadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = EscolaridadSerializer

class ApoderadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = ApoderadoSerializer
    search_fields=['nombres','apellidos','identificacion','tarjeta_profesional']

class PersonaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    
    serializer_class = PersonaSerializer
    search_fields=['nombres','apellidos','identificacion','tarjeta_profesional','tipo_cargo_id__nombre']
class Solicitante_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Solicitante_servicioSerializer

class TemaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = TemaSerializer

class SubtemaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SubtemaSerializer

class Objetivo_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Objetivo_servicioSerializer

class Tipo_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_servicioSerializer

class Inicio_conflictoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Inicio_conflictoSerializer
    
class Finalidad_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Finalidad_servicioSerializer

class ExpedienteFilter(FilterSet):
    fecha_inicio = DateTimeFilter(field_name='fecha_registro',
                                                lookup_expr='gte')
    fecha_fin = DateTimeFilter(field_name='fecha_registro',
                                            lookup_expr='lte')


    class Meta:
        model = Expediente
        fields ='__all__' 

class ExpedienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    
    serializer_class = ExpedienteSerializer
    search_fields=['numero_caso','fecha_registro','tipo_servicio_id__nombre','subtema_id__nombre','numero_radicado','estado_expediente_id__nombre']
    filter_class = ExpedienteFilter
class Tipo_clienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_clienteSerializer

class Relacion_persona_expedienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    
    search_fields=['=expediente_id__numero_caso','=persona_id__identificacion','expediente_id__fecha_registro','tipo_cliente_id__nombre']
    serializer_class = Relacion_persona_expedienteSerializer
    
class Estado_expedienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Estado_expedienteSerializer

class HistoricoViewSet(EspecificViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = HistoricoSerializer

class Tipo_resultadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_resultadoSerializer

class Categoria_resultadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Categoria_resultadoSerializer

class ResultadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    filter_backends = [DjangoFilterBackend,filters.OrderingFilter]
    filterset_fields = ['tipo_resultado_id__nombre','expediente_id']
    ordering_fields = '__all__'
    
    search_fields=['=expediente_id__numero_caso','=persona_id__identificacion','expediente_id__fecha_registro','tipo_cliente_id__nombre']
    serializer_class = ResultadoSerializer

class HechosViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = HechosSerializer

class Medio_seguimientoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Medio_seguimientoSerializer

class SeguimientoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = SeguimientoSerializer

class Pregunta_seguimientoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Pregunta_seguimientoSerializer

class Respuesta_seguimientoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Respuesta_seguimientoSerializer

class TurnoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = TurnoSerializer

class Tipo_medioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_medioSerializer

class CitacionViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = CitacionSerializer

class Relacion_persona_citacionViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    
    serializer_class = Relacion_persona_citacionSerializer
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields = '__all__'
    search_fields = ['=citacion_id__fecha_sesion']
    ordering_fields = '__all__'
   
class Medio_conocimientoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Medio_conocimientoSerializer

class EncuestaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = EncuestaSerializer

class Pregunta_encuestaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Pregunta_encuestaSerializer

class Respuesta_encuestaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Respuesta_encuestaSerializer

    search_fields = ['=encuesta_id__expediente_id__id']
    ordering_fields = '__all__'

class Tipo_reporteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 

    serializer_class = Tipo_reporteSerializer


    
class UsuariosViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    
    serializer_class=ListaUsuarioSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = '__all__'
    def perform_create(self, serializer):
        
        usuario=serializer.save()
        is_many = isinstance(usuario,list)
        if not is_many:
            usuario.set_password(usuario.password)
            usuario.save()
            return 
           
        for usuario in usuario:
            usuario.set_password(usuario.password)
            usuario.save()
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(is_active=True)
    
        return model.filter(is_active=True, id=pk).first() # retorna todos los valores con estado = true
    def destroy(self,request,pk=None):
                
            queryset = self.get_queryset().filter(id=pk).first()
            if  queryset:
                queryset.is_active= False
                queryset.save()
                return Response (queryset.id)
            return Response(status = status.HTTP_404_NOT_FOUND)
   
    
    #    permission_classes = [DjangoModelPermissions]
   
    
    

    
    
class GruposViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
   queryset = Group.objects.all()
   serializer_class= ListaGrupoSerializer  