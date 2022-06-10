const express = require('express')

const router = express.Router()
const views_generales = require('../views/views_generales')

router.get('/ciudades/:id',views_generales.Ciudades)
router.get('/temas/:id',views_generales.Subtema)
router.get('/docentes',views_generales.Docentes)
router.get('/personas/:identificacion',views_generales.InformacionPersona)
router.get('/citaciones/:id',views_generales.InformacionCitacion)
//router.patch('/citaciones/:id',views_generales.ActualizarCitacion)
//router.get('/fechas/:fecha',views_generales.FechasDisponibles)
router.post('/solicitudes/',views_generales.CrearSolicitud)






router.get('/:nombre',views_generales.GetGeneral)
router.get('/:nombre/:id',views_generales.GetGeneralId)
router.patch('/:nombre/:id',views_generales.PatchGeneralId)


module.exports = router 