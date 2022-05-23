

const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const views = require('../views/views')

router.get('/',views.Pais)

router.post('/:Id',views.CrearPersona)

module.exports = router 
