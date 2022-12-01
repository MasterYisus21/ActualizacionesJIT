
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
const { Console } = require("console");


views.GenericList = async (req, res) => {
  try {
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

    req.body.solicitud.estado_expediente_id=1
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
        endpoints = [relacion_convocante_expediente, relacion_convocado_expediente,relacion_conciliador_expediente, hechos]
        await Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
          .then(axios.spread(async (data3, data4, data5) => {
            // res.status(201).json(data2.data)

            //get res.status(201).json(data2.data[0])
            req.params.id = data2.data.numero_caso
        
            for await (const iterator of req.body.documentos.results) {
              await axios.get(iterator.documento, { responseType: 'arraybuffer' })
                .then(async result => {
                 
                  await fs.writeFile("./public/" + iterator.nombre, result.data,(err) => {
                    if (err)
                      console.log(err);
                    else {
                      console.log("Archivos escritos en apigateway corrrectamente");
                     
                     
                    }
                  })

                  let bodyFormData = new FormData();
                  const file= fs.createReadStream("./public/" + iterator.nombre)
                  bodyFormData.append('files',file); 
                  

                 
                  await axios({
                    method: "post",
                    url:config.urlGatewayExpedientes+"documentos/"+req.params.id+"/",
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
            
            res.status(200).json(data3.data)
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
views.CargarDocumentos = async (req, res, intento = 2) => {

  let datos = []

  try {
    // console.log(req.file)
    if (Object.keys(req.files).length < 1) { res.sendStatus(error({ message: "No ha subido ningun archivo" })); return }



    for await (const iterator of req.files) {

      await unirest
        .post(config.urlDocumentos+"documentos/")


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
views.ActualizarExpediente = async (req, res) => {
  try {
    if (req.body.fecha_registro) {delete req.body["fecha_registro"];}
    if (req.body.numero_radicado) {delete req.body["numero_radicado"];}
    if (req.body.numero_caso) {delete req.body["numero_caso"];}

    axios.patch(config.urlApiExpedientes+"expedientes/"+req.params.id+"/",req.body)
      .then(result=>{
        res.status(200).json(result.data)
    })
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

   await axios.post(config.urlApiExpedientes+"personas/",req.body)
      .then(async result=>{
        const datos={persona_id:result.data.id,expediente_id:req.params.id,tipo_cliente_id:1}
      await  axios.post(config.urlApiExpedientes+"relaciones_persona_expediente/",datos)
          .then(result=>{
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
views.CrearConvocados = async (req, res) => {
  try {

   await axios.post(config.urlApiExpedientes+"personas/",req.body)
      .then(async result=>{
        let datos={persona_id:result.data.id,expediente_id:req.params.id,tipo_cliente_id:2}
      await  axios.post(config.urlApiExpedientes+"relaciones_persona_expediente/",datos)
          .then(result=>{
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
views.AgregarConvocantes = async (req, res) => {
  try {
  
    axios.get(config.urlApiExpedientes+"personas?search="+req.params.identificacion)
      .then(async result=>{

        const datos={persona_id:result.data.results[0].id,expediente_id:req.params.id,tipo_cliente_id:1}
       await axios.post(config.urlApiExpedientes+"relaciones_persona_expediente/",datos)
          .then(result=>{
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
views.AgregarConvocados = async (req, res) => {
  try {
  
    axios.get(config.urlApiExpedientes+"personas?search="+req.params.identificacion)
      .then(async result=>{
        // await axios.get(config.urlApiExpedientes+"relaciones_persona_expediente=persona_id="+result.data.results[0].id)
        // .then((result) => {
        //   if(Object.keys(result.data).length>0){res.sendStatus(208); return}
        // })
        
        const datos={persona_id:result.data.results[0].id,expediente_id:req.params.id,tipo_cliente_id:2}
       await axios.post(config.urlApiExpedientes+"relaciones_persona_expediente/",datos)
          .then(result=>{
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
module.exports = views;