

const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const views = require('../views/views')

router.get('/:nombre',views.General)
router.get('/paises/:id',views.Departamentos)
router.get('/paises/:id/ciudades/:id2',views.Ciudades)
router.get('/paises/:id/ciudades/:id2/localidades/:id3',views.Localidades)
router.get('/paises/:id/ciudades/:id2/localidades/:id3/barrios/:id4',views.Barrios)

module.exports = router 
