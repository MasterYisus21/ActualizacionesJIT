const axios = require("axios");



const views = {};
const error = require("../requests/error.js")
const config = require("../config.json");
const requests= require("../requests/requests_generales.js");

//listar Seleccionables Principales
views.SeleccionablesPricipales = async (req, res) => {
  try {
    const url=config.urlApiSolicitudes+req.route.path.slice(1)
    requests.get(req,res,url,"?")
    
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
// listar
views.ListarDepartamentos = async (req, res) => {
  try {
    const url=config.urlApiSolicitudes+"departamentos?pais_id="+req.params.id
    requests.get(req,res,url,"&")
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.ListarCiudades = async (req, res) => {
  try {
    const url=config.urlApiSolicitudes+"ciudades?departamento_id="+req.params.id2
    requests.get(req,res,url,"&")
    
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

// datos crear solicitud
views.DatosCrearSolicitud = async (req, res) => {
  try {
    
    let datos
    let endpoints = [
      config.urlApiSolicitudes + 'tipos_documento',
      config.urlApiSolicitudes + 'tipos_persona',
      config.urlApiSolicitudes + 'paises',
      config.urlApiSolicitudes + 'departamentos?search=colombia',
      config.urlApiSolicitudes + 'generos',
      config.urlApiSolicitudes + 'sexos',

    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread((data1, data2, data3, data4, data5, data6) => {
        datos = {
          "tipos_documento": data1.data.results,
          "tipos_persona": data2.data.results,
          "paises": data3.data.results,
          "departamentos": data4.data.results,
          "generos": data5.data.results,
          "sexos": data6.data.results,


        }
        res.status(201).json(datos)
        then
      }))
      .catch(err => {

        res.sendStatus(error(err))

      })



  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

views.CrearSolicitud = async (req, res) => {
  try {

    if(Object.keys(req.body.apoderado).length>0){req.body.convocante[0].apoderado_id=req.body.apoderado[0].identificacion}
    let datos= []
    req.body.convocante[0].apoderado_id="123456"
    datos.push(req.body.convocante[0])
    datos.push(req.body.convocado[0])
  
    await axios.post(config.urlApiSolicitudes+"personas/",datos)
      .then(result=>{
        
        res.status(200).json(result.data)
    })
      .catch(err => {
        res.sendStatus(error(err))
      })
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
//crear solicitud



module.exports = views;