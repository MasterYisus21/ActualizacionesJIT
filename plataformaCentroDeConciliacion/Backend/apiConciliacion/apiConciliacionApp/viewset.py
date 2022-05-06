

from rest_framework import generics, status, viewsets
from rest_framework.response import Response 
from apiConciliacionApp.base.general_views import GeneralListAPIView
from django.shortcuts import render
from .serializers import*



class PaisViewSet(viewsets.ModelViewSet):  # Una sola clase para los metodos de rest 
    serializer_class = PaisSerializer
    queryset=PaisSerializer.Meta.model.objects.filter(State=True)

    #/////////// Son opcionales/// 

    def get_queryset(self, pk=None): # si se define aqui entonces en routers hay que agregar basename
        if pk is None:
            return self.get_serializer().Meta.model.objects.filter(State = True)
        else:
            return self.get_serializer().Meta.model.objects.filter(State = True).filter(Id = pk).first()    

    def create(self,request):
       
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():#Valida que los datos sean compatibles con la Base de datos
            serializer.save() #Crea un nuevo registro en la base de datos  o actualiza una instancia existente
            return Response ({'message': "Producto creado correctamente"},status = status.HTTP_201_CREATED )
        
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST) # mostrar los errores si no es valido el dato

    def update(self,request,pk=None):

        if self.get_queryset(pk):
            pais_serializer =self.serializer_class(self.get_queryset(pk),data = request.data) 
            if pais_serializer.is_valid():
                pais_serializer.save()

                return Response(pais_serializer.data,status = status.HTTP_200_OK)
            return Response(pais_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
    def destroy(self,request,pk=None):
        pais = self.get_queryset().filter(Id=pk).first()
        if  pais:
            pais.State = False
            pais.save()
            return Response({'mesage':'Producto Eliminado Correctamente'},status = status.HTTP_200_OK)
        return Response({'error':'No existe un producto con esos datos'},status = status.HTTP_400_BAD_REQUEST)

