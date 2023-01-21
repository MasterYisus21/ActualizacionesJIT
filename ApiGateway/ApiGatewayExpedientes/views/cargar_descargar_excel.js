

const error = require("../requests/requests_error.js")
const multer = require("multer");
const fs = require('fs');
// seleccionables Principales
const maxSize = 10 * 1000 * 1000 // 10Mb Max
const cargar_excel = {};

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = "xlsx";
      cb(null, `${file.originalname}.${ext}`);
    },
  });

  
  // Multer Filter

const multerFilter = (req, file, cb) => {
    if( file.mimetype.includes('.sheet')){
      cb(null, true);
    
    } else {
      cb(new Error("Formato no valido"), false);
    }
  };
  
  //Calling the "multer" Function
let upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: maxSize },
  }).single("file")

cargar_excel.uploadMiddleware = (req,res,next)=>{

  
    // Here call the upload middleware of multer
    upload(req, res, function (err) {
      
      
       if (err instanceof multer.MulterError) {
         // A Multer error occurred when uploading.
       

         let tipoError={ 
          LIMIT_FILE_SIZE:"TAMAÑO DEL ARCHIVO EXCEDIDO",
          LIMIT_UNEXPECTED_FILE:"LÍMITE DE ARCHIVOS INESPERADO"}
         
          if (tipoError[err.code]) { res.sendStatus( error({message:tipoError[err.code]},413));return;}
         res.sendStatus( error({message:"Error cargando documentos"})); return;
       
         next(err)
         } else if (err) {
         // An unknown error occurred when uploading.
        
         res.sendStatus( error({message:"Formato no valido o falta carpeta public en el servidor"},415))
         return
         
       }
  
      // Everything went fine.
      next()
    })
  
  }


module.exports = cargar_excel