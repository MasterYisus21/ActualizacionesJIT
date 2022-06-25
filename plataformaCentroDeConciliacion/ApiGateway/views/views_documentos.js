const axios = require('axios');
// const express = require("express"); //
// const multer = require("multer");
// const maxSize = 10 * 1000 * 1000 // 10Mb Max
// var unirest = require('unirest');
// const fs = require('fs');
const views = {}
const datosPersonas = require('../views/datos')
const config = require('../config.json');
//const app = express();

// //Configuration for Multer
// const multerStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "public");
//     },
//     filename: (req, file, cb) => {
//       const ext = file.mimetype.split("/")[1];
//       cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
//     },
//   });
  
//   // Multer Filter
//   const multerFilter = (req, file, cb) => {
//     if (file.mimetype.split("/")[1] === "jpeg"|file.mimetype.split("/")[1] ==="pdf"|file.mimetype.split("/")[1] ==="png") {
//       cb(null, true);
    
//     } else {
//       cb(new Error("Formato no valido"), false);
//     }
//   };
  
//   //Calling the "multer" Function
//   const upload = multer({
//     storage: multerStorage,
//     fileFilter: multerFilter,
//     limits: { fileSize: maxSize },
//   });

  

//   app.use(express.static('public'))

//   app.post("/api/uploadFile/:id", upload.single("myFile"), (req, res) => {
    
//////////////////////////////////////////





views.VerDocumentos = async (req, res) => {
    let data = []
    try {
        await axios.get(config.urlApiConciliacion + "/documentos?Solicitud_Id=" + req.params.id)
            .then(async (result) => {
                for (const iterator of result.data) {
                   
                    await axios.get(config.urlApiConciliacion + "/tipos_estado/" + iterator.Tipo_estado_Id)
                        .then(res => {
                            iterator.Tipo_estado_Id = res.data
                            data.push(iterator)
                        })



                }

                res.status(200).json(data)

            }).catch((err) => {
                res.status(404).json(err)
            });
    } catch (error) {
        console.log(error)
    }
}
views.DocumentoEspecifico = async (req, res) => {
    
    try{
    console.log("estoy dentro")
        await axios.get(config.urlApiConciliacion+"/documentos/"+ req.params.id)
        .then(async resp=>{
            
            
            // res.status(200).json(resp.data)
            await axios.get(resp.data.Ruta_directorio,{ responseType: 'arraybuffer' })//,
            .then(response=>{
               
             //res.status(200).json(response.data)
                //console.log(typeof response.data)
                
               res.end(response.data);
            })
        })

    }catch(error){console.log(error)}

}
views.CargarDocumentos = async (req, res) => {

    try {
        console.log(req.file)
        if (typeof(req.file)==='undefined') {res.sendStatus(401); console.log("entre")}
      
        //console.log(req.file.size)
        //console.log(req.file.originalname)
      
         
    
    unirest
        .post('http://127.0.0.1:8000/api/conciliaciones/v1/documentos/')
       
        .field('State', true)
        .field('Nombre', req.file.originalname)
         .field('Tamanio',  String((req.file.size)/1000 + "KB"))
         .field('Solicitud_Id', req.params.id)
         .field('Tipo_estado_Id', 1)
        
        //.attach('Ruta_directorio', req.file.path) // reads directly from local file
        .attach('Ruta_directorio', fs.createReadStream(req.file.path)) // creates a read stream
        //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
        .then(function (response) {
            console.log(response.body) // 201
           
        })
    
    
          }
        catch (err){
          console.log(err)
        }
     
    
    
       
    
    }



module.exports = views