const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();

const config = require("../config.json");

const views_genericos = require("../views/views_genericos");
const archivo = require("../views/cargar_documentos.js")
// listas genericas
router.get("/estados_civiles", views_genericos.GenericList)
router.get("/estratos_socioeconomicos", views_genericos.GenericList)
router.get("/grupos_etnicos", views_genericos.GenericList)
router.get("/tipos_persona", views_genericos.GenericList)
router.get("/escolaridades", views_genericos.GenericList)
router.get("/sexos", views_genericos.GenericList)
router.get("/tipos_discapacidad", views_genericos.GenericList)
router.get("/generos", views_genericos.GenericList)    
router.get("/tipos_cargo", views_genericos.GenericList)
router.get("/tipos_vivienda", views_genericos.GenericList)
router.get("/perfiles", views_genericos.GenericList)
router.get("/tipos_documento", views_genericos.GenericList)
router.get("/tipos_cliente", views_genericos.GenericList)
router.get("/temas", views_genericos.GenericList)
router.get("/objetivos_servicio", views_genericos.GenericList)
router.get("/estados_expediente", views_genericos.GenericList)

router.post("/expedientes",archivo.uploadMiddleware, views_genericos.CrearExpediente);

router.get("/paises/:id", views_genericos.ListarDepartamentos);
router.get("/paises/:id/departamentos/:id2", views_genericos.ListarCiudades);


module.exports = router;