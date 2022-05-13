from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
from apiConciliacionApp.models import *  
from apiConciliacionApp.serializers import * 


class GeneralViewSet(viewsets.ModelViewSet):# Lista los objetos con ListAPIVIEW
    serializer_class = None
   # filter_fields ='__all__'
   
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter(State=True)
 
        return model.filter(State=True, Id=pk).first() # retorna todos los valores con estado = true
    
    # def create(self,request):
   
    #     serializer = self.serializer_class(data = request.data)
    #     if serializer.is_valid():#Valida que los datos sean compatibles con la Base de datos
    #         serializer.save() #Crea un nuevo registro en la base de datos  o actualiza una instancia existente
    #         return Response ({'message': "Creado correctamente"},status = status.HTTP_201_ CREATED )

      
    #     return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST) # mostrar los errores si no es valido el dato

    # def update(self,request,pk=None):

    #     if self.get_queryset(pk):
    #         serializer =self.serializer_class(self.get_queryset(pk),data = request.data) 
    #         if serializer.is_valid():
    #             serializer.save()

    #             return Response(serializer.data,status = status.HTTP_200_OK)
    #         return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    

    def destroy(self,request,pk=None):
            
        queryset = self.get_queryset().filter(Id=pk).first()
        if  queryset:
            queryset.State = False
            queryset.save()
            return Response (queryset.Id)
        return Response(status = status.HTTP_404_NOT_FOUND)

    

