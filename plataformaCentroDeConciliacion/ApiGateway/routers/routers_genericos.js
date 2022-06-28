const express = require('express')
const axios = require("axios");
const app = express(); // aplicaicon express
const router = express.Router()
const views_generales = require('../views/views_generales')
const views_solicitud = require('../views/views_solicitud')
const views_documentos = require('../views/views_documentos')
const views_resultados = require("../views/views_resultados");

const config =require ('../config.json')


//////////////////////////////////////////////////////////// RUTAS NO PROTEGIDAS ///////////
router.get('/temas/:id',views_generales.Subtema) // trae los temas
router.post('/solicitudes/',views_solicitud.CrearSolicitud)// Crea una solicitud
router.get('/solicitud',views_solicitud.Traer_datos)


// crear personas

router.get('/departamentos',views_generales.ListarDepartamentos)
router.get('/departamentos/:id',views_generales.Ciudades)
router.get('/departamentos/:id/ciudades/:id2',views_generales.Localidades)
router.get('/departamentos/:id/ciudades/:id2/barrios/:id3',views_generales.Barrios)

router.get('/datos_persona',views_generales.DatosCrearPersonas)
router.post('/personas',views_generales.CrearPersonas)

// encuestas//
router.get('/preguntas/',views_generales.Preguntas)
router.get("/estados", views_solicitud.ListarEstados)




////////////////////// RUTAS PROTEGIDASSSS /////////////////





router.get('/docentes',views_generales.Docentes)// lista a todos los docentes
router.get('/estudiantes',views_generales.Estudiantes)// lista a todos los docentes

router.get('/personas/:identificacion',views_generales.InformacionPersona) // trae los datos completos de una perosona
router.get('/citaciones/:id',views_generales.InformacionCitacion)// trae los datos completos de una citacion

// actualizar// 
router.patch('/personas/:identificacion',views_generales.Actualizar)


//router.patch('/citaciones/:id',views_generales.ActualizarCitacion)
//router.get('/fechas/:fecha',views_generales.FechasDisponibles)


// Solicitudesviews//
router.get('/solicitudes_view',views_generales.Solicitudesview) // trae las solicitudes de la persoas que ingrese
router.get('/solicitudes_view/historico',views_generales.SolicitudesviewHistorial) // trae el historial de las solicitudes de la eprsona que ingrese
//router.get('/solicitudes_view/:search',views_generales.SolicitudesviewEspecificas) // trae las solicitudes de la eprsona que ingrese


// Traer y agregar solicitudes 

router.get('/solicitudes',views_solicitud.ListarSolicitudes)// trae las solicitudes
router.get('/solicitudes/:id',views_solicitud.InformacionSolicitud)// trae una solicitud 

router.post('/solicitudes/:id',views_solicitud.ActualizarSolicitud)// Acutaliza una solicitud




// actualizar// 
router.patch('/:nombre/:id',views_generales.Actualizar)

// hechos //






// citaciones//

router.delete('/citaciones/:id',views_generales.EliminarCitacion)




// router.post('/documentos',views_generales.Documentos)
router.get('/generar/',views_generales.GenerarDocumentos)


// ESTADOS
router.get("/estados", views_solicitud.ListarEstados);

// documentos
router.get("/documentos/:id", views_documentos.DocumentoEspecifico);
module.exports = router 

//resultados
router.get("/resultados", views_resultados.ListarResultados);

