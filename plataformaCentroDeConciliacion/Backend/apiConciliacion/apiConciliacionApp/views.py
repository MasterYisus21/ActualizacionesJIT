from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
#from apiConciliacionApp.base.general_views import GeneralListAPIView
from django.shortcuts import render
from .serializers import*
from apiConciliacionApp.base.general_views import  GeneralViewSet
from rest_framework import filters


from django_filters import FilterSet, AllValuesFilter
from django_filters import DateTimeFilter, NumberFilter

from rest_framework.pagination import PageNumberPagination


class PaisViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PaisSerializer
    filter_fields ='__all__'
  

class DepartamentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = DepartamentoSerializer
    filter_fields ='__all__'


class CiudadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = CiudadSerializer
    filter_fields ='__all__'

class LocalidadViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = LocalidadSerializer
    filter_fields ='__all__'
class BarrioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = BarrioSerializer
    filter_fields ='__all__'    
class AreaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = AreaSerializer
    filter_fields ='__all__'
class TemaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = TemaSerializer
    filter_fields ='__all__'
class SubtemaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = SubtemaSerializer
    filter_fields ='__all__'
class Objetivo_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Objetivo_servicioSerializer
    filter_fields ='__all__'
class Tipo_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_servicioSerializer
    filter_fields ='__all__'
class Tipo_resultadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_resultadoSerializer
    filter_fields ='__all__'
# class SolicitudViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
#     serializer_class = SolicitudSerializer
#    # filter_backends = [filters.SearchFilter]
#    # search_fields = ['=Numero_caso','Fecha_registro','Fecha_inicio']

class HechosViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = HechosSerializer
    filter_fields ='__all__'
class Tipo_estadoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_estadoSerializer
    filter_fields ='__all__'
# class Documentos_pruebaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
#     serializer_class = Documentos_pruebaSerializer
#     filterset_fields = ['id']
    
    
class SolicitudFilter(FilterSet):
	Fecha_inicio = DateTimeFilter(field_name='Fecha_registro',
											lookup_expr='gte')
	Fecha_fin = DateTimeFilter(field_name='Fecha_registro',
										lookup_expr='lte')


	class Meta:
		model = Solicitud
		fields = (
			'Descripcion',
			'Fecha_inicio',
			'Fecha_fin',
			)



class  SolicitudViewSet(GeneralViewSet):
    queryset = Solicitud.objects.all()
    serializer_class = SolicitudSerializer
    name = 'robot-list'
    # customized filter class
    filter_class = SolicitudFilter
    search_fields = (
        'Descripcion',
    )

 
    
  
  
class DocumentoViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
   
    
    serializer_class = DocumentoSerializer
    filterset_fields = ['Solicitud_Id']
    
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(State=True)
 
        return model.filter(State=True, Id=pk).first() # retorna todos los valores con estado = true
    


class Historico_solicitudViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Historico_solicitudSerializer
    filter_fields ='__all__'
class Tipo_medioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_medioSerializer
    filter_fields ='__all__'
class TurnoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = TurnoSerializer
    filter_fields ='__all__'
class CitacionViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = CitacionSerializer
    filter_fields ='__all__'
class Estrato_socioeconomicoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Estrato_socioeconomicoSerializer
    filter_fields ='__all__'
class Tipo_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_personaSerializer
    filter_fields ='__all__'
class Tipo_cargoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_cargoSerializer
    filter_fields ='__all__'
class Tipo_documentoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_documentoSerializer
    filter_fields ='__all__'
class Tipo_viviendaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_viviendaSerializer
    filter_fields ='__all__'
class Rol_permisoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Rol_permisoSerializer
    filter_fields ='__all__'
class RolViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = RolSerializer
    filter_fields ='__all__'
class GeneroViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = GeneroSerializer
    filter_fields ='__all__'    
class PerfilViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PerfilSerializer
    filter_fields ='__all__'
class PersonaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PersonaSerializer
    # filter_backends = [filters.SearchFilter]
    # search_fields = ['Nombres','Apellidos','=Identificacion']
    filter_fields ='__all__'
class UsuarioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = UsuarioSerializer
    filter_fields ='__all__'
class Relacion_citacion_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Relacion_citacion_personaSerializer
    filter_fields ='__all__'
class Tipo_clienteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_clienteSerializer
    filter_fields ='__all__'


class StandardResultsSetPaginationRelacion(PageNumberPagination):
    ##GET https://api.example.org/accounts/?page=4?count=2
    page_size = 5  # tamaño de la pagina
    page_size_query_param = 'count' ## tamaño de la consulta , cuantos se quieren en cada pagina
    max_page_size = 5  # numero maximo por pagina 
class Relacion_solicitud_personaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Relacion_solicitud_personaSerializer
    filter_fields ='__all__'
    pagination_class= StandardResultsSetPaginationRelacion
class Relacion_area_perfilViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Relacion_area_perfilSerializer
    filter_fields ='__all__'
class PreguntaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PreguntaSerializer
    filter_fields ='__all__'
class Medio_conocimientoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Medio_conocimientoSerializer
    filter_fields ='__all__'
class EncuestaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = EncuestaSerializer
    filter_fields ='__all__'
class RespuestaViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = RespuestaSerializer
    filter_fields ='__all__'
class Solicitante_servicioViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Solicitante_servicioSerializer
    filter_fields ='__all__'

class Inicio_conflictoViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Inicio_conflictoSerializer
    filter_fields ='__all__'

class Tipo_reporteViewSet(GeneralViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = Tipo_reporteSerializer
    filter_fields ='__all__'








    


