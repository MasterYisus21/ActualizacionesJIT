

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

//router.get('/',views_solicitud.Traer_datos)


router.delete('/:id/personas/:documento',views_solicitud.EliminarPersona) // eliminar persona de solicitud


//router.get('/:id/convocante/:documento',views_convocante.InformacionConvocante)




//router.get('/:id/convocado/:documento',views_convocado.InformacionConvocado)





// conciliador //

router.get('/:id/conciliadores',views_conciliador.ListarConciliadores)
router.get('/:id/conciliadores/:search',views_conciliador.BuscarConciliador)
router.post('/:id/conciliadores/:identificacion',views_conciliador.AsignarConciliador)


// estudiante//
router.get('/:id/estudiantes',views_estudiantes.ListarEstudiantes)
router.get('/:id/estudiantes/:search',views_estudiantes.BuscarEstudiante)
router.post('/:id/estudiantes/:identificacion',views_estudiantes.AsignarEstudiante)





// audiencia

router.get('/:id/citaciones',views_audiencia.ListarCitaciones)
router.get('/:id/citaciones/:id2',views_audiencia.CitacionEspecifica)
router.post('/:id/citaciones',views_audiencia.CrearCitacion)
router.post('/:id/citaciones/:id2/personas',views_audiencia.AsignarPersonas) // id 2 es id de citacion

router.delete('/:id/citaciones/:id2/personas',views_audiencia.EliminarPersonas) // id2 es id de citacion

router.get('/:id/fechas/:fecha',views_audiencia.FechasDisponibles)

//router.delete('/:id/citaciones/:documento',views_solicitud.EliminarPersona) 
// audiencia


 // encuesta//

 router.post('/:id/respuestas',views_encuesta.Respuestas)
 router.get('/:id/encuestas/:id2',views_encuesta.EncuestaEspecifica)


 // documentos 
 router.get('/:id/documentos',views_documento.VerDocumentos)
 //router.post('/:id/documentos',views_documento.CargarDocumentos)

 //router.get('/:id/respuestas',views_documento.VerDocumentos)
module.exports = router 



