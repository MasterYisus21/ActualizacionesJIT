const axios = require('axios'); 

const res = require('express/lib/response');

const config =require ('../config.json')
const views = {}

views.GenerarReporte=async(req,res)=>{
    let datos={}
    try{
    if(!req.body.Fecha_inicio|!req.body.Fecha_fin){res.sendStatus(400); return }
    axios.get(config.urlApiConciliacion + "/solicitudes?Fecha_inicio="+req.body.Fecha_inicio + "&Fecha_fin="+req.body.Fecha_fin)
    .then(async (result) => {
        req.params.id=105
        datos.tipo_resultado= result.data.Nombre
        datos.convocante = await datosPersonas.ExportarDatosPersona(req, "convocantes")
        datos.convocado = await datosPersonas.ExportarDatosPersona(req, "convocados")
        datos.conciliador = await datosPersonas.ExportarDatosPersona(req, "conciliadores")
        datos.estudiante = await datosPersonas.ExportarDatosPersona(req, "estudiantes")
        datos.hechos= await datosPersonas.ExportarDatos(req,"hechos")
        datos.citacion= await datosPersonas.ExportarDatos(req,"citaciones")
        datos.solicitud =  await datosPersonas.ExportarDatos(req," ")
        //res.json(datos)
        axios.post("http://localhost:8001/reportes",datos)
        .then(async(result) => {
            await axios.get(result.data.url,{ responseType : 'arraybuffer' })
            .then((response) => {
                res.end(response.data)
                
            }).catch((err) => {
            res.sendStatus(404)
              console.log(err)
            });
            

        }).catch((err) => {
            
        });
        

    })
}catch(error){console.log(error)} 
}


module.exports = views
