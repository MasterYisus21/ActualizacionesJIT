from asyncio.format_helpers import _format_callback_source
from email import charset
from pickle import TRUE
from pydoc import describe
from pyexpat import model
from django.db import models

from apiConciliacionApp.base.general_models import BaseModels

# Create your models here.
# Campos Comunes

#Modelos Unicos

class Pais(BaseModels):# Es una extencion del modelo BaseModels del archivo general_models

    class Meta:
        verbose_name = ("Pais")
        verbose_name_plural = ("Paises")

    def __str__(self):
        return self.Nombre # Devuelve el nombre en vez del Id

         
class Departamento(BaseModels):

    class Meta:
        verbose_name = ("Departamento")
        verbose_name_plural = ("Departamentos")

    def __str__(self):
        return self.Nombre


class Ciudad(BaseModels):

    Departamento_Id = models.ForeignKey(Departamento, on_delete=models.CASCADE, blank=False,null=False)
  
    class Meta:
        verbose_name = ("Ciudad")
        verbose_name_plural = ("Ciudades")

    def __str__(self):
        return self.Nombre


class Localidad(BaseModels):

    Ciudad_Id = models.ForeignKey(Ciudad, on_delete=models.CASCADE, blank=False,null=False)
   
    class Meta:
        verbose_name = ("Localidad")
        verbose_name_plural = ("Localidades")

    def __str__(self):
        return self.Nombre


class Barrio(BaseModels):

    Localidad_Id = models.ForeignKey(Localidad, on_delete=models.CASCADE, blank=False,null=False)
    class Meta:
        verbose_name = ("Barrio")
        verbose_name_plural = ("Barrios")

    def __str__(self):
        return self.Nombre

class Area(BaseModels):

    class Meta:
        verbose_name = ("Area")
        verbose_name_plural = ("Areas")

    def __str__(self):
        return self.Nombre


class Tema(BaseModels):
    
    class Meta:
        verbose_name = ("Tema")
        verbose_name_plural =   ("Temas")

    def __str__(self):
        return self.Nombre



class Subtema(BaseModels):
    
    Tema_Id = models.ForeignKey(Tema, on_delete=models.CASCADE, blank=False,null=False)

    class Meta:
        verbose_name = ("Subtema")
        verbose_name_plural =   ("Subtemas")

    def __str__(self):
        return self.Nombre

class Objetivo_servicio(BaseModels):

    class Meta:
        verbose_name = ("Objetivo_servicio")
        verbose_name_plural = ("Objetivo_servicios")

    def __str__(self):
        return self.Nombre


class Tipo_servicio(BaseModels):

    Objetivo_servicio_ID= models.ForeignKey(Objetivo_servicio,  on_delete=models.CASCADE , blank=False, null=False)

    class Meta:
        verbose_name = ("Tipo_servicio")
        verbose_name_plural = ("Tipo_servicios")

    def __str__(self):
        return self.Nombre

class Tipo_resultado(BaseModels):

    class Meta:
        verbose_name = ("Tipo_resultado")
        verbose_name_plural = ("Tipo_resultados")

    def __str__(self):
        return self.Nombre


class Solicitud(models.Model):

    Numero_caso = models.AutoField(primary_key=True,auto_created = True,)
    Descripcion = models.TextField(blank=True,null=True)
    Fecha_registro = models.DateField( auto_now=True, auto_now_add=False , blank=False , null=False) # Se crea automaticamente 
    Fecha_finalizacion = models.DateField(blank=True,null=True)#Campo de tipo fecha pero debe ser escrita por el usuario
    Area_Id = models.ForeignKey(Area, on_delete=models.CASCADE, blank=False ,null=False)
    Subtema_Id =  models.ForeignKey(Subtema, on_delete=models.CASCADE, blank=False ,null=False)
    Tipo_servicio_Id = models.ForeignKey(Tipo_servicio, on_delete=models.CASCADE, blank=False ,null=False)
    Tipo_resultado_Id = models.ForeignKey(Tipo_resultado, on_delete=models.CASCADE, blank=False ,null=False)
    

    class Meta:
        verbose_name = ("Solicitud")   
        verbose_name_plural = ("Solicituds")

    def __str__(self):
        return self.Numero_caso

    def get_absolute_url(self):
        return reverse("Solicitud_detail", kwargs={"pk": self.pk})


class Hechos(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Fecha = models.DateField(blank=False,null=False)
    Descripcion_hecho = models.TextField(blank=False)
    Descripcion_pretension = models.TextField(blank=True)
    Flag_interviene_tercero = models.BooleanField(default=False)
    Flag_Violencia=models.BooleanField(default=False)
    Solicitud_Id = models.ForeignKey(Solicitud, on_delete=models.CASCADE, blank=False,null=False)
    Barrio_Id = models.ForeignKey(Barrio, on_delete=models.CASCADE, blank=False,null=False)
   
    class Meta:
        verbose_name = ("Hechos")
        verbose_name_plural = ("Hechoss")

    def __str__(self):
        return self.Descripcion_hecho


class Tipo_estado(BaseModels):

    class Meta:
        verbose_name = ("Tipo_estado")
        verbose_name_plural = ("Tipo_estados")

    def __str__(self):
        return self.Nombre


class Documento(models.Model):
    Id = models.AutoField(primary_key=True,auto_created = True)
    Ruta_directorio = models.FileField(upload_to=None, max_length=100)
    Tamanio = models.PositiveIntegerField()
    Solicitud_Id = models.ForeignKey(Solicitud, on_delete=models.CASCADE, blank=False, null=False)
    Tipo_estado_Id = models.ForeignKey(Tipo_estado, on_delete=models.CASCADE, blank=False, null=False)

    class Meta:
        verbose_name = ("Documento")
        verbose_name_plural = ("Documentos")

    def __str__(self):
        return self.Id

class Historico_solicitud(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Fecha = models.DateTimeField( auto_now=True, auto_now_add=False)
    Descripcion = models.TextField(blank=False,null=False)
    Flag_requiere_documento = models.BooleanField()
    Solicitud_Id = models.ForeignKey(Solicitud, on_delete=models.CASCADE, blank=False, null=False)
    Tipo_estado_Id = models.ForeignKey(Tipo_estado, on_delete=models.CASCADE, blank=False, null=False)
    
    class Meta:
        verbose_name = ("Historico_solicitud")
        verbose_name_plural = ("Historico_solicituds")

    def __str__(self):
        return self.Descripcion


class Tipo_medio(BaseModels):
    
    class Meta:
        verbose_name = ("Tipo_Medio")
        verbose_name_plural = ("Tipo_Medios")

    def __str__(self):
        return self.Nombre


    
class Turno(BaseModels):

   
    class Meta:
        verbose_name = ("Turno")
        verbose_name_plural = ("Turnos")

    def __str__(self):
        return self.Fanja_horaria


class Citacion(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Fecha_sesion = models.DateTimeField( blank=False, null=False)
    Descripcion = models.TextField(blank=False,null=False)
    Enlace= models.CharField(max_length=150,blank=True,null=True)
    Turno_Id = models.ForeignKey(Turno, on_delete=models.CASCADE, blank=False, null=False)
    Tipo_medio_Id = models.ForeignKey(Tipo_medio, on_delete=models.CASCADE, blank=False, null=False)
    Solicitud_Id = models.ForeignKey(Solicitud, on_delete=models.CASCADE, blank=False, null=False)

    class Meta:
        verbose_name = ("Citacion")
        verbose_name_plural = ("Citacions")

    def __str__(self):
        return self.Fecha_sesion


class Estrato_socioeconomico(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Numero = models.PositiveSmallIntegerField(blank=False,null=False)
    
    class Meta:
        verbose_name = ("Estrato")
        verbose_name_plural = ("Estratos")

    def __str__(self):
        return self.Numero


class Tipo_persona(BaseModels):
   
    class Meta:
        verbose_name = ("Tipo_persona")
        verbose_name_plural = ("Tipo_personas")

    def __str__(self):
        return self.Nombre


class Tipo_cargo(BaseModels):

    class Meta:
        verbose_name = ("Tipo_cargo")
        verbose_name_plural = ("Tipo_cargos")

    def __str__(self):
        return self.Nombre


class Tipo_documento(BaseModels):

    class Meta:
        verbose_name = ("Tipo_documento")
        verbose_name_plural = ("Tipo_documentos")

    def __str__(self):
        return self.Nombre


class Tipo_vivienda(BaseModels):

    class Meta:
        verbose_name = ("Tipo_vivienda")
        verbose_name_plural = ("Tipo_viviendas")

    def __str__(self):
        return self.Nombre



class Rol_permiso(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True,)
    Descipcion = models.CharField(max_length=100,blank=False,null=False,unique=True)
    Permiso_colsulta= models.BooleanField(default=False,blank=False,null=False)
    Permiso_crar= models.BooleanField(default=False,blank=False,null=False)
    Permiso_actualizar= models.BooleanField(default=False,blank=False,null=False)
    Permiso_eliminar= models.BooleanField(default=False,blank=False,null=False)
    Permiso_reportes= models.BooleanField(default=False,blank=False,null=False)
    class Meta:
        verbose_name = ("Rol_permiso")
        verbose_name_plural = ("Rol_permisos")

    def __str__(self):
        return self.Descipcion


class Rol(BaseModels):

    Rol_permiso_Id=models.ForeignKey(Rol_permiso,on_delete=models.CASCADE,blank=False,null=False)

    class Meta:
        verbose_name = ("Rol")
        verbose_name_plural = ("Roles")

    def __str__(self):
        return self.Nombre 


class Perfil(BaseModels):

 
    class Meta:
        verbose_name = ("Perfil")
        verbose_name_plural = ("Perfiles")

    def __str__(self):
        return self.Descripcion


class Persona(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Identificacion = models.BigIntegerField(blank=False,null=False)
    Primer_nombre = models.CharField(max_length=15,blank=False,null=False)
    Segundo_nombre = models.CharField(max_length=15,blank=True,null=True)
    Primer_Apellido = models.CharField(max_length=15,blank=False,null=False)
    Segundo_Apellido = models.CharField(max_length=15,blank=True,null=True)
    Correo = models.EmailField(max_length=120,blank=False,null=False)
    Telefono = models.BigIntegerField(blank=True,null=True)
    Fecha_de_nacimiento = models.DateField(blank=True,null=True)
    Tipo_documento_Id=models.ForeignKey(Documento,on_delete=models.CASCADE,blank=False,null=False)
    Tipo_vivienda_Id =models.ForeignKey(Tipo_vivienda,on_delete=models.CASCADE,blank=False,null=False)
    Barrio_Id =models.ForeignKey(Barrio,on_delete=models.CASCADE,blank=False,null=False)
    Tipo_persona_Id=models.ForeignKey(Tipo_persona,on_delete=models.CASCADE,blank=False,null=False)
    Estrato_socioeconomico_Id= models.ForeignKey(Estrato_socioeconomico,on_delete=models.CASCADE,blank=False,null=False)
    Tipo_estado_Id=models.ForeignKey(Tipo_estado,on_delete=models.CASCADE,blank=True,null=True)
    Perfil_Id=models.ForeignKey(Perfil,on_delete=models.CASCADE,blank=True,null=True)
    Tipo_cargo_Id=models.ForeignKey(Tipo_cargo,on_delete=models.CASCADE,blank=True,null=True)


    class Meta:
        verbose_name = ("Persona")
        verbose_name_plural = ("Personas")

    def __str__(self):
        return self.Primer_nombre


class Usuario(models.Model):

    Usuario = models.BigIntegerField(primary_key=True,auto_created=False,null=False)
    Contraseña =models.CharField( max_length=100)
    Rol_Id=models.ForeignKey(Rol,on_delete=models.CASCADE,blank=False,null=False)
    Persona_Id=models.ForeignKey(Persona,on_delete=models.CASCADE,blank=True,null=True)

    class Meta:
        verbose_name = ("Usuario")
        verbose_name_plural = ("Usuarios")

    def __str__(self):
        return self.Usuario


class Relacion_citacion_persona(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Citacion_Id = models.ForeignKey(Citacion, on_delete=models.CASCADE, blank=False, null=False)
    Persona_Id  = models.ForeignKey(Persona, on_delete=models.CASCADE, blank=False, null=False)

    class Meta:
        verbose_name = ("Relacion_citacion_persona")
        verbose_name_plural = ("Relacion_citacion_personas")

    def __str__(self):
        return self.Id


class Tipo_cliente(BaseModels):

    class Meta:
        verbose_name = ("Tipo_cliente")
        verbose_name_plural = ("Tipo_clientes")

    def __str__(self):
        return self.Nombre


class Relacion_solicitud_persona(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Solicitud_Id = models.ForeignKey(Solicitud, on_delete=models.CASCADE, blank=False, null=False)
    Persona_Id  = models.ForeignKey(Persona, on_delete=models.CASCADE, blank=False, null=False)
    Tipo_cliente_Id  = models.ForeignKey(Tipo_cliente, on_delete=models.CASCADE, blank=False, null=False)

    class Meta:
        verbose_name = ("Relacion_persona_solicitud")
        verbose_name_plural = ("Relacion_persona_solicituds")

    def __str__(self):
        return self. Id


        
class Relacion_area_perfil(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Perfil_Id= models.ForeignKey(Perfil, on_delete=models.CASCADE, blank=False, null=False)
    Area_Id = models.ForeignKey(Area, on_delete=models.CASCADE, blank=False, null=False)

    class Meta:
        verbose_name = ("Relacion_area_perfil")
        verbose_name_plural = ("Relacion_area_perfils")

    def __str__(self):
        return self.Id 


class Pregunta(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Pregunta = models.CharField(max_length=100,blank=False,null=False,unique=True)

    class Meta:
        verbose_name = ("Pregunta")
        verbose_name_plural = ("Preguntas")

    def __str__(self):
        return self.Pregunta
class Medio_conocimiento (BaseModels):
    
    
    class Meta:
        verbose_name = ("Medio_conocimiento ")
        verbose_name_plural = ("Medio_conocimiento s")

    def __str__(self):
        return self.Nombre

    def get_absolute_url(self):
        return reverse("Medio_conocimiento _detail", kwargs={"pk": self.pk})

class Encuesta(models.Model):
    
    Id = models.AutoField(primary_key=True,auto_created = True)
    Fecha = models.DateField()
    Solicitud_Id=  models.ForeignKey(Solicitud, on_delete=models.CASCADE, blank=False, null=False)


    class Meta:
        verbose_name = ("Encuesta")
        verbose_name_plural = ("Encuestas")

    def __str__(self):
        return self.Id


class Respuesta(models.Model):

    Id = models.AutoField(primary_key=True,auto_created = True)
    Calificacion = models.SmallIntegerField(blank=False)
    Pregunta_Id = models.ForeignKey(Pregunta, on_delete=models.CASCADE, blank=False, null=False)
    Medio_conocimiento_Id=  models.ForeignKey(Medio_conocimiento, on_delete=models.CASCADE, blank=False, null=False)


    class Meta:
        verbose_name = ("Respuesta")
        verbose_name_plural = ("Respuesta")

    def __str__(self):
        return self.Calificacion
