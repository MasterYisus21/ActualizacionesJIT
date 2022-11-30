const axios = require("axios");
const unirest = require('unirest');
const fs = require('fs');

const views = {};
const error = require("../requests/requests_error.js")
const config = require("../config.json");
const requests = require("../requests/requests_generales.js");
const { query } = require("express");


//listar Seleccionables Principales
views.SeleccionablesPricipales = async (req, res) => {
  try {
    const url = config.urlApiSolicitudes + req.route.path.slice(1)
    requests.get(req, res, url, "?")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

// listar
views.ListarDepartamentos = async (req, res) => {
  try {
    const url = config.urlApiSolicitudes + "departamentos?pais_id=" + req.params.id

    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.ListarCiudades = async (req, res) => {
  try {
    const url = config.urlApiSolicitudes + "ciudades?departamento_id=" + req.params.id2
    requests.get(req, res, url, "&")

  } catch (error) {
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
    req.body = JSON.parse(req.body.datos)
    if (req.files < 2) { res.sendStatus(error({ message: "Solo ha subido un archivo" })); return }

    if (Object.keys(req.body.apoderado).length > 0) {


      if (!(req.body.apoderado[0].identificacion & req.body.apoderado[0].identificacion != "")) { res.sendStatus(error({ message: "El numero de identificacion del apoderado es incorrecto" })); return; }
      req.body.convocante[0].apoderado_id = req.body.apoderado[0].identificacion
      await axios.post(config.urlApiSolicitudes + "apoderados/", req.body.apoderado[0])

        .catch(async err => {

          if (err.response.data.identificacion) {
            await axios.patch(config.urlApiSolicitudes + "apoderados/" + req.body.apoderado[0].identificacion + "/", req.body.apoderado[0])

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

    let datos = []

    datos.push(req.body.convocante[0])
    datos.push(req.body.convocado[0])
    const personas = [config.urlApiSolicitudes + "personas_solicitud/", datos]
    const solicitud = [config.urlApiSolicitudes + "solicitudes/", { estado_solicitud_id: 1 }]

    let endpoints = [personas, solicitud]
    // const hechos=config.urlApiSolicitudes+"hechos/"+","+
    await Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
      .then(axios.spread(async (data1, data2) => {

        req.params.id = data2.data.id
        req.body.hechos[0].solicitud_id = data2.data.id
        const relacion_convocante_solicitud = [config.urlApiSolicitudes + "relaciones_persona_solicitud/", { solicitud_id: data2.data.id, persona_id: data1.data[0].id, tipo_cliente_id: 1 }]
        const relacion_convocado_solicitud = [config.urlApiSolicitudes + "relaciones_persona_solicitud/", { solicitud_id: data2.data.id, persona_id: data1.data[1].id, tipo_cliente_id: 2 }]
        const hechos = [config.urlApiSolicitudes + "hechos/", req.body.hechos[0]]
        const documentos = views.CargarDocumentos(req, res, 1)
        endpoints = [relacion_convocante_solicitud, relacion_convocado_solicitud, hechos]
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

    // const hechos= config.urlApiSolicitudes+"hechos",{solicitud_id:}

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
//crear solicitud
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

views.Listar_Estados_solicitud = async (req, res) => {
  try {
    console.log("entreeeeeeeeeeeeeeeeee")
    datos={}
    if (!req.query.count) { req.query.count = 10 }
    let endpoints = [config.urlApiSolicitudes + "relaciones_persona_solicitud?search=" + req.params.identificacion ,
                    config.urlApiExpedientes + "relaciones_persona_expediente?search=" + req.params.identificacion ]
  
       
    if ((req.url.indexOf('?')) > 0) {
      const query = simbolo + req.url.slice(req.url.indexOf('?') + 1)
      let endpoints = [config.urlApiSolicitudes + "relaciones_persona_solicitud?search=" + req.params.identificacion+query ,
      config.urlApiExpedientes + "relaciones_persona_expediente?search=" + req.params.identificacion+query ]
      
    }
  
    // console.log(config.urlApiExpedientes + "relaciones_persona_expediente?search=" + req.params.identificacion)
    
    // axios.get(config.urlApiExpedientes + "relaciones_persona_expediente?search=" + req.params.identificacion)
    //   .then(result=>{
    //     res.status(200).json(result.data)
    // })
    //   .catch(err => {
    //     res.sendStatus(error(err))
    //   })
    
                    
    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread((data1, data2) => {
      datos.solicitudes=data1.data
      datos.expedientes=data2.data

        res.status(201).json(datos)

      }))
      .catch(err => {

        res.sendStatus(error(err))

      })


   


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.DescargarDocumentos = async (req, res) => {
  try {
    await axios.get(config.urlApiSolicitudes + "documentos/" + req.params.id)
      .then(async resp => {


        // res.status(200).json(resp.data)
        await axios.get(resp.data.documento, { responseType: 'arraybuffer' })//,
          .then(response => {

            //res.status(200).json(response.data)
            //console.log(typeof response.data)

            res.end(response.data);
          })
          .catch(err => {

            res.sendStatus(error(err))
            return

          })
      })
      .catch(err => {

        res.sendStatus(error(err))
        return

      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

views.AprobarSolicitud = async (req, res) => {
  try {
    axios.patch(config.urlApiSolicitudes + "solicitudes/" + req.params.id + "/", req.body)
      .then(async result => {
        res.status(200).json(result.data)
        // console.log(config.urlGatewaySolicitudes+"solicitudes/"+req.params.id)
        if (req.body.estado_solicitud_id == 2) {
          await axios.get(config.urlGatewaySolicitudes + "solicitudes/" + req.params.id)
            .then(async result => {

              await axios.post(config.urlGatewayExpedientes + "expedientes/", result.data)
                .catch(err => {
                  error(err)
                  return
                })
            })
            .catch(err => {
              error(err)
              return
            })
        }

      })
      .catch(err => {
        res.sendStatus(error(err))
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

views.VerSolicitud = async (req, res) => {
  try {
    let datos = {}
    const solicitud = config.urlApiSolicitudes + "solicitudes/" + req.params.id
    const hechos = config.urlApiSolicitudes + "hechos?solicitud_id=" + req.params.id
    const documentos = config.urlApiSolicitudes + "documentos?solicitud_id=" + req.params.id
    const relacion_persona_solicitud = config.urlApiSolicitudes + "relaciones_persona_solicitud?solicitud_id=" + req.params.id

    let endpoints = [
      solicitud, hechos, documentos, relacion_persona_solicitud
    ];

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (data1, data2, data3, data4) => {
        datos.solicitud = data1.data
        datos.hechos = data2.data.results


        for await (const iterator of data4.data.results) {

          if (iterator.tipo_cliente_id == 1) {

            await axios.get(config.urlApiSolicitudes + "personas_solicitud/" + iterator.persona_id)
              .then(async result => {

                datos.convocante = result.data
                if (!(result.data.apoderado_id != null | result.data.apoderado_id != "")) { return }
                await axios.get(config.urlApiSolicitudes + "apoderados/" + result.data.apoderado_id)
                  .then(result => {
                    datos.apoderado = result.data
                  })
                  .catch(err => {
                    error(err)
                  })
                return
              })
              .catch(err => {
                error(err)
                return
              })
          }

          await axios.get(config.urlApiSolicitudes + "personas_solicitud/" + iterator.persona_id)
            .then(result => {

              datos.convocado = result.data
            })
            .catch(err => {
              error(err)
            })
        }
        datos.documentos = data3.data


        res.status(201).json(datos)

      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })



  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.ListarSolicitudes = async (req, res) => {
  try {
    const url = config.urlApiSolicitudes + req.route.path.slice(1)
    requests.get(req, res, url, "?")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
module.exports = views;