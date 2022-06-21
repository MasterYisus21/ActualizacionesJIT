const express = require('express')

const router = express.Router()
const views_solicitud = require('../views/views_solicitud')
const views_convocante = require('../views/views_convocante')
const views_convocado = require('../views/views_convocado')
const views_hechos = require('../views/views_hechos')
const views_conciliador = require('../views/views_conciliador')
const views_estudiantes = require('../views/views_estudiantes')
const views_manejo_conflicto = require('../views/views_manejo_conflicto')
const views_audiencia = require('../views/views_audiencia')
const views_encuesta = require('../views/views_encuesta')
const views_documento = require('../views/views_documentos')

// solicitud

router.get('/:id/personas',views_solicitud.Personas_de_una_solicitud)

// convocante //

router.get('/:id/convocantes',views_convocante.ListarConvocantes)
router.post('/:id/convocantes/crear_personas',views_convocante.CrearPersonasConvocante)
router.post('/:id/convocantes/:documento',views_convocante.AgregarConvocante)

router.get('/:id/convocantes/:search',views_convocante.BuscarConvocante)


// convocado//  

router.get('/:id/convocados',views_convocado.ListarConvocados)
router.post('/:id/convocados/crear_personas',views_convocado.CrearPersonasConvocado)
router.post('/:id/convocados/:documento',views_convocado.AgregarConvocado)
router.get('/:id/convocados/:search',views_convocado.BuscarConvocado)

// hechos //

router.get('/:id/hechos',views_hechos.ListarHechos)
router.post('/:id/hechos',views_hechos.AgregarHechos)

// manejo conflicto
router.get('/:id/manejos_conflicto',views_manejo_conflicto.ListarManejoConflicto)
router.patch('/:id/manejos_conflicto',views_manejo_conflicto.Agregar)


module.exports = router 
