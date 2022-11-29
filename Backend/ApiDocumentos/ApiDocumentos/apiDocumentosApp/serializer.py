from rest_framework import serializers

from .models import *
class DocumentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Documento         # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 