const axios = require("axios");
const { json } = require("express/lib/response");

const res = require("express/lib/response");

const config = require("../config.json");
const { Solicitudes } = require("./datos");
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
        let json = {}
        if (Object.keys(result.data).length != 0) {
          
        for await (const iterator of result.data) {
          
          
        //console.log(iterator.Numero_caso)
       // datos[datos.length][0] 
        json.solicitud = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso," ",data,req);
        json.convocantes = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso,"convocantes",data,req);
        json.convocados = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso,"convocados",data,req);
        json.citaciones = await datosPersonas.ExportarDatosTodasLasPersonasReporte(iterator.Numero_caso,"citaciones",data,req) 
     
        //const convocantes = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocantes",data);
        //const convocados = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocados",data);
        
        
        datos.push(json)
         
        }}
        
        res.json(datos)
        
        // await axios.post(config.urlDocumentGeneration + "reportes/",datos,{responseType : 'arraybuffer'})
        // .then(async(result) => {
            
        //     res.end(result.data)
        // })
        // .catch((err) => {
        //     console.log(err)
        //     res.sendStatus(400)
        // });
}
views.GenerarReporte = async (req, res) => {
  let datos = { ciclo_vital: {}, condicion:[], grupos: [] };
  datos.ciclo_vital.jovenes = 0;
  datos.ciclo_vital.adultos = 0;
  datos.ciclo_vital.adultos_mayores = 0;

  let data ={}
  let convocante = []
  console.log("entre")
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
