

const express = require('express')

const router = express.Router()
const views_solicitud = require('../views/views_solicitud')
const views_convocante = require('../views/views_convocante')
// solicitud
router.get('/',views_solicitud.GeneralGet)
router.post('/',views_solicitud.GeneralPost)
router.get('/subtemas/:id',views_solicitud.SolicitudSubtema)

// convocante //

router.get('/:id/convocante',views_convocante.GeneralGet)

module.exports = router 
