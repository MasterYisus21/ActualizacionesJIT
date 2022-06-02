

const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const views = require('../views/views')

router.get('/',views.Pais)

router.post('/:Id',views.CrearPersona)

// designar un docente conciliador 
// router.get('/solicitud/:id/docentes',views.ListarDocentes) // Listar docentes 
// router.get('/solicitud/:id/docentes',views.AsignarDocentes) // Relacionar docentes a unsa solicitud 



// /// Radicar solicitud


// router.get('/:nombre',views.General)
// router.get('/paises/:id',views.Departamentos)
// router.get('/paises/:id/ciudades/:id2',views.Ciudades)
// router.get('/paises/:id/ciudades/:id2/localidades/:id3',views.Localidades)
// router.get('/paises/:id/ciudades/:id2/localidades/:id3/barrios/:id4',views.Barrios)


//router.route()
module.exports = router 
