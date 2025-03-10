from django.db import models   #649 

class EstadoModel(models.Model):
    id = models.AutoField(primary_key=True, unique=True) # los modelos que apliquen baseModels tendran estos dos campos
    estado = models.BooleanField(default=True,blank=True,null=False)

    class Meta:
       abstract = True # Este modelo no creara una tabla en la Base de datos de este modelo 
    

class GeneralModel(EstadoModel):  # Crea un modelo base para los demas modelos

    
    nombre= models.CharField(max_length=50,blank=False, null=False,unique=True)
    
    class Meta:
        abstract = True # Este modelo no creara una tabla en la Base de datos de este modelo 
