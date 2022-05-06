from dataclasses import fields
from rest_framework import serializers

from .models import *


class PaisSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pais     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class DepartamentoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Departamento     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class CiudadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Ciudad      # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class LocalidadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Localidad    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class BarrioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Barrio     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class AreaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Area     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class TemaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tema    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class SubtemaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Subtema     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class Objetivo_servicioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Objetivo_servicio     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class Tipo_servicioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_servicio     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_resultadoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_resultado     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class SolicitudSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Solicitud     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class HechosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Hechos     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class Tipo_estadoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_estado     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class DocumentoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Documento     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Historico_solicitudSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Historico_solicitud     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_medioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_medio     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class TurnoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Turno     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class CitacionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Citacion     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Estrato_socioeconomicoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Estrato_socioeconomico     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_personaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_persona    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_cargoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_cargo     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_documentoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_documento     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_viviendaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_vivienda     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Rol_permisoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rol_permiso     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class RolSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rol     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class PerfilSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Perfil    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class PersonaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Persona     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class UsuarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Usuario     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Relacion_citacion_personaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Relacion_citacion_persona     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_clienteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tipo_cliente    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Relacion_solicitud_personaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Relacion_solicitud_persona     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Relacion_area_perfilSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Relacion_area_perfil    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class PreguntaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Pregunta   # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Medio_conocimientoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Medio_conocimiento    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 



class EncuestaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Encuesta    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class RespuestaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Respuesta    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

