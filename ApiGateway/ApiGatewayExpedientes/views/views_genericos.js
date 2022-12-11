
const axios = require("axios");
const { response } = require("express");
const views = {};
const config = require("../config.json");
const error = require("../requests/requests_error.js")
const requests = require("../requests/requests_generales.js");
const multer = require("multer");
const fs = require('fs');
const unirest = require('unirest');
const FormData = require('form-data');
const path = require("path");

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
    if (req.body.tipo_cargo_id == "" | req.body.tipo_cargo_id == null) { res.sendStatus(error({ message: "No ha ingresado el cargo" })); return }

    axios.post(config.urlApiExpedientes + "personas/", req.body)
      .then(async resul => {

        let datos = { username: req.body.identificacion, password: config.clave_usuarios_nuevos, is_staff: false, is_active: true, groups: [req.body.grupo_id] }
        await axios.post(config.urlApiExpedientes + "usuarios/", datos)
          .then(result => {
            result.data.persona_id = resul.data.id
            res.status(201).json(result.data)
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

            //get res.status(201).json(data2.data[0])
            req.params.id = data2.data.numero_caso

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
      .then(axios.spread(async (data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11) => {
        let datos = {}
        datos.paises=data1.data.results
        datos.estados_civiles=data2.data.results
        datos.estratos_socioeconomicos=data3.data.results
        datos.grupos_etnicos=data4.data.results
        datos.tipos_persona=data5.data.results
        datos.sexos=data6.data.results
        datos.tipos_discapacidad=data7.data.results
        datos.generos=data8.data.results
        datos.tipos_vivienda=data9.data.results
        datos.tipos_documento=data10.data.results
        datos.escolaridades=data11.data.results
        

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
  }catch (error) {
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
    await axios.get(config.urlDocumentos+ "documentos/" + req.params.id)
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
    await axios.get(config.urlApiExpedientes+ "resultados/" + req.params.id)
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

views.InformacionCaso= async (req, res) => {
  try {
    endpoints=[config.urlApiExpedientes+"expedientes/"+req.params.id,
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/convocantes",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/convocados",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/conciliadores",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/estudiantes",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/hechos",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/citaciones",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/resultados",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/seguimientos",
                config.urlGatewayExpedientes+"expedientes/"+req.params.id+"/encuestas",
              
              ]
              // console.log(endpoints)

                await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
                .then(axios.spread(async (expediente,convocante,convocado,conciliador,estudiante,hechos,citacion,resultado,seguimiento,encuesta) => {
                  console.log("1")
                   let datos={}
                  for (const iterator in convocante.data.results[0]) {
                    datos["convocante_"+iterator]=convocante['data']['results'][0][iterator]
                    // console.log(iterator)
                  }
                  // datos["convocante"+convocante.data.results[0].nombres]="nombre"
                  res.status(200).json(expediente.data)
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

views.ListarPersonasCitadasyPorCitar = async (req, res) => {
  try {
    let personas_disponibles = []
    let personas_citadas = []
    let personas_no_citadas = []
    let datos = {}
    let endpoints = [config.urlApiExpedientes + "relaciones_persona_expediente?expediente_id=" + req.params.id,
    config.urlApiExpedientes + "relaciones_persona_citacion?citacion_id=" + req.params.id_citacion]

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (datos1, datos2) => {
        if (datos1.data.results.length < 1) { res.sendStatus(error({ message: "No se encuentra ninguna persona en este caso" })); return; }
        for (const iterator of datos1.data.results) {
          personas_disponibles[personas_disponibles.length] = iterator.persona_id

        }
        personas_disponibles = personas_disponibles.sort((a, b) => { return a - b });
        if (datos2.data.results.length < 1) { personas_citadas = [] } else {
          for (const iterator of datos2.data.results) {
            personas_citadas[personas_citadas.length] = iterator.persona_id

          }


          personas_citadas = personas_citadas.sort((a, b) => { return a - b });
        }
        datos.personas_citadas = datos2.data.results
        personas_no_citadas = personas_disponibles.filter(element => !personas_citadas.includes(element))
        endpoints = []

        if (personas_no_citadas.length < 1) { datos.personas_no_citadas = [] } else {

          for (const iterator of personas_no_citadas) {
            endpoints[endpoints.length] = config.urlApiExpedientes + "relaciones_persona_expediente?expediente_id=" + req.params.id + "&persona_id=" + iterator
          }
          personas_no_citadas = []
          await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then(axios.spread(async (...allData) => {

              for (const iterator of allData) {
                personas_no_citadas.push(iterator.data.results[0])
              }

              datos.personas_no_citadas = personas_no_citadas
            }))
            .catch(err => {

              error(err)
              return

            })
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
views.CargarDocumentos = async (req, res, intento = 2) => {

  let datos = []

  try {
    // console.log(req.file)
    if (Object.keys(req.files).length < 1) { res.sendStatus(error({ message: "No ha subido ningun archivo" })); return }



    for await (const iterator of req.files) {

      await unirest
        .post(config.urlDocumentos + "documentos/")


        .field('estado', "null")
        .field('expediente', req.params.id)
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



  } catch (error) {
    console.log(error);

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
    await unirest

      .patch(config.urlDocumentos + "documentos/" + req.params.id_documento + "/")


      .field('estado', "null")
      .field('expediente', req.params.id)
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

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.VerResultadoCaso = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes+"resultados?expediente_id="+req.params.id)
      .then(result=>{
        if(Object.keys(result.data.results).length<1){res.status(error({message:"El expediente aun no tiene resultado"},204)).json([]);return}
        res.status(200).json(result.data.results[0])
        
    })
      .catch(err => {
        res.sendStatus(error(err))
      })
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.VerRespuestasEncuesta = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes+"encuestas?expediente_id="+req.params.id)
      .then(async result=>{
        let datos = {}
        if(Object.keys(result.data.results).length<1){res.status(error({message:"El expediente no tiene encuestas resueltas"},204)).json([]);return}
        
        
     
        await axios.get(config.urlApiExpedientes+"respuestas_encuesta?encuesta_id="+result.data.results[0].id)
          .then(resul=>{
            result.data.results[0].respuestas=resul.data.results
            res.status(200).json(result.data.results[0])
        })
          .catch(err => {
            res.sendStatus(error(err))
          })
        
    })
      .catch(err => {
        res.sendStatus(error(err))
      })
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.CrearResultado = async (req, res) => {
  try {

    req.body.expediente_id=req.params.id
    let endpoints =[config.urlApiExpedientes+"tipos_resultado/"+req.body.tipo_resultado_id,
                config.urlApiExpedientes+"resultados?expediente_id="+req.params.id]
    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(axios.spread(async(result,data2) => {
     
      if(Object.keys(data2.data.results).length>0){res.sendStatus(error({message:"El resultado para este expediente ya existe"},208));return}
      if(Object.keys(result.data).length<1){res.sendStatus(error({message:"no existe ese tipo de resultado"},404));return}
      result.data.consecutivo=parseInt(result.data.consecutivo)+1
      req.body.consecutivo=result.data.consecutivo
      
     
      const resultado=axios.post(config.urlApiExpedientes+"resultados/",req.body)
      const categoria=axios.patch(config.urlApiExpedientes+"categorias_resultado/"+result.data.categoria_id+"/",{consecutivo_actual:result.data.consecutivo})
       
      await Promise.all([resultado, categoria]).then(axios.spread(async(result,data2) => {
     
        res.status(200).json(result.data)
      }))
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
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.ListarSeguimientosCaso = async (req, res) => {
  try {
    const url = config.urlApiExpedientes+"seguimientos?expediente_id="+req.params.id
    requests.get(req, res, url, "&")
    
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.CrearSeguimientoCaso = async (req, res) => {
  try {

    req.body.expediente_id=req.params.id

    axios.post(config.urlApiExpedientes+"seguimientos/",req.body)
      .then(async result=>{
        for (const iterator of req.body.respuestas) {
          iterator.seguimiento_id=result.data.id
        }
        await axios.post(config.urlApiExpedientes+"respuestas_seguimiento/",req.body.respuestas)
          .then(resul=>{
            res.status(200).json(result.data)
        })
          .catch(err => {
            res.sendStatus(error(err))
          })
    })
      .catch(err => {
        res.sendStatus(error(err))
      })
    
  
  }catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}

views.VerSeguimiento = async (req, res) => {
  try {
    let endpoints =[
      config.urlApiExpedientes+"seguimientos/"+req.params.id,
      config.urlApiExpedientes+"respuestas_seguimiento?seguimiento_id="+req.params.id
    ]
    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(axios.spread(async (data1,data2) => {
      
      data1.data.respuestas=data2.data.results

      res.status(200).json(data1.data)
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
views.CrearConvocantes = async (req, res) => {
  try {

    await axios.post(config.urlApiExpedientes + "personas/", req.body)
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
   
    let datos={observacion:req.body.observacion,medio_conocimiento_id:req.body.medio_conocimiento_id,expediente_id:req.params.id}
    axios.post(config.urlApiExpedientes+"encuestas/",datos)
      .then(async result=>{
       for (const iterator of req.body.respuestas) {
        iterator.encuesta_id= result.data.id
       }

       await  axios.post(config.urlApiExpedientes+"respuestas_encuesta/",req.body.respuestas)
         
          .catch(err => {
            res.sendStatus(error(err))
          })
        res.status(200).json(result.data)
    })
      .catch(err => {
        res.sendStatus(error(err))
      })
  }catch (error) {
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


    await axios.post(config.urlApiExpedientes + "personas/", req.body)
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

        if (Object.keys(result.data.results).length > 0) { res.sendStatus(208); return }
        const datos = { persona_id: req.params.id2, expediente_id: req.params.id, tipo_cliente_id: 3 }
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
    
    axios.patch(config.urlApiExpedientes+"expedientes/"+req.params.id+"/", {estado_expediente_id:req.body.estado_expediente_id})
    .then(result => {

      axios.post(config.urlApiExpedientes+"historicos/", {estado_id:req.body.estado_expediente_id,expediente_id:req.params.id})
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
                datos = []
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