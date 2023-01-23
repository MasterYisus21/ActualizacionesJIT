const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();
const archivo = require("../views/cargar_documentos.js")
const cargar_excel = require("../views/cargar_descargar_excel")
const config = require("../config.json");

const views_genericos = require("../views/views_genericos");

// listas genericas
router.get("/estados_civiles", views_genericos.GenericList)
router.get("/estratos_socioeconomicos", views_genericos.GenericList)
router.get("/grupos", views_genericos.GenericList) 
router.get("/grupos_etnicos", views_genericos.GenericList)
router.get("/tipos_persona", views_genericos.GenericList)
router.get("/escolaridades", views_genericos.GenericList)
router.get("/sexos", views_genericos.GenericList)
router.get("/tipos_discapacidad", views_genericos.GenericList)
router.get("/generos", views_genericos.GenericList)    
router.get("/tipos_cargo", views_genericos.GenericList)
router.get("/tipos_vivienda", views_genericos.GenericList)
router.get("/perfiles", views_genericos.GenericList)
router.get("/tipos_documento", views_genericos.GenericList)
router.get("/tipos_cliente", views_genericos.GenericList)
router.get("/temas", views_genericos.GenericList)
router.get("/objetivos_servicio", views_genericos.GenericList)
router.get("/estados_expediente", views_genericos.GenericList)
router.get("/tipos_servicio", views_genericos.GenericList)
router.get("/solicitantes_servicio", views_genericos.GenericList)
router.get("/areas", views_genericos.GenericList)
router.get("/tipos_medio", views_genericos.GenericList)
router.get("/tipos_reporte", views_genericos.GenericList)
router.get("/inicios_conflicto", views_genericos.GenericList)
router.get("/expedientes/:id", views_genericos.GenericList)
router.get("/personas", views_genericos.GenericList)
router.get("/apoderados", views_genericos.GenericList)
router.get("/personas/:id", views_genericos.GenericList)
router.get("/tipos_resultado", views_genericos.GenericList)
router.get("/preguntas_encuesta", views_genericos.GenericList)
router.get("/medios_conocimiento", views_genericos.GenericList)
router.get("/medios_seguimiento", views_genericos.GenericList)
router.get("/preguntas_seguimiento", views_genericos.GenericList)
router.get("/seguimientos", views_genericos.GenericList)




router.post("/expedientes/:id/convocantes", views_genericos.CrearConvocantes)
router.post("/expedientes/:id/convocantes/:identificacion", views_genericos.AgregarConvocantes)
router.post("/expedientes/:id/convocados", views_genericos.CrearConvocados)
router.post("/expedientes/:id/convocados/:identificacion", views_genericos.AgregarConvocados)
router.post("/expedientes/:id/conciliadores/:id2", views_genericos.AgregarConciliadores)
router.post("/expedientes/:id/estudiantes/:id2", views_genericos.AgregarEstudiantes)
router.post("/expedientes/:id/citaciones", views_genericos.CrearCitaciones);
router.post("/expedientes/:id/citaciones/:id_citacion/notificar", views_genericos.EnviarNotificacionCitacion);
router.post("/citaciones/:id/personas/:id_persona",views_genericos.CitarPersonas);
router.post("/expedientes/:id/resultados", views_genericos.CrearResultado)
router.post("/expedientes/:id/enviar_resultados", views_genericos.EnviarResultado)



router.delete("/citaciones/:id/personas/:id_persona",views_genericos.EliminarPersonaDeCitacion);
router.delete("/expedientes/:id/personas/:id_relacion",views_genericos.EliminarPersonaCaso);
router.get("/expedientes/:id/resultados", views_genericos.VerResultadoCaso)
router.get("/expedientes/:id/encuestas", views_genericos.VerRespuestasEncuesta)
router.get("/expedientes/:id/seguimientos", views_genericos.ListarSeguimientosCaso);
router.get("/documentos/:id", views_genericos.DescargarDocumentos);
router.delete("/personas/:id",views_genericos.EliminarPersonas);
router.delete("/apoderados/:id",views_genericos.EliminarApoderados);
router.delete("/documentos/:id",views_genericos.EliminarDocumentos);

router.get("/conciliadores", views_genericos.ListarConciliadores);
router.get("/estudiantes", views_genericos.ListarEstudiantes);
router.get("/apoderados/:id", views_genericos.VerApoderado);
router.get("/seguimientos/:id", views_genericos.VerSeguimiento);


router.get("/expedientes/:id/convocados", views_genericos.ListarConvocadosCaso);
router.get("/expedientes/:id/convocantes", views_genericos.ListarConvocantesCaso);
router.get("/expedientes/:id/estudiantes", views_genericos.ListarEstudiantesCaso);
router.get("/expedientes/:id/conciliadores", views_genericos.ListarConciliadoresCaso);
router.get("/expedientes/:id/hechos", views_genericos.ListarHechosCaso);
router.get("/expedientes/:id/documentos", views_genericos.ListarDocumentosCaso);
router.get("/expedientes/:id/citaciones", views_genericos.ListarCitacionesCaso);


router.get("/expedientes/:id/citaciones/:id_citacion/personas", views_genericos.ListarPersonasCitadasyPorCitar)
router.get("/crear_admin", views_genericos.DatosCrearPersonasAdministrativas)
router.get("/crear_personas", views_genericos.DatosCrearPersonas)



router.get("/paises/:id", views_genericos.ListarDepartamentos);
router.get("/paises/:id/departamentos/:id2", views_genericos.ListarCiudades);
router.get("/paises/:id/departamentos/:id2/ciudades/:id3", views_genericos.ListarLocalidades);
router.get("/paises/:id/departamentos/:id2/ciudades/:id3/localidades/:id4", views_genericos.ListarBarrios);
router.get("/temas/:id", views_genericos.ListarSubtemas);
router.get("/expedientes", views_genericos.ListarExpedientes)


router.post("/expedientes", views_genericos.CrearExpediente)
router.post("/personas", views_genericos.CrearPersonas)
router.post("/personas/:id/apoderados", views_genericos.CrearApoderado)
router.post("/documentos/:id",archivo.uploadMiddleware, views_genericos.CargarDocumentos)// id expediente


router.post("/personas/cargar",cargar_excel.uploadMiddleware, views_genericos.CargarTemplatePersonas);

router.post("/expedientes/:id/documentos/:id_documento",archivo.uploadMiddleware, views_genericos.CambiarDocumentoCaso);
router.get("/resultados/:id",archivo.uploadMiddleware, views_genericos.DescargarResultados);

router.post("/expedientes/:id/respuestas", views_genericos.CrearRespuestas);
router.post("/reportes/:id/", views_genericos.GenerarReportes)
router.post("/expedientes/:id/seguimientos", views_genericos.CrearSeguimientoCaso);
router.post("/expedientes/:id/estado",views_genericos.CambiarEstadoExpediente)

router.patch("/expedientes/:id/resultados/:id_resultado",archivo.uploadMiddleware, views_genericos.CargarResultadoCaso);




router.patch("/expedientes/:id",views_genericos.ActualizarExpediente)
router.patch("/hechos/:id",views_genericos.ActualizarHechos)
router.patch("/citaciones/:id",views_genericos.ActualizarCitacion)
router.patch("/personas/:id",views_genericos.ActualizarPersonas)
router.patch("/apoderados/:id",views_genericos.ActualizarApoderado)
router.patch("/documentos/:id",views_genericos.AprobarDocumentosCaso)


router.post("/expedientes/:id/resultados/:id_resultado/formato", views_genericos.DescargarFormatoResultado);
router.post("/expedientes/:id/citaciones/:id_citacion/personas/:id_relacion/formato", views_genericos.DescargarFormatoCitacion);
router.post("/personas/formato", views_genericos.DescargarTemplates);
// turnos fecha

router.get("/expedientes/:id/turnos/:fecha", views_genericos.TurnosFecha);
module.exports = router;

