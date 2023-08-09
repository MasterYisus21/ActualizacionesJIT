const error = require("../requests/requests_error.js")
const multer = require("multer");
const fs = require('fs');
// seleccionables Principales
const maxSize = 100 * 1000 * 1000 // 10Mb Max
const archivo = {};

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
    
      const ext = file.mimetype.split("/")[1];
      cb(null, `${(new Date(Date.now())).toISOString().split("T")[0]}-${file.originalname}`);
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


archivo.uploadMiddleware = (req,res,next)=>{

  
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


module.exports = archivo