from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()


router.register(r'paises',PaisViewSet,basename='paises'),
router.register(r'departamentos',DepartamentoViewSet,basename='departamentos'),
router.register(r'ciudades',CiudadViewSet,basename='ciudades'),
router.register(r'tipos_persona',Tipo_personaViewSet,basename='tipos_persona'),
router.register(r'sexos',SexoViewSet,basename='sexos'),
router.register(r'generos',GeneroViewSet,basename='generos'),
router.register(r'tipos_documento',Tipo_documentoViewSet,basename='tipos_documento'),
router.register(r'apoderados',ApoderadoViewSet,basename='apoderados'),
router.register(r'personas',PersonaViewSet,basename='personas'),
router.register(r'tipos_cliente',Tipo_clienteViewSet,basename='tipos_cliente'),
router.register(r'hechos',HechosViewSet,basename='hechos'),
router.register(r'usuarios',UsuariosViewSet,basename='usuarios'),
router.register(r'grupos',GruposViewSet,basename='grupos'),
router.register(r'solicitudes',SolicitudViewSet,basename='solicitudes'),
router.register(r'relaciones_persona_solicitud',Relacion_persona_solicitudViewSet,basename='relaciones_persona_solicitud'),
router.register(r'documentos',DocumentoViewSet,basename='documentos'),







urlpatterns = router.urls