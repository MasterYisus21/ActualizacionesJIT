const express = require('express')

const router = express.Router()
const views_generales = require('../views/views_generales')

router.get('/ciudades/:id',views_generales.Ciudades)
router.get('/temas/:id',views_generales.Subtema)
router.get('/docentes',views_generales.Docentes)// lista a todos los docentes
router.get('/home/:identificacion',views_generales.SolicitudesDeDocente) // trae las solicitudes de la eprsona que ingrese
router.get('/personas/:identificacion',views_generales.InformacionPersona) // trae los datos completos de una perosona
router.get('/citaciones/:id',views_generales.InformacionCitacion)// trae los datos completos de una citacion

//router.patch('/citaciones/:id',views_generales.ActualizarCitacion)
//router.get('/fechas/:fecha',views_generales.FechasDisponibles)
router.post('/solicitudes/',views_generales.CrearSolicitud)






router.get('/:nombre',views_generales.GetGeneral)
router.get('/:nombre/:id',views_generales.GetGeneralId)
router.patch('/:nombre/:id',views_generales.PatchGeneralId)


module.exports = router 