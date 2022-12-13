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

let nombre_documento = "CITACION AUDIENCIA DE CONCILIACION"

function Generar(nombre_documento) {
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
      "expediente_tipo_servicio": "___",
      "expediente_subtema": "___",
      "expediente_area": "___",
      "expediente_solicitante_servicio": "___",
      "expediente_inicio_conflicto": "___",
      "expediente_estado_expediente": "___",
      "expediente_finalidad_servicio": "___",
      "expediente_estado": true,
      "expediente_identificador_sicaac": "1",
      "expediente_numero_radicado": "RADICO",
      "expediente_numero_caso": "2022-443",
      "expediente_fecha_registro": "2022-12-12",
      "expediente_caso_gratuito": false,
      "expediente_asunto_juridico_definible": false,
      "expediente_fecha_finalizacion": "___",
      "expediente_expediente_pre_cerrado": false,
      "expediente_expediente_cerrado": false,
      "expediente_tipo_servicio_id": "___",
      "expediente_subtema_id": "___",
      "expediente_area_id": "___",
      "expediente_solicitante_servicio_id": "___",
      "expediente_inicio_conflicto_id": "___",
      "expediente_estado_expediente_id": "___",
      "expediente_Finalidad_servicio_id": "___",
      "expediente_fecha_registro_mes": "DICIEMBRE",
      "expediente_fecha_registro_año": 2022,
      "expediente_fecha_registro_dia": 12,
      "convocante_id": 895,
      "convocante_estado_expediente": "___",
      "convocante_fecha_registro": "2022-12-12",
      "convocante_numero_caso": "2022-443",
      "convocante_nombres": "JAIRO URREGO",
      "convocante_identificacion": "120423098",
      "convocante_tipo_documento": "CEDULA CIUDADANIA",
      "convocante_lugar_expedicion": "___",
      "convocante_barrio": "SANTA LIBRADA",
      "convocante_localidad": "USME",
      "convocante_ciudad": "BOGOTA",
      "convocante_direccion": "___",
      "convocante_correo": "JAIRO@UGC.EDU.CO",
      "convocante_celular": "321221837",
      "convocante_tarjeta_profesional": "___",
      "convocante_apoderado_id": "240",
      "convocante_nombre_apoderado": "ROBERTO PRUEBAS",
      "convocante_tipo_cliente": "CONVOCANTE",
      "convocante_numero_radicado": "RADICO",
      "convocante_estado": true,
      "convocante_expediente_id": 452,
      "convocante_persona_id": 916,
      "convocante_tipo_cliente_id": 1,
      "convocado_id": 893,
      "convocado_estado_expediente": "___",
      "convocado_fecha_registro": "2022-12-12",
      "convocado_numero_caso": "2022-443",
      "convocado_nombres": "JAIRO URREGO",
      "convocado_identificacion": "120423098",
      "convocado_tipo_documento": "CEDULA CIUDADANIA",
      "convocado_lugar_expedicion": "___",
      "convocado_barrio": "___",
      "convocado_direccion": "___",
      "convocado_correo": "JAIRO@UGC.EDU.CO",
      "convocado_celular": "32122183723",
      "convocado_tarjeta_profesional": "___",
      "convocado_apoderado_id": "240",
      "convocado_nombre_apoderado": "ROBERTO PRUEBAS",
      "convocado_tipo_cliente": "CONVOCADO",
      "convocado_numero_radicado": "RADICO",
      "convocado_estado": true,
      "convocado_expediente_id": 452,
      "convocado_persona_id": 914,
      "convocado_tipo_cliente_id": 2,
      "conciliador_id": 903,
      "conciliador_estado_expediente": "___",
      "conciliador_fecha_registro": "2022-12-12",
      "conciliador_numero_caso": "2022-443",
      "conciliador_nombres": "CAMILO RIOS",
      "conciliador_identificacion": "2022101",
      "conciliador_tipo_documento": "CEDULA CIUDADANIA",
      "conciliador_lugar_expedicion": "BOGOTA",
      "conciliador_barrio": "___",
      "conciliador_direccion": "___",
      "conciliador_correo": "JAIRO@UGC.EDU.CO",
      "conciliador_celular": "32122183723",
      "conciliador_tarjeta_profesional": "___",
      "conciliador_nombre_apoderado": "___",
      "conciliador_tipo_cliente": "CONCILIADOR",
      "conciliador_numero_radicado": "RADICO",
      "conciliador_estado": true,
      "conciliador_expediente_id": 452,
      "conciliador_persona_id": 896,
      "conciliador_tipo_cliente_id": 3,
      "estudiante1_id": 894,
      "estudiante1_estado_expediente": "___",
      "estudiante1_fecha_registro": "2022-12-12",
      "estudiante1_numero_caso": "2022-443",
      "estudiante1_nombres": "JAIRO URREGO",
      "estudiante1_identificacion": "120423098",
      "estudiante1_tipo_documento": "CEDULA CIUDADANIA",
      "estudiante1_lugar_expedicion": "___",
      "estudiante1_barrio": "___",
      "estudiante1_direccion": "___",
      "estudiante1_correo": "JAIRO@UGC.EDU.CO",
      "estudiante1_celular": "32122183723",
      "estudiante1_tarjeta_profesional": "___",
      "estudiante1_apoderado_id": "240",
      "estudiante1_nombre_apoderado": "ROBERTO PRUEBAS",
      "estudiante1_tipo_cliente": "ESTUDIANTE",
      "estudiante1_numero_radicado": "RADICO",
      "estudiante1_estado": true,
      "estudiante1_expediente_id": 452,
      "estudiante1_persona_id": 915,
      "estudiante1_tipo_cliente_id": 4,
      "estudiante2_id": 894,
      "estudiante2_estado_expediente": "___",
      "estudiante2_fecha_registro": "2022-12-12",
      "estudiante2_numero_caso": "2022-443",
      "estudiante2_nombres": "JAIRO URREGO",
      "estudiante2_identificacion": "120423098",
      "estudiante2_tipo_documento": "CEDULA CIUDADANIA",
      "estudiante2_lugar_expedicion": "___",
      "estudiante2_barrio": "___",
      "estudiante2_direccion": "___",
      "estudiante2_correo": "JAIRO@UGC.EDU.CO",
      "estudiante2_celular": "32122183723",
      "estudiante2_tarjeta_profesional": "___",
      "estudiante2_apoderado_id": "240",
      "estudiante2_nombre_apoderado": "ROBERTO PRUEBAS",
      "estudiante2_tipo_cliente": "ESTUDIANTE",
      "estudiante2_numero_radicado": "RADICO",
      "estudiante2_estado": true,
      "estudiante2_expediente_id": 452,
      "estudiante2_persona_id": 915,
      "estudiante2_tipo_cliente_id": 4,
      "hechos_id": 460,
      "hechos_ciudad": "BOGOTA",
      "hechos_departamento_id": "3",
      "hechos_departamento": "CUNDINAMARCA",
      "hechos_estado": true,
      "hechos_cuantia_indeterminada": false,
      "hechos_flag_interviene_tercero": false,
      "hechos_flag_violencia": false,
      "hechos_cuantia": "___",
      "hechos_descripcion": "DESCRIPCIÓN HECHOS",
      "hechos_Flag_conflicto_por_incapacidad": false,
      "hechos_pretension": "Pretension de los hechos",
      "hechos_expediente_id": 452,
      "hechos_ciudad_id": 3,
      "citacion_id": 5,
      "citacion_turno": "9:00AM-10:00AM",
      "citacion_numero_caso": "2022-443",
      "citacion_medio": "VIRTUAL",
      "citacion_estado": true,
      "citacion_enlace": "___",
      "citacion_descripcion": "",
      "citacion_fecha_sesion": "2022-12-12",
      "citacion_turno_id": 2,
      "citacion_tipo_medio_id": 1,
      "citacion_expediente_id": 452,
      "citacion_mes": "DICIEMBRE",
      "citacion_año": 2022,
      "citacion_dia": 12,
      "resultado_id": 10,
      "resultado_tipo_resultado": "ACTA CONCILIACIÓN TOTAL",
      "resultado_estado": true,
      "resultado_consecutivo": 35245,
      "resultado_acuerdo": "",
      "resultado_documento": "___",
      "resultado_fecha": "2022-12-12",
      "resultado_tipo_resultado_id": 2,
      "resultado_expediente_id": 452,
      "fecha_actual_dia": 12,
      "fecha_actual_mes": "DICIEMBRE",
      "fecha_actual_año": 2022,
      "fecha_actual_hora": "4:21:49 p. m."
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
    
    return buf
  }catch(err){
    
    
      console.log(err)
   
  }
}



  // Load the docx file as binary content
app.use(express.static("./resultado"));

app.post('/api/generador_documentos/v1/validacion', async (req, res)=> {
  //console.log(req.body.tipo_resultado)
  if(!fs.existsSync(path.resolve(__dirname, String(req.body.tipo_resultado)+".docx"))& !fs.existsSync(path.resolve(__dirname, String(req.body.tipo_resultado)+".xlsx"))) {
    // console.log("File not found")
    res.sendStatus(404)
    return
    } else {
      res.sendStatus(200)
    }

})

app.post('/api/generador_documentos/v1/generar', async (req, res)=> {
  try{

    await Generar(req.body.nombre_documento)

    res.send(Generar(req.body.nombre_documento))
  }catch(error){console.log(error)}
    
  
});


app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })