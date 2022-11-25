const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();
const views_genericos = require("../views/views_genericos");
const error = require("../requests/requests_error.js")
const multer = require("multer");
const fs = require('fs');
// seleccionables Principales
const maxSize = 10 * 1000 * 1000 // 10Mb Max
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.originalname}-${(new Date(Date.now())).toISOString().split("T")[0]}.${ext}`);
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
  }).array("files")


  const uploadMiddleware = (req,res,next)=>{

  
    // Here call the upload middleware of multer
    upload(req, res, function (err) {
       if (err instanceof multer.MulterError) {
         // A Multer error occurred when uploading.
         res.sendStatus( error({message:"Error cargando documentos, verificar el tamaño del archivo"},413)); return
       ;
         next(err)
         } else if (err) {
         // An unknown error occurred when uploading.
         res.sendStatus( error({message:"Formato no valido"},415))
         return
         
       }
  
      // Everything went fine.
      next()
    })
  
  }


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
router.post("/solicitud", uploadMiddleware,views_genericos.CrearSolicitud);
// descargar documentos
router.get("/documentos/:id",views_genericos.DescargarDocumentos);
// cargar documentos 
router.post("/documentos/:id", uploadMiddleware,views_genericos.CargarDocumentos);
router.get("/estados_solicitudes/:identificacion",views_genericos.Estados_solicitud);
router.post("/solicitudes/:id",views_genericos.AprobarSolicitud);
router.get("/solicitudes/:id",views_genericos.VerSolicitud);


module.exports = router;
