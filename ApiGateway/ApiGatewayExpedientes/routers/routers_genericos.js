const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();
const archivo = require("../views/cargar_documentos.js")
const config = require("../config.json");

const views_genericos = require("../views/views_genericos");

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
router.get("/tipos_servicio", views_genericos.GenericList)
router.get("/solicitantes_servicio", views_genericos.GenericList)
router.get("/areas", views_genericos.GenericList)
router.get("/inicios_conflicto", views_genericos.GenericList)
router.get("/expedientes", views_genericos.GenericList)
router.get("/expedientes/:id", views_genericos.GenericList)
router.get("/personas", views_genericos.GenericList)
router.get("/personas/:id", views_genericos.GenericList)

router.post("/expedientes/:id/convocantes", views_genericos.CrearConvocantes)
router.post("/expedientes/:id/convocantes/:identificacion", views_genericos.AgregarConvocantes)
router.post("/expedientes/:id/convocados", views_genericos.CrearConvocados)
router.post("/expedientes/:id/convocados/:identificacion", views_genericos.AgregarConvocados)
router.patch("/expedientes/:id",views_genericos.ActualizarExpediente)
router.get("/paises/:id", views_genericos.ListarDepartamentos);
router.get("/paises/:id/departamentos/:id2", views_genericos.ListarCiudades);
router.get("/temas/:id", views_genericos.ListarSubtemas);
router.get("/conciliadores", views_genericos.ListarConciliadores);

router.post("/expedientes", views_genericos.CrearExpediente)
router.post("/documentos/:id",archivo.uploadMiddleware, views_genericos.CargarDocumentos)

module.exports = router;