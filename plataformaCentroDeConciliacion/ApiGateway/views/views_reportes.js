const axios = require("axios");
const { json } = require("express/lib/response");

const res = require("express/lib/response");

const config = require("../config.json");
const { Solicitudes } = require("./datos");
const { BuscarConciliador } = require("./views_conciliador");
const views = {};
views.ListarReportes = async (req, res) => {
  try{
  axios.get(config.urlApiConciliacion + "/tipos_reporte")
  .then((result) => {
    res.status(200).json(result.data)
  }).catch((err) => {
    console.log(err)
    res.sendStatus(404)
  });
}catch(error){
  console.log(error)
}
}

const reporte1 = async(res,datos,result)=>{
  const genero = await axios.get(config.urlApiConciliacion + "/generos");
        for await (const iterator of genero.data) {
        
          datos.grupos[datos.grupos.length] = [iterator.Nombre,0]
         
        }
        const area = await axios.get(config.urlApiConciliacion + "/areas");
        for await (const iterator of area.data) {
         
          datos.condicion[datos.condicion.length] = [iterator.Nombre,0]
         
        }
        
        if (Object.keys(result.data).length != 0) {
       
          
          
        
        for await (const iterator of result.data) {
        //console.log(iterator.Numero_caso)
        const convocantes = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocantes",datos);
        const convocados = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocados",datos);
        const area = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso," ",datos);
            

        }}
        await axios.post(config.urlDocumentGeneration + "reportes/",datos,{responseType : 'arraybuffer'})
        .then(async(result) => {
            
            res.end(result.data)
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400)
        });
}
const reporte2 = async(res,req,data,result,convocante,convocado)=>{  // result on las solicitudes de ese rango    
        let datos=[]
        let json = []
       
        if (Object.keys(result.data).length != 0) {
          console.log(result.data)
        
        
       

        let preguntas = await axios.get(config.urlApiConciliacion+"/preguntas")
        if (Object.keys(preguntas.data).length>0){datos.push(preguntas.data)}

        let medio= await axios.get(config.urlApiConciliacion+"/medios_conocimiento")
        if (Object.keys(medio.data).length>0){datos.push(medio.data)}

        for await (const iterator of result.data) {

        
         
          
          
        //console.log(iterator.Numero_caso)
       // datos[datos.length][0] 
        let solicitud = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso," ",data,req);
        let convocantes = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso,"convocantes",data,req);
        let convocados = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso,"convocados",data,req);
        let citaciones = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso,"citaciones",data,req); 

        
        if (Object.keys(convocantes).length>=1){
       
        
          solicitud.Convocante_nombre=convocantes[0].Nombres + " " +convocantes[0].Apellidos;
          solicitud.Convocante_identificacion=convocantes[0].Identificacion;
          solicitud.Convocante_genero=convocantes[0].Genero_Id;
          solicitud.Convocante_localidad=convocantes[0].localidad_persona;
          solicitud.Convocante_estrato=convocantes[0].Estrato_socioeconomico_Id;
          solicitud.Convocante_poblacion=convocantes[0].poblacion;

          if(typeof(convocantes[0].conocimiento)!='undefined'){
          solicitud["Medio_conocimiento_"+convocantes[0].conocimiento]='X'}

       if (typeof(convocantes[0].respuestas) != 'undefined') {
        
        for (const iterator of convocantes[0].respuestas) {
          solicitud["Pregunta_Id_"+iterator.Pregunta_Id]=iterator.Calificacion
        }
        
     
      }
     


       

      }
      if (Object.keys(convocados).length>=1){

        solicitud.Convocado_nombre=convocados[0].Nombres + " " +convocados[0].Apellidos;
        solicitud.Convocado_identificacion=convocados[0].Identificacion;
        solicitud.Convocado_genero=convocados[0].Genero_Id;
        solicitud.Convocado_localidad=convocados[0].localidad_persona;
        solicitud.Convocado_estrato=convocados[0].Estrato_socioeconomico_Id;
        solicitud.Convocado_poblacion=convocados[0].poblacion;


       

      }


       solicitud.Fecha_citacion=citaciones.Fecha_sesion
       solicitud.Modalidad=citaciones.Tipo_medio_Id
      //   //const convocantes = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocantes",data);
      //   //const convocados = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocados",data);
      //   // solicitud = solicitud.concat(datos_convocados);
      //   json = json.concat(solicitud);
        
        // json = json.concat(convocados);
        // json = json.concat(citaciones);
        
        json.push(solicitud)
        
        
        
         
        }}
        

        datos.push(json)
  
        
        
        await axios.post(config.urlDocumentGeneration + "reportes/",datos,{responseType : 'arraybuffer'})
        .then(async(result) => {
            
            res.end(result.data)
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400)
        });
}
views.GenerarReporte = async (req, res) => {
  let datos = { ciclo_vital: {}, condicion:[], grupos: [] };
  datos.ciclo_vital.jovenes = 0;
  datos.ciclo_vital.adultos = 0;
  datos.ciclo_vital.adultos_mayores = 0;

  let data ={}
  let convocante = []

  try {
    if (!req.body.Fecha_inicio | !req.body.Fecha_fin) {
      res.sendStatus(400);
      return;
    }
    await axios.get( config.urlApiConciliacion +"/tipos_reporte/"+req.params.id)
    .then(async(result) => {
      datos.tipo_reporte=result.data.Nombre
      
    }).catch((err) => {
      res.sendStatus(400);
      return
    });

    // await axios.post(config.urlDocumentGeneration + "validacion/",{tipo_resultado:datos.tipo_reporte})
    // .then(async resu=>{
      await axios.get( config.urlApiConciliacion +"/solicitudes?Fecha_inicio=" +req.body.Fecha_inicio +"&Fecha_fin=" +req.body.Fecha_fin)
      .then(async (result) => {
       console.log(req.params.id)
        if (req.params.id==1){await reporte1(res,datos,result)} else {
          await reporte2(res,req,data,result)
        }       
       
      });

      
    // })
    // .catch(error=>{
    //   console.log("ARCHIVO NO ENCONTRADO")
    //   res.sendStatus(404)
    //   return
    // })
   
      
  } catch (error) {
    console.log(error);
  }
};

module.exports = views;
