from django.db import models
from apiSolicitudesApp.general.general_models import GeneralModel, EstadoModel
from datetime import date
from datetime import datetime
# Create your models here.

def increment_entrada_number():
  date = datetime.now()
  year = date.year 
  ultima_solicitud = Solicitud.objects.all().last()
  if not ultima_solicitud:
    return 'S'+str(date.year)+str(date.month)+'CCJIT' +'001'
  
  año_registro = ultima_solicitud.fecha_registro.year
  print(ultima_solicitud)
  print("ultima solicitud"+str(año_registro))
  if año_registro!=year:
    return 'S'+str(date.year)+str(date.month)+'CCJIT' +'001'
  
  solicitud_id = ultima_solicitud.numero_radicado
  position_int=str(solicitud_id).index('T')
  solicitud_int = int(solicitud_id[position_int+1:])
  new_solicitud_int = solicitud_int + 1
  print("nueva solicitud"+ str(new_solicitud_int))
  new_solicitud_id = 'S'+str(date.year)+str(date.month)+'CCJIT' +str(new_solicitud_int).zfill(3)
  return new_solicitud_id
class Pais(GeneralModel):

    class Meta:
        db_table='Pais'
        ordering = ['-id']
        verbose_name = ("Pais")
        verbose_name_plural = ("Paises")

    def __str__(self):
        return self.nombre

class Departamento(GeneralModel):
    
    pais_id=models.ForeignKey(Pais, on_delete=models.SET_NULL,blank=False,null=True)
    class Meta:
        db_table='Departamento'
        ordering = ['-id']
        verbose_name = ("Departamento")
        verbose_name_plural = ("Departamentos")

    def __str__(self):
        return self.nombre

class Ciudad(GeneralModel):
    
    departamento_id=models.ForeignKey(Departamento, on_delete=models.SET_NULL,blank=False,null=True)

    class Meta:
        db_table='Ciudad'
        ordering = ['-id']
        verbose_name = ("Ciudad")
        verbose_name_plural = ("Ciudades")

    def __str__(self):
        return self.nombre

class Tipo_documento(GeneralModel):
    
    class Meta:
        db_table='Tipo_documento'
        verbose_name = ("Tipo_documento")
        verbose_name_plural = ("Tipos_documento")

    def __str__(self):
        return self.nombre

class Tipo_persona(GeneralModel):
    
    class Meta:
        db_table='Tipo_persona'
        verbose_name = ("Tipo_persona")
        verbose_name_plural = ("Tipos_persona")

    def __str__(self):
        return self.nombre

class Sexo(GeneralModel):
    
    class Meta:
        db_table='Sexo'
        verbose_name = ("Sexo")
        verbose_name_plural = ("Sexos")

    def __str__(self):
        return self.nombre


class Genero(GeneralModel):
    
    class Meta:
        db_table='Genero'
        verbose_name = ("Genero")
        verbose_name_plural = ("Generos")

    def __str__(self):
        return self.nombre

class Estrato_socioeconomico(GeneralModel):

    class Meta:
        db_table='Estrato_socioeconomico'
        verbose_name = ("estratos_socioeconomicos")
        verbose_name_plural = ("estratos_socioeconomicos")

    def __str__(self):
        return self.nombre

class Estado_solicitud(GeneralModel):

    class Meta:
        db_table='Estado_solicitud'
        verbose_name = ('Estado_solicitud')
        verbose_name_plural = ('Estados_solicitud')
    def __str__(self):
        return self.nombre

class Centro_conciliacion(GeneralModel):

    class Meta:
        db_table='Centro_conciliacion'
        verbose_name = ('Centro_conciliacion')
        verbose_name_plural = ('Centros_conciliacion')
    def __str__(self):
        return self.nombre


class Apoderado_solicitud(models.Model):

 
    nombres = models.CharField(max_length = 25,blank=False,null=False)
    apellidos = models.CharField(max_length= 25, blank=True, null=False)
    identificacion = models.CharField(max_length=25, blank=False, null=False,primary_key=True)
    fecha_expedicion = models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    lugar_expedicion = models.CharField(max_length=20, blank=True, null=False)
    telefono = models.CharField(max_length=10, blank=True, null=True)
    celular = models.CharField(max_length=15, blank=True, null=False)
    correo = models.EmailField(max_length=120,blank=True,null=False)
    tarjeta_profesional= models.CharField(max_length=25, blank=True, null=False)
    tipo_documento_id = models.ForeignKey(Tipo_documento, on_delete=models.SET_NULL, blank=True, null=True)
    estado = models.BooleanField(default=True,blank=True,null=False)

    
    class Meta:
        db_table='Apoderado_solicitud'
        verbose_name = ("Apoderado")
        verbose_name_plural = ("Apoderados")

    def __str__(self):
       return '%s %s' % (self.nombres, self.apellidos)


class Persona_solicitud(EstadoModel):

  
    nombres = models.CharField(max_length = 25,blank=False,null=False)
    apellidos = models.CharField(max_length= 25, blank=False, null=False)
    identificacion = models.CharField(max_length=25, blank=False, null=False,unique=False)
    fecha_expedicion = models.DateField(blank=False,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    lugar_expedicion = models.CharField(max_length=20, blank=False, null=True)
    fecha_nacimiento = models.DateField(blank=False,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    telefono = models.CharField(max_length=10, blank=True, null=True)
    direccion = models.CharField(max_length= 40, blank=False, null=True)
    celular = models.CharField(max_length=15, blank=False, null=False)
    correo = models.EmailField(max_length=120,blank=False,null=False)  
    lugar_nacimiento=  models.CharField(max_length = 50,blank=True,null=True)
    
    tipo_persona_id = models.ForeignKey(Tipo_persona, on_delete=models.SET_NULL, blank=False, null=True)
    sexo_id = models.ForeignKey(Sexo, on_delete=models.SET_NULL, blank=False, null=True)
    genero_id = models.ForeignKey(Genero, on_delete=models.SET_NULL, blank=False, null=True)
    estrato_socioeconomico_id = models.ForeignKey(Estrato_socioeconomico, on_delete=models.SET_NULL, blank=False, null=True)      
    tipo_documento_id = models.ForeignKey(Tipo_documento, on_delete=models.SET_NULL, blank=False, null=True)
    apoderado_id = models.ForeignKey(Apoderado_solicitud, on_delete=models.SET_NULL, blank=True, null=True)
              
              
    class Meta:
        db_table='Persona_solicitud'
        verbose_name = ("Persona")
        verbose_name_plural = ("Personas")

    def __str__(self):
       return '%s %s' % (self.nombres, self.apellidos)

class Solicitud(models.Model):
    id = models.AutoField(primary_key=True) # los modelos que apliquen baseModels tendran estos dos campos
    numero_radicado= models.CharField(max_length=25,default = increment_entrada_number,editable=False,unique=True) # los modelos que apliquen baseModels tendran estos dos campos
    fecha_registro=models.DateField(blank=False , null=False,auto_now=False,auto_now_add=True) # Se crea automaticamente 
    comentario = models.TextField(blank=True,null=True)
    
    estado_solicitud_id= models.ForeignKey(Estado_solicitud, on_delete=models.SET_NULL, blank=True, null=True)
    estado = models.BooleanField(default=True,blank=True,null=False)
    class Meta:
        db_table='Solicitud'
        verbose_name = ('Solicitud')
        verbose_name_plural = ('Solicitudes')
    def __str__(self):
        return str(self.numero_radicado)

class Tipo_cliente(GeneralModel):

    class Meta:
        db_table='Tipo_cliente'
        verbose_name = ("Tipo_cliente")
        verbose_name_plural = ("Tipos_cliente")

    def __str__(self):
        return self.nombre
class Relacion_persona_solicitud(EstadoModel):
    
    solicitud_id = models.ForeignKey(Solicitud, on_delete=models.SET_NULL, blank=False, null=True)
    persona_id = models.ForeignKey(Persona_solicitud, on_delete=models.SET_NULL, blank=False, null=True)
    tipo_cliente_id = models.ForeignKey(Tipo_cliente, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        db_table='Relacion_persona_solicitud'
        verbose_name = ("Relacion_persona_solicitud")
        verbose_name_plural = ("Relaciones_persona_solicitud")

    def __str__(self):
        return '%s %s' % (self.solicitud_id,self.tipo_cliente_id.nombre)

class Documento_solicitud(GeneralModel):
    nombre= models.CharField(max_length=50,blank=True, null=False)
    fecha_registro=models.DateField(blank=False , null=False,auto_now=True) # Se crea automaticamente 
    documento = models.FileField(upload_to='resultados/', max_length=100, blank=True,null=True)
    solicitud_id= models.ForeignKey(Solicitud, on_delete=models.SET_NULL, blank=False, null=True)
    
    class Meta:
        db_table='Documento_solicitud'
        verbose_name = ('Documento')
        verbose_name_plural = ('Documentos')
    def __str__(self):  
        return  '%s %s'%(self.solicitud_id,self.nombre)


class Hechos_solicitud(EstadoModel):
    
    descripcion = models.TextField(blank=False,null=False)
    solicitud_id = models.OneToOneField(Solicitud, on_delete=models.SET_NULL, blank=False, null=True)
    ciudad_id = models.ForeignKey(Ciudad, on_delete=models.SET_NULL, blank=False, null=True)
    
    
    class Meta:
        db_table='Hechos_solicitud'
        verbose_name = ('Hechos')
        verbose_name_plural = ('Hechos')
    def __str__(self):
        return  '%s'%(self.solicitud_id)
 

# api expedientesv
