
const axios = require('axios') 
const config =require ('../config.json')
const views = {}
const datosPersonas = require('../views/datos')

views.Traer_datos= (req,res)=>{

    let datos={}
    axios.get(config.urlApiConciliacion + "/solicitante_servicios")
    .then(response => {
       datos["Solicitante_servicio"]=response.data
 
        axios.get(config.urlApiConciliacion + "/tipos_servicio")
        .then(response => {
        datos["Tipo_servicio"]=response.data


            axios.get(config.urlApiConciliacion + "/inicio_conflictos")
            .then(response => {
            datos["Inicio_conflicto"]=response.data

               
                    
                
                axios.get(config.urlApiConciliacion + "/areas")
                .then(response => {
                    datos["Area"]=response.data
                    


                    axios.get(config.urlApiConciliacion + "/temas")
                    .then(response => {
                        datos["Tema"]=response.data
                        res.status(200).json(datos)
                        
                        


                        
                
                    })

                        
                
                
            
                })
                    
               

            })
        })
    })

    .catch(function (error) {
        console.log(error);
        res.sendStatus(500).json(error)
    })


   
  
}

views.Crear= (req,res)=>{
console.log(req.body)
    let datos =
        {
            "Descripcion": req.body.Descripcion,
            "Fecha_finalizacion": req.body.Fecha_finalizacion,
            "Caso_gratuito": req.body.Caso_gratuito,
            "Asunto_juridico_definible": req.body.Asunto_juridico_definible,
            "Area_Id": req.body.Area_Id,
            "Subtema_Id": req.body.Subtema_Id,
            "Tipo_servicio_Id": req.body.Tipo_servicio_Id,
            "Tipo_resultado_Id": req.body.Tipo_resultado_Id,
            "Inicio_conflicto_Id": req.body.Inicio_conflicto_Id,
            "Solicitante_servicio_Id": req.body.Solicitante_servicio_Id
                              
        }
    

    axios.post(config.urlApiConciliacion + "/solicitudes/",datos)
    
      
    .then(response => {
        
        res.status(201).json(response.data)

    })
    .catch(function (error) {
          res.sendStatus(500).json(error)
    })

    
}

views.EliminarPersona=(req,res)=>{
    axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.documento)
    .then(response => {
        console.log(response.data)
        axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id="+ req.params.id+ "&Persona_Id="+response.data[0].Id ) 
        .then( response =>{
            
           
           
            axios.delete(config.urlApiConciliacion + "/relaciones_solicitud_persona/"+response.data[0].Id + "/")
            .then( rest => {
                console.log(rest.data)
                res.status(202).json(rest.data)
            })
        })
    })
    
    .catch((err) => {
        res.status(404).json(err)
    });
}

views.Personas_de_una_solicitud=(req,res)=>{

    axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id=" + req.params.id)
    .then(response => { 
    
          datosPersonas.datosBasicos(response)
          .then((result) => {
              
              res.status(200).json(result)
              
          }).catch((err) => {
             res.status(404).json(err)
          });   
     
         }
     )
     
    .catch((err) => {
        res.status(404).json(err)
    });
}

views.ListarSolicitudes= (req,res)=>{
    axios.get(config.urlApiConciliacion + "/solicitudes")
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.InformacionSolicitud= (req,res)=>{
    axios.get(config.urlApiConciliacion + "/solicitudes/"+req.params.id)
    .then((result) => {
        console.log( result)
        datosPersonas.SolicitudesEspecificas(result)
        .then((result) => {
            
            res.status(200).json(result)
        })
     
    }).catch((err) => {
        res.status(404).json(err)
        
    });


}



views.CrearSolicitud= (req,res)=>{

    let datos =
        {
            "Descripcion": req.body.Descripcion,
            "Fecha_finalizacion": req.body.Fecha_finalizacion,
            "Caso_gratuito": req.body.Caso_gratuito,
            "Asunto_juridico_definible": req.body.Asunto_juridico_definible,
            "Area_Id": req.body.Area_Id,
            "Subtema_Id": req.body.Subtema_Id,
            "Tipo_servicio_Id": req.body.Tipo_servicio_Id,
            "Tipo_resultado_Id": req.body.Tipo_resultado_Id,
            "Inicio_conflicto_Id": req.body.Inicio_conflicto_Id,
            "Solicitante_servicio_Id": req.body.Solicitante_servicio_Id
                                
        }
    

    axios.post(config.urlApiConciliacion + "/solicitudes/",datos)
    
        
    .then(response => {
        
        res.status(201).json(response.data)

    })
    .catch(function (error) {
            res.sendStatus(500).json(error)
    })

    
}
module.exports = views


