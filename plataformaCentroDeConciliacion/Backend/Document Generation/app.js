var express = require('express');
var app = express();
const port = 8001
const multer = require("multer");
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// respond with "hello world" when a GET request is made to the homepage
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");

// excel 
var XlsxTemplate = require('xlsx-template');
const { Console } = require('console');

 
function Generar(solicitud,convocante,convocado,conciliador,estudiante,hechos,citacion,tipo_resultado) {
   // let datos ={}
   try{
    if(!fs.existsSync(path.resolve(__dirname, String(tipo_resultado)+".docx"))) {
      console.log("File not found")
      return;
  }
    const content = fs.readFileSync(
        path.resolve(__dirname, String(tipo_resultado)+".docx"),
        "binary"
    );
    
    
    const zip = new PizZip(content);
    
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });
    console.log(convocante)
    let datos = 
    { 
        
        numero_caso:solicitud.Numero_caso,   
        nombre_apellidos_convocante: String(convocante.Nombres+ " " + convocante.Apellidos), 
        nombre_apellidos_convocados:String(convocado.Nombres+ " " + convocado.Apellidos),
        numero_cedula_convocado:convocado.Identificacion,
        numero_cedula_convocante:convocante.Identificacion,
        telefono_convocante:convocante.Telefono,
        email_convocante: convocante.Correo,
        ciudad_convocante:convocante.Ciudad,
        barrio_convocante:convocante.Barrio_Id,
        localidad_convocante:convocante.Localidad,
        ciudad_convocado:convocado.Ciudad,
        barrio_convocado:convocado.Barrio_Id,
        localidad_convocado:convocado.Localidad,
        telefono_convocado:convocado.Telefono,
        email_convocado:convocado.Correo,
        nombre_apellidos_conciliador:String(conciliador.Nombres+ " " + conciliador.Apellidos),
        email_docente_conciliador:conciliador.Correo, 
        numero_identificacion_conciliador:conciliador.Identificacion,
        nombre_apellidos_estudiante:String(estudiante.Nombres+ " " + estudiante.Apellidos),
        fecha_hora_citacion:String(citacion.Fecha_sesion+ " a la hora " + citacion.Turno_Id),
        hechos:hechos.Descripcion_hecho,
        propuesta:hechos.Descripcion_pretension
       
    }
    // if(Object.keys(solicitud).length==0){
    //     datos.numero_caso=solicitud.Numero_caso
    // }else{return datos = {}}
    // if(Object.keys(convocante).length==0){
    //     datos.nombre_apellidos_convocante=String(convocante.Nombres+ " " + convocante.Apellidos)
    //     datos.numero_cedula_convocante=convocante.Identificacion
    //     datos.telefono_convocante=convocante.Telefono
    //     datos.email_convocante= convocante.Correo
    //     datos.ciudad_convocante=convocante.Ciudad
    //     datos.barrio_convocante=convocante.Barrio_Id
    //     datos.localidad_convocante=convocante.Localidad
    
    // }else{return datos = {}}
    //   if(Object.keys(convocado).length==0){
    //     datos.nombre_apellidos_convocados=String(convocado.Nombres+ " " + convocado.Apellidos)
    //     datos.numero_cedula_convocado=convocado.Identificacion
    //     datos.ciudad_convocado=convocado.Ciudad
    //     datos.barrio_convocado=convocado.Barrio_Id
    //     datos.localidad_convocado=convocado.Localidad
    //     datos.telefono_convocado=convocado.Telefono
    //     datos.email_convocado=convocado.Correo 
    // }else{return datos = {}}
    // if(Object.keys(conciliador).length==0){
    //     datos.nombre_apellidos_conciliador=String(conciliador.Nombres+ " " + conciliador.Apellidos)
    //     datos.email_docente_conciliador=conciliador.Correo, 
    //     datos.numero_identificacion_conciliador=conciliador.Identificacion
    // }else{return datos = {}}
    // if(Object.keys(hechos).length==0){
    //     datos.hechos=hechos.Descripcion_hecho
    //     datos.propuesta=hechos.Descripcion_pretension
        
    // }else{return datos = {}}
  
    // if(Object.keys(estudiante).length==0){
    //     datos.nombre_apellidos_estudiante=String(estudiante.Nombres+ " " + estudiante.Apellidos)
    // }else{ datos.nombre_apellidos_estudiante = {}}
    // if(Object.keys(citacion).length==0){
    //     datos.fecha_hora_citacion=String(citacion.Fecha_sesion+ " a la hora " + citacion.Turno_Id)
        
    // }else{return datos.fecha_hora_citacion={}}
   
   
    // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
    
    // contancia de no acuerdo
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
app.post('/api/documentos/v1/validacion', async (req, res)=> {
  //console.log(req.body.tipo_resultado)
  if(!fs.existsSync(path.resolve(__dirname, String(req.body.tipo_resultado)+".docx"))& !fs.existsSync(path.resolve(__dirname, String(req.body.tipo_resultado)+".xlsx"))) {
    // console.log("File not found")
    res.sendStatus(404)
    return
    } else {
      res.sendStatus(200)
    }

})
app.post('/api/documentos/v1/', async (req, res)=> {
  try{
    

   const solicitud=(req.body.solicitud == '') ? "" : req.body.solicitud
   const convocante=(req.body.convocante == '') ? "": req.body.convocante
   const convocado=(req.body.convocado == '')? "" :req.body.convocado
   const conciliador= (req.body.conciliador == '')? "":req.body.conciliador
   const estudiante = (req.body.estudiante == '')? "":req.body.estudiante
   const hechos = (req.body.hechos == '')? "":req.body.hechos
   const citacion  = (req.body.citacion == '')? "":req.body.citacion
   const tipo_resultado =(req.body.tipo_resultado == '')? "":req.body.tipo_resultado
   await Generar(solicitud,convocante,convocado,conciliador,estudiante,hechos,citacion,tipo_resultado)

  
  
   //console.log(req.body.convocante)
   res.json({  url:"http://localhost:8001/resultado.docx" 

  });
  }catch(error){console.log(error)}
    
  
});


app.post('/api/documentos/v1/reportes', async (req, res)=> {
  try{

  reporte(req,res)
    
  }catch(error){console.log(error)}
    
  
});


app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })
 