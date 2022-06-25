const express = require("express");
const axios = require("axios");
const app = express();
const multer = require("multer");
const fs = require('fs');
const router = express.Router();
const views_solicitud = require("../views/views_solicitud");
const views_convocante = require("../views/views_convocante");
const views_convocado = require("../views/views_convocado");
const views_hechos = require("../views/views_hechos");
const views_conciliador = require("../views/views_conciliador");
const views_estudiantes = require("../views/views_estudiantes");
const views_manejo_conflicto = require("../views/views_manejo_conflicto");
const views_audiencia = require("../views/views_audiencia");
const views_encuesta = require("../views/views_encuesta");
const views_documento = require("../views/views_documentos");

const maxSize = 10 * 1000 * 1000 // 10Mb Max
//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

// Multer Filter
const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "jpeg"|file.mimetype.split("/")[1] ==="pdf"|file.mimetype.split("/")[1] ==="png") {
    cb(null, true);
  
  } else {
    cb(new Error("Formato no valido"), false);
  }
};

//Calling the "multer" Function
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: maxSize },
});




////////////////////////////////////////////////////////////// NO PROTEGIDAS ///////

// solicitud

router.get("/:id/personas", views_solicitud.Personas_de_una_solicitud);

// convocante //

router.get("/:id/convocantes", views_convocante.ListarConvocantes);
router.post("/:id/convocantes/crear_personas",views_convocante.CrearPersonasConvocante);
router.post("/:id/convocantes/:documento", views_convocante.AgregarConvocante);

router.get("/:id/convocantes/:search", views_convocante.BuscarConvocante);

// convocado//

router.get("/:id/convocados", views_convocado.ListarConvocados);
router.post("/:id/convocados/crear_personas",views_convocado.CrearPersonasConvocado);
router.post("/:id/convocados/:documento", views_convocado.AgregarConvocado);
router.get("/:id/convocados/:search", views_convocado.BuscarConvocado);

// hechos //

router.get("/:id/hechos", views_hechos.ListarHechos);
router.post("/:id/hechos", views_hechos.AgregarHechos);

// manejo conflicto
router.get(
  "/:id/manejos_conflicto",
  views_manejo_conflicto.ListarManejoConflicto
);
router.patch("/:id/manejos_conflicto", views_manejo_conflicto.Agregar);

router.post("/:id/respuestas", views_encuesta.Respuestas);

///////////////////////////////////////]//Rutas Protegidas////////////////


// solicitud

router.delete("/:id/personas/:documento", views_solicitud.EliminarPersona); // eliminar persona de solicitud

//router.get('/:id/convocante/:documento',views_convocante.InformacionConvocante)

//router.get('/:id/convocado/:documento',views_convocado.InformacionConvocado)

// conciliador //

router.get("/:id/conciliadores", views_conciliador.ListarConciliadores);
router.get("/:id/conciliadores/:search", views_conciliador.BuscarConciliador);
router.post( "/:id/conciliadores/:identificacion",views_conciliador.AsignarConciliador);

// estudiante//
router.get("/:id/estudiantes", views_estudiantes.ListarEstudiantes);
router.get("/:id/estudiantes/:search", views_estudiantes.BuscarEstudiante);
router.post("/:id/estudiantes/:identificacion",views_estudiantes.AsignarEstudiante);

// audiencia

router.get("/:id/citaciones", views_audiencia.ListarCitaciones);
router.get("/:id/citaciones/:id2", views_audiencia.CitacionEspecifica);
router.post("/:id/citaciones", views_audiencia.CrearCitacion);
router.post("/:id/citaciones/:id2/personas", views_audiencia.AsignarPersonas); // id 2 es id de citacion

router.delete("/:id/citaciones/:id2/personas",views_audiencia.EliminarPersonas); // id2 es id de citacion

router.get("/:id/fechas/:fecha", views_audiencia.FechasDisponibles);

//router.delete('/:id/citaciones/:documento',views_solicitud.EliminarPersona)

// audiencia

// encuesta//


router.get("/:id/encuestas/:id2", views_encuesta.EncuestaEspecifica);

// documentos
router.get("/:id/documentos", views_documento.VerDocumentos);
//router.post('/:id/documentos',views_documento.CargarDocumentos)

//router.get('/:id/respuestas',views_documento.VerDocumentos)

// estado 


router.get("/:id/estado_solicitud", views_solicitud.EstadoSolicitud);
router.post("/:id/estado_solicitud", views_solicitud.CambiarEstadoSolicitud);

app.use(express.static('public'))
router.post("/:id/documentos", upload.single("myFile"), views_documento.CargarDocumentos) 




module.exports = router;
