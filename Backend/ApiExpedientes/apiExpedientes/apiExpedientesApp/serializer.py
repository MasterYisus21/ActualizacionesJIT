from rest_framework import serializers

from .models import *
from django.contrib.auth.models import User,Group
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
class EscolaridadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Escolaridad          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class ApoderadoSerializer(serializers.ModelSerializer):
    tipo_documento  =  serializers.CharField(source='tipo_documento_id.nombre', read_only=True)
    class Meta:
        model = Apoderado          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class PersonaSerializer(serializers.ModelSerializer):
    localidad_id  =  serializers.CharField(source='barrio_id.localidad_id.id', read_only=True)
    ciudad_id  =  serializers.CharField(source='barrio_id.localidad_id.ciudad_id.id', read_only=True)
    departamento_id  =  serializers.CharField(source='barrio_id.localidad_id.ciudad_id.departamento_id.id', read_only=True)
    pais_id  =  serializers.CharField(source='barrio_id.localidad_id.ciudad_id.departamento_id.pais_id.id', read_only=True)
    barrio  =  serializers.CharField(source='barrio_id', read_only=True)
    localidad = serializers.CharField(source='barrio_id.localidad_id', read_only=True)
    ciudad = serializers.CharField(source='barrio_id.localidad_id.ciudad_id', read_only=True)
    departamento = serializers.CharField(source='barrio_id.localidad_id.ciudad_id.departamento_id', read_only=True)
    pais = serializers.CharField(source='barrio_id.localidad_id.ciudad_id.departamento_id.pais_id', read_only=True)

    estado_civil = serializers.CharField(source='estado_civil_id', read_only=True)
    estrato_socioeconomico = serializers.CharField(source='estrato_socioeconomico_id', read_only=True)
    grupo_etnico = serializers.CharField(source='grupo_etnico_id', read_only=True)
    tipo_persona = serializers.CharField(source='tipo_persona_id', read_only=True)
    sexo = serializers.CharField(source='sexo_id', read_only=True)
    tipo_discapacidad = serializers.CharField(source='tipo_discapacidad_id', read_only=True)
    genero = serializers.CharField(source='genero_id', read_only=True)
    tipo_cargo = serializers.CharField(source='tipo_cargo_id', read_only=True)
    tipo_vivienda = serializers.CharField(source='tipo_vivienda_id', read_only=True)
    perfil = serializers.CharField(source='perfil_id', read_only=True)
    tipo_documento = serializers.CharField(source='tipo_documento_id', read_only=True)
    escolaridad = serializers.CharField(source='escolaridad_id', read_only=True)
    
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
class Finalidad_servicioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Finalidad_servicio         # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Inicio_conflictoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Inicio_conflicto          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class ExpedienteSerializer(serializers.ModelSerializer):
    tipo_servicio = serializers.CharField(source='tipo_servicio_id', read_only=True)
    tema = serializers.CharField(source='subtema_id.tema_id', read_only=True)
    tema_id = serializers.CharField(source='subtema_id.tema_id.id', read_only=True)
    subtema = serializers.CharField(source='subtema_id', read_only=True)
    area = serializers.CharField(source='area_id', read_only=True)
    solicitante_servicio = serializers.CharField(source='solicitante_servicio_id', read_only=True)
    inicio_conflicto = serializers.CharField(source='inicio_conflicto_id', read_only=True)
    estado_expediente = serializers.CharField(source='estado_expediente_id', read_only=True)
    finalidad_servicio = serializers.CharField(source='Finalidad_servicio_id', read_only=True)

    class Meta:
        model = Expediente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_clienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_cliente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Relacion_persona_expedienteSerializer(serializers.ModelSerializer):
    estado_expediente = serializers.CharField(source='expediente_id.estado_expediente_id', read_only=True)
    fecha_registro = serializers.CharField(source='expediente_id.fecha_registro', read_only=True)
    numero_caso= serializers.CharField(source='expediente_id', read_only=True)
    nombres = serializers.CharField(source='persona_id', read_only=True)
    identificacion= serializers.CharField(source='persona_id.identificacion', read_only=True)
    tipo_documento= serializers.CharField(source='persona_id.tipo_documento_id', read_only=True)
    lugar_expedicion= serializers.CharField(source='persona_id.lugar_expedicion', read_only=True)
    barrio  =  serializers.CharField(source='persona_id.barrio_id', read_only=True)
    localidad = serializers.CharField(source='persona_id.barrio_id.localidad_id', read_only=True)
    ciudad = serializers.CharField(source='persona_id.barrio_id.localidad_id.ciudad_id', read_only=True)
    direccion = serializers.CharField(source='persona_id.direccion', read_only=True)
    correo = serializers.CharField(source='persona_id.correo', read_only=True)
    celular = serializers.CharField(source='persona_id.celular', read_only=True)
    tarjeta_profesional= serializers.CharField(source='persona_id.tarjeta_profesional', read_only=True)
    apoderado_id= serializers.CharField(source='persona_id.apoderado_id.id', read_only=True)
    nombre_apoderado= serializers.CharField(source='persona_id.apoderado_id', read_only=True)
    tipo_cliente= serializers.CharField(source='tipo_cliente_id', read_only=True)
    numero_radicado= serializers.CharField(source='expediente_id.numero_radicado', read_only=True)
    
    
    class Meta:
        model = Relacion_persona_expediente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Estado_expedienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estado_expediente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class HistoricoSerializer(serializers.ModelSerializer):
    estado = serializers.CharField(source='estado_id', read_only=True)

    class Meta:
        model = Historico          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Categoria_resultadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria_resultado       # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_resultadoSerializer(serializers.ModelSerializer):
    categoria= serializers.CharField(source='categoria_id', read_only=True)

    consecutivo= serializers.CharField(source='categoria_id.consecutivo_actual', read_only=True)
    
    class Meta:
        model = Tipo_resultado          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class ResultadoSerializer(serializers.ModelSerializer):
    tipo_resultado= serializers.CharField(source='tipo_resultado_id', read_only=True)
    consecutivo_resultado= serializers.CharField(source='tipo_resultado_id.consecutivo', read_only=True)
    
    class Meta:
        model = Resultado          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class HechosSerializer(serializers.ModelSerializer):
    ciudad= serializers.CharField(source='ciudad_id', read_only=True)
    departamento_id= serializers.CharField(source='ciudad_id.departamento_id.id', read_only=True)
    departamento= serializers.CharField(source='ciudad_id.departamento_id', read_only=True)
    class Meta:
        model = Hechos          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Medio_seguimientoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Medio_seguimiento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class SeguimientoSerializer(serializers.ModelSerializer):
    medio_seguimiento = serializers.CharField(source='medio_seguimiento_id', read_only=True)
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
    turno= serializers.CharField(source='turno_id', read_only=True)
    numero_caso= serializers.CharField(source='expediente_id', read_only=True)
    medio= serializers.CharField(source='tipo_medio_id', read_only=True)
    tipo_cliente=serializers.CharField(source='expediente_id.re', read_only=True)
    class Meta:
        model = Citacion          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Relacion_persona_citacionSerializer(serializers.ModelSerializer):
    fecha_sesion= serializers.CharField(source='citacion_id.fecha_sesion', read_only=True)
    turno_id= serializers.CharField(source='citacion_id.turno_id.id', read_only=True)
    nombres = serializers.CharField(source='persona_id', read_only=True)
    identificacion= serializers.CharField(source='persona_id.identificacion', read_only=True)
    tipo_documento= serializers.CharField(source='persona_id.tipo_documento_id', read_only=True)
    direccion = serializers.CharField(source='persona_id.direccion', read_only=True)
    correo = serializers.CharField(source='persona_id.correo', read_only=True)
    celular = serializers.CharField(source='persona_id.celular', read_only=True)
    barrio  =  serializers.CharField(source='persona_id.barrio_id', read_only=True)
    localidad = serializers.CharField(source='persona_id.barrio_id.localidad_id', read_only=True)
    ciudad = serializers.CharField(source='persona_id.barrio_id.localidad_id.ciudad_id', read_only=True)
    class Meta:
        model = Relacion_persona_citacion          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Medio_conocimientoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Medio_conocimiento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class EncuestaSerializer(serializers.ModelSerializer):
    medio_conocimiento= serializers.CharField(source='medio_conocimiento_id', read_only=True)

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
        fields = ('calificacion','pregunta_encuesta_id','encuesta_id','nombre')  # Coje todos los campos del modelo   # Coje todos los campos del modelo 
class Tipo_reporteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_reporte          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class ListaUsuarioSerializer(serializers.ModelSerializer):
     
    class Meta:
        model = User    # El modelo al que pertenece este serializador
        fields = ('id','username','password','is_staff','groups','is_active') # Coje todos los campos del modelo 
        extra_kwargs = {'password':{'write_only':True}}

class ListaGrupoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Group     # El modelo al que pertenece este serializador
        fields = ('id','name')  # Coje todos los campos del modelo 
