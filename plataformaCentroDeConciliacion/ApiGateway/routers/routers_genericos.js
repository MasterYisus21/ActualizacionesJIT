const express = require('express')

const router = express.Router()
const views_generales = require('../views/views_generales')
const views_solicitud = require('../views/views_solicitud')
const views_convocante = require('../views/views_convocante')
const views_convocado = require('../views/views_convocado')
const views_hechos = require('../views/views_hechos')
const views_conciliador = require('../views/views_conciliador')
const views_manejo_conflicto = require('../views/views_manejo_conflicto')
const views_audiencia = require('../views/views_audiencia')


router.get('/ciudades/:id',views_generales.Ciudades)
router.get('/temas/:id',views_generales.Subtema)
router.get('/docentes',views_generales.Docentes)// lista a todos los docentes
router.get('/solicitudes_view/',views_generales.Solicitudesview) // trae las solicitudes de la eprsona que ingrese
router.get('/solicitudes_view/:search',views_generales.SolicitudesviewEspecificas) // trae las solicitudes de la eprsona que ingrese
router.get('/solicitudes_view/historico',views_generales.SolicitudesviewHistorial) // trae el historial de las solicitudes de la eprsona que ingrese
router.get('/personas/:identificacion',views_generales.InformacionPersona) // trae los datos completos de una perosona
router.get('/citaciones/:id',views_generales.InformacionCitacion)// trae los datos completos de una citacion

//router.patch('/citaciones/:id',views_generales.ActualizarCitacion)
//router.get('/fechas/:fecha',views_generales.FechasDisponibles)




// Traer y agregar solicitudes 
router.get('/solicitudes',views_solicitud.ListarSolicitudes)
router.get('/solicitudes/:id',views_solicitud.InformacionSolicitud)
router.post('/solicitudes/',views_solicitud.CrearSolicitud)
router.patch('/solicitudes/',views_solicitud.ActualizarSolicitud)




// hechos //

router.patch('/despartamentos',views_solicitud.ListarDepartamentos)


module.exports = router 