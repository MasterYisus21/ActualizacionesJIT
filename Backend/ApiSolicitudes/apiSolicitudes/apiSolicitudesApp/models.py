from django.db import models
from apiSolicitudesApp.general.general_models import GeneralModel, EstadoModel
# Create your models here.

def increment_entrada_number():
  last_booking = Solicitud.objects.all().order_by('numero_radicado').last()
  if not last_booking:
    return 'E' +'00001'
  booking_id = last_booking.id
  booking_int = int(booking_id[1:])
  new_booking_int = booking_int + 1
  new_booking_id = 'E' +str(new_booking_int).zfill(5)
  return new_booking_id
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

class Tipo_documento(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_documento")
        verbose_name_plural = ("Tipos_documento")

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


class Genero(GeneralModel):

    class Meta:
        verbose_name = ("Genero")
        verbose_name_plural = ("Generos")

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
    celular = models.CharField(max_length=15, blank=False, null=False)
    correo = models.EmailField(max_length=120,blank=False,null=False)  
    ciudad_nacimiento_id= models.ForeignKey(Ciudad, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_persona_id = models.ForeignKey(Tipo_persona, on_delete=models.SET_NULL, blank=True, null=True)
    sexo_id = models.ForeignKey(Sexo, on_delete=models.SET_NULL, blank=True, null=True)
    genero_id = models.ForeignKey(Genero, on_delete=models.SET_NULL, blank=True, null=True)
    tipo_documento_id = models.ForeignKey(Tipo_documento, on_delete=models.SET_NULL, blank=True, null=True)
    apoderado_id = models.ForeignKey(Apoderado, on_delete=models.SET_NULL, blank=True, null=True)
              
    class Meta:
        verbose_name = ("Persona")
        verbose_name_plural = ("Personas")

    def __str__(self):
       return '%s %s' % (self.nombres, self.apellidos)

class Solicitud(models.Model):
    numero_radicado= models.CharField(max_length=10,primary_key=True, unique=True,default = increment_entrada_number) # los modelos que apliquen baseModels tendran estos dos campos
    fecha_registro=models.DateField(blank=False , null=False) # Se crea automaticamente 
    estado_solicitud= models.BooleanField(blank=True,null=True)
    class Meta:
        verbose_name = ('Solicitud')
        verbose_name_plural = ('Solicitudes')
    def __str__(self):
        return str(self.numero_radicado)

class Tipo_cliente(GeneralModel):

    class Meta:
        verbose_name = ("Tipo_cliente")
        verbose_name_plural = ("Tipos_cliente")

    def __str__(self):
        return self.nombre
class Relacion_persona_solicitud(GeneralModel):
    
    solicitud_id = models.ForeignKey(Solicitud, on_delete=models.SET_NULL, blank=False, null=True)
    persona_id = models.ForeignKey(Persona, on_delete=models.SET_NULL, blank=False, null=True)
    tipo_cliente_id = models.ForeignKey(Tipo_cliente, on_delete=models.SET_NULL, blank=False, null=True)
    class Meta:
        verbose_name = ("Relacion_persona_solicitud")
        verbose_name_plural = ("Relaciones_persona_solicitud")

    def __str__(self):
        return self.nombre

class Documento(GeneralModel):

    fecha_registro=models.DateField(blank=False , null=False) # Se crea automaticamente 
    documento = models.FileField(upload_to='resultados/', max_length=100, blank=True,null=True)
    solicitud_id = models.OneToOneField(Solicitud, on_delete=models.SET_NULL, blank=False, null=True)
    
    class Meta:
        verbose_name = ('Documento')
        verbose_name_plural = ('Documentos')
    def __str__(self):
        return self.nombre


class Hechos(EstadoModel):
    
    descripcion = models.TextField(blank=False,null=False)
    solicitud_id = models.OneToOneField(Solicitud, on_delete=models.SET_NULL, blank=False, null=True)
    ciudad_id = models.ForeignKey(Ciudad, on_delete=models.SET_NULL, blank=False, null=True)
    
    
    class Meta:
        verbose_name = ('Hechos')
        verbose_name_plural = ('Hechos')
    def __str__(self):
        return str(self.id)