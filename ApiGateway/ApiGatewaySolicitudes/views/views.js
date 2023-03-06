const axios = require("axios");
const express = require("express");
const unirest = require('unirest');
const fs = require('fs');
const FormData = require('form-data');
const app = express(); // aplicaicon express
const views = {};
const error = require("../requests/requests_error.js")
const config = require("../config.json");
const requests = require("../requests/requests_generales.js");
const { query } = require("express");


function cadenaAleatoria(longitud) {
  
  // Nota: no uses esta función para cosas criptográficamente seguras. 
  const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let aleatoria = "";
  for (let i = 0; i < longitud; i++) {
      // Lee más sobre la elección del índice aleatorio en:
      // https://parzibyte.me/blog/2021/11/30/elemento-aleatorio-arreglo-javascript/
      aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
  }

  return aleatoria;
 
};

const email = (tipo_mensaje, correoQuienRecibe, asunto, encabezado,cuerpo,adjunto=false) => {
  
  const correoCopia=process.env.correoCopia || 'jairourrego123@gmail.com';
  correoQuienRecibe.push(correoCopia)
  let email = {
    nombre_servicio:"Centro De Conciliación, Arbitraje y Amigable Composición",
    tipo_mensaje: tipo_mensaje,
    destinatario: correoQuienRecibe,
    asunto: asunto,
    mensaje: {
      saludo: "<br>Reciba un cordial saludo",
      encabezado: encabezado,
      cuerpo:cuerpo,
      despedida: "Gracias por la atención prestada",
      
    }
  }
  if(adjunto){ email.adjunto=adjunto}
  return email
}
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
      config.urlApiSolicitudes + 'areas',
      config.urlApiSolicitudes + 'temas',
      config.urlApiSolicitudes + 'grupos_etnicos',
      config.urlApiSolicitudes + 'estados_civiles',
      config.urlApiSolicitudes + 'estratos_socioeconomicos',
      // config.urlApiSolicitudes + 'tipos_discapacidad',
      // config.urlApiSolicitudes + 'tipos_vivienda',
      // config.urlApiSolicitudes + 'escolaridades',





    ];

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread((data1, data2, data3, data4, data5, data6,data7,data8,data9,data10,data11) => {
        
        datos = {
          "tipos_documento": data1.data.results,
          "tipos_persona": data2.data.results,
          "paises": data3.data.results,
          "departamentos": data4.data.results,
          "generos": data5.data.results,
          "sexos": data6.data.results,
          "areas": data7.data.results,
          "temas": data8.data.results,
          "grupos_etnicos": data9.data.results,
          "estados_civiles":data10.data.results,
          "estratos_socioeconomicos":data11.data.results,
          // "tipos_discapacidad":data12.data.results,
          // "tipos_viviendas":data13.data.results,
          // "escolaridades": data14.data.results

          


        }
        res.status(200).json(datos)

      }))
      .catch(err => {
        console.log(err)
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
    if(req.body.apoderado){    if (Object.keys(req.body.apoderado).length > 0) {
    
    // req. ? if condicion es verdadera : if condicion es falsa
      

      if (!(req.body.apoderado[0].identificacion && req.body.apoderado[0].identificacion != "")) { res.sendStatus(error({ message: "El numero de identificacion del apoderado es incorrecto" })); return; }
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
  }
    let datos = []

    datos.push(req.body.convocante[0])
    datos.push(req.body.convocado[0])
    
    const personas = [config.urlApiSolicitudes + "personas_solicitud/", datos]
    
    
    let endpoints = [personas]
    axios.post(config.urlApiSolicitudes + "solicitudes/", { estado_solicitud_id: 1 })
    .then(async data2=>{
    // const hechos=config.urlApiSolicitudes+"hechos/"+","+
    await Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
      .then(axios.spread(async (data1) => {
        
      const  encabezado = `Este mensaje notifica que hemos recibido una solicitud de audiencia al Centro de Conciliación José Ignacio Talero Losada 
        de la Universidad La Gran Colombia con el siguiente número de radicado: <b>${data2.data.numero_radicado}</b> `
      const cuerpo= `<br>Le invitamos a estar atento a  este medio de comunicación con el objetivo de indicarle el estado de su solicitud y demás información importante para su proceso.`
      let asunto = `Solicitud de Conciliacion ${data2.data.numero_radicado}`
        
        
        req.params.id = data2.data.id
        req.body.hechos[0].solicitud_id = data2.data.id
        const relacion_convocante_solicitud = [config.urlApiSolicitudes + "relaciones_persona_solicitud/", { solicitud_id: data2.data.id, persona_id: data1.data[0].id, tipo_cliente_id: 1 }]
        const relacion_convocado_solicitud = [config.urlApiSolicitudes + "relaciones_persona_solicitud/", { solicitud_id: data2.data.id, persona_id: data1.data[1].id, tipo_cliente_id: 2 }]
        const hechos = [config.urlApiSolicitudes + "hechos/", req.body.hechos[0]]
        const documentos = await views.CargarDocumentos(req, res, 1)
        if (documentos) {
          const url=config.urlApiSolicitudes+"solicitudes/"+data2.data.id+"/"
          requests.delete(req, res, url)
          return;
        }

      
        endpoints = [relacion_convocante_solicitud, relacion_convocado_solicitud, hechos]
        
        await Promise.all(endpoints.map((endpoint) => axios.post(endpoint[0], endpoint[1])))
          
          .then(axios.spread(() => {
           
            const correo =  axios.post(config.urlEmail,email("html",[req.body.convocante[0].correo],asunto,encabezado,cuerpo)).catch(err => {res.status(error(err))})
        
            
            res.status(201).json(data2.data)
        
            // res.status(201).json(data2.data[0])

          }))
          .catch(err => {
            const url=config.urlApiSolicitudes+"solicitudes/"+data2.data.id+"/"
            requests.delete(req, res, url)
          
            res.status(error(err))
            return

          })

      }))
      .catch(err => {
        
        const url=config.urlApiSolicitudes+"solicitudes/"+data2.data.id+"/"
        requests.delete(req, res, url)
        
        res.status(error(err))
        return
        
      })
    })
    .catch(err => {
        
      res.sendStatus(error(err))
      
      
    }) 
    // const hechos= config.urlApiSolicitudes+"hechos",{solicitud_id:}

  } catch (error) {
    
   
    console.log(error);
    res.sendStatus(500);
  }
}

//crear solicitud
views.CargarDocumentos = async (req, res, intento = 2) => {

  
  try {
    let datos = []
    
    // console.log(req.file)
    
    if (Object.keys(req.files).length < 1) { falla=true; res.sendStatus(error({ message: "No ha subido ningun archivo" })); return }

    let falla=false
    
    for await (const iterator of req.files) {
  
  
  
      await unirest
        .post(config.urlApiSolicitudes + 'documentos/')


        .field('estado', true)
        .field('nombre',iterator.originalname)
        .field('solicitud_id', req.params.id)


        //.attach('Ruta_directorio', req.file.path) // reads directly from local file
        .attach('documento', fs.createReadStream(iterator.path)) // creates a read stream
        //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
        .headers({"X-Api-Key":config.apiKey,"Content-Length": iterator.size})
        .then(function (response) {
          
        
          try {
            
            fs.unlinkSync(iterator.path)
          } catch (err) {
           
            error(err) 
          }
         
          datos.push(response.body)

        })
        .catch((err)=>{
          falla=true
          res.status(error(err))
          return;
        })
        
        
    }
    if (intento < 2) { return falla;
     }
     
     if(!falla){
    
     await axios.patch(config.urlApiSolicitudes+"solicitudes/"+req.params.id+"/",{estado_solicitud_id:1})
      .then(result=>{
      
        res.status(201).json(datos)
     })
      .catch(err => {
        res.sendStatus(error(err))
      })
    
    } else{res.sendStatus(400)}


  } catch (error) {
    
    console.log(error);

  }
}

views.Listar_estados_solicitud = async (req, res) => {
  try {
    let query = ""
    if ((req.url.indexOf('?')) > 0) {
   
      query = '&' + req.url.slice(req.url.indexOf('?') + 1)

    }


    axios.get(config.urlApiSolicitudes + "relaciones_persona_solicitud?persona_id__identificacion=" + req.params.identificacion+query)
      .then(result=>{
        
        res.status(200).json(result.data)
    })
      .catch(err => {
        res.sendStatus(error(err))
      })


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
views.Listar_estados_expediente = async (req, res) => {
  try {
    let query = ""
    if ((req.url.indexOf('?')) > 0) {
   
      query = '&' + req.url.slice(req.url.indexOf('?') + 1)

    }
    axios.get(config.urlApiExpedientes + "relaciones_persona_expediente?persona_id__identificacion=" + req.params.identificacion+query)
      .then(result=>{
        let datos=[]
        for (const iterator of result.data.results) {
          datos.push({fecha_registro:iterator.fecha_registro,numero_caso:iterator.numero_caso,estado_expediente:iterator.estado_expediente,numero_radicado:iterator.numero_radicado,expediente_id:iterator.expediente_id,persona_id:iterator.persona_id})
        }
        result.data.results=datos
        res.status(200).json(result.data)
    })
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



views.EnviarResultadoExpediente = async (req, res) => {
  try {

          
      
          let endpoints=[config.urlApiExpedientes+"resultados?expediente_id="+req.params.id,config.urlApiExpedientes+"citaciones?expediente_id="+req.params.id,config.urlApiExpedientes+"expedientes/"+req.params.id,config.urlApiExpedientes+"relaciones_persona_expediente?expediente_id="+req.params.id+"&persona_id="+req.body.persona_id]
          await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
          
          .then(axios.spread(async (data1, data2, data3,data4) => {
            
            if(Object.keys(data4.data.results).length<1){res.sendStatus(403);return}
            let cuerpo=""
            const saludo = `<br>Reciba un cordial saludo `
            let asunto = `Consulta del expediente:${data3.data.numero_caso}`
            const  encabezado = `Este mensaje notifica que el estado de su expediente ${data3.data.numero_caso} es el siguiente:<br><br>
            <b>Numero Caso:</b> ${data3.data.numero_caso}
            <br><b>Estado Actual :</b>${data3.data.estado_expediente}
            `
            
            if(Object.keys(data1.data.results).length<1){
              
              if(Object.keys(data2.data.results).length<1){
                
                cuerpo=cuerpo+"<br>Le invitamos a estar atento a  este medio de comunicación con el objetivo de indicarle el estado de su solicitud y demás información importante para su proceso. "
                const correo = axios.post(config.urlEmail, email("html", [data4.data.results[0].correo], asunto, encabezado, cuerpo)).catch(err => { (error(err));  })
                return;
              }
           
              cuerpo=cuerpo+`<br>Además, cuenta con la siguiente fecha de audiencia<br>
                  <br><b>Expediente:</b> ${data2.data.results[0].numero_caso}
                  <br><b>Fecha:</b> ${data2.data.results[0].fecha_sesion} 
                  <br><b>Hora:</b> ${data2.data.results[0].turno} 
                  <br><b>Medio:</b> ${data2.data.results[0].medio} 
                  <br><b>Enlace:</b> ${data2.data.results[0].enlace} 
                  <br><b>Descripcion:</b> ${data2.data.results[0].descripcion} 
              `
              const correo = axios.post(config.urlEmail, email("html", [data4.data.results[0].correo], asunto, encabezado, cuerpo)).catch(err => { (error(err)); falla=true  })
              return
            }else{
              
              if(!data1.data.results[0].documento){ cuerpo="<br>Cabe mencionar que en este momento no cuenta con un resultado del caso"; res.sendStatus(200)
              const correo = axios.post(config.urlEmail, email("html", [data4.data.results[0].correo], asunto, encabezado, cuerpo)).catch(err => { (error(err));}); return}
              
              cuerpo=cuerpo+"<br>El resultado del caso se anexa en esta correo."
               await axios.get(data1.data.results[0].documento,{ responseType: 'arraybuffer' })
                 .then(async result=>{
                  fs.writeFile("./public/resultado.pdf", result.data, async (err) => {console.log(err)})
              let formdata = new FormData()
              let fil = fs.createReadStream("./public/resultado.pdf",)
              formdata.append("adjunto", fil)
                      // res.end(result.data)
                     await axios.post(config.urlEmail+"adjuntar",formdata)
                        .then(response=>{
                          try {
                            fs.unlinkSync("./public/resultado.pdf")
                          } catch (err) {
                            error(err)
                            return
                          }
                         
                          const correo = axios.post(config.urlEmail, email("html", [data4.data.results[0].correo], asunto, encabezado, cuerpo,response.data)).catch(err => { (error(err));})
                          
                          // console.log(result.data)
                      })
                        .catch(err => {
                          res.sendStatus(error(err))
                        })


               })
                 .catch(err => {
                   res.status(error(err))
                 })
               
            }
           
            res.status(200).json("ok")


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
views.VerificarCodigo = async (req, res) => {
  try {
    axios.get(config.urlApiSolicitudes+"codigos?solicitud_id="+req.params.id)
      .then(result=>{
   
        if (Object.keys(result.data.results).length<1) {res.sendStatus(401);return}
        if(req.body.codigo!=result.data.results[0].codigo){res.sendStatus(401);return}
        res.sendStatus(200)
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
views.CodigoSolicitud = async (req, res) => {
  try {
    
    axios.get(config.urlApiSolicitudes+"personas_solicitud/"+req.body.persona_id)
      .then(async resul=>{
        const codigo=cadenaAleatoria(5)
        await axios.post(config.urlApiSolicitudes+"codigos/",{codigo:codigo,solicitud_id:req.params.id})
          .then(result=>{
        
        res.sendStatus(200)
        const  encabezado = `Este mensaje notifica que estas intentando ingresar a la solicitud número:<b> ${req.body.numero_radicado}</b> y para esto debes ingresar la siguiente clave de acceso:<br><br>Clave de Acceso: <b>${result.data.codigo}</b>`
        const cuerpo= `<br>Le invitamos a estar atento a  este medio de comunicación con el objetivo de indicarle el estado de su solicitud y demás información importante para su proceso.`
        let asunto = `Clave de Acceso Solicitud  ${req.body.numero_radicado}`
        
        const correo =  axios.post(config.urlEmail,email("html",[resul.data.correo],asunto,encabezado,cuerpo)).catch(err => {res.status(error(err))})
    
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

views.ListarSolicitudes = async (req, res) => {
  try {
    axios.get(config.urlApiExpedientes+"modulos")
    .then((result)=>{
      if(!result.data.modulo_solicitudes){res.status(200).json({results:[]});return}
      const url = config.urlApiSolicitudes + req.route.path.slice(1)
      requests.get(req, res, url, "?")
      
    })
    
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}


// app.use(verifier);
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
                if ((result.data.apoderado_id == null | result.data.apoderado_id == "")) { return }
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
                       } else{

          await axios.get(config.urlApiSolicitudes + "personas_solicitud/" + iterator.persona_id)
            .then(result => {
         
              datos.convocado = result.data
             
            })
            .catch(err => {
              error(err)
            })
          }
        }
        datos.documentos = data3.data

        
        res.status(200).json(datos)

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
views.DetalleSolicitud = async (req, res) => {
  try {

      try {
        const url = config.urlApiSolicitudes  + "solicitudes/"+req.params.id
        requests.get(req, res, url, "?")
    
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }

  }catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
views.AprobarSolicitud = async (req, res) => {
  try {
    
    let  cuerpo =""
    const  encabezado = `Este mensaje notifica que el estado de su solicitud ${req.body.numero_radicado} es el siguiente:<br><br>
     <b>Numero Radicado:</b> ${req.body.numero_radicado}
     <br><b>Estado actual :</b>${req.body.estado_solicitud}
     <br><b>Comentario :</b> ${req.body.comentario}   
     `
     
    let asunto = `Cambio de estado de la Solicitud: ${req.body.numero_radicado}`
    
    
  
    axios.patch(config.urlApiSolicitudes + "solicitudes/" + req.params.id + "/", req.body)
      .then(async resul => {
    
      
        let correoConvocante =[]
        // console.log(config.urlGatewaySolicitudes+"solicitudes/"+req.params.id)
          
         
          await axios.get(config.urlGatewaySolicitudes + "solicitudes/" + req.params.id,{headers:{authorization :req.headers.authorization,"X-Api-Key":config.apiKey}})
            .then(async result => {
            
              // const myHeaders = new Headers();
              // myHeaders.append('X-Api-Key', 'image/jpeg');
              // myHeaders.append('Id', 'image/jpeg');
              correoConvocante.push(result.data.convocante.correo)
              //req.headers['X-Api-Key'] =config.apiKey ;
              // req.headers['Id'] ="jairo"
              if (req.body.estado_solicitud_id == 2) {
       
              result.data.conciliador = req.body.conciliador_id
              result.data.hechos[0].cuantia = req.body.valor_caso
              
              await axios.post(config.urlGatewayExpedientes + "expedientes/", result.data,{headers:{authorization :req.headers.authorization}})
                .then(resul => {
                  
                  // res.status(200).json(resul.data)
                  if(req.body.numero_caso !=""){
                    cuerpo = `<br> Conforme al estado actual de tu solicitud, nos complace informarte que ahora cuentas con un conciliador asignado y un nuevo número de referencia el cual te permitirá identificar tu caso en nuestro Centro de Conciliación. <br> 
                    <br><b>Expediente:</b> ${resul.data.numero_caso}
                    <br><b>Conciliador:</b> ${req.body.conciliador}
                   `
                   }
              
                 
                  res.status(200).json(resul.data)
                })

                .catch(err => {
                 console.log("el error esta en este catch");
                  res.status(error(err)).json(error(err))
                  
                  return 
                })
              }
              else{
                res.status(200).json(resul.data)
                cuerpo= cuerpo + `<br>Recuerde que podrá consultar esta y demás información del caso en la página principal del Centro de Conciliación en la sección: <b>Consulta tu solicitud</b> 
                pulsando click en la opción <b>Solicitudes</b> e ingresando su número de identificación para luego seleccionar la solicitud:<b> ${req.body.numero_radicado}</b>.
                
                <br><b>Nota:*</b>Si su solicitud se encuentra en el estado: <b>FALTA DE INFROMACIÓN</b>  se le habilitara en el módulo <b>Consulta tu Solicitud</b>  
                la opción de ingresar al detalle de su solicitud mediante su número de identificación  y allí subir los documentos solicitados.( EL TAMAÑO LIMITE TOTAL DE LOS ARCHIVOS ES 10Mb)</b>:`
                cuerpo= cuerpo+`<br><br>Le invitamos a estar atento a  este medio de comunicación con el objetivo de indicarle el estado de su solicitud y demás información importante para su proceso.`
               
            }
            
           
            const correo =  axios.post(config.urlEmail,email("html",correoConvocante,asunto,encabezado,cuerpo)).catch(  err => {res.status(error(err))})
            
            })
            .catch(err => {
              
              res.status(error(err)).json(error(err))
              return
            })
      
      
      })
      .catch(err => {
        
        res.sendStatus(error(err))
      })
      
    } catch (error) {

    console.log(error);
    res.sendStatus(500);
  }
}
views.EstadoSolicitud = async (req, res) => {
  try {
    axios.get(config.urlApiSolicitudes+"solicitudes/"+req.params.id)
      .then(result=>{
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

module.exports = views;