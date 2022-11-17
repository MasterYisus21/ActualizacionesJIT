from rest_framework import serializers

from .models import *

class PaisSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Pais     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class DepartamentoSerializer(serializers.ModelSerializer):


    class Meta:
        model = Departamento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class CiudadSerializer(serializers.ModelSerializer):


    class Meta:
        model = Ciudad          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class LocalidadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Localidad          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class BarrioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Barrio          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Estado_civilSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estado_civil    # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Estrato_socioeconomicoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estrato_socioeconomico          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Grupo_etnicoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Grupo_etnico          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_personaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_persona          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class EscolaridadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Escolaridad          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class SexoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sexo          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_discapacidadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_discapacidad          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class GeneroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genero          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_documentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_documento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_viviendaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_vivienda          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class AreaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Area          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class PerfilSerializer(serializers.ModelSerializer):

    class Meta:
        model = Perfil          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_cargoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_cargo          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Datos_estudioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Datos_estudio          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class ApoderadoSerializer(serializers.ModelSerializer):
    tipo_documento  =  serializers.CharField(source='tipo_documento_id.nombre', read_only=True)
    class Meta:
        model = Apoderado          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class PersonaSerializer(serializers.ModelSerializer):
    # localidad_id  =  serializers.CharField(source='barrio_id.localidad_id', read_only=True)

    class Meta:
        model = Persona          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Solicitante_servicioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Solicitante_servicio          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class TemaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tema          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class SubtemaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subtema          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Objetivo_servicioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Objetivo_servicio          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_servicioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_servicio          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Inicio_conflictoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Inicio_conflicto          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class ExpedienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expediente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_clienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_cliente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Relacion_persona_expedienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Relacion_persona_expediente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class EstadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estado          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class HistoricoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Historico          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_resultadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_resultado          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class ResultadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resultado          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class HechosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hechos          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Medio_seguimientoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Medio_seguimiento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class SeguimientoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Seguimiento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Pregunta_seguimientoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pregunta_seguimiento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Respuesta_seguimientoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Respuesta_seguimiento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class TurnoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Turno          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_medioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_medio          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class CitacionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Citacion          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Relacion_persona_citacionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Relacion_persona_citacion          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Medio_conocimientoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Medio_conocimiento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class EncuestaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Encuesta          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Pregunta_encuestaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pregunta_encuesta          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Respuesta_encuestaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Respuesta_encuesta          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_reporteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_reporte          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
