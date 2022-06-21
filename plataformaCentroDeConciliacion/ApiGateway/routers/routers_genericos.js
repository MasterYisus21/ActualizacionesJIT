const express = require('express')
const axios = require("axios");
const app = express(); // aplicaicon express
const router = express.Router()
const views_generales = require('../views/views_generales')
const views_solicitud = require('../views/views_solicitud')



const config =require ('../config.json')


const verifier =async function (req, res, next) {
    // console.log(req.headers.authorization)
    try {
      if (req.headers.authorization) {
        await axios
          .post(
            "http://127.0.0.1:4000/get_identity",
            {},
            {
              headers: {
                Authorization: req.headers.authorization,
              },
            }
          )
          .then((response) => {
            if (response.data["logged_in_as"]) {
              req.idpermiso = response.data.claims.rol;
              req.identificacion = response.data.claims.sub;
              //  req.mivariable = response.data.
              // console.log(response.data["logged_in_as"])
              next();
            } else {
              res.sendStatus(401);
            }
          })
          .catch(function (error) {
            if (error.response.status == 401) {
              res.sendStatus(401);
            }
            res.sendStatus(404);
          });
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.log(error);
      // res.sendStatus(400)
    }
  }


//////////////////////////////////////////////////////////// RUTAS NO PROTEGIDAS ///////////
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



////////////////////// RUTAS PROTEGIDASSSS /////////////////

router.use(verifier)




router.get('/docentes',views_generales.Docentes)// lista a todos los docentes
router.get('/estudiantes',views_generales.Estudiantes)// lista a todos los docentes

router.get('/personas/:identificacion',views_generales.InformacionPersona) // trae los datos completos de una perosona
router.get('/citaciones/:id',views_generales.InformacionCitacion)// trae los datos completos de una citacion


//router.patch('/citaciones/:id',views_generales.ActualizarCitacion)
//router.get('/fechas/:fecha',views_generales.FechasDisponibles)


// Solicitudesviews//
router.get('/solicitudes_view',views_generales.Solicitudesview) // trae las solicitudes de la persoas que ingrese
router.get('/solicitudes_view/historico',views_generales.SolicitudesviewHistorial) // trae el historial de las solicitudes de la eprsona que ingrese
//router.get('/solicitudes_view/:search',views_generales.SolicitudesviewEspecificas) // trae las solicitudes de la eprsona que ingrese


// Traer y agregar solicitudes 

router.get('/solicitudes',views_solicitud.ListarSolicitudes)// trae las solicitudes
router.get('/solicitudes/:id',views_solicitud.InformacionSolicitud)// trae una solicitud 

router.post('/solicitudes/:id',views_solicitud.ActualizarSolicitud)// Acutaliza una solicitud




// actualizar// 
router.patch('/:nombre/:id',views_generales.Actualizar)

// hechos //






// citaciones//

router.delete('/citaciones/:id',views_generales.EliminarCitacion)




// router.post('/documentos',views_generales.Documentos)
router.get('/generar/',views_generales.GenerarDocumentos)




module.exports = router 
