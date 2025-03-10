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


class Tipo_personaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_persona          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Estrato_socioeconomicoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estrato_socioeconomico          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class SexoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sexo          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class GeneroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genero          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Tipo_documentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_documento          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Estado_solicitudSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estado_solicitud        # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class Centro_conciliacionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Centro_conciliacion      # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 



class ApoderadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Apoderado_solicitud          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 
class Persona_solicitudSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Persona_solicitud          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class Tipo_clienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_cliente          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class HechosSerializer(serializers.ModelSerializer):
    ciudad= serializers.CharField(source='ciudad_id', read_only=True)
    departamento_id= serializers.CharField(source='ciudad_id.departamento_id.id', read_only=True)
    departamento= serializers.CharField(source='ciudad_id.departamento_id', read_only=True)
    class Meta:
        model = Hechos_solicitud          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class SolicitudSerializer(serializers.ModelSerializer):
    estado_solicitud= serializers.CharField(source='estado_solicitud_id', read_only=True)
    class Meta:
        model = Solicitud          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 


class Relacion_persona_solicitudSerializer(serializers.ModelSerializer):
    estado_solicitud = serializers.CharField(source='solicitud_id.estado_solicitud_id.nombre', read_only=True)
    fecha_registro = serializers.CharField(source='solicitud_id.fecha_registro', read_only=True)
    numero_radicado= serializers.CharField(source='solicitud_id', read_only=True)


    class Meta:
        model = Relacion_persona_solicitud          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class DocumentoSerializer(serializers.ModelSerializer):
    numero_radicado = serializers.CharField(source='solicitud_id', read_only=True)
    class Meta:
        model = Documento_solicitud          # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 

class CodigoSerializer(serializers.ModelSerializer):
    # numero_radicado = serializers.CharField(source='solicitud_id', read_only=True)
    class Meta:
        model = Codigo         # El modelo al que pertenece este serializador
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

