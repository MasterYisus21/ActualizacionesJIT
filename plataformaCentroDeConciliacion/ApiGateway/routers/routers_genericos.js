const express = require('express')

const router = express.Router()
const views_generales = require('../views/views_generales')

router.get('/ciudades/:id',views_generales.Ciudades)
router.get('/temas/:id',views_generales.Subtema)
router.get('/docentes/',views_generales.Docentes)
router.get('/personas/:identificacion',views_generales.InformacionPersona)



router.get('/:nombre',views_generales.General)
router.get('/:nombre/:id',views_generales.GeneralId)

module.exports = router 