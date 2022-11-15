from django.db import models
from apiExpedientesApp.general.general_models import GeneralModel, EstadoModel


# Create your models here.

class Pais(GeneralModel):

    
    class Meta:
        verbose_name = ("Pais")
        verbose_name_plural = ("Paises")

    def __str__(self):
        return self.nombre

class Departamento(GeneralModel):

    pais_id=models.ForeignKey(Pais, on_delete=models.SET_NULL,blank=False,null=True)
    class Meta:
        verbose_name = ("Departamento")
        verbose_name_plural = ("Departamentos")

    def __str__(self):
        return self.nombre

class Ciudad(GeneralModel):

    ciudad_id=models.ForeignKey(Pais, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        verbose_name = ("Ciudad")
        verbose_name_plural = ("Ciudades")

    def __str__(self):
        return self.nombre

class Localidad(GeneralModel):

    ciudad_id=models.ForeignKey(Pais, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        verbose_name = ("Localidad")
        verbose_name_plural = ("Localidades")

    def __str__(self):
        return self.nombre

class Barrio(GeneralModel):

    localidad_id=models.ForeignKey(Pais, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        verbose_name = ("Barrio")
        verbose_name_plural = ("Barrios")

    def __str__(self):
        return self.nombre
        

class Estado_civil(GeneralModel):

 
    class Meta:
        verbose_name = ("Estado_civil")
        verbose_name_plural = ("Estados_civiles")

    def __str__(self):
        return self.nombre


class Estrato_socioeconomico(GeneralModel):

    class Meta:
        verbose_name = ("Estrato_socioeconomico")
        verbose_name_plural = ("Estratos_socioeconomicos")

    def __str__(self):
        return self.nombre


class Grupo_etnico(GeneralModel):

    class Meta:
        verbose_name = ("Grupo_etnico")
        verbose_name_plural = ("Grupos_etnicos")

    def __str__(self):
        return self.nombre


class Tipo_persona(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_persona")
        verbose_name_plural = ("Tipos_persona")

    def __str__(self):
        return self.nombre


class Escolaridad(GeneralModel):

    class Meta:
        verbose_name = ("Escolaridad")
        verbose_name_plural = ("Escolaridades")

    def __str__(self):
        return self.nombre


class Sexo(GeneralModel):

    class Meta:
        verbose_name = ("Sexo")
        verbose_name_plural = ("Sexos")

    def __str__(self):
        return self.nombre


class Tipo_discapacidad(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_Discapacidad")
        verbose_name_plural = ("Tipos_Discapacidad")

    def __str__(self):
        return self.nombre


class Genero(GeneralModel):

    class Meta:
        verbose_name = ("Genero")
        verbose_name_plural = ("Generos")

    def __str__(self):
        return self.nombre


class Tipo_documento(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_documento")
        verbose_name_plural = ("Tipos_documento")

    def __str__(self):
        return self.nombre


class Tipo_vivienda(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_vivienda")
        verbose_name_plural = ("Tipos_vivienda")

    def __str__(self):
        return self.nombre


class Area(GeneralModel):

    class Meta:
        verbose_name = ("Area")
        verbose_name_plural = ("Areas")

    def __str__(self):
        return self.nombre


class Perfil(GeneralModel):

    area_id= models.ForeignKey(Area,on_delete=models.CASCADE)
    class Meta:
        verbose_name = ("Perfil")
        verbose_name_plural = ("Perfiles")

    def __str__(self):
        return self.nombre


class Tipo_cargo(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_cargo")
        verbose_name_plural = ("Tipos_cargo")

    def __str__(self):
        return self.nombre


class Datos_estudio(GeneralModel):

    class Meta:
        verbose_name = ("Datos_estudio")
        verbose_name_plural = ("Datos_estudio")

    def __str__(self):
        return self.nombre


class Apoderado(EstadoModel):

    id = models.AutoField(primary_key=True, unique=True)
    nombres = models.CharField(max_length = 25,blank=False,null=False)
    apellidos = models.CharField(max_length= 25, blank=False, null=False)
    identificacion = models.CharField(max_length=25, blank=False, null=False,unique=True)
    lugar_expedicion = models.CharField(max_length=20, blank=False, null=False)
    telefono = models.CharField(max_length=10, blank=True, null=True)
    celular = models.CharField(max_length=15, blank=False, null=False)
    correo = models.EmailField(max_length=120,blank=False,null=False)
    tarjeta_profesional= models.CharField(max_length=25, blank=False, null=False)
    tipo_documento_id = models.ForeignKey(Tipo_documento, on_delete=models.SET_NULL, blank=False, null=True)
    
    class Meta:
        verbose_name = ("Apoderado")
        verbose_name_plural = ("Apoderados")

    def __str__(self):
       return '%s %s' % (self.nombres, self.apellidos)

class Persona(EstadoModel):

    id = models.AutoField(primary_key=True, unique=True)
    nombres = models.CharField(max_length = 25,blank=False,null=False)
    apellidos = models.CharField(max_length= 25, blank=False, null=False)
    identificacion = models.CharField(max_length=25, blank=False, null=False,unique=True)
    fecha_expedicion = models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    lugar_expedicion = models.CharField(max_length=20, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    telefono = models.CharField(max_length=10, blank=True, null=True)
    direccion = models.CharField(max_length= 40, blank=True, null=True)
    ocupacion = models.CharField(max_length = 25,blank=True,null=False)
    celular = models.CharField(max_length=15, blank=False, null=False)
    correo = models.EmailField(max_length=120,blank=False,null=False)
    tarjeta_profesional= models.CharField(max_length=25, blank=True, null=True)
    estado_civil_id = models.ForeignKey(Estado_civil, on_delete=models.SET_NULL, blank=True, null=True)
    estrato_socioeconomico_id = models.ForeignKey(Estrato_socioeconomico, on_delete=models.SET_NULL, blank=True, null=True)
    grupo_etnico_id = models.ForeignKey(Grupo_etnico, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_persona_id = models.ForeignKey(Tipo_persona, on_delete=models.SET_NULL, blank=True, null=True)
    escolaridad_id = models.ForeignKey(Escolaridad, on_delete=models.SET_NULL, blank=True, null=True)
    sexo_id = models.ForeignKey(Sexo, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_discapacidad_id = models.ForeignKey(Tipo_discapacidad, on_delete=models.SET_NULL, blank=True, null=True)
    genero_id = models.ForeignKey(Genero, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_cargo_id = models.ForeignKey(Tipo_cargo, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_vivienda_id = models.ForeignKey(Tipo_vivienda, on_delete=models.SET_NULL, blank=True, null=True)
    perfil_id = models.ForeignKey(Perfil, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_documento_id = models.ForeignKey(Tipo_documento, on_delete=models.SET_NULL, blank=True, null=True)
    datos_estudio_id = models.ForeignKey(Datos_estudio, on_delete=models.SET_NULL, blank=True, null=True)
    apoderado_id = models.ForeignKey(Apoderado, on_delete=models.SET_NULL, blank=True, null=True)
    
    
    
    class Meta:
        verbose_name = ("Persona")
        verbose_name_plural = ("Personas")

    def __str__(self):
       return '%s %s' % (self.nombres, self.apellidos)

class Solicitante_servicio(GeneralModel):

    class Meta:
        verbose_name = ("Solicitante_servicio")
        verbose_name_plural = ("Solicitantes_servicio")

    def __str__(self):
        return self.nombre


class Tema(GeneralModel):

    class Meta:
        verbose_name = ("Tema")
        verbose_name_plural = ("Temas")

    def __str__(self):
        return self.nombre


class Subtema(GeneralModel):

    tema_id = models.ForeignKey(Tema, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        verbose_name = ("Subtema")
        verbose_name_plural = ("Subtemas")

    def __str__(self):
        return self.nombre

class Objetivo_servicio(GeneralModel):

   
    class Meta:
        verbose_name = ("Objetivo_servicio")
        verbose_name_plural = ("Objetivos_servicio")

    def __str__(self):
        return self.nombre

class Tipo_servicio(GeneralModel):

    Objetivo_servicio_id = models.ForeignKey(Objetivo_servicio, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        verbose_name = ("Tipo_servicio")
        verbose_name_plural = ("Tipos_servicio")

    def __str__(self):
        return self.nombre

class Inicio_conflicto(GeneralModel):

    class Meta:
        verbose_name = ("Inicio_conflicto")
        verbose_name_plural = ("Inicios_conflicto")

    def __str__(self):
        return self.nombre


class Expediente(EstadoModel):
    id = models.AutoField(primary_key=True) 
    numero_caso= models.PositiveIntegerField(null=False,blank=False )
    fecha_registro=models.DateField(blank=False , null=False) # Se crea automaticamente 
    caso_gratuito= models.BooleanField(default=True, blank=True,null=True)
    asunto_juridico_definible= models.BooleanField(default=False, blank=False,null=False)
    fecha_finalizacion= models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    expediente_pre_cerrado=models.BooleanField(default=False, blank=True,null=True)
    expediente_cerrado=models.BooleanField(default=False, blank=True,null=True)
    class Meta:
        verbose_name = ("Expediente")
        verbose_name_plural = ("Expedientes")
        # models.UniqueConstraint( fields=['numero_caso','fecha_registro'])

     
     

    def __str__(self):
        return self.nombre
class Tipo_cliente(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_cliente")
        verbose_name_plural = ("Tipos_cliente")

    def __str__(self):
        return self.nombre

class Relacion_persona_expediente(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_cliente")
        verbose_name_plural = ("Tipos_cliente")

    def __str__(self):
        return self.nombre