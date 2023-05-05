from django.db import models

# Create your models here.
class Documento(models.Model):
    id = models.AutoField(primary_key=True, unique=True) # los modelos que apliquen baseModels tendran estos dos campos
    nombre= models.CharField(max_length=240,blank=True,default="nombre", null=False)
    estado = models.BooleanField(default=True,blank=True,null=False)
    fecha = models.DateField( auto_now=True, auto_now_add=False , blank=False , null=False) 
    documento = models.FileField(upload_to='documentos/', max_length=240, blank=True,null=True)
    expediente =  models.CharField(max_length =20,null=False,blank=True)
    estado = models.BooleanField( blank=True,null=True,default="")
    class Meta:
        verbose_name = ('Documento')
        verbose_name_plural = ('Documento')
        ordering = ['id']
    def __str__(self):
        return self.nombre
