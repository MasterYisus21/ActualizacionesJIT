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

let nombre_documento = "ACTA DECLARACION UMH SOCIEDAD PATRIMONIAL SU DISOLUCION Y LIQUIDACION"
 
function Generar() {
   // let datos ={}
   try{
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

    let datos = 
    { 
       
    "expediente_id": 452,
    "expediente_tipo_servicio": null,
    "expediente_subtema": null,
    "expediente_area": null,
    "expediente_solicitante_servicio": null,
    "expediente_inicio_conflicto": null,
    "expediente_estado_expediente": null,
    "expediente_finalidad_servicio": null,
    "expediente_estado": true,
    "expediente_identificador_sicaac": "1",
    "expediente_numero_radicado": "radico",
    "expediente_numero_caso": "2022-443",
    "expediente_fecha_registro": "2022-12-12",
    "expediente_caso_gratuito": false,
    "expediente_asunto_juridico_definible": false,
    "expediente_fecha_finalizacion": null,
    "expediente_expediente_pre_cerrado": false,
    "expediente_expediente_cerrado": false,
    "expediente_tipo_servicio_id": null,
    "expediente_subtema_id": null,
    "expediente_area_id": null,
    "expediente_solicitante_servicio_id": null,
    "expediente_inicio_conflicto_id": null,
    "expediente_estado_expediente_id": null,
    "expediente_Finalidad_servicio_id": null,
    "convocante_id": 895,
    "convocante_estado_expediente": null,
    "convocante_fecha_registro": "2022-12-12",
    "convocante_numero_caso": "2022-443",
    "convocante_nombres": "jairo urrego",
    "convocante_identificacion": "120423098",
    "convocante_tipo_documento": "Cedula Ciudadania",
    "convocante_tarjeta_profesional": null,
    "convocante_apoderado_id": "240",
    "convocante_nombre_apoderado": "roberto pruebas",
    "convocante_tipo_cliente": "Convocante",
    "convocante_numero_radicado": "radico",
    "convocante_estado": true,
    "convocante_expediente_id": 452,
    "convocante_persona_id": 916,
    "convocante_tipo_cliente_id": 1,
    "convocado_id": 893,
    "convocado_estado_expediente": null,
    "convocado_fecha_registro": "2022-12-12",
    "convocado_numero_caso": "2022-443",
    "convocado_nombres": "jairo urrego",
    "convocado_identificacion": "120423098",
    "convocado_tipo_documento": "Cedula Ciudadania",
    "convocado_tarjeta_profesional": null,
    "convocado_apoderado_id": "240",
    "convocado_nombre_apoderado": "roberto pruebas",
    "convocado_tipo_cliente": "Convocado",
    "convocado_numero_radicado": "radico",
    "convocado_estado": true,
    "convocado_expediente_id": 452,
    "convocado_persona_id": 914,
    "convocado_tipo_cliente_id": 2,
    "conciliador_id": 903,
    "conciliador_estado_expediente": null,
    "conciliador_fecha_registro": "2022-12-12",
    "conciliador_numero_caso": "2022-443",
    "conciliador_nombres": "camilo rios",
    "conciliador_identificacion": "2022101",
    "conciliador_tipo_documento": "Cedula Ciudadania",
    "conciliador_tarjeta_profesional": null,
    "conciliador_nombre_apoderado": null,
    "conciliador_tipo_cliente": "Conciliador",
    "conciliador_numero_radicado": "radico",
    "conciliador_estado": true,
    "conciliador_expediente_id": 452,
    "conciliador_persona_id": 896,
    "conciliador_tipo_cliente_id": 3,
    "estudiante_id": 894,
    "estudiante_estado_expediente": null,
    "estudiante_fecha_registro": "2022-12-12",
    "estudiante_numero_caso": "2022-443",
    "estudiante_nombres": "jairo urrego",
    "estudiante_identificacion": "120423098",
    "estudiante_tipo_documento": "Cedula Ciudadania",
    "estudiante_tarjeta_profesional": null,
    "estudiante_apoderado_id": "240",
    "estudiante_nombre_apoderado": "roberto pruebas",
    "estudiante_tipo_cliente": "Estudiante",
    "estudiante_numero_radicado": "radico",
    "estudiante_estado": true,
    "estudiante_expediente_id": 452,
    "estudiante_persona_id": 915,
    "estudiante_tipo_cliente_id": 4,
    "hechos_id": 460,
    "hechos_ciudad": "Bogota",
    "hechos_departamento_id": "3",
    "hechos_departamento": "Cundinamarca",
    "hechos_estado": true,
    "hechos_cuantia_indeterminada": false,
    "hechos_flag_interviene_tercero": false,
    "hechos_flag_violencia": false,
    "hechos_cuantia": null,
    "hechos_descripcion": "Descripción hechos",
    "hechos_Flag_conflicto_por_incapacidad": false,
    "hechos_pretension": "",
    "hechos_expediente_id": 452,
    "hechos_ciudad_id": 3,
    "citacion_id": 5,
    "citacion_turno": "9:00AM-10:00AM",
    "citacion_numero_caso": "2022-443",
    "citacion_medio": "Virtual",
    "citacion_estado": true,
    "citacion_enlace": null,
    "citacion_descripcion": "",
    "citacion_fecha_sesion": "2022-12-12",
    "citacion_turno_id": 2,
    "citacion_tipo_medio_id": 1,
    "citacion_expediente_id": 452,
    "resultado_id": 10,
    "resultado_tipo_resultado": "Acta Conciliación Total",
    "resultado_estado": true,
    "resultado_consecutivo": 35245,
    "resultado_acuerdo": "",
    "resultado_documento": null,
    "resultado_fecha": "2022-12-12",
    "resultado_tipo_resultado_id": 2,
    "resultado_expediente_id": 452

       
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