const multer = require("multer");
const maxSize = 10 * 1000 * 1000 // 10Mb Max
var unirest = require('unirest');
const fs = require('fs');
const views = {}
const config = require('../config.json');
const error = require("./requests_errores.js")
requests={}
requests.CargarDocumentos = async (req, res) =>{

  

    try {
      let datos= []
//Configuration for Multer


       // console.log(req.file)
       console.log(req.files)
       console.log(req.files.length)
        if (Object.keys(req.files).length==0) {res.sendStatus(error({ message: " No ha seleccionado ningun documento" })); return;}
        if (Object.keys(req.files).length<2) {res.sendStatus(error({ message: "Ha cargado un solo documento" })); return;}
        //console.log(req.file.size)
        //console.log(req.file.originalname)
      
        for await (const iterator of req.files) {
         
         await unirest
        .post( config.urlApiSolicitudes+"documentos/")
       
        .field('estado', true)
        .field('nombre', iterator.originalname.split(".")[0])
         .field('solicitud_id', 13)
      
        
        //.attach('Ruta_directorio', req.file.path) // reads directly from local file
        .attach('documento', fs.createReadStream(iterator.path)) // creates a read stream
        //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
        .then(function (response) {
          console.log(iterator.path)
          datos.push(response.body)
          // 201
        //  try {
        //   fs.unlinkSync(iterator.path)
        //   //file removed
        // } catch(err) {
        //   console.error(err)
        // }
        })
          
        }
    
        res.status(200).json(datos)
    
    
          }
        catch (err){
          console.log(err)
          
        }
     
    
    
       
    
    }



module.exports = requests