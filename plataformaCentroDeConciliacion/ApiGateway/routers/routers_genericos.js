const express = require('express')

const router = express.Router()
const views_generales = require('../views/views_generales')
const views_solicitud = require('../views/views_solicitud')


const axios = require('axios'); 
const config =require ('../config.json')

// axios.get(config.urlApiConciliacion+"/personas?Identificacion="+identificacion).then(resp=>{
//    // console.log(resp.data[0].Id)
//     id_persona=resp.data[0].id
//     }).catch(error=>{console.log(error)})



router.get('/docentes',views_generales.Docentes)// lista a todos los docentes
router.get('/estudiantes',views_generales.Estudiantes)// lista a todos los docentes

router.get('/personas/:identificacion',views_generales.InformacionPersona) // trae los datos completos de una perosona
router.get('/citaciones/:id',views_generales.InformacionCitacion)// trae los datos completos de una citacion


//router.patch('/citaciones/:id',views_generales.ActualizarCitacion)
//router.get('/fechas/:fecha',views_generales.FechasDisponibles)


// Solicitudesviews//
router.get('/solicitudes_view',views_generales.Solicitudesview) // trae las solicitudes de la persoas que ingrese
router.get('/solicitudes_view/historico',views_generales.SolicitudesviewHistorial) // trae el historial de las solicitudes de la eprsona que ingrese
router.get('/solicitudes_view/:search',views_generales.SolicitudesviewEspecificas) // trae las solicitudes de la eprsona que ingrese


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

module.exports = router 