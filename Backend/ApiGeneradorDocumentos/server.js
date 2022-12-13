var express = require('express');
var app = express();
const port = 8003
const multer = require("multer");
const funcion= require("./Reporteconsolidado.js")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// respond with "hello world" when a GET request is made to the homepage
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");


function Generar(nombre_documento,informacion) {
   // let datos ={}
   try{
    console.log("ent")
    if(!fs.existsSync(path.resolve(__dirname, nombre_documento+".docx"))) {
      console.log("File not found")
      return;
  }
    const content = fs.readFileSync(
        path.resolve(__dirname, nombre_documento+".docx"),
        "binary"
    );
    
    
    const zip = new PizZip(content);
    
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    
    
    
    doc.render(informacion);

    
    const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
    });
    
    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.
    
    return buf
  }catch(err){
    
    
      console.log(err)
   
  }
}



  // Load the docx file as binary content
app.use(express.static("./resultado"));

const verificador=async (req, res, next)=> {
  //console.log(req.body.tipo_resultado)
  if(!fs.existsSync(path.resolve(__dirname, String(req.body.nombre_documento)+".docx"))& !fs.existsSync(path.resolve(__dirname, String(req.body.nombre_documento)+".xlsx"))) {
   
   
    res.status(404).send("Archivo no encontrado")
    return
    } else {
       next();
    }

}
app.use(verificador)
app.post('/api/generador_documentos/v1/generar', async (req, res)=> {
  try{

    // await Generar(req.body.nombre_documento,req.body)

    res.end(await Generar(req.body.nombre_documento,req.body))
  }catch(error){console.log(error)}
    
  
});


app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })