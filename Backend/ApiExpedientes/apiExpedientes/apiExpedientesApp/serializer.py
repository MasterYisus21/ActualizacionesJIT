from rest_framework import serializers

from .models import *

class PaisSerializer(serializers.ModelSerializer):
   
   
    class Meta:
        model = Pais     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 