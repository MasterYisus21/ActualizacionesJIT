
const axios = require("axios");
const { response } = require("express");
const views = {};
const config = require("../config.json");
const error = require("../requests/requests_error.js")
const requests = require("../requests/requests_generales.js");
const email = require("./email.js");
const multer = require("multer");
const fs = require('fs');
const unirest = require('unirest');
const FormData = require('form-data');
const path = require("path");
const xlsx = require('xlsx');
const ExcelJS = require('exceljs');


// datos generales
//convocantes
//convocados
//conciliadores
//estudiantes
//hechos
//documentos
// liquidacion
//citacion
//resultados
//encuenstas
//seguimientos
//informes

views.CrearPersonas = async (req, res) => {
  try {
    if (req.body.nombres == "" | req.body.nombres == null) { res.sendStatus(error({ message: "No ha ingresado el nombre de la persona" })); return }
    if (req.body.identificacion == "" | req.body.identificacion == null) { res.sendStatus(error({ message: "No ha ingresado la identificacion" })); return }
    if (req.body.celular == "" | req.body.celular == null) { res.sendStatus(error({ message: "No ha ingresado el telefono celular" })); return }
    if (req.body.correo == "" | req.body.correo == null) { res.sendStatus(error({ message: "No ha ingresado el correo electronico" })); return }
    if (req.body.tipo_cargo_id == "" | req.body.grupo_id == null) { res.sendStatus(error({ message: "No ha ingresado los permisos del usuario" })); return }
    if (req.body.grupo_id == null) { res.sendStatus(error({ message: "La tarjeta profesional no puede ser null" })); return }
    if (req.body.tarjeta_profesional == null) { res.sendStatus(error({ message: "La tarjeta profesional no puede ser null" })); return }

    let datos = { username: req.body.identificacion, password: config.clave_usuarios_nuevos, is_staff: false, is_active: true, groups: [req.body.grupo_id] }

    await axios.post(config.urlApiExpedientes + "usuarios/", datos)
      .then(async result => {

        req.body.usuario_id = result.data.id
        await axios.post(config.urlApiExpedientes + "personas/", req.body)
          .then(async resul => {
            res.status(201).json(resul.data)
          })
          .catch(err => {
            res.sendStatus(error(err))
          })

      })
      .catch(err => {

        res.sendStatus(error(err))
      })


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CrearApoderado = async (req, res) => {
  try {
    if (req.body.nombres == "" | req.body.nombres == null) { res.sendStatus(error({ message: "No ha ingresado el nombre de la persona" })); return }
    if (req.body.identificacion == "" | req.body.identificacion == null) { res.sendStatus(error({ message: "No ha ingresado la identificacion" })); return }
    if (req.body.celular == "" | req.body.celular == null) { res.sendStatus(error({ message: "No ha ingresado el telefono celular" })); return }
    if (req.body.correo == "" | req.body.correo == null) { res.sendStatus(error({ message: "No ha ingresado el correo electronico" })); return }
    if (req.body.tarjeta_profesional == "" | req.body.tarjeta_profesional == null) { res.sendStatus(error({ message: "No ha ingresado la tarjeta profesional" })); return }

    axios.post(config.urlApiExpedientes + "apoderados/", req.body)
      .then(async resul => {


        await axios.patch(config.urlApiExpedientes + "personas/" + req.params.id + "/", { apoderado_id: resul.data.id })
          .then(result => {
            res.status(201).json(resul.data)
          })
          .catch(err => {
            res.sendStatus(error(err))
          })

      })
      .catch(err => {
        res.sendStatus(error(err))
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.EliminarPersonas = async (req, res) => {
  try {

    axios.delete(config.urlApiExpedientes + "personas/" + req.params.id + "/")
      .then(async result => {

        await axios.get(config.urlApiExpedientes + "usuarios?username=" + req.body.identificacion)
          .then(async result => {

            await axios.patch(config.urlApiExpedientes + "usuarios/" + result.data.results[0].id + "/", { is_active: false })
              .then(result => {
                res.status(200).json(result.data)
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

      })
      .catch(err => {
        res.sendStatus(error(err))
        return
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.EliminarApoderados = async (req, res) => {
  try {

    const url = config.urlApiExpedientes + "apoderados/" + req.params.id + "/"
    requests.delete(req, res, url)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.EliminarDocumentos = async (req, res) => {
  try {

    const url = config.urlDocumentos + "documentos/" + req.params.id + "/"
    requests.delete(req, res, url)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.GenericList = async (req, res) => {
  try {
    // console.log(config.urlApiExpedientes + req.url.slice(1))
    axios({
      method: req.method.toLowerCase(),
      url: config.urlApiExpedientes + req.url.slice(1),
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


    if (req.body.apoderado) {


      if (!(req.body.apoderado.identificacion & req.body.apoderado.identificacion != "")) { res.sendStatus(error({ message: "El numero de identificacion del apoderado es incorrecto" })); return; }

      await axios.post(config.urlApiExpedientes + "apoderados/", req.body.apoderado)
        .then((result) => {
          req.body.convocante.apoderado_id = result.data.id

        })
        .catch(err => {


          error(err)
          return
        })


    }

    datos = []

    datos.push(req.body.convocante)
    datos.push(req.body.convocado)

    // req.body.solicitud.identificador_sicaac=""
    req.body.solicitud.estado_expediente_id = 1
    const personas = [config.urlApiExpedientes + "personas/", datos]
    const expediente = [config.urlApiExpedientes + "expedientes/", req.body.solicitud]
    let endpoints = [personas, expediente]

    await Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
      .then(axios.spread(async (data1, data2) => {

        req.body.hechos[0].expediente_id = data2.data.id
        const relacion_convocante_expediente = [config.urlApiExpedientes + "relaciones_persona_expediente/", { expediente_id: data2.data.id, persona_id: data1.data[0].id, tipo_cliente_id: 1 }]
        const relacion_convocado_expediente = [config.urlApiExpedientes + "relaciones_persona_expediente/", { expediente_id: data2.data.id, persona_id: data1.data[1].id, tipo_cliente_id: 2 }]
        const relacion_conciliador_expediente = [config.urlApiExpedientes + "relaciones_persona_expediente/", { expediente_id: data2.data.id, persona_id: req.body.conciliador, tipo_cliente_id: 3 }]
        const hechos = [config.urlApiExpedientes + "hechos/", req.body.hechos[0]]

        // const documentos = views.CargarDocumentos(req, res)
        endpoints = [relacion_convocante_expediente, relacion_convocado_expediente, relacion_conciliador_expediente, hechos]
        await Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
          .then(axios.spread(async (data3, data4, data5) => {


            // res.status(201).json(data2.data)

            const saludo = `<br>Reciba un cordial saludo ${data5.data.nombres}`
            const encabezado = `Este mensaje notifica que se te ha asignado un  nuevo caso de conciliación con la siguiente información:`
            const cuerpo = `
            <br><b>Expediente:</b> ${data5.data.numero_caso}
            <br><b>Fecha de Registro:</b> ${data5.data.fecha_registro}
            <br><b>Estado del Expediente:</b> ${data5.data.estado_expediente} 
            <br><b>Conciliador:</b> ${data5.data.nombres} 
            <br><br>Podrá revisar toda la información del caso en el  sistema de información manejado por el centro de conciliación.<br>`
            let asunto = `Asignación Caso de Conciliación`
            const correo = axios.post(config.urlEmail, email.enviar("html", saludo, [data5.data.correo], asunto, encabezado, cuerpo)).catch(err => { res.status(error(err)) })

            //get res.status(201).json(data2.data[0])
            req.params.id = data2.data.id

            for await (const iterator of req.body.documentos.results) {
              await axios.get(iterator.documento, { responseType: 'arraybuffer' })
                .then(async result => {

                  await fs.writeFile("./public/" + iterator.nombre, result.data, (err) => {
                    if (err)
                      console.log(err);
                    else {
                      console.log("Archivos escritos en apigateway corrrectamente");


                    }
                  })

                  let bodyFormData = new FormData();
                  const file = fs.createReadStream("./public/" + iterator.nombre)
                  bodyFormData.append('files', file);



                  await axios({
                    method: "post",
                    url: config.urlGatewayExpedientes + "documentos/" + req.params.id + "/",
                    data: bodyFormData,
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                    .then((result) => {
                      try {
                        fs.unlinkSync("./public/" + iterator.nombre)
                      } catch (err) {
                        error(err)
                        return
                      }
                    }).catch((err) => {
                      error(err)
                      return
                    });


                })
                .catch(err => {
                  error(err)
                  return
                })
            }

            res.status(200).json(data2.data)
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
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.DatosCrearPersonasAdministrativas = async (req, res) => {
  try {

    let endpoints = [
      config.urlApiExpedientes + "grupos",
      config.urlApiExpedientes + "tipos_cargo"
    ]

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (data1, data2) => {
        let datos = {}
        datos.grupos = data1.data.results
        datos.tipos_cargo = data2.data.results
        res.status(200).json(datos)
      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.DatosCrearPersonas = async (req, res) => {
  try {

    let endpoints = [
      config.urlApiExpedientes + "paises",
      config.urlApiExpedientes + "estados_civiles",
      config.urlApiExpedientes + "estratos_socioeconomicos",
      config.urlApiExpedientes + "grupos_etnicos",
      config.urlApiExpedientes + "tipos_persona",
      config.urlApiExpedientes + "sexos",
      config.urlApiExpedientes + "tipos_discapacidad",
      config.urlApiExpedientes + "generos",
      config.urlApiExpedientes + "tipos_vivienda",
      config.urlApiExpedientes + "tipos_documento",
      config.urlApiExpedientes + "escolaridades",


    ]

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11) => {
        let datos = {}
        datos.paises = data1.data.results
        datos.estados_civiles = data2.data.results
        datos.estratos_socioeconomicos = data3.data.results
        datos.grupos_etnicos = data4.data.results
        datos.tipos_persona = data5.data.results
        datos.sexos = data6.data.results
        datos.tipos_discapacidad = data7.data.results
        datos.generos = data8.data.results
        datos.tipos_vivienda = data9.data.results
        datos.tipos_documento = data10.data.results
        datos.escolaridades = data11.data.results


        res.status(200).json(datos)
      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.ListarDepartamentos = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "departamentos?pais_id=" + req.params.id

    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}
views.VerPersonas = async (req, res) => {
  try {
    await axios.get(config.urlApiExpedientes + "personas/" + req.params.id)
      .then(async result => {
        if (result.data.usuario_id) {
          await axios.get(config.urlApiExpedientes + "usuarios/" + result.data.usuario_id)
            .then(resul => {

              result.data.grupo_id = resul.data.groups[0]

            })
            .catch(err => {
              res.status(error(err))
            })
        }
        res.status(200).json(result.data)
      })
      .catch(err => {
        res.sendStatus(error(err))
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.ListarExpedientes = async (req, res) => {
  try {
    if (req.grupo == 1) {
      const url = config.urlApiExpedientes + "expedientes"

      requests.get(req, res, url, "?")
    } else {
      const url = config.urlApiExpedientes + "relaciones_persona_expediente?persona_id__identificacion=" + req.identificacion

      requests.get(req, res, url, "&")
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}

views.ListarSubtemas = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "subtemas?tema_id=" + req.params.id

    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}
views.ListarCiudades = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "ciudades?departamento_id=" + req.params.id2
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.ListarLocalidades = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "localidades?ciudad_id=" + req.params.id3
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.ListarBarrios = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "barrios?localidad_id=" + req.params.id4
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.ListarConciliadores = async (req, res) => {
  try {

    const url = config.urlApiExpedientes + "personas?tipo_cargo_id=2"
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.ListarEstudiantes = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "personas?search=estudiante"
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.ListarConvocantesCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "relaciones_persona_expediente?tipo_cliente_id=1&expediente_id=" + req.params.id
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.ListarPreguntasEncuesta = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "preguntas_encuesta=" + req.params.id

    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.VerApoderado = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "apoderados/" + req.params.id
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}


views.ListarConvocadosCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "relaciones_persona_expediente?tipo_cliente_id=2&expediente_id=" + req.params.id
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.ListarEstudiantesCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "relaciones_persona_expediente?search=estudiante&expediente_id=" + req.params.id
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.ListarConciliadoresCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "relaciones_persona_expediente?search=conciliador&expediente_id=" + req.params.id
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.ListarHechosCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "hechos?expediente_id=" + req.params.id
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.ListarDocumentosCaso = async (req, res) => {
  try {
    await axios.get(config.urlApiExpedientes + "expedientes/" + req.params.id)
      .then(async result => {
        const url = config.urlDocumentos + "documentos?expediente=" + result.data.numero_caso
        requests.get(req, res, url, "&")
      })
      .catch(err => {
        res.sendStatus(error(err))
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.DescargarDocumentos = async (req, res) => {
  try {
    await axios.get(config.urlDocumentos + "documentos/" + req.params.id)
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
views.DescargarResultados = async (req, res) => {
  try {
    await axios.get(config.urlApiExpedientes + "resultados/" + req.params.id)
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
const informacionCitacion = async (req) => {

  let datos = {}
  endpoints = [
    config.urlGatewayExpedientes + "expedientes/" + req.params.id,
    config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/convocantes",
    config.urlApiExpedientes + "relaciones_persona_citacion/" + req.params.id_relacion,
    config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/conciliadores",
    config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/estudiantes",
    config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/hechos",
    config.urlApiExpedientes + "citaciones/" + req.params.id_citacion,


  ]

  // console.log(endpoints)

  await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(axios.spread(async (expediente, convocante, convocado, conciliador, estudiante, hechos, citacion, resultado) => {

      if (Object.keys(expediente.data).length < 0) { datos.expediente = [] } else {
        for (const iterator in expediente.data) {
          if (typeof (expediente['data'][iterator]) == 'string') { expediente['data'][iterator] = expediente['data'][iterator].toUpperCase() }
          if (expediente['data'][iterator] == null) { expediente['data'][iterator] = "___" }
          datos["expediente_" + iterator] = expediente['data'][iterator]


        }
        const fecha_expediente = new Date(expediente['data'].fecha_registro)
        datos.expediente_fecha_registro_mes = fecha_expediente.toLocaleString('default', { month: 'long' }).toUpperCase()
        datos.expediente_fecha_registro_año = fecha_expediente.getFullYear()
        datos.expediente_fecha_registro_dia = fecha_expediente.getUTCDate()
      }
      if (Object.keys(convocante.data.results).length < 0) { datos.convocante = [] } else {
        for (const iterator in convocante.data.results[0]) {
          if (typeof (convocante.data.results[0][iterator]) == 'string') { convocante.data.results[0][iterator] = convocante.data.results[0][iterator].toUpperCase() }
          if (convocante.data.results[0][iterator] == null) { convocante.data.results[0][iterator] = "___" }
          datos["convocante_" + iterator] = convocante.data.results[0][iterator]
        }
      }
      if (Object.keys(convocado.data).length < 0) { datos.convocado = [] } else {
        for (const iterator in convocado.data) {
          if (typeof (convocado.data[iterator]) == 'string') { convocado.data[iterator] = convocado.data[iterator].toUpperCase() }
          if (convocado.data[iterator] == null) { convocado.data[iterator] = "___" }
          datos["citado_" + iterator] = convocado.data[iterator]
        }
      }
      if (Object.keys(conciliador.data.results).length < 0) { datos.conciliador = [] } else {
        for (const iterator in conciliador.data.results[0]) {
          if (typeof (conciliador.data.results[0][iterator]) == 'string') { conciliador.data.results[0][iterator] = conciliador.data.results[0][iterator].toUpperCase() }
          if (conciliador.data.results[0][iterator] == null) { conciliador.data.results[0][iterator] = "___" }
          datos["conciliador_" + iterator] = conciliador.data.results[0][iterator]
        }
      }
      if (Object.keys(estudiante.data.results).length < 0) { datos.estudiante = [] } else {
        let contador = 1
        let i=0
        for (const iterator of estudiante.data.results) {
        
          for (const item in iterator) {
            
            if (typeof (estudiante.data.results[i][item]) == 'string') { estudiante.data.results[i][item] = estudiante.data.results[i][item].toUpperCase() }
            if (estudiante.data.results[i][item] == null) { estudiante.data.results[i][item] = "___" }
            datos["estudiante" + contador + "_" + item] = estudiante.data.results[i][item]
          }
          i++
          contador++
        }
      }
      if (Object.keys(hechos.data.results).length < 0) { datos.hechos = [] } else {
        for (const iterator in hechos.data.results[0]) {
          if (typeof (hechos.data.results[0][iterator]) == 'string') { hechos.data.results[0][iterator] = hechos.data.results[0][iterator].toUpperCase() }
          if (hechos.data.results[0][iterator] == null) { hechos.data.results[0][iterator] = "___" }
          datos["hechos_" + iterator] = hechos.data.results[0][iterator]
        }
      }
      if (Object.keys(citacion.data).length < 0) { datos.citacion = [] } else {
        for (const iterator in citacion.data) {
          if (typeof (citacion.data[iterator]) == 'string') { citacion.data[iterator] = citacion.data[iterator].toUpperCase() }
          if (citacion.data[iterator] == null) { citacion.data[iterator] = "___" }
          datos["citacion_" + iterator] = citacion.data[iterator]
        }
        const fecha = new Date(citacion.data.fecha_sesion)
        datos.citacion_mes = fecha.toLocaleString('default', { month: 'long' }).toUpperCase()
        datos.citacion_año = fecha.getFullYear()
        datos.citacion_dia = fecha.getUTCDate()
      }


      // datos["convocante"+convocante.data.results[0].nombres]="nombre"

    }))
  const hoy = new Date()
  datos.fecha_actual_dia = hoy.getUTCDate()
  datos.fecha_actual_mes = hoy.toLocaleString('default', { month: 'long' }).toUpperCase()
  datos.fecha_actual_año = hoy.getFullYear()
  datos.fecha_actual_hora = hoy.toLocaleTimeString()



  return datos;

}
const informacionCaso = async (req) => {

  let datos = {}
  endpoints = [config.urlApiExpedientes + "expedientes/" + req.params.id,
  config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/convocantes",
  config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/convocados",
  config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/conciliadores",
  config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/estudiantes",
  config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/hechos",
  config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/citaciones",
  config.urlGatewayExpedientes + "expedientes/" + req.params.id + "/resultados",
    // config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/seguimientos",
    // config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/encuestas",

  ]
  // console.log(endpoints)

  await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(axios.spread(async (expediente, convocante, convocado, conciliador, estudiante, hechos, citacion, resultado) => {

      if (Object.keys(expediente.data).length < 0) { datos.expediente = [] } else {
        for (const iterator in expediente.data) {
          if (typeof (expediente['data'][iterator]) == 'string') { expediente['data'][iterator] = expediente['data'][iterator].toUpperCase() }
          if (expediente['data'][iterator] == null) { expediente['data'][iterator] = "___" }
          datos["expediente_" + iterator] = expediente['data'][iterator]


        }
        const fecha_expediente = new Date(expediente['data'].fecha_registro)
        datos.expediente_fecha_registro_mes = fecha_expediente.toLocaleString('default', { month: 'long' }).toUpperCase()
        datos.expediente_fecha_registro_año = fecha_expediente.getFullYear()
        datos.expediente_fecha_registro_dia = fecha_expediente.getUTCDate()
      }
      if (Object.keys(convocante.data.results).length < 0) { datos.convocante = [] } else {
        for (const iterator in convocante.data.results[0]) {
          if (typeof (convocante.data.results[0][iterator]) == 'string') { convocante.data.results[0][iterator] = convocante.data.results[0][iterator].toUpperCase() }
          if (convocante.data.results[0][iterator] == null) { convocante.data.results[0][iterator] = "___" }
          datos["convocante_" + iterator] = convocante.data.results[0][iterator]
        }
      }
      if (Object.keys(convocado.data.results).length < 0) { datos.convocado = [] } else {
        for (const iterator in convocado.data.results[0]) {
          if (typeof (convocado.data.results[0][iterator]) == 'string') { convocado.data.results[0][iterator] = convocado.data.results[0][iterator].toUpperCase() }
          if (convocado.data.results[0][iterator] == null) { convocado.data.results[0][iterator] = "___" }
          datos["convocado_" + iterator] = convocado.data.results[0][iterator]
        }
      }
      if (Object.keys(conciliador.data.results).length < 0) { datos.conciliador = [] } else {
        for (const iterator in conciliador.data.results[0]) {
          if (typeof (conciliador.data.results[0][iterator]) == 'string') { conciliador.data.results[0][iterator] = conciliador.data.results[0][iterator].toUpperCase() }
          if (conciliador.data.results[0][iterator] == null) { conciliador.data.results[0][iterator] = "___" }
          datos["conciliador_" + iterator] = conciliador.data.results[0][iterator]
        }
      }
      if (Object.keys(estudiante.data.results).length < 0) { datos.estudiante = [] } else {
        let contador = 1
        for (const iterator of estudiante.data.results) {

          for (const item in iterator) {
            if (typeof (estudiante.data.results[0][item]) == 'string') { estudiante.data.results[0][item] = estudiante.data.results[0][item].toUpperCase() }
            if (estudiante.data.results[0][item] == null) { estudiante.data.results[0][item] = "___" }
            datos["estudiante" + contador + "_" + item] = estudiante.data.results[0][item]
          }
          contador++
        }
      }
      if (Object.keys(hechos.data.results).length < 0) { datos.hechos = [] } else {
        for (const iterator in hechos.data.results[0]) {
          if (typeof (hechos.data.results[0][iterator]) == 'string') { hechos.data.results[0][iterator] = hechos.data.results[0][iterator].toUpperCase() }
          if (hechos.data.results[0][iterator] == null) { hechos.data.results[0][iterator] = "___" }
          datos["hechos_" + iterator] = hechos.data.results[0][iterator]
        }
      }
      if (Object.keys(citacion.data.results).length < 0) { datos.citacion = [] } else {
        for (const iterator in citacion.data.results[0]) {
          if (typeof (citacion.data.results[0][iterator]) == 'string') { citacion.data.results[0][iterator] = citacion.data.results[0][iterator].toUpperCase() }
          if (citacion.data.results[0][iterator] == null) { citacion.data.results[0][iterator] = "___" }
          datos["citacion_" + iterator] = citacion.data.results[0][iterator]
        }
        const fecha = new Date(citacion.data.results[0].fecha_sesion)
        datos.citacion_mes = fecha.toLocaleString('default', { month: 'long' }).toUpperCase()
        datos.citacion_año = fecha.getFullYear()
        datos.citacion_dia = fecha.getUTCDate()
      }
      if (Object.keys(resultado.data).length < 0) { datos.resultado = [] } else {
        for (const iterator in resultado.data) {
          if (typeof (resultado.data[iterator]) == 'string') { resultado.data[iterator] = resultado.data[iterator].toUpperCase() }
          if (resultado.data[iterator] == null) { resultado.data[iterator] = "___" }
          datos["resultado_" + iterator] = resultado.data[iterator]
        }
      }


      // datos["convocante"+convocante.data.results[0].nombres]="nombre"

    }))
  const hoy = new Date()
  datos.fecha_actual_dia = hoy.getUTCDate()
  datos.fecha_actual_mes = hoy.toLocaleString('default', { month: 'long' }).toUpperCase()
  datos.fecha_actual_año = hoy.getFullYear()
  datos.fecha_actual_hora = hoy.toLocaleTimeString()



  return datos;

}

views.DescargarFormatoResultado = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes + "resultados/" + req.params.id_resultado)
      .then(async result => {
        if (Object.keys(result.data).length < 1) { res.sendStatus(error({ message: "El expediente aun no tiene resultado" }, 204)); return }
        await informacionCaso(req).then(async (resul) => {
          // console.log(resul.data.results[0])
          resul.nombre_documento = result.data.tipo_resultado

          await axios.post(config.urlGeneradorDocumentos + "generar/", resul, { responseType: 'arraybuffer' })
            .then(async result => {

              res.end(result.data)
            })
            .catch(err => {
              res.sendStatus(error(err))
            })
        })
          .catch(err => {
            res.sendStatus(error(err))
          })

      }).catch((err) => {

      });


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.GenerarReportes = async (req, res) => {
  try {
    req.body.reporte_id = req.params.id
    axios.post(config.urlGeneradorReportes, req.body, { responseType: 'arraybuffer' })

      .then(result => {

        res.end(result.data)

      })
      .catch(err => {

        if (err.response) {
          res.sendStatus(error(err));
          return
        }
        if (err.request) {
          res.sendStatus(503); return
        }
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.DescargarFormatoCitacion = async (req, res) => {
  try {

    axios.get(config.urlApiExpedientes + "citaciones/" + req.params.id_citacion)
      .then(async result => {
        if (Object.keys(result.data).length < 1) { res.sendStatus(error({ message: "El expediente aun no tiene resultado" }, 204)); return }
        await informacionCitacion(req).then(async (resul) => {
          // console.log(resul.data.results[0])

          resul.nombre_documento = "CITACION AUDIENCIA DE CONCILIACION"

          await axios.post(config.urlGeneradorDocumentos + "generar/", resul, { responseType: 'arraybuffer' })
            .then(async result => {

              res.end(result.data)
            })
            .catch(err => {
              res.sendStatus(error(err))
            })
        })
          .catch(err => {
            res.sendStatus(error(err))
          })

      }).catch((err) => {

      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.ListarCitacionesCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "citaciones?expediente_id=" + req.params.id
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.CrearCitaciones = async (req, res) => {
  try {
    req.body.expediente_id = req.params.id
    axios.post(config.urlApiExpedientes + "citaciones/", req.body)
      .then(result => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        res.sendStatus(error(err))
        return
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.EnviarDocumentoCitacion = async (req, res) => {
  try {


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.ListarPersonasCitadasyPorCitar = async (req, res) => {
  try {
    let personas_disponibles = []
    let id_personas_citadas = []
    let personas_citadas = []
    let personas_no_citadas = []
    let id_personas_no_citadas = []
    let datos = {}
    let endpoints = [config.urlApiExpedientes + "relaciones_persona_expediente?expediente_id=" + req.params.id,
    config.urlApiExpedientes + "relaciones_persona_citacion?citacion_id=" + req.params.id_citacion]

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (datos1, datos2) => {

        if (datos1.data.results.length < 1) { res.sendStatus(error({ message: "No se encuentra ninguna persona en este caso" })); return; }

        for (const iterator of datos1.data.results) {
          personas_disponibles[personas_disponibles.length] = iterator.persona_id

        }



        // // personas_disponibles = personas_disponibles.sort((a, b) => { return a - b });
        if (datos2.data.results.length < 1) { personas_citadas = [] } else {
          for (const iterator of datos2.data.results) {
            id_personas_citadas[personas_citadas.length] = iterator.persona_id
            datos1.data.results[personas_disponibles.indexOf(iterator.persona_id)].id_relacion = iterator.id
            personas_citadas.push(datos1.data.results[personas_disponibles.indexOf(iterator.persona_id)])
            if (datos1.data.results[personas_disponibles.indexOf(iterator.persona_id)] == null) { personas_citadas = []; break }
          }


          //   // personas_citadas = personas_citadas.sort((a, b) => { return a - b });
        }

        datos.personas_citadas = personas_citadas
        id_personas_no_citadas = personas_disponibles.filter(element => !id_personas_citadas.includes(element))

        // endpoints = []

        if (id_personas_no_citadas.length < 1) { datos.personas_no_citadas = [] } else {

          for (const iterator of id_personas_no_citadas) {
            personas_no_citadas.push(datos1.data.results[personas_disponibles.indexOf(iterator)])
          }

          datos.personas_no_citadas = personas_no_citadas

        }

        res.status(200).json(datos)
      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })



  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.EliminarPersonaDeCitacion = async (req, res) => {
  try {

    axios.get(config.urlApiExpedientes + "relaciones_persona_citacion?citacion_id=" + req.params.id + "&persona_id=" + req.params.id_persona)
      .then(async result => {
        if (Object.keys(result.data.results).length < 1) { res.sendStatus(400); return }

        await axios.delete(config.urlApiExpedientes + "relaciones_persona_citacion/" + result.data.results[0].id + "/")
          .then(result => {
            res.status(200).json(result.data)
          })
          .catch(err => {
            res.sendStatus(error(err))
          })
      })
      .catch(err => {
        res.sendStatus(error(err))
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.CitarPersonas = async (req, res) => {
  try {
    let datos = {
      persona_id: req.params.id_persona,
      citacion_id: req.params.id
    }
    axios.post(config.urlApiExpedientes + "relaciones_persona_citacion/", datos)
      .then(result => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        res.sendStatus(error(err))
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.EnviarNotificacionCitacion = async (req, res) => {
  try {

    // validacion correo 
    for await (const iterator of req.body) {
      req.params.id_relacion = iterator
      await informacionCitacion(req).then(async (resul) => {
        // console.log(resul.data.results[0])

        resul.nombre_documento = "CITACION AUDIENCIA DE CONCILIACION"
        if (!resul.citado_localidad) { resul.citado_localidad = "______" }
        if (!resul.citado_ciudad) { resul.citado_ciudad = "______" }
        if (!resul.estudiante1_nombres) { resul.estudiante1_nombres = "" }
        if (!resul.estudiante2_nombres) { resul.estudiante2_nombres = "" }
     
        await axios.post(config.urlGeneradorDocumentos + "generar/", resul, { responseType: 'arraybuffer' })
          .then(async (result) => {

            fs.writeFile("./public/formatos/citacion_" + resul.citado_nombres + ".docx", result.data, async (err) => {
              if (err) { throw new Error(err) }

              // resul.citado_nombres=resul.citado_nombres.replace("","_")

              let file = fs.readFileSync("./public/formatos/citacion_" + resul.citado_nombres + ".docx")
              let formdata = new FormData()

              formdata.append("document", file)

              await axios.post(config.urlConvertidorPDF, formdata, { responseType: "arraybuffer" })
                .then(async result => {
                  try {
                    fs.unlinkSync("./public/formatos/citacion_" + resul.citado_nombres + ".docx")
                  } catch (err) {
                    error(err)
                    return
                  }
                  fs.writeFile("./public/formatos/citacion_" + resul.citado_nombres + ".pdf", result.data, async (err) => {
                    if (err) { throw new Error(err) }

                    let fil = fs.readFileSync("./public/formatos/citacion_" + resul.citado_nombres + ".pdf")
                    let formdat = new FormData()
                    formdat.append("adjunto", fil)

                    await unirest
                      .post(config.urlEmail + "adjuntar")


                      //.attach('Ruta_directorio', req.file.path) // reads directly from local file
                      .attach('adjunto', fs.createReadStream("./public/formatos/citacion_" + resul.citado_nombres + ".pdf")) // creates a read stream
                      //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
                      .then(async function (response) {

                        try {
                          fs.unlinkSync("./public/formatos/citacion_" + resul.citado_nombres + ".pdf")
                        } catch (err) {
                          error(err)
                          return
                        }
                        // res.send(response.body)
                        const saludo = `<br>Reciba un cordial saludo `
                        const encabezado = `Este mensaje notifica que se ha generado una citación de audiencia de conciliación con la siguiente informacion:`
                        const cuerpo = `
                  <br><b>Expediente:</b> ${resul.expediente_numero_radicado}
                  <br><b>Nombre del Citado:</b> ${resul.citado_nombres}
                  <br><b>Fecha:</b> ${resul.citado_fecha_sesion} 
                  <br><b>Hora:</b> ${resul.citacion_turno} 
                  <br><b>Medio:</b> ${resul.citacion_medio} 
                  <br><b>Enlace:</b> ${resul.citacion_enlace} 
                  <br><b>Descripcion:</b> ${resul.citacion_descripcion} 


                  <br><br>Adicional a esto, en este correo se adjunta un documento con la respectiva citación  y demás información importante para su conocimiento  .<br>`

                        let asunto = `Citación Audiencia Conciliación`


                        const correo = axios.post(config.urlEmail, email.enviar("html", saludo, [resul.citado_correo], asunto, encabezado, cuerpo, response.body)).catch(err => { res.status(error(err)) })

                        // await axios.post(config.urlEmail)
                        //   .then(result=>{
                        //     res.send(result.data)
                        // })
                        //   .catch(err => {
                        //     res.sendStatus(error(err))
                        //   })

                        // try {
                        //   fs.unlinkSync(iterator.path)
                        // } catch (err) {
                        //   error(err)
                        // }
                      })
                    // await axios.post(config.urlEmail+"adjuntar",formdat)
                    //   .then(result=>{
                    //     res.send(result)
                    // })
                    //   .catch(err => {
                    //     res.status(error(err))
                    //   })

                    res.end(result.data)
                  })
                })
                .catch(err => {
                  if (err.response) {
                    res.sendStatus(error(err));
                    return
                  }
                  if (err.request) {
                    res.sendStatus(503); return
                  }

                })



              // res.end(result.data)
            })
          })
          .catch(err => {
            throw new Error(err)
          })
      })
        .catch(err => {
          res.sendStatus(error(err))
          return
        })


    }



    // axios({
    //   method: 'post',
    //   url: config.urlConvertidorPDF,

    //   // url: `/documentos/2022-452`,
    //   responseType: "arraybuffer",
    //   data: formdata
    // })
    //   .then(response => {


    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });





    // await unirest
    //             .post(config.urlEmail + "adjuntar")


    //             //.attach('Ruta_directorio', req.file.path) // reads directly from local file
    //              .attach('adjunto', fs.createReadStream("public/formatos/node.pdf")) // creates a read stream
    //             //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
    //             .then(async function (response) {
    //               const saludo = `<br>Reciba un cordial saludo `
    //               const encabezado = `Este mensaje notifica que se te ha asignado un  nuevo caso de conciliación con la siguiente información:`
    //               const cuerpo = `
    //               <br><b>Expediente:</b> ${result.data.numero_caso}
    //               <br><b>Fecha de Registro:</b> ${result.data.fecha_registro}
    //               <br><b>Estado del Expediente:</b> ${result.data.estado_expediente} 
    //               <br><b>Conciliador:</b> ${result.data.nombres} 
    //               <br><br>Podrá revisar toda la información del caso en el  sistema de información manejado por el centro de conciliación.<br><br>`
    //               let asunto = `Asignación Caso de Concilaición `
    //               const correo = axios.post(config.urlEmail, email.enviar("html", saludo, [result.data.correo], asunto, encabezado, cuerpo)).catch(err => { res.status(error(err)) })

    //               await axios.post(config.urlEmail)
    //                 .then(result=>{

    //               })
    //                 .catch(err => {
    //                   res.sendStatus(error(err))
    //                 })
    //               res.send(response.body)
    //               // try {
    //               //   fs.unlinkSync(iterator.path)
    //               // } catch (err) {
    //               //   error(err)
    //               // }
    //             })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.EnviarResultado = async (req, res) => {
  try {
    res.sendStatus(200)
  } catch (error) {
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


    axios.get(config.urlApiExpedientes + "expedientes/" + req.params.id)

      .then(async result => {



        for await (const iterator of req.files) {

          await unirest
            .post(config.urlDocumentos + "documentos/")


            .field('estado', "null")
            .field('expediente', result.data.numero_caso)
            .field('nombre', iterator.originalname)



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



      })
      .catch(err => {

        res.sendStatus(error(err))
      })



  } catch (error) {
    console.log(error);

  }
}
views.CargarTemplatePersonas = async (req, res) => {


  try {

    if (Object.keys(req.file).length < 1) { res.sendStatus(error({ message: "No ha subido ningun archivo" })); return }
    const ruta = (req.file.path)

    const workbook = xlsx.readFile(ruta)
    const workbookSheets = workbook.SheetNames;


    async function LeerHojas(workbookSheets) {
      let usuarios = []
      let identificacion = []
      let email = []
      let duplicados = [];
      let personas = []
      let id_grupo = 0
      for (const sheet of workbookSheets) {
        id_grupo++
        let letra = workbook.Sheets[sheet]['!ref'].split(":", 2)[1][0]
        for (const iterator in workbook.Sheets[sheet]) {
          if (iterator != "!ref") {
            workbook.Sheets[sheet][iterator].w = workbook.Sheets[sheet][iterator].w.toLowerCase()
            if (iterator[0] == letra) { break }
          }
        }

        personas = personas.concat(xlsx.utils.sheet_to_json(workbook.Sheets[sheet]))
        for (const iterator of xlsx.utils.sheet_to_json(workbook.Sheets[sheet])) {
          if (!iterator.identificacion | !iterator.correo | iterator.nombres) { res.status(400).json({ message: "Se encuentan celdas obligatorias vacias" }); return }
          usuarios.push({ username: iterator.identificacion, password: config.clave_usuarios_nuevos, is_staff: false, is_active: true, groups: [id_grupo] })
          identificacion.push(iterator.identificacion)
          email.push(iterator.correo)


        }

      }

      function repetidos(arr) {
        return arr.some(function (v, i) { duplicados.push(v); return arr.indexOf(v, i + 1) > -1 })

      }
      if (repetidos(identificacion)) {
        const mensaje = "El numero de identificacion " + duplicados[0] + " aparece  mas de una vez en el archivo";
        res.status(400).json({ message: mensaje }); return
      }

      function validarEmail(valor) {

        if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
          return email = [valor]
        }

      }

      if (email.some(validarEmail)) {
        const mensaje = "El correo electronico " + email[0] + " no es valido";
        res.status(400).json({ message: mensaje }); return
      }


      await axios.post(config.urlApiExpedientes + "usuarios/", usuarios)
        .then(async result => {
          for (const iterator in result.data) {

            personas[iterator].usuario_id = result.data[iterator].id
            // 

          }
          // console.log(personas)
          await axios.post(config.urlApiExpedientes + "personas/", personas)
            .then(result => {
              res.sendStatus(201)
            })
            .catch(err => {
              res.sendStatus(error(err))
            })

        })
        .catch(err => {

          const mensaje = "Error: Verificar en el archivo subido que no se repita ningún documento de identidad y además que en el aplicativo no exista ninguno de los usuarios que desea añadir "
          res.status(400).json({ message: mensaje })
        })


    }

    LeerHojas(workbookSheets)











  } catch (error) {
    console.log(error);

  }
}

views.DescargarTemplates = async (req, res) => {
  try {

    const workbook = new ExcelJS.Workbook();
    workbook.views = [ // controlan cuántas ventanas separadas Excel abrirá al ver el libro de trabajo.
      {
        x: 0, y: 0, width: 10000, height: 20000,
        firstSheet: 0, activeTab: 1, visibility: 'visible'
      }
    ]

    async function HojaExcelGeneral(nombre, color, docente = false) {
      const sheet = workbook.addWorksheet(nombre, { properties: { tabColor: { argb: color } } }); //  agregar hoja de trabajo 

      const worksheet = workbook.getWorksheet(nombre)
      worksheet.views = [
        { state: 'frozen', xSplit: 0, ySplit: 1 }
      ];
      const fontEncabezado = { name: 'FrankRuehl', family: 4, size: 14, color: { argb: 'FFFFFF' }, width: 50 }; // 
      const fillEncabezado = { type: 'pattern', pattern: 'solid', fgColor: { argb: color }, bgColor: { argb: color } }
      const border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      worksheet.columns = [
        { header: 'Nombres', width: 20.64, style: { border: border } },
        { header: 'Apellidos', width: 20.64, style: { border: border } },
        { header: 'Identificacion', width: 15.64, style: { border: border } },
        { header: 'Celular', width: 15.64, style: { border: border } },
        { header: 'Correo', width: 25.64, style: { border: border } },]


      if (docente) {

        worksheet.columns = worksheet.columns.concat({ header: 'Tarjeta_Profesinal', width: 20.64, style: { border: border } })
      }

      worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
      worksheet.getRow(1).font = fontEncabezado
      for (let i = 1; i <= worksheet.lastColumn.number; i++) {
        worksheet.getCell(1, i).fill = fillEncabezado

      }

      worksheet.getCell(1, 1).fill = fillEncabezado


      // formato condicional


      worksheet.addConditionalFormatting({
        ref: "A2:E4" + worksheet.lastRow.number,
        rules: [
          {
            type: 'containsText',
            operator: 'containsBlanks',
            text: "",
            style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'B7DEE8' } } },
          }
        ]
      })


    }



    await HojaExcelGeneral('Administrativos', '00913D')
    await HojaExcelGeneral('Docentes-Conciliadores', '00460F', true)
    await HojaExcelGeneral('Estudiantes', '5C9E31')

    const buffer = await workbook.xlsx.writeBuffer();
    res.send(buffer)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.AprobarDocumentosCaso = async (req, res) => {
  try {
    if (req.body.documento) { delete req.body["documento"]; }
    if (req.body.expediente) { delete req.body["expediente"]; }

    const url = config.urlDocumentos + "documentos/" + req.params.id + "/"
    requests.patch(req, res, url, req.body)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CambiarDocumentoCaso = async (req, res) => {
  try {

    if (Object.keys(req.files).length > 1) {
      res.sendStatus(error({ message: "Solo puede subir un documento" }));
      for (const iterator of req.files) {
        try {
          fs.unlinkSync(iterator.path)
        } catch (err) {
          error(err)
        }
      }
      return
    }
    axios.get(config.urlApiExpedientes + "expedientes/" + req.params.id)
      .then(async result => {
        await unirest

          .patch(config.urlDocumentos + "documentos/" + req.params.id_documento + "/")


          .field('estado', "null")
          .field('expediente', result.data.numero_caso)
          .field('nombre', req.files[0].originalname)



          //.attach('Ruta_directorio', req.file.path) // reads directly from local file
          .attach('documento', fs.createReadStream(req.files[0].path)) // creates a read stream
          //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
          .then(function (response) {
            try {
              fs.unlinkSync(req.files[0].path)
            } catch (err) {
              error(err)
            }

            res.status(200).json(response.body)

          })
      })
      .catch(err => {
        res.sendStatus(error(err))
      })


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.VerResultadoCaso = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes + "resultados?expediente_id=" + req.params.id)
      .then(result => {
        if (Object.keys(result.data.results).length < 1) { res.status(error({ message: "El expediente aun no tiene resultado" }, 204)).json([]); return }
        res.status(200).json(result.data.results[0])

      })
      .catch(err => {
        res.sendStatus(error(err))
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.VerRespuestasEncuesta = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes + "encuestas?expediente_id=" + req.params.id)
      .then(async result => {
        let datos = {}
        if (Object.keys(result.data.results).length < 1) { res.status(error({ message: "El expediente no tiene encuestas resueltas" }, 204)).json([]); return }



        await axios.get(config.urlApiExpedientes + "respuestas_encuesta?encuesta_id=" + result.data.results[0].id)
          .then(resul => {
            result.data.results[0].respuestas = resul.data.results
            res.status(200).json(result.data.results[0])
          })
          .catch(err => {
            res.sendStatus(error(err))
          })

      })
      .catch(err => {
        res.sendStatus(error(err))
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CrearResultado = async (req, res) => {
  try {
    let correos = []

    req.body.expediente_id = req.params.id
    let endpoints = [config.urlApiExpedientes + "tipos_resultado/" + req.body.tipo_resultado_id,
    config.urlApiExpedientes + "resultados?expediente_id=" + req.params.id]
    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (result, data2) => {

        if (Object.keys(data2.data.results).length > 0) { res.sendStatus(error({ message: "El resultado para este expediente ya existe" }, 208)); return }
        if (Object.keys(result.data).length < 1) { res.sendStatus(error({ message: "no existe ese tipo de resultado" }, 404)); return }
        result.data.consecutivo = parseInt(result.data.consecutivo) + 1
        req.body.consecutivo = result.data.consecutivo


        const resultado = axios.post(config.urlApiExpedientes + "resultados/", req.body)
        const categoria = axios.patch(config.urlApiExpedientes + "categorias_resultado/" + result.data.categoria_id + "/", { consecutivo_actual: result.data.consecutivo })

        const cerrarCaso = axios.patch(config.urlApiExpedientes + "expedientes/" + req.params.id + "/", { expediente_cerrado: 1 })

        await Promise.all([resultado, categoria, cerrarCaso]).then(axios.spread(async (result, data2, casoCerrado) => {

          res.status(200).json(result.data)

          axios.get(config.urlApiExpedientes + "relaciones_persona_expediente?expediente_id=" + req.params.id)
            .then(resul => {

              if (Object.keys(resul.data.results).length < 1) { return }
              for (const iterator of resul.data.results) {
                if (iterator.correo == "") { return }
                correos.push(iterator.correo)
              }

              const saludo = `<br>Reciba un cordial saludo `
              const encabezado = `Este mensaje notifica que el expediente <b>${casoCerrado.data.numero_caso}</b> posee el siguiente resultado:`
              const cuerpo = `
          <br><b>Expediente:</b> ${casoCerrado.data.numero_caso}
          <br><b>Estado</b> ${casoCerrado.data.estado_expediente} 
          <br><b>Tipo de Resultado </b> ${result.data.tipo_resultado} 
          <br><b>Fecha:</b> ${result.data.fecha} 

          <br> <br>
          Recuerde que podrá descargar el documento respectivo de este resultado en la página principal del Centro de Conciliación en la sección: <b>Consulta tu solicitud</b>.`
              let asunto = `Resultado del Expediente ${casoCerrado.data.numero_caso}`
              const correo = axios.post(config.urlEmail, email.enviar("html", saludo, correos, asunto, encabezado, cuerpo)).catch(err => { res.status(error(err)) })
            })
            .catch(err => {
              res.status(error(err))
            })

          // 
        }))
      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })




  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CargarResultadoCaso = async (req, res) => {
  try {
    console.log(req.files)
    if (Object.keys(req.files).length > 1) {
      res.sendStatus(error({ message: "Solo puede subir un documento" }));
      for (const iterator of req.files) {
        try {
          fs.unlinkSync(iterator.path)
        } catch (err) {
          error(err)
        }
      }
      return
    }
    await unirest

      .patch(config.urlApiExpedientes + "resultados/" + req.params.id_resultado + "/")






      //.attach('Ruta_directorio', req.file.path) // reads directly from local file
      .attach('documento', fs.createReadStream(req.files[0].path)) // creates a read stream
      //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
      .then(function (response) {
        try {
          fs.unlinkSync(req.files[0].path)
        } catch (err) {
          error(err)
        }

        res.status(200).json(response.body)

      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.ListarSeguimientosCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "seguimientos?expediente_id=" + req.params.id
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.CrearSeguimientoCaso = async (req, res) => {
  try {

    req.body.expediente_id = req.params.id

    axios.post(config.urlApiExpedientes + "seguimientos/", req.body)
      .then(async result => {
        for (const iterator of req.body.respuestas) {
          iterator.seguimiento_id = result.data.id
        }
        await axios.post(config.urlApiExpedientes + "respuestas_seguimiento/", req.body.respuestas)
          .then(resul => {
            res.status(200).json(result.data)
          })
          .catch(err => {
            res.sendStatus(error(err))
          })
      })
      .catch(err => {
        res.sendStatus(error(err))
      })


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.VerSeguimiento = async (req, res) => {
  try {
    let endpoints = [
      config.urlApiExpedientes + "seguimientos/" + req.params.id,
      config.urlApiExpedientes + "respuestas_seguimiento?seguimiento_id=" + req.params.id
    ]
    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (data1, data2) => {

        data1.data.respuestas = data2.data.results

        res.status(200).json(data1.data)
      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CrearConvocantes = async (req, res) => {
  try {
    if (Object.keys(req.body.apoderado).length > 0) {
      await axios.post(config.urlApiExpedientes + "apoderados/", req.body.apoderado)
        .then(result => {
          req.body.persona.apoderado_id = result.data.id
        })
        .catch(err => {
          res.status(error(err))
          return
        })
    }

    await axios.post(config.urlApiExpedientes + "personas/", req.body.persona)
      .then(async result => {
        const datos = { persona_id: result.data.id, expediente_id: req.params.id, tipo_cliente_id: 1 }

        await axios.post(config.urlApiExpedientes + "relaciones_persona_expediente/", datos)
          .then(result => {
            res.status(200).json(result.data)
          })
          .catch(err => {
            res.sendStatus(error(err))
          })
      })
      .catch(err => {
        res.sendStatus(error(err))
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CrearRespuestas = async (req, res) => {
  try {

    let datos = { observacion: req.body.observacion, medio_conocimiento_id: req.body.medio_conocimiento_id, expediente_id: req.params.id }
    axios.post(config.urlApiExpedientes + "encuestas/", datos)
      .then(async result => {
        for (const iterator of req.body.respuestas) {
          iterator.encuesta_id = result.data.id
        }

        await axios.post(config.urlApiExpedientes + "respuestas_encuesta/", req.body.respuestas)

          .catch(err => {
            res.sendStatus(error(err))
          })
        res.status(200).json(result.data)
      })
      .catch(err => {
        res.sendStatus(error(err))
      })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.AgregarConvocantes = async (req, res) => {
  try {

    axios.get(config.urlApiExpedientes + "personas?search=" + req.params.identificacion)
      .then(async result => {
        await axios.get(config.urlApiExpedientes + "relaciones_persona_expediente?persona_id=" + result.data.results[0].id + "&expediente_id=" + req.params.id)
          .then(async (resul) => {

            if (Object.keys(resul.data.results).length > 0) { res.sendStatus(208); return }
            let datos = { persona_id: result.data.results[0].id, expediente_id: req.params.id, tipo_cliente_id: 1 }
            await axios.post(config.urlApiExpedientes + "relaciones_persona_expediente/", datos)
              .then(result => {
                res.status(200).json(result.data)
              })
              .catch(err => {
                res.sendStatus(error(err))
                return
              })
          }).catch((err) => {
            res.sendStatus(error(err))
            return
          });

      })
      .catch(err => {
        res.sendStatus(error(err))
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.CrearConvocados = async (req, res) => {
  try {

    if (Object.keys(req.body.apoderado).length > 0) {
      await axios.post(config.urlApiExpedientes + "apoderados/", req.body.apoderado)
        .then(result => {
          req.body.persona.apoderado_id = result.data.id
        })
        .catch(err => {
          res.status(error(err))

        })
    }

    await axios.post(config.urlApiExpedientes + "personas/", req.body.persona)
      .then(async result => {
        let datos = { persona_id: result.data.id, expediente_id: req.params.id, tipo_cliente_id: 2 }
        await axios.post(config.urlApiExpedientes + "relaciones_persona_expediente/", datos)
          .then(result => {
            res.status(200).json(result.data)
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
    return;
  }
}

views.AgregarConvocados = async (req, res) => {
  try {

    axios.get(config.urlApiExpedientes + "personas?search=" + req.params.identificacion)
      .then(async result => {

        await axios.get(config.urlApiExpedientes + "relaciones_persona_expediente?persona_id=" + result.data.results[0].id + "&expediente_id=" + req.params.id)
          .then(async (resul) => {
            if (Object.keys(resul.data.results).length > 0) { res.sendStatus(208); return }
            let datos = { persona_id: result.data.results[0].id, expediente_id: req.params.id, tipo_cliente_id: 2 }
            await axios.post(config.urlApiExpedientes + "relaciones_persona_expediente/", datos)
              .then(result => {
                res.status(200).json(result.data)
              })
              .catch(err => {
                res.sendStatus(error(err))
                return
              })
          }).catch((err) => {
            res.sendStatus(error(err))
            return
          });
        // await axios.get(config.urlApiExpedientes+"relaciones_persona_expediente=persona_id="+result.data.results[0].id)
        // .then((result) => {
        //   if(Object.keys(result.data).length>0){res.sendStatus(208); return}
        // })


      })
      .catch(err => {
        res.sendStatus(error(err))
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.EliminarPersonaCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "relaciones_persona_expediente/" + req.params.id_relacion + "/"
    requests.delete(req, res, url)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.AgregarConciliadores = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes + "relaciones_persona_expediente?persona_id=" + req.params.id2 + "&expediente_id=" + req.params.id)
      .then(async result => {
        console.log(result.data)
        if (Object.keys(result.data.results).length > 0) { res.status(400).json({ response: { mensaje: "Ya se encuentra reportada esta persona " } }); return }
        const datos = { persona_id: req.params.id2, expediente_id: req.params.id, tipo_cliente_id: 3 }
        await axios.post(config.urlApiExpedientes + "relaciones_persona_expediente/", datos)
          .then(result => {

            res.status(200).json(result.data)
            const saludo = `<br>Reciba un cordial saludo ${result.data.nombres}`
            const encabezado = `Este mensaje notifica que se te ha asignado un  nuevo caso de conciliación con la siguiente información:`
            const cuerpo = `
            <br><b>Expediente:</b> ${result.data.numero_caso}
            <br><b>Fecha de Registro:</b> ${result.data.fecha_registro}
            <br><b>Estado del Expediente:</b> ${result.data.estado_expediente} 
            <br><b>Conciliador:</b> ${result.data.nombres} 
            <br><br>Podrá revisar toda la información del caso en el  sistema de información manejado por el centro de conciliación.<br><br>`
            let asunto = `Asignación Caso de Concilaición `
            const correo = axios.post(config.urlEmail, email.enviar("html", saludo, [result.data.correo], asunto, encabezado, cuerpo)).catch(err => { res.status(error(err)) })

          })
          .catch(err => {
            res.sendStatus(error(err))
          })

      })

      .catch(err => {
        res.sendStatus(error(err))
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.AgregarEstudiantes = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes + "relaciones_persona_expediente?persona_id=" + req.params.id2 + "&expediente_id=" + req.params.id)
      .then(async result => {

        if (Object.keys(result.data.results).length > 0) { res.sendStatus(208); return }
        const datos = { persona_id: req.params.id2, expediente_id: req.params.id, tipo_cliente_id: 4 }
        await axios.post(config.urlApiExpedientes + "relaciones_persona_expediente/", datos)
          .then(result => {
            res.status(200).json(result.data)
          })
          .catch(err => {
            res.sendStatus(error(err))
          })

      })
      .catch(err => {
        res.sendStatus(error(err))
      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
// actualizar

views.ActualizarExpediente = async (req, res) => {
  try {
    if (req.body.fecha_registro) { delete req.body["fecha_registro"]; }
    if (req.body.numero_radicado) { delete req.body["numero_radicado"]; }
    if (req.body.numero_caso) { delete req.body["numero_caso"]; }
    const url = config.urlApiExpedientes + "expedientes/" + req.params.id + "/"
    requests.patch(req, res, url, req.body)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CambiarEstadoExpediente = async (req, res) => {
  try {

    axios.patch(config.urlApiExpedientes + "expedientes/" + req.params.id + "/", { estado_expediente_id: req.body.estado_expediente_id })
      .then(result => {

        axios.post(config.urlApiExpedientes + "historicos/", { estado_id: req.body.estado_expediente_id, expediente_id: req.params.id })
          .then(resul => {

            res.status(200).json(result.data)
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
    return;
  }
}
views.ActualizarHechos = async (req, res) => {
  try {
    if (req.body.expediente_id) { delete req.body["expediente_id"]; }

    const url = config.urlApiExpedientes + "hechos/" + req.params.id + "/"
    requests.patch(req, res, url, req.body)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.ActualizarCitacion = async (req, res) => {
  try {
    if (req.body.expediente_id) { delete req.body["expediente_id"]; }

    const url = config.urlApiExpedientes + "citaciones/" + req.params.id + "/"
    requests.patch(req, res, url, req.body)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.ActualizarPersonas = async (req, res) => {
  try {
    if (req.body.identificacion) { delete req.body["identificacion"]; }
    const url = config.urlApiExpedientes + "personas/" + req.params.id + "/"
    requests.patch(req, res, url, req.body)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}


views.ActualizarApoderado = async (req, res) => {
  try {
    const url = config.urlApiExpedientes + "apoderados/" + req.params.id + "/"
    requests.patch(req, res, url, req.body)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
//turnos para una fecha 

views.TurnosFecha = async (req, res) => {
  try {
    let turnos_ocupados = []
    let turnos_disponibles = []
    let turnos_totales = []
    let endpoints = [
      config.urlApiExpedientes + "relaciones_persona_expediente?search=conciliador&expediente_id=" + req.params.id,
      config.urlApiExpedientes + "turnos",
    ]

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (data1, data2) => {
        // console.log(data1.data.results)
        if (Object.keys(data1.data.results).length < 1) { res.sendStatus(error({ message: "Este expediente no posee conciliador" })); return }
        // console.log(data1.data.results);
        for (const iterator of data2.data.results) {
          turnos_totales[turnos_totales.length] = iterator.id
        }

        await axios.get(config.urlApiExpedientes + "relaciones_persona_citacion?persona_id=" + data1.data.results[0].persona_id + "&search=" + req.params.fecha)
          .then(async result => {

            for (const iterator of result.data.results) {
              turnos_ocupados[turnos_ocupados.length] = parseInt(iterator.turno_id)
            }

            turnos_ocupados = turnos_ocupados.sort((a, b) => { return a - b });

            turnos_disponibles = turnos_totales.filter(element => !turnos_ocupados.includes(element))

            endpoints = []
            if (turnos_disponibles.length < 1) { res.status(200).json([]); return }
            // res.status(200).json(result.data.results)
            for await (const iterator of turnos_disponibles) {
              endpoints[endpoints.length] = config.urlApiExpedientes + "turnos/" + iterator
            }

            await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
              .then(axios.spread(async (...allData) => {
                let datos = []
                for (const iterator of allData) {
                  datos.push(iterator.data)
                }

                res.status(200).json(datos)
              }))
              .catch(err => {

                res.sendStatus(error(err))
                return

              })

          })
          .catch(err => {
            res.sendStatus(error(err))
          })


      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}


module.exports = views;