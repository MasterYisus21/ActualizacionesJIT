const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();
const views_genericos = require("../views/views");
const archivo = require("../views/cargar_documentos.js")

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
router.get("/estados_solicitudes/:identificacion",views_genericos.Listar_Estados_solicitud_y_expediente);

//Obtener datos 

router.get("/solicitud", views_genericos.DatosCrearSolicitud);
router.get("/documentos/:id",views_genericos.DescargarDocumentos);
router.get("/solicitudes/:id",views_genericos.VerSolicitud);


// Post
router.post("/solicitud",archivo.uploadMiddleware,views_genericos.CrearSolicitud);
router.post("/documentos/:id",archivo.uploadMiddleware,views_genericos.CargarDocumentos);
router.post("/solicitudes/:id",views_genericos.AprobarSolicitud);



module.exports = router;
