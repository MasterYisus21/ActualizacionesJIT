# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

from django.db import models
from apiExpedientesApp.general.general_models import GeneralModel, EstadoModel
from django.contrib.auth.models import User,Group

# Create your models here.


from datetime import datetime
  
class Pais(GeneralModel):

    class Meta:
        managed = False
        db_table='Pais'
        ordering = ['-id']
        verbose_name = ("Pais")
        verbose_name_plural = ("Paises")
        

    def __str__(self):
        return self.nombre

class Departamento(GeneralModel):
    
    pais_id=models.ForeignKey(Pais, on_delete=models.SET_NULL,blank=False,null=True)
    class Meta:
        managed = False
        db_table='Departamento'
        ordering = ['-id']
        verbose_name = ("Departamento")
        verbose_name_plural = ("Departamentos")
        

    def __str__(self):
        return self.nombre

class Ciudad(GeneralModel):
    
    departamento_id=models.ForeignKey(Departamento, on_delete=models.SET_NULL,blank=False,null=True)
    nombre= models.CharField(max_length=80,blank=False, null=False,unique=False)
    class Meta:
        managed = False
        db_table='Ciudad'
        ordering = ['-id']
        verbose_name = ("Ciudad")
        verbose_name_plural = ("Ciudades")

    def __str__(self):
        return self.nombre

class Tipo_documento(GeneralModel):
    
    class Meta:
        managed = False
        db_table='Tipo_documento'
        verbose_name = ("Tipo_documento")
        verbose_name_plural = ("Tipos_documento")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre

class Tipo_persona(GeneralModel):
    
    class Meta:
        managed = False
        db_table='Tipo_persona'
        ordering = ['nombre']
        verbose_name = ("Tipo_persona")
        verbose_name_plural = ("Tipos_persona")

    def __str__(self):
        return self.nombre

class Sexo(GeneralModel):
    
    class Meta:
        managed = False
        db_table='Sexo'
        ordering = ['nombre']
        verbose_name = ("Sexo")
        verbose_name_plural = ("Sexos")

    def __str__(self):
        return self.nombre


class Genero(GeneralModel):
    
    class Meta:
        managed = False
        db_table='Genero'
        ordering = ['nombre']
        verbose_name = ("Genero")
        verbose_name_plural = ("Generos")

    def __str__(self):
        return self.nombre

class Estrato_socioeconomico(GeneralModel):

    class Meta:
        managed = False
        db_table='Estrato_socioeconomico'
        ordering = ['nombre']
        verbose_name = ("estratos_socioeconomicos")
        verbose_name_plural = ("estratos_socioeconomicos")

    def __str__(self):
        return self.nombre

class Estado_solicitud(GeneralModel):

    class Meta:
        managed = False
        db_table='Estado_solicitud'
        ordering = ['nombre']
        verbose_name = ('Estado_solicitud')
        verbose_name_plural = ('Estados_solicitud')
    def __str__(self):
        return self.nombre

class Centro_conciliacion(GeneralModel):

    class Meta:
        managed = False
        db_table='Centro_conciliacion'
        ordering = ['nombre']
        verbose_name = ('Centro_conciliacion')
        verbose_name_plural = ('Centros_conciliacion')
    def __str__(self):
        return self.nombre




class Tipo_cliente(GeneralModel):

    class Meta:
        managed = False
        db_table='Tipo_cliente'
        ordering = ['nombre']
        verbose_name = ("Tipo_cliente")
        verbose_name_plural = ("Tipos_cliente")

    def __str__(self):
        return self.nombre



class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Codigo(EstadoModel):
    codigo = models.CharField(max_length = 7,blank=True,null=True)
    fecha_registro=models.DateField(blank=False , null=False,auto_now=False,auto_now_add=True) # Se crea automaticamente 
   
    
    class Meta:
        managed = False
        db_table='Codigo'
        ordering = ['-id']
        verbose_name = ("Codigo")
        verbose_name_plural = ("Codigos")
        

    def __str__(self):
        return str(self.fecha_registro)
############################################ modelos expedientes#########################################################

def increment_numero_caso_number():
    date = datetime.now()
    year = date.year 
    ultima_solicitud = Expediente.objects.all().first()
    
    if not ultima_solicitud:
        return str(year)+"-" +'001'
    
    año_registro = ultima_solicitud.fecha_registro.year
    
    if año_registro!=year:
        return str(year)+"-" +'001'

    solicitud_id = ultima_solicitud.numero_caso
    position_int=str(solicitud_id).index('-')
    solicitud_int = int(solicitud_id[position_int+1:])
    new_solicitud_int = solicitud_int + 1
    new_solicitud_id = str(year)+"-"+ str(new_solicitud_int).zfill(3)
    return new_solicitud_id



class Localidad(GeneralModel):

    ciudad_id=models.ForeignKey(Ciudad, on_delete=models.SET_NULL,blank=False,null=True)
    nombre= models.CharField(max_length=50,blank=False, null=False)
    
    class Meta:
        db_table='Localidad'
        ordering = ['-id']
        verbose_name = ("Localidad")
        verbose_name_plural = ("Localidades")

    def __str__(self):
        return self.nombre

class Barrio(GeneralModel):
    
    nombre= models.CharField(max_length=80,blank=False, null=False)
    localidad_id=models.ForeignKey(Localidad, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        db_table='Barrio'
        ordering = ['-id']
        verbose_name = ("Barrio")
        verbose_name_plural = ("Barrios")

    def __str__(self):
        return self.nombre
        

class Estado_civil(GeneralModel):

 
    class Meta:
        db_table='Estado_civil'
        verbose_name = ("Estado_civil")
        verbose_name_plural = ("Estados_civiles")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre



class Grupo_etnico(GeneralModel):

    class Meta:
        db_table='Grupo_etnico'
        verbose_name = ("Grupo_etnico")
        verbose_name_plural = ("Grupos_etnicos")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre

class Tipo_discapacidad(GeneralModel):

    class Meta:
        db_table='Tipo_discapacidad'
        verbose_name = ("Tipo_Discapacidad")
        verbose_name_plural = ("Tipos_Discapacidad")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Tipo_vivienda(GeneralModel):

    class Meta:
        db_table='Tipo_vivienda'
        verbose_name = ("Tipo_vivienda")
        verbose_name_plural = ("Tipos_vivienda")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Area(GeneralModel):

    class Meta:
        db_table='Area'
        verbose_name = ("Area")
        verbose_name_plural = ("Areas")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Perfil(GeneralModel):

    area_id= models.ForeignKey(Area,on_delete=models.CASCADE)
    class Meta:
        db_table='Perfil'
        verbose_name = ("Perfil")
        verbose_name_plural = ("Perfiles")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Tipo_cargo(GeneralModel):

    class Meta:
        db_table='Tipo_cargo'
        verbose_name = ("Tipo_cargo")
        verbose_name_plural = ("Tipos_cargo")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Escolaridad(GeneralModel):

    class Meta:
        db_table='Escolaridad'
        verbose_name = ("Escolaridad")
        verbose_name_plural = ("Escolaridades")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre
class Apoderado(EstadoModel):

 
    nombres = models.CharField(max_length = 25,blank=False,null=False)
    apellidos = models.CharField(max_length= 25, blank=False, null=False)
    identificacion = models.CharField(max_length=25, blank=False, null=False)
    fecha_expedicion = models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    lugar_expedicion = models.CharField(max_length=20, blank=False, null=False)
    telefono = models.CharField(max_length=10, blank=True, null=True)
    celular = models.CharField(max_length=15, blank=False, null=False)
    correo = models.EmailField(max_length=120,blank=False,null=False)
    tarjeta_profesional= models.CharField(max_length=25, blank=False, null=False)
    tipo_documento_id = models.ForeignKey('Tipo_documento', on_delete=models.SET_NULL, blank=False, null=True)
    
    class Meta:
        db_table='Apoderado_expediente'
        verbose_name = ("Apoderado")
        verbose_name_plural = ("Apoderados")
        ordering = ['nombres']

    def __str__(self):
       return '%s %s' % (self.nombres, self.apellidos)


class Persona(EstadoModel):

  
    nombres = models.CharField(max_length = 25,blank=False,null=False)
    apellidos = models.CharField(max_length= 25, blank=False, null=False)
    identificacion = models.CharField(max_length=25, blank=False, null=False)
    fecha_expedicion = models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    lugar_expedicion = models.CharField(max_length=20, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    telefono = models.CharField(max_length=10, blank=True, null=True)
    direccion = models.CharField(max_length= 220, blank=True, null=True)
    ocupacion = models.CharField(max_length = 25,blank=True,null=False)
    celular = models.CharField(max_length=15, blank=False, null=False)
    correo = models.EmailField(max_length=120,blank=False,null=False)
    persona_ugc= models.BooleanField(default=False, blank=True,null=True)
    tarjeta_profesional= models.CharField(max_length=25, blank=True, null=True)
    barrio_id= models.ForeignKey(Barrio, on_delete=models.SET_NULL, blank=True, null=True)
    lugar_nacimiento=  models.CharField(max_length = 50,blank=True,null=True)
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
    tipo_documento_id = models.ForeignKey('Tipo_documento', on_delete=models.SET_NULL, blank=True, null=True)
    escolaridad_id = models.ForeignKey(Escolaridad, on_delete=models.SET_NULL, blank=True, null=True)
    apoderado_id = models.ForeignKey(Apoderado, on_delete=models.SET_NULL, blank=True, null=True)
    usuario_id= models.OneToOneField(User, on_delete=models.SET_NULL, null=True,blank=True)

    
    
    class Meta:
        db_table='Persona'
        verbose_name = ("Persona")
        verbose_name_plural = ("Personas")
        ordering = ['nombres']
        

    def __str__(self):
       return '%s %s' % (self.nombres, self.apellidos)

class Solicitante_servicio(GeneralModel):

    class Meta:
        db_table='Solicitud_servicio'
        verbose_name = ("Solicitante_servicio")
        verbose_name_plural = ("Solicitantes_servicio")
        ordering = ['nombre']
    def __str__(self):
        return self.nombre


class Tema(GeneralModel):
    
    nombre= models.CharField(max_length=100,blank=False, null=False,unique=True)
    class Meta:
        db_table='Tema'
        verbose_name = ("Tema")
        verbose_name_plural = ("Temas")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Subtema(GeneralModel):
    nombre= models.CharField(max_length=210,blank=False, null=False,unique=False)
    tema_id = models.ForeignKey(Tema, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        db_table='Subtema'
        verbose_name = ("Subtema")
        verbose_name_plural = ("Subtemas")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre

class Objetivo_servicio(GeneralModel):

   
    class Meta:
        db_table='Objetivo_servicio'
        verbose_name = ("Objetivo_servicio")
        verbose_name_plural = ("Objetivos_servicio")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre

class Tipo_servicio(GeneralModel):

    Objetivo_servicio_id = models.ForeignKey(Objetivo_servicio, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        db_table='Tipo_servicio'
        verbose_name = ("Tipo_servicio")
        verbose_name_plural = ("Tipos_servicio")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre

class Inicio_conflicto(GeneralModel):

    class Meta:
        db_table='Inicio_conflicto'
        verbose_name = ("Inicio_conflicto")
        verbose_name_plural = ("Inicios_conflicto")
        ordering = ['nombre']

    def __str__(self):
        return self.nombre
class Estado_expediente(GeneralModel):
     nombre= models.CharField(max_length=100,blank=False, null=False,unique=True)
     class Meta:
        db_table='Estado_expediente'
        verbose_name = ('Estado')
        verbose_name_plural = ('Estados_expediente')
        ordering = ['id']
     def __str__(self):
        return self.nombre

class Finalidad_servicio(GeneralModel):

     class Meta:
        db_table='finalidad_servicio'
        verbose_name = ('finalidad_servicio')
        verbose_name_plural = ('finalidades_servicio')
        ordering = ['nombre']
     def __str__(self):
        return self.nombre
class Expediente(EstadoModel):
    identificador_sicaac= models.CharField(max_length=15,blank=True,null=True)
    numero_radicado = models.CharField(max_length =20,editable=True,null=True,blank=True,unique=True)
    numero_caso = models.CharField(max_length=25,default = increment_numero_caso_number,editable=False,unique=True)
    fecha_registro=models.DateField(blank=False , null=False,auto_now=False,auto_now_add=True) # Se crea automaticamente 
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
    estado_expediente_id = models.ForeignKey(Estado_expediente, on_delete=models.SET_NULL, blank=True, null=True)
    Finalidad_servicio_id = models.ForeignKey(Finalidad_servicio, on_delete=models.SET_NULL, blank=True, null=True)
    

    class Meta:
        
        db_table='Expediente'      
        verbose_name = ("Expediente")
        verbose_name_plural = ("Expedientes")
        ordering = ['-id']
        
    

    def __str__(self):
        return str(self.numero_caso)


class Relacion_persona_expediente(EstadoModel):
    
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    persona_id = models.ForeignKey(Persona, on_delete=models.SET_NULL, blank=False, null=True)
    tipo_cliente_id = models.ForeignKey(Tipo_cliente, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        ordering = ["-expediente_id"] 
        db_table='Relacion_persona_expediente'
        verbose_name = ("Relacion_persona_expediente")
        verbose_name_plural = ("Relaciones_persona_expediente")
        ordering = ['-id']
    def __str__(self):
        return '%s %s' % (self.expediente_id, self.tipo_cliente_id)


class Historico(models.Model):

    id = models.AutoField(primary_key=True, unique=True) 
    fecha =  models.DateTimeField(blank=False,null=False,auto_now=False,auto_now_add=True)
    estado_id = models.ForeignKey(Estado_expediente, on_delete=models.SET_NULL, blank=False, null=True)
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL, blank=False, null=True)

    class Meta:
        db_table='Historico'
        ordering = ["-fecha"] 
        verbose_name = ('Historico')
        verbose_name_plural = ('Historicos')
        ordering = ['-id']
    def __str__(self):
         return '%s '% (self.id)


class Categoria_resultado(GeneralModel):
    
    consecutivo_actual=models.PositiveIntegerField(null=False,blank=False)
    
    class Meta:
        db_table='Categoria_resultado'
        verbose_name = ('Categoria_resultado')
        verbose_name_plural = ('Categorias _resultado')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre
        
class Tipo_resultado(GeneralModel):
    nombre= models.CharField(max_length=220,blank=False, null=False,unique=True)
    categoria_id = models.ForeignKey(Categoria_resultado, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        db_table='Tipo_resultado'
        verbose_name = ('Tipo_resultado')
        verbose_name_plural = ('Tipos_resultado')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre
class Resultado(EstadoModel):
    consecutivo= models.PositiveIntegerField(null=False,blank=False)
    acuerdo  = models.TextField(blank=True,null=True)
    documento = models.FileField(upload_to='resultados/', max_length=100, blank=True,null=True)
    fecha = models.DateField(auto_now=False,auto_now_add=True , blank=False , null=False) 
    tipo_resultado_id = models.ForeignKey(Tipo_resultado, on_delete=models.SET_NULL, blank=False, null=True)
    expediente_id = models.OneToOneField(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    
    class Meta:
        db_table='Resultado'
        verbose_name = ('Resultado')
        verbose_name_plural = ('Resultados')
        ordering = ['-id']
    def __str__(self):
        return str(self.expediente_id.numero_caso)


class Hechos(EstadoModel):
    cuantia_indeterminada=models.BooleanField(default=False, blank=True,null=True)
    flag_interviene_tercero=models.BooleanField(default=False, blank=True,null=True)
    flag_violencia=models.BooleanField(default=False, blank=True,null=True)
    cuantia= models.IntegerField(default=0,blank=True,null=True)
    descripcion = models.TextField(blank=False,null=False)
    Flag_conflicto_por_incapacidad=models.BooleanField(default=False, blank=True,null=True)
    pretension = models.TextField(blank=True,null=True)
    expediente_id = models.OneToOneField(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    ciudad_id = models.ForeignKey(Ciudad, on_delete=models.SET_NULL, blank=False, null=True)
    
    
    class Meta:
        db_table='Hechos_expediente'
        verbose_name = ('Hechos')
        verbose_name_plural = ('Hechos')
        ordering = ['-id']
    def __str__(self):
        return '%s' % (self.expediente_id)

class Medio_seguimiento(GeneralModel):

    class Meta:
        db_table='Medio_seguimiento'
        verbose_name = ('Medio_seguimiento')
        verbose_name_plural = ('Medios_seguimiento')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre

class Seguimiento(EstadoModel):
    fecha = models.DateField(auto_now=False,auto_now_add=True,blank=False,null=False)    
    se_cumplio_acuerdo=models.BooleanField(default=False, blank=True,null=True)
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL, blank=False, null=True) 
    medio_seguimiento_id = models.ForeignKey(Medio_seguimiento, on_delete=models.SET_NULL, blank=False, null=True) 
    recomendacion_al_usuario = models.TextField(blank=True,null=True)
    seguimiento_efectivo=models.BooleanField(default=False, blank=True,null=True)
    
    class Meta:
        db_table='Seguimiento'
        verbose_name = ('Seguimiento')
        verbose_name_plural = ('Seguimientos')
        ordering = ['-id']
    def __str__(self):
        return str(self.fecha)

class Pregunta_seguimiento(GeneralModel):
    nombre = models.TextField(blank=False, null=False)
    
    class Meta:
        db_table='Pregunta_seguimiento'
        verbose_name = ('Pregunta_seguimiento')
        verbose_name_plural = ('Preguntas_seguimiento')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre

class Respuesta_seguimiento(EstadoModel):

    id = models.AutoField(primary_key=True, unique=True) 
    si_o_no=models.BooleanField(blank=False,null=False)
    porque = models.TextField(blank=True,null=True)
    pregunta_seguimiento_id = models.ForeignKey(Pregunta_seguimiento, on_delete=models.SET_NULL, blank=False, null=True) 
    nombre = models.TextField(blank=False, null=False,default="")
    seguimiento_id = models.ForeignKey(Seguimiento, on_delete=models.SET_NULL, blank=False, null=True) 

    class Meta:
        db_table='Respuesta_seguimiento'
        verbose_name = ('Respuesta_seguimiento')
        verbose_name_plural = ('Respuestas_seguimiento')
        ordering = ['-id']
    def __str__(self):
        return str(self.id)

class Turno(GeneralModel):

    class Meta:
        db_table='Turno'
        verbose_name = ('Turno')
        verbose_name_plural = ('Turnos')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre

class Tipo_medio(GeneralModel):

    class Meta:
        db_table='Tipo_medio'
        verbose_name = ('Tipo_medio')
        verbose_name_plural = ('Tipos_medio')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre

class Citacion(EstadoModel):
    enlace = models.CharField(max_length = 330,blank=True,null=True)
    descripcion = models.TextField(blank=True,null=True)
    fecha_sesion = models.DateField(auto_now=False, auto_now_add=False,blank=False,null=False)
    turno_id = models.ForeignKey(Turno, on_delete=models.SET_NULL,blank=False,null=True)
    tipo_medio_id = models.ForeignKey(Tipo_medio, on_delete=models.SET_NULL,blank=False,null=True)
    expediente_id = models.ForeignKey(Expediente, on_delete=models.SET_NULL,blank=False,null=True)

       
    class Meta:
        db_table='Citacion'
        verbose_name = ('Citacion')
        verbose_name_plural = ('Citaciones')
        ordering = ['-id']
    def __str__(self):
        return str(self.expediente_id)

class Relacion_persona_citacion(EstadoModel):
    citacion_id = models.ForeignKey(Citacion, on_delete=models.SET_NULL,blank=False,null=True)
    persona_id = models.ForeignKey(Persona, on_delete=models.SET_NULL,blank=False,null=True)
    class Meta:
        db_table='Relacion_persona_citacion'
        verbose_name = ('Relacion_persona_citacion')
        verbose_name_plural = ('Relaciones_persona_citacion')
        ordering = ['-id']
    def __str__(self):
        return str(self.citacion_id)

class Medio_conocimiento(GeneralModel):

    class Meta:
        db_table='Medio_conocimiento'
        verbose_name = ('Medio_conocimiento')
        verbose_name_plural = ('Medios_conocimiento')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre

class Encuesta(EstadoModel):
    fecha = models.DateField(auto_now=True, auto_now_add=False,null=False)
    medio_conocimiento_id = models.ForeignKey(Medio_conocimiento, on_delete=models.SET_NULL,blank=False,null=True)
    observacion = models.TextField(blank=True,null=True)
    expediente_id = models.OneToOneField(Expediente, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        db_table='Encuesta'
        verbose_name = ('Encuesta')
        verbose_name_plural = ('Encuestas')
        ordering = ['-id']
    def __str__(self):
        return  '%s' % (self.expediente_id)

class Pregunta_encuesta(GeneralModel):
    nombre = models.TextField(blank=False, null=False)
    class Meta:
        db_table='Pregunta_encuesta'
        verbose_name = ('Pregunta_encuesta')
        verbose_name_plural = ('Preguntas_encuesta')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre

class Respuesta_encuesta(EstadoModel):
    calificacion=models.PositiveSmallIntegerField(null=False,blank=False)
    pregunta_encuesta_id = models.ForeignKey(Pregunta_encuesta, on_delete=models.SET_NULL,blank=False,null=True)
    encuesta_id = models.ForeignKey(Encuesta, on_delete=models.SET_NULL,blank=True,null=True)
    nombre = models.TextField(blank=True, null=False,default="")
    
    class Meta:
        db_table='Respuesta_encuesta'
        verbose_name = ('Respuesta_encuesta')
        verbose_name_plural = ('Respuestas_encuesta')
        ordering = ['-id']
    def __str__(self):
        return '%s %s' % (self.encuesta_id,self.pregunta_encuesta_id)

class Tipo_reporte(GeneralModel):

    class Meta:
        db_table='Tipo_reporte'
        verbose_name = ('Tipo_reporte')
        verbose_name_plural = ('Tipos_reporte')
        ordering = ['nombre']
    def __str__(self):
        return self.nombre

