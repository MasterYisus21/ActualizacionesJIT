from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()


router.register(r'paises',PaisViewSet,basename='paises'),
router.register(r'departamentos',DepartamentoViewSet,basename='departamentos'),
router.register(r'ciudades',CiudadViewSet,basename='ciudades'),
router.register(r'localidades',LocalidadViewSet,basename='localidades'),
router.register(r'barrios',BarrioViewSet,basename='barrios'),
router.register(r'estados_civiles',Estado_civilViewSet,basename='estados_civiles'),
router.register(r'estratos_socioeconomicos',Estrato_socioeconomicoViewSet,basename='estratos_socioeconomicos'),
router.register(r'grupos_etnicos',Grupo_etnicoViewSet,basename='grupos_etnicos'),
router.register(r'tipos_persona',Tipo_personaViewSet,basename='tipos_persona'),
router.register(r'sexos',SexoViewSet,basename='sexos'),
router.register(r'tipos_discapacidad',Tipo_discapacidadViewSet,basename='tipos_discapacidad'),
router.register(r'generos',GeneroViewSet,basename='generos'),
router.register(r'tipos_documento',Tipo_documentoViewSet,basename='tipos_documento'),
router.register(r'tipos_vivienda',Tipo_viviendaViewSet,basename='tipos_vivienda'),
router.register(r'areas',AreaViewSet,basename='areas'),
router.register(r'perfiles',PerfilViewSet,basename='perfil'),
router.register(r'tipos_cargo',Tipo_cargoViewSet,basename='tipos_cargo'),
router.register(r'escolaridades',EscolaridadViewSet,basename='escolaridades'),
router.register(r'apoderados',ApoderadoViewSet,basename='apoderados'),
router.register(r'personas',PersonaViewSet,basename='personas'),
router.register(r'solicitantes_servicio',Solicitante_servicioViewSet,basename='solicitantes_servicio'),
router.register(r'temas',TemaViewSet,basename='temas'),
router.register(r'subtemas',SubtemaViewSet,basename='subtemas'),
router.register(r'objetivos_servicio',Objetivo_servicioViewSet,basename='objetivos_servicio'),
router.register(r'tipos_servicio',Tipo_servicioViewSet,basename='tipos_servicio'),
router.register(r'inicios_conflicto',Inicio_conflictoViewSet,basename='inicios_conflicto'),
router.register(r'finalidades_servicio',Finalidad_servicioViewSet,basename='finalidades_servicio'),
router.register(r'expedientes',ExpedienteViewSet,basename='expedientes'),
router.register(r'tipos_cliente',Tipo_clienteViewSet,basename='tipos_cliente'),
router.register(r'relaciones_persona_expediente',Relacion_persona_expedienteViewSet,basename='relaciones_persona_expediente'),
router.register(r'estados_expediente',Estado_expedienteViewSet,basename='estados_expediente'),
router.register(r'historicos',HistoricoViewSet,basename='historicos'),
router.register(r'tipos_resultado',Tipo_resultadoViewSet,basename='tipos_resultado'),
router.register(r'consecutivos_resultado',Consecutivo_resultadoViewSet,basename='consecutivos_resultado'),
router.register(r'resultados',ResultadoViewSet,basename='resultados'),
router.register(r'hechos',HechosViewSet,basename='hechos'),
router.register(r'medios_seguimiento',Medio_seguimientoViewSet,basename='medios_seguimiento'),
router.register(r'seguimientos',SeguimientoViewSet,basename='seguimientos'),
router.register(r'preguntas_seguimiento',Pregunta_seguimientoViewSet,basename='preguntas_seguimiento'),
router.register(r'respuestas_seguimiento',Respuesta_seguimientoViewSet,basename='respuestas_seguimiento'),
router.register(r'turnos',TurnoViewSet,basename='turnos'),
router.register(r'tipos_medio',Tipo_medioViewSet,basename='tipos_medio'),
router.register(r'citaciones',CitacionViewSet,basename='citaciones'),
router.register(r'relaciones_persona_citacion',Relacion_persona_citacionViewSet,basename='relaciones_persona_citacion'),
router.register(r'medios_conocimiento',Medio_conocimientoViewSet,basename='medios_conocimiento'),
router.register(r'encuestas',EncuestaViewSet,basename='encuestas'),
router.register(r'preguntas_encuesta',Pregunta_encuestaViewSet,basename='preguntas_encuesta'),
router.register(r'respuestas_encuesta',Respuesta_encuestaViewSet,basename='respuestas_encuesta'),
router.register(r'tipos_reporte',Tipo_reporteViewSet,basename='tipos_reporte'),
router.register(r'usuarios',UsuariosViewSet,basename='usuarios'),
router.register(r'grupos',GruposViewSet,basename='grupos'),






urlpatterns = router.urls