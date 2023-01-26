const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();
const views_genericos = require("../views/views");
const archivo = require("../views/cargar_documentos.js")
const config = require("../config.json");
const error = require("../requests/requests_error.js")
axios.defaults.headers.common['X-Api-Key'] =config.apiKey
async function verifier(req, res, next) {
    
  
    try {
     
      if (req.headers.authorization) {
        
        await axios
          .post(
            config.urlAutenticacion + "get_identity",
            {},
            {
              headers: {
                Authorization: req.headers.authorization,
              },
            }
          )
          .then((response) => {
         
            if (response.data["logged_in_as"]) {
              axios.defaults.headers['Id'] =response.data.claims.sub;
              req.grupo = response.data.claims.rol;
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
        
        res.sendStatus(403)
        return
        //next()
      }
    } catch (error) {
      console.log(error);
      // res.sendStatus(400)
    }
    // next()
  }

async function verificarCodigo(req, res, next) {
    try {
        axios.get(config.urlApiSolicitudes+"codigos?solicitud_id="+req.params.id)
        .then(result=>{
            
            if(req.headers['authorization']!=result.data.results[0].codigo){res.sendStatus(403);return}
            
            next()
    })
        .catch(err => {
            res.sendStatus(error(err))
        })
    } catch (er) {
        
    }
   
}
//Listar

router.get("/tipos_documento", views_genericos.SeleccionablesPricipales);
router.get("/tipos_persona", views_genericos.SeleccionablesPricipales);
router.get("/generos", views_genericos.SeleccionablesPricipales);
router.get("/paises", views_genericos.SeleccionablesPricipales);
router.get("/sexos", views_genericos.SeleccionablesPricipales);
router.get("/estratos_socioeconomicos", views_genericos.SeleccionablesPricipales);
router.get("/solicitudes",views_genericos.ListarSolicitudes);
router.get("/estados_solicitud",views_genericos.SeleccionablesPricipales);
router.get("/paises/:id", views_genericos.ListarDepartamentos);
router.get("/paises/:id/departamentos/:id2", views_genericos.ListarCiudades);
router.get("/estados_solicitudes/:identificacion",views_genericos.Listar_estados_solicitud);
router.get("/estados_expedientes/:identificacion",views_genericos.Listar_estados_expediente);
router.post("/solicitudes/:id/informacion_solicitudes",verificarCodigo,views_genericos.DetalleSolicitud);

//Obtener datos 

router.get("/solicitud", views_genericos.DatosCrearSolicitud);
router.get("/documentos/:id",verifier,views_genericos.DescargarDocumentos);
// app.use(verifier);
router.get("/solicitudes/:id",verifier,views_genericos.VerSolicitud);


// Post
router.post("/solicitud",archivo.uploadMiddleware,views_genericos.CrearSolicitud);
router.post("/documentos/:id",archivo.uploadMiddleware,views_genericos.CargarDocumentos);
router.post("/solicitudes/:id",verifier,views_genericos.AprobarSolicitud);
router.post("/solicitudes/:id/enviar_resultados",views_genericos.EnviarResultadoExpediente);
router.post("/solicitudes/:id/enviar_codigos",views_genericos.CodigoSolicitud);
router.post("/solicitudes/:id/verificar_codigos",views_genericos.VerificarCodigo);



module.exports = router;
