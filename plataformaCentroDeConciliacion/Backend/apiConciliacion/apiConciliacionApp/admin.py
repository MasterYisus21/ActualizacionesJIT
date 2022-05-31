from atexit import register
from pyexpat import model
from re import T
from django.contrib import admin
from .models import*
# Register your models here.

admin.site.register(Pais)
admin.site.register(Departamento)
admin.site.register(Ciudad)
admin.site.register(Localidad)
admin.site.register(Barrio)
admin.site.register(Persona)
admin.site.register(Estrato_socioeconomico)
admin.site.register(Tipo_persona)
admin.site.register(Tipo_cargo)
admin.site.register(Tipo_documento)
admin.site.register(Tipo_vivienda)
admin.site.register(Usuario)
admin.site.register(Rol)
admin.site.register(Rol_permiso)
admin.site.register(Perfil)
admin.site.register(Relacion_area_perfil)
admin.site.register(Area)
admin.site.register(Hechos)
admin.site.register(Solicitud)
admin.site.register(Tipo_resultado)
admin.site.register(Tipo_servicio)
admin.site.register(Objetivo_servicio)
admin.site.register(Subtema)
admin.site.register(Tema)
admin.site.register(Documento)
admin.site.register(Tipo_estado)
admin.site.register(Citacion)
admin.site.register(Historico_solicitud)
admin.site.register(Relacion_citacion_persona)
admin.site.register(Tipo_medio)
admin.site.register(Turno)
admin.site.register(Tipo_cliente)
admin.site.register(Pregunta)
admin.site.register(Medio_conocimiento)
admin.site.register(Encuesta)
admin.site.register(Respuesta)
admin.site.register(Relacion_solicitud_persona)
admin.site.register(Solicitante_servicio)
admin.site.register(Inicio_conflicto)














