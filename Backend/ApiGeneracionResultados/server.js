var express = require('express');
var app = express();
const port = 8004
const multer = require("multer");
const funcion= require("./Reporteconsolidado.js")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// respond with "hello world" when a GET request is made to the homepage
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");

// excel 
var XlsxTemplate = require('xlsx-template');


 
function Generar() {
   // let datos ={}
   try{
    if(!fs.existsSync(path.resolve(__dirname, "nombre.docx"))) {
      console.log("File not found")
      return;
  }
    const content = fs.readFileSync(
        path.resolve(__dirname, "nombre.docx"),
        "binary"
    );
    
    
    const zip = new PizZip(content);
    
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    let datos = 
    { 
        nombre:"jairo"
       
    }
  
    doc.render(datos);
    

    
    const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
    });
    
    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.
    fs.writeFileSync(path.resolve(__dirname, "resultado/resultado.docx"), buf);
    return datos
  }catch(err){
    
    
      console.log(err)
   
  }
}



  // Load the docx file as binary content
app.use(express.static("./resultado"));

Generar()

app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })