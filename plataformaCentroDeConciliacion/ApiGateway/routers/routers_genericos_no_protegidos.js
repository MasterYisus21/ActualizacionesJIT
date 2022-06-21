const express = require('express')

const router = express.Router()
const views_generales = require('../views/views_generales')
const views_solicitud = require('../views/views_solicitud')
const axios = require('axios'); 
const config =require ('../config.json')
const identificacion=1234

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

module.exports = router 