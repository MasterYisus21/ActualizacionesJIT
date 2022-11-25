from django.db import models
from apiExpedientesApp.general.general_models import GeneralModel, EstadoModel
from django.contrib.auth.models import User,Group

# Create your models here.
from datetime import date
from datetime import datetime


def increment_numero_caso_number():
    date = datetime.now()
    year = date.year 
    ultima_solicitud = Expediente.objects.all().last()
    
    if not ultima_solicitud:
        return str(year)+"-" +'001'
    
    año_registro = ultima_solicitud.fecha_registro.year
    
    if año_registro!=year:
        return str(year)+"-" +'001'
    
    solicitud_id = ultima_solicitud.numero_caso
    position_int=str(solicitud_id).index('-')
    solicitud_int = int(solicitud_id[position_int+1:])
    new_solicitud_int = solicitud_int + 1

    new_solicitud_id = str(year)+"-" + str(new_solicitud_int).zfill(3)
    return new_solicitud_id
class Pais(GeneralModel):

    
    class Meta:
        ordering = ['-id']
        verbose_name = ("Pais")
        verbose_name_plural = ("Paises")

    def __str__(self):
        return self.nombre

class Departamento(GeneralModel):

    pais_id=models.ForeignKey(Pais, on_delete=models.SET_NULL,blank=False,null=True)
    class Meta:
        ordering = ['-id']
        verbose_name = ("Departamento")
        verbose_name_plural = ("Departamentos")

    def __str__(self):
        return self.nombre

class Ciudad(GeneralModel):

    departamento_id=models.ForeignKey(Departamento, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        ordering = ['-id']
        verbose_name = ("Ciudad")
        verbose_name_plural = ("Ciudades")

    def __str__(self):
        return self.nombre

class Localidad(GeneralModel):

    ciudad_id=models.ForeignKey(Ciudad, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        ordering = ['-id']
        verbose_name = ("Localidad")
        verbose_name_plural = ("Localidades")

    def __str__(self):
        return self.nombre

class Barrio(GeneralModel):
    nombre= models.CharField(max_length=80,blank=False, null=False)
    localidad_id=models.ForeignKey(Localidad, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        ordering = ['-id']
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


class Escolaridad(GeneralModel):

    class Meta:
        verbose_name = ("Escolaridad")
        verbose_name_plural = ("Escolaridades")

    def __str__(self):
        return self.nombre


class Apoderado(EstadoModel):

 
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
    barrio_id= models.ForeignKey(Barrio, on_delete=models.SET_NULL, blank=True, null=True)
    ciudad_nacimiento_id= models.ForeignKey(Ciudad, on_delete=models.SET_NULL, blank=True, null=True)
    estado_civil_id = models.ForeignKey(Estado_civil, on_delete=models.SET_NULL, blank=True, null=True)
    estrato_socioeconomico_id = models.ForeignKey(Estrato_socioeconomico, on_delete=models.SET_NULL, blank=True, null=True)
    grupo_etnico_id = models.ForeignKey(Grupo_etnico, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_persona_id = models.ForeignKey(Tipo_persona, on_delete=models.SET_NULL, blank=True, null=True)
    sexo_id = models.ForeignKey(Sexo, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_discapacidad_id = models.ForeignKey(Tipo_discapacidad, on_delete=models.SET_NULL, blank=True, null=True)
    genero_id = models.ForeignKey(Genero, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_cargo_id = models.ForeignKey(Tipo_cargo, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_vivienda_id = models.ForeignKey(Tipo_vivienda, on_delete=models.SET_NULL, blank=True, null=True)
    perfil_id = models.ForeignKey(Perfil, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_documento_id = models.ForeignKey(Tipo_documento, on_delete=models.SET_NULL, blank=True, null=True)
    escolaridad_id = models.ForeignKey(Escolaridad, on_delete=models.SET_NULL, blank=True, null=True)
    apoderado_id = models.ForeignKey(Apoderado, on_delete=models.SET_NULL, blank=True, null=True)
    usuarioId= models.OneToOneField(User, on_delete=models.SET_NULL, null=True,blank=True)
    
    
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
    numero_radicado = models.CharField(max_length =20,null=False,blank=False,unique=True,editable=False)
    numero_caso = models.CharField(max_length =10,null=False,blank=False,default=increment_numero_caso_number,unique=True,editable=False)
    fecha_registro=models.DateField(blank=False , null=False,auto_now=True) # Se crea automaticamente 
    caso_gratuito= models.BooleanField(default=True, blank=True,null=True)
    asunto_juridico_definible= models.BooleanField(default=False, blank=False,null=False)
    fecha_finalizacion= models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    expediente_pre_cerrado=models.BooleanField(default=False, blank=True,null=True)
    expediente_cerrado=models.BooleanField(default=False, blank=True,null=True)
    tipo_servicio_id = models.ForeignKey(Tipo_servicio, on_delete=models.SET_NULL, blank=True, null=True)
    subtema_id = models.ForeignKey(Subtema, on_delete=models.SET_NULL, blank=True, null=True)
    area_id = models.ForeignKey(Area, on_delete=models.SET_NULL, blank=True, null=True)
    solicitante_servicio_id = models.ForeignKey(Solicitante_servicio, on_delete=models.SET_NULL, blank=True, null=True)
    inicio_conflicto_id = models.ForeignKey(Inicio_conflicto, on_delete=models.SET_NULL, blank=True, null=True)
    
    

    class Meta:
        
          
        verbose_name = ("Expediente")
        verbose_name_plural = ("Expedientes")
        
    

    def __str__(self):
        return str(self.numero_caso)
class Tipo_cliente(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_cliente")
        verbose_name_plural = ("Tipos_cliente")

    def __str__(self):
        return self.nombre

class Relacion_persona_expediente(GeneralModel):
    
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    persona_id = models.ForeignKey(Persona, on_delete=models.SET_NULL, blank=False, null=True)
    tipo_cliente_id = models.ForeignKey(Tipo_cliente, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        verbose_name = ("Relacion_persona_expediente")
        verbose_name_plural = ("Relaciones_persona_expediente")

    def __str__(self):
        return self.nombre
class Estado(GeneralModel):

     class Meta:
        verbose_name = ('Estado')
        verbose_name_plural = ('Estados')
     def __str__(self):
        return self.nombre

class Historico(models.Model):

    id = models.AutoField(primary_key=True, unique=True) 
    fecha =  models.DateTimeField( auto_now=True,blank=False,null=False)
    estado_id = models.ForeignKey(Estado, on_delete=models.SET_NULL, blank=False, null=True)
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL, blank=False, null=True)

    class Meta:
        ordering = ["-fecha"] 
        verbose_name = ('Historico')
        verbose_name_plural = ('Historicos')
    def __str__(self):
         return '%s '% (self.id)

class Tipo_resultado(GeneralModel):
    
    consecutivo_actual=models.PositiveIntegerField(null=False,blank=False)

    class Meta:
        verbose_name = ('Tipo_resultado')
        verbose_name_plural = ('Tipos_resultado')
    def __str__(self):
        return self.nombre

class Resultado(EstadoModel):
   
    acuerdo  = models.TextField(blank=True,null=True)
    documento = models.FileField(upload_to='resultados/', max_length=100, blank=True,null=True)
    fecha = models.DateField( auto_now=True, auto_now_add=False , blank=False , null=False) 
    tipo_resultado_id = models.ForeignKey(Tipo_resultado, on_delete=models.SET_NULL, blank=False, null=True)
    expediente_id = models.OneToOneField(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    
    class Meta:
        verbose_name = ('Resultado')
        verbose_name_plural = ('Resultados')
    def __str__(self):
        return str(self.fecha)

class Hechos(EstadoModel):
    cuantia_indeterminada=models.BooleanField(default=False, blank=True,null=True)
    flag_interviene_tercero=models.BooleanField(default=False, blank=True,null=True)
    flag_violencia=models.BooleanField(default=False, blank=True,null=True)
    cuantia= models.PositiveIntegerField(blank=True,null=True)
    descripcion = models.TextField(blank=False,null=False)
    Flag_conflicto_por_incapacidad=models.BooleanField(default=False, blank=True,null=True)
    pretension = models.TextField(blank=True,null=True)
    expediente_id = models.OneToOneField(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    ciudad_id = models.ForeignKey(Tipo_resultado, on_delete=models.SET_NULL, blank=False, null=True)
    
    class Meta:
        verbose_name = ('Hechos')
        verbose_name_plural = ('Hechos')
    def __str__(self):
        return str(self.id)

class Medio_seguimiento(GeneralModel):

    class Meta:
        verbose_name = ('Medio_seguimiento')
        verbose_name_plural = ('Medios_seguimiento')
    def __str__(self):
        return self.nombre

class Seguimiento(EstadoModel):
    fecha = models.DateField(auto_now=False, auto_now_add=False,blank=False,null=False)    
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL, blank=False, null=True) 
    medio_seguimiento_id = models.ForeignKey(Medio_seguimiento, on_delete=models.SET_NULL, blank=False, null=True) 

    class Meta:
        verbose_name = ('Seguimiento')
        verbose_name_plural = ('Seguimientos')
    def __str__(self):
        return str(self.fecha)

class Pregunta_seguimiento(GeneralModel):
    nombre = models.TextField(blank=False, null=False)
    
    class Meta:
        verbose_name = ('Pregunta_seguimiento')
        verbose_name_plural = ('Preguntas_seguimiento')
    def __str__(self):
        return self.nombre

class Respuesta_seguimiento(models.Model):

    id = models.AutoField(primary_key=True, unique=True) 
    si_o_no=models.BooleanField(blank=False,null=False)
    porque = models.TextField(blank=True,null=True)
    pregunta_seguimiento_id = models.ForeignKey(Pregunta_seguimiento, on_delete=models.SET_NULL, blank=False, null=True) 
    seguimiento_id = models.ForeignKey(Seguimiento, on_delete=models.SET_NULL, blank=False, null=True) 

    class Meta:
        verbose_name = ('Respuesta_seguimiento')
        verbose_name_plural = ('Respuestas_seguimiento')
    def __str__(self):
        return str(self.id)

class Turno(GeneralModel):

    class Meta:
        verbose_name = ('Turno')
        verbose_name_plural = ('Turnos')
    def __str__(self):
        return self.nombre

class Tipo_medio(GeneralModel):

    class Meta:
        verbose_name = ('Tipo_medio')
        verbose_name_plural = ('Tipos_medio')
    def __str__(self):
        return self.nombre

class Citacion(EstadoModel):
    enlace = models.CharField(max_length = 150,blank=True,null=True)
    descripcion = models.TextField(blank=True,null=True)
    fecha_sesion = models.DateField(auto_now=False, auto_now_add=False,blank=False,null=False)
    turnos_id = models.ForeignKey(Turno, on_delete=models.SET_NULL,blank=False,null=True)
    tipo_medio_id = models.ForeignKey(Tipo_medio, on_delete=models.SET_NULL,blank=False,null=True)
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL,blank=False,null=True)

       
    class Meta:
        verbose_name = ('Citacion')
        verbose_name_plural = ('Citaciones')
    def __str__(self):
        return str(self.id)

class Relacion_persona_citacion(GeneralModel):
    citacion_id = models.ForeignKey(Citacion, on_delete=models.SET_NULL,blank=False,null=True)
    persona_id = models.ForeignKey(Persona, on_delete=models.SET_NULL,blank=False,null=True)
    class Meta:
        verbose_name = ('Relacion_persona_citacion')
        verbose_name_plural = ('Relaciones_persona_citacion')
    def __str__(self):
        return self.nombre
class Medio_conocimiento(GeneralModel):

    class Meta:
        verbose_name = ('Medio_conocimiento')
        verbose_name_plural = ('Medios_conocimiento')
    def __str__(self):
        return self.nombre

class Encuesta(EstadoModel):
    fecha = models.DateField(auto_now=True, auto_now_add=False,null=False)
    medio_conocimiento_id = models.ForeignKey(Medio_conocimiento, on_delete=models.SET_NULL,blank=False,null=True)
    persona_id = models.ForeignKey(Persona, on_delete=models.SET_NULL,blank=False,null=True)
    expediente_id = models.OneToOneField(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        verbose_name = ('Encuesta')
        verbose_name_plural = ('Encuestas')
    def __str__(self):
        return  '%s %s' % (self.fecha)

class Pregunta_encuesta(GeneralModel):

    class Meta:
        verbose_name = ('Pregunta_encuesta')
        verbose_name_plural = ('Preguntas_encuesta')
    def __str__(self):
        return self.nombre

class Respuesta_encuesta(EstadoModel):
    calificacion=models.PositiveSmallIntegerField(null=False,blank=False)
    pregunta_encuesta_id = models.ForeignKey(Pregunta_encuesta, on_delete=models.SET_NULL,blank=False,null=True)
    encuesta_id = models.ForeignKey(Encuesta, on_delete=models.SET_NULL,blank=True,null=True)
    
    
    class Meta:
        verbose_name = ('Respuesta_encuesta')
        verbose_name_plural = ('Respuestas_encuesta')
    def __str__(self):
        return '%s %s' % (self.id)

class Tipo_reporte(GeneralModel):

    class Meta:
        verbose_name = ('Tipo_reporte')
        verbose_name_plural = ('Tipos_reporte')
    def __str__(self):
        return self.nombre