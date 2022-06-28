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

 
function Generar(solicitud,convocante,convocado,conciliador,estudiante,hechos,citacion,tipo_resultado) {
   // let datos ={}
    const content = fs.readFileSync(
        path.resolve(__dirname, String(tipo_resultado)+".docx"),
        "binary"
    );
    
    const zip = new PizZip(content);
    
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });
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
}
  // Load the docx file as binary content
app.use(express.static("./resultado"));
app.post('/', async (req, res)=> {
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


app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })
 