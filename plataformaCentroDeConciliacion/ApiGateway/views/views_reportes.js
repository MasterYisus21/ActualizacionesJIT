const axios = require("axios");
const { json } = require("express/lib/response");

const res = require("express/lib/response");

const config = require("../config.json");
const views = {};

views.GenerarReporte = async (req, res) => {
  let datos = { ciclo_vital: {}, condicion:[], grupos: [] };
  datos.ciclo_vital.jovenes = 0;
  datos.ciclo_vital.adultos = 0;
  datos.ciclo_vital.adultos_mayores = 0;
  try {
    if (!req.body.Fecha_inicio | !req.body.Fecha_fin) {
      res.sendStatus(400);
      return;
    }
    await axios.get( config.urlApiConciliacion +"/tipos_reporte/"+req.params.id)
    .then((result) => {
      datos.tipo_reporte=result.data.Nombre
    }).catch((err) => {
      res.sendStatus(400);
      return
    });
    await axios.get( config.urlApiConciliacion +"/solicitudes?Fecha_inicio=" +req.body.Fecha_inicio +"&Fecha_fin=" +req.body.Fecha_fin)
      .then(async (result) => {
        if (Object.keys(result.data).length == 0) {
          res.sendStatus(204);
          return
        }

        const genero = await axios.get(config.urlApiConciliacion + "/generos");
        for await (const iterator of genero.data) {
        
          datos.grupos[datos.grupos.length] = [iterator.Nombre,0]
         
        }
        const area = await axios.get(config.urlApiConciliacion + "/areas");
        for await (const iterator of area.data) {
         
          datos.condicion[datos.condicion.length] = [iterator.Nombre,0]
         
        }
        
      
        for await (const iterator of result.data) {
        //console.log(iterator.Numero_caso)
        const convocantes = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocantes",datos);
        const convocados = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso,"convocados",datos);
        const area = await datosPersonas.ExportarDatosTodasLasPersonas(iterator.Numero_caso," ",datos);
            

        }
        console.log(datos)
       await axios.post(config.urlDocumentGeneration + "reportes/",datos,{responseType : 'arraybuffer'})
        .then(async(result) => {
            
            res.end(result.data)
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400)
        });
      });
      
  } catch (error) {
    console.log(error);
  }
};

module.exports = views;
