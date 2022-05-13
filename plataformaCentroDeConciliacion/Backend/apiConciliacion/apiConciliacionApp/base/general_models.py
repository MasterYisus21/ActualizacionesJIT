
from telnetlib import STATUS
from xmlrpc.client import boolean
from django.db import models   #649 

class StateModel(models.Model):
    State = models.BooleanField(default=True,blank=True,null=False)

    class Meta:
       abstract = True # Este modelo no creara una tabla en la Base de datos de este modelo 
    

    
class BaseModels(StateModel): # Crea un modelo base para los demas modelos 

    Id = models.AutoField(primary_key=True, unique=True) # los modelos que apliquen baseModels tendran estos dos campos
    Nombre= models.CharField(max_length=30,blank=False, null=False)
    

    
    
    class Meta:
        abstract = True # Este modelo no creara una tabla en la Base de datos de este modelo 

    
