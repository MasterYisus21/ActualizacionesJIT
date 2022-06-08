

const express = require('express')

const router = express.Router()
const views_solicitud = require('../views/views_solicitud')
const views_convocante = require('../views/views_convocante')
const views_convocado = require('../views/views_convocado')
const views_hechos = require('../views/views_hechos')
const views_conciliador = require('../views/views_conciliador')
const views_manejo_conflicto = require('../views/views_manejo_conflicto')
const views_audiencia = require('../views/views_audiencia')

// solicitud

router.get('/',views_solicitud.GeneralGet)
router.post('/',views_solicitud.GeneralPost)
router.delete('/:id/persona/:documento',views_solicitud.EliminarPersona)



// convocante //

router.get('/:id/convocante',views_convocante.ListarConvocantes)
router.post('/:id/convocante/:documento',views_convocante.AgregarConvocante)
//router.get('/:id/convocante/:documento',views_convocante.InformacionConvocante)


// convocado//  

router.get('/:id/convocado',views_convocado.ListarConvocados)
router.post('/:id/convocado/:documento',views_convocado.AgregarConvocado)
//router.get('/:id/convocado/:documento',views_convocado.InformacionConvocado)



// hechos //

router.get('/:id/hechos',views_hechos.ListarHechos)
router.post('/:id/hechos',views_hechos.AgregarHechos)

// conciliador //

router.get('/:id/conciliador',views_conciliador.ListarConciliadores)
router.post('/:id/conciliador/:Persona_Id',views_conciliador.AsignarConciliador)



// manejo conflicto
router.get('/:id/manejo_conflicto',views_manejo_conflicto.ListarManejoConflicto)
router.patch('/:id/manejo_conflicto',views_manejo_conflicto.Agregar)

// audiencia
router.get('/:id/audiencia',views_audiencia.ListarCitaciones)
router.post('/:id/audiencia',views_audiencia.CrearCitacion)

module.exports = router 



