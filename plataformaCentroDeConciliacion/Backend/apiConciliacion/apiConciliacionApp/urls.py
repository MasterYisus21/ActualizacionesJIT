
from django.shortcuts import render
from django.http import JsonResponse
from django.urls import path
from .views import *

urlpatterns = [
  
    path('pais/',PaisListCreateAPIView.as_view(),name="Creacion y listar Paises"), # Cuando ingresa 'pais/' accede a la clase PaisListApiView
    path('pais/<int:pk>/',PaisRetrieveUpdateDestroyAPIView.as_view(),name="Ver un objeto"),
]
