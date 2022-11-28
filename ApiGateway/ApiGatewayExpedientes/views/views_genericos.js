const axios = require("axios");
const { response } = require("express");

const views = {};

const config = require("../config.json");
const error = require("../requests/requests_error.js")
const requests = require("../requests/requests_generales.js");

views.GenericList = async (req, res) => {
  try {
    axios({
      method: req.method.toLowerCase(),
      url: config.urlExpedientes + req.url.slice(1),
      // headers: req.headers,
      data: req.body
    })
      .then(result => {
        res.status(200).json(result.data)
      })
      .catch(err => {

        res.sendStatus(error(err))
      });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}


views.CrearExpediente = async (req, res) => {
  try {
    req.body = JSON.parse(req.body.datos)

    if (req.body.apoderado) {


      if (!(req.body.apoderado.identificacion & req.body.apoderado.identificacion != "")) { res.sendStatus(error({ message: "El numero de identificacion del apoderado es incorrecto" })); return; }
      req.body.convocante.apoderado_id = req.body.apoderado.identificacion
      axios.post(config.urlExpedientes + "apoderados/", req.body.apoderado)

        .catch(err => {

          if (err.response.data.identificacion) {
            axios.patch(config.urlExpedientes + "apoderados/" + req.body.apoderado.identificacion + "/", req.body.apoderado)

              .catch(err => {
                error(err)
                return
              })
            return
          }
          error(err)
          return
        })


    }

    datos=[]
    datos.push(req.body.convocante)
    datos.push(req.body.convocado)
    const personas = [config.urlExpedientes + "personas/", datos]
    const expediente = [config.urlExpedientes + "expedientes/", req.body.solicitud]
    let endpoints = [personas, expediente]
    
    Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
    .then(axios.spread(async (data1, data2) => {

      req.params.id = data2.data.id
      req.body.hechos[0].expediente_id = data2.data.id
      const relacion_convocante_expediente = [config.urlExpedientes + "relaciones_persona_expediente/", { expediente_id: data2.data.id, persona_id: data1.data[0].id, tipo_cliente_id: 1 }]
      const relacion_convocado_expediente = [config.urlExpedientes + "relaciones_persona_expediente/", { expediente_id: data2.data.id, persona_id: data1.data[1].id, tipo_cliente_id: 2 }]
      const hechos = [config.urlExpedientes + "hechos/", req.body.hechos[0]]
      const documentos = views.CargarDocumentos(req, res)
      endpoints = [relacion_convocante_expediente, relacion_convocado_expediente, hechos]
      await Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
        .then(axios.spread((data3, data4, data5) => {
          res.status(201).json(data2.data)
          // res.status(201).json(data2.data[0])

        }))
        .catch(err => {

          res.sendStatus(error(err))
          return

        })

    }))
    .catch(err => {

      res.sendStatus(error(err))
      return
    })
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CargarDocumentos = async (req, res, intento = 2) => {

  let datos = []

  try {
    // console.log(req.file)
    if (Object.keys(req.files).length < 1) { res.sendStatus(error({ message: "No ha subido ningun archivo" })); return }



    for await (const iterator of req.files) {

      await unirest
        .post(config.urlApiSolicitudes + 'documentos/')


        .field('estado', true)
        .field('nombre', iterator.originalname)
        .field('solicitud_id', req.params.id)


        //.attach('Ruta_directorio', req.file.path) // reads directly from local file
        .attach('documento', fs.createReadStream(iterator.path)) // creates a read stream
        //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
        .then(function (response) {
          try {
            fs.unlinkSync(iterator.path)
          } catch (err) {
            error(err)
          }

          datos.push(response.body)

        })


    }
    if (intento < 2) { return; }
    res.status(201).json(datos)



  } catch (error) {
    console.log(error);

  }
}
views.ListarDepartamentos = async (req, res) => {
  try {
    const url = config.urlExpedientes + "departamentos?pais_id=" + req.params.id
  
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}
views.ListarCiudades = async (req, res) => {
  try {
    const url = config.urlExpedientes + "ciudades?departamento_id=" + req.params.id2
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
module.exports = views;