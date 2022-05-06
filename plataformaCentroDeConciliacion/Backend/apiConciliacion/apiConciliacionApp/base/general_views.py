from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
from apiConciliacionApp.models import *
from apiConciliacionApp.serializers import * 


class GeneralViewSet(viewsets.ModelViewSet):# Lista los objetos con ListAPIVIEW
    serializer_class = None

    def get_queryset(self):
        model=self.get_serializer().Meta.model  # Recoje la informacion del modelo que aparece en el meta de los serializer
        return model.objects.filter(State=True) # retorna todos los valores con estado = true
    
    def create(self,request):
   
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():#Valida que los datos sean compatibles con la Base de datos
            serializer.save() #Crea un nuevo registro en la base de datos  o actualiza una instancia existente
            return Response ({'message': "Creado correctamente"},status = status.HTTP_201_CREATED )
        
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST) # mostrar los errores si no es valido el dato

    def update(self,request,pk=None):

        if self.get_queryset(pk):
            serializer =self.serializer_class(self.get_queryset(pk),data = request.data) 
            if serializer.is_valid():
                serializer.save()

                return Response(serializer.data,status = status.HTTP_200_OK)
            return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
 
    def destroy(self,request,pk=None):
            queryset = self.get_queryset().filter(Id=pk).first()
            if  queryset:
                queryset.State = False
                queryset.save()
                return Response({'mesage':' Eliminado Correctamente'},status = status.HTTP_200_OK)
            return Response({'error':'No existe un producto con esos datos'},status = status.HTTP_400_BAD_REQUEST)