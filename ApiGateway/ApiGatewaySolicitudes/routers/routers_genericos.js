const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();

const views_genericos = require("../views/views_genericos");

// seleccionables Principales

router.get("/tipos_documento", views_genericos.SeleccionablesPricipales);
router.get("/tipos_persona", views_genericos.SeleccionablesPricipales);
router.get("/generos", views_genericos.SeleccionablesPricipales);
router.get("/sexos", views_genericos.SeleccionablesPricipales);
router.get("/estratos_socioeconomicos", views_genericos.SeleccionablesPricipales);
//ubicacion
router.get("/paises/:id", views_genericos.ListarDepartamentos);
router.get("/paises/:id/departamentos/:id2", views_genericos.ListarCiudades);


//datos vistas
router.get("/solicitud", views_genericos.DatosCrearSolicitud);

//crear solicitud 
router.post("/solicitud", views_genericos.CrearSolicitud);
module.exports = router;
