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

async function  GenerarReporte(datos) {
  try{
  await fs.readFile(path.join(__dirname, 'reporte.xlsx'), async function(err, data) {

    // Create a template
    var template = await new XlsxTemplate(data);

    // Replacements take place on first sheet
    var sheetNumber = 1;

    // Set up some placeholder values matching the placeholders in the template
    
    var values = {
           
            
                jovenes:datos.ciclo_vital.jovenes,
                adultos:datos.ciclo_vital.adultos,
                adultos_mayores:datos.ciclo_vital.adultos_mayores,
                familia:datos.condicion[2][1],
                civil:datos.condicion[0][1],
                penal:datos.condicion[3][1],
                mujeres:datos.grupos[1][1],
                hombres:datos.grupos[0][1],

            
        };
      
    // Perform substitution
    await template.substitute(sheetNumber, values);

    // Get binary data
    var date =  await template.generate({ type: 'nodebuffer',compression: "DEFLATE"});


    await fs.writeFile(path.join(__dirname, '/resultado/resultado.xlsx'), date, function(err) {
        if(err) {
          return console.log(err);
        }
        
    })
}
  )

  return

  }catch(error){
    console.log(error)
  }

}

async function reporte(req,res,datos) {
  try{
  datos=req.body
 
  if(!datos.tipo_reporte ){

 await funcion.GenerarReporte(res,datos)
return
}

  await fs.readFile(path.join(__dirname, datos.tipo_reporte+'.xlsx'), async function respuesta(err, data) {
    if(err) {
      res.sendStatus(400)
      return console.log(err); }
    // Create a template
    var template = new XlsxTemplate(data);

    // Replacements take place on first sheet
    var sheetNumber = 1;
      
    // Set up some placeholder values matching the placeholders in the template
    var values = {
           
            
      jovenes:datos.ciclo_vital.jovenes,
      adultos:datos.ciclo_vital.adultos,
      adultos_mayores:datos.ciclo_vital.adultos_mayores,
      civil:datos.condicion[0][1],
      comercial:datos.condicion[1][1],
      familia:datos.condicion[2][1],
      penal:datos.condicion[3][1],
      hombres:datos.grupos[0][1],
      mujeres:datos.grupos[1][1],
      no_binario:datos.grupos[2][1],
      no_respondo : datos.grupos[3][1]
      

  
};
                
            
      

    // Perform substitution
    template.substitute(sheetNumber, values);

    // Get binary data
    var data = await template.generate({ type: 'nodebuffer',compression: "DEFLATE"});
    
    res.end(data)
    // ...
   
    
 
})
  }catch(err){console.log(err); res.sendStatus(400)}
}
  // Load the docx file as binary content
app.use(express.static("./resultado"));

Generar()

app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })