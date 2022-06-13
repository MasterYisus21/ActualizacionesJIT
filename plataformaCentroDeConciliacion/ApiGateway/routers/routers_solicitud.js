

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

//router.get('/',views_solicitud.Traer_datos)

router.get('/:id/personas',views_solicitud.Personas_de_una_solicitud)
router.delete('/:id/personas/:documento',views_solicitud.EliminarPersona) // eliminar persona de solicitud




// convocante //

router.get('/:id/convocantes',views_convocante.ListarConvocantes)
router.post('/:id/convocantes/:documento',views_convocante.AgregarConvocante)
//router.get('/:id/convocante/:documento',views_convocante.InformacionConvocante)


// convocado//  

router.get('/:id/convocados',views_convocado.ListarConvocados)
router.post('/:id/convocados/:documento',views_convocado.AgregarConvocado)
//router.get('/:id/convocado/:documento',views_convocado.InformacionConvocado)



// hechos //

router.get('/:id/hechos',views_hechos.ListarHechos)
router.post('/:id/hechos',views_hechos.AgregarHechos)

// conciliador //

router.get('/:id/conciliador',views_conciliador.ListarConciliadores)
router.post('/:id/conciliador/:Persona_Id',views_conciliador.AsignarConciliador)



// manejo conflicto
router.get('/:id/manejos_conflicto',views_manejo_conflicto.ListarManejoConflicto)
router.patch('/:id/manejos_conflicto',views_manejo_conflicto.Agregar)

// audiencia

router.get('/:id/citaciones',views_audiencia.ListarCitaciones)
router.get('/:id/citaciones/:id2',views_audiencia.CitacionEspecifica)
router.post('/:id/citaciones',views_audiencia.CrearCitacion)
router.post('/:id/personas/citaciones/:id2',views_audiencia.AsignarPersonas) // id 2 es id de citacion
router.delete('/:id/personas/citaciones/:id2',views_audiencia.EliminarPersonas) // id2 es id de citacion

router.get('/:id/fechas/:fecha',views_audiencia.FechasDisponibles)

//router.delete('/:id/citaciones/:documento',views_solicitud.EliminarPersona) 
// audiencia


module.exports = router 



