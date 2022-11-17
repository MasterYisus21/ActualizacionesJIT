from django.contrib import admin
from .models import *



class SearchAdminGeneral(admin.ModelAdmin):
  
    search_fields = ['id','nombre'] #atributo por el cual se filtrará

class SearchExpediente(admin.ModelAdmin):
  
    search_fields = ['id','numero_caso','fecha'] #atributo por el cual se filtrará

class SearchPersona(admin.ModelAdmin):
  
    search_fields = ['nombres','apellidos','identificacion'] #atributo por el cual se filtrará
class SearchHistorico(admin.ModelAdmin):
  
    search_fields = ['expediente_id__numero_caso']
class SearchHechos(admin.ModelAdmin):
  
    search_fields = ['expediente_id']

class SearchSeguimiento(admin.ModelAdmin):
  
    search_fields = ['fecha','expediente_id__numero_caso']

class SearchRespuestasSeguimiento(admin.ModelAdmin):
  
    search_fields = ['seguimiento_id__expediente_id__numero_caso']

class SearchCitacion(admin.ModelAdmin):
  
    search_fields = ['fecha_sesion','expediente_id__numero_caso']

class SearchEncuesta(admin.ModelAdmin):
  
    search_fields = ['expediente_id__numero_caso']

class SearchRespuestasEncuesta(admin.ModelAdmin):
  
    search_fields = ['encuesta_id__expediente_id__numero_caso']

class SearchResultado(admin.ModelAdmin):
  
    search_fields = ['expediente_id__numero_caso','fecha','tipo_resultado_id__nombre']

# Register your models here.
admin.site.register(Pais)
admin.site.register(Departamento,SearchAdminGeneral)
admin.site.register(Ciudad,SearchAdminGeneral)
admin.site.register(Localidad,SearchAdminGeneral)
admin.site.register(Barrio,SearchAdminGeneral)
admin.site.register(Estado_civil,SearchAdminGeneral)
admin.site.register(Estrato_socioeconomico,SearchAdminGeneral)
admin.site.register(Grupo_etnico,SearchAdminGeneral)
admin.site.register(Tipo_persona,SearchAdminGeneral)
admin.site.register(Sexo,SearchAdminGeneral)
admin.site.register(Tipo_discapacidad,SearchAdminGeneral)
admin.site.register(Genero,SearchAdminGeneral)
admin.site.register(Tipo_documento,SearchAdminGeneral)
admin.site.register(Tipo_vivienda,SearchAdminGeneral)
admin.site.register(Area,SearchAdminGeneral)
admin.site.register(Perfil,SearchAdminGeneral)
admin.site.register(Tipo_cargo,SearchAdminGeneral)
admin.site.register(Escolaridad,SearchAdminGeneral)
admin.site.register(Apoderado,SearchPersona)
admin.site.register(Persona,SearchPersona)
admin.site.register(Tema,SearchAdminGeneral)
admin.site.register(Subtema,SearchAdminGeneral)
admin.site.register(Objetivo_servicio,SearchAdminGeneral)
admin.site.register(Tipo_servicio,SearchAdminGeneral)
admin.site.register(Inicio_conflicto,SearchAdminGeneral)
admin.site.register(Expediente,SearchExpediente)
admin.site.register(Tipo_cliente,SearchAdminGeneral)
admin.site.register(Relacion_persona_expediente)
admin.site.register(Estado,SearchAdminGeneral)
admin.site.register(Historico,SearchHistorico)
admin.site.register(Tipo_resultado,SearchAdminGeneral)
admin.site.register(Resultado,SearchResultado)
admin.site.register(Hechos,SearchHechos)
admin.site.register(Medio_seguimiento,SearchAdminGeneral)
admin.site.register(Seguimiento,SearchSeguimiento)
admin.site.register(Pregunta_seguimiento,SearchAdminGeneral)
admin.site.register(Respuesta_seguimiento,SearchRespuestasSeguimiento)
admin.site.register(Turno,SearchAdminGeneral)
admin.site.register(Tipo_medio,SearchAdminGeneral)
admin.site.register(Citacion,SearchCitacion)
admin.site.register(Relacion_persona_citacion)
admin.site.register(Medio_conocimiento,SearchAdminGeneral)
admin.site.register(Encuesta,SearchEncuesta)
admin.site.register(Pregunta_encuesta,SearchAdminGeneral)
admin.site.register(Respuesta_encuesta,SearchRespuestasEncuesta)
admin.site.register(Tipo_reporte,SearchAdminGeneral)
