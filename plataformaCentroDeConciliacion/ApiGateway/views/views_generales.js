const axios = require('axios'); 

const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json');
const { response } = require('express');
const res = require('express/lib/response');



views.Ciudades= (req,res)=>{
    axios.get(config.urlApiConciliacion + "/ciudades?Departamento_Id=" +req.params.id)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.Subtema= (req,res)=>{

    let datos = {}
    axios.get(config.urlApiConciliacion + "/subtemas?Tema_Id=" +req.params.id)
    .then(response => {
        datos=response.data
        res.status(200).json(datos)

    })


    .catch(function (error) {
        console.log(error);
        res.sendStatus(500).json(error)
    })
    
}


views.GetGeneral= (req,res)=>{
    axios.get(config.urlApiConciliacion + "/" +req.params.nombre)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.GetGeneralId= (req,res)=>{
    axios.get(config.urlApiConciliacion + "/" +req.params.nombre + "/" + +req.params.id)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}


views.PatchGeneralId= (req,res)=>{
    console.log(req.body)
    axios.patch(config.urlApiConciliacion + "/" +req.params.nombre + "/" +req.params.id+"/",req.body)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        //console.log(error);
        res.sendStatus(500)
    })
    
}
views.GetGeneralId= (req,res)=>{
    axios.get(config.urlApiConciliacion + "/solicitudes/"+req.params.id)
    .then((result) => {
        res.status(200).json(result.data)
    }).catch((err) => {
        res.status(404).json(err)
        
    });


}
views.Docentes= (req,res)=>{

    axios.get(config.urlApiConciliacion + "/personas?Tipo_cargo_Id=2")
    .then((result) => {
        res.status(200).json(result.data)
    }).catch((err) => {
        res.status(404).json(err)
        
    });


}
views.Solicitudesview= (req,res)=>{
    identificacion=12345
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then((result) => {
        console.log("//////////////////////////////////")
        console.log(result.data)
        axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then((result) => {
           
            console.log(result.data)
            datosPersonas.Solicitudes(result)
            .then((result) => {
                
            res.status(200).json(result)
            })
        })
       
    }).catch((err) => {
        res.status(404).json(err)

        
    });


}

views.SolicitudesviewHistorial= (req,res)=>{
    identificacion=12345
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then((result) => {
        
        console.log(result.data)
        axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then((result) => {
            console.log(result.data)
            datosPersonas.Historial(result)
            .then((result) => {
            res.status(200).json(result)
            })
        })
       
    }).catch((err) => {
        res.status(404).json(err)

        
    });


}
views.SolicitudesviewEspecificas= (req,res)=>{
    identificacion=12345
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then((result) => {
        
        console.log(result.data)
        axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then((result) => {
            console.log(result.data)
            datosPersonas.SolicitudesSearch(result,req.params.search)
            .then((result) => {
            res.status(200).json(result)
            })
        })
       
    }).catch((err) => {
        res.status(404).json(err)

        
    });


}
views.InformacionPersona= (req,res)=>{

    let datos={}
    
    axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    .then(response => {
        console.log(response)
        datosPersonas.datosCompletos(response)
        .then((result) => {
             
            res.status(200).json(result)
            
     
        }
   )
    })
   
  .catch((err) => {
      res.status(404).json(err)
  });
   
   


}



views.FechasDisponibles=(req,res)=>{

    axios.get(config.urlApiConciliacion + "/citaciones?Fecha_sesion="+req.params.fecha)
   
    .then(response=>{

        axios.get(config.urlApiConciliacion + "/turnos")
        .then(turno=>{

            Turnos(response,turno)
            .then(lista=>{
                res.status(200).json(lista)
            })
            
        })
       
    

        
    })
    .catch((err) => {
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
// Esta funcion envia los datos especificos de la citacio con las personas incluidaas 

const InfoCitaciones = async (resp,response)=>{ /// resp   las personas repsonse citacion especifica
    let endpoints = []
    let datos={}
    let personas={}
    
try{

       
        endpoints = [
            config.urlApiConciliacion + "/turnos/"+response.data.Turno_Id,
            config.urlApiConciliacion + "/tipos_medio/"+response.data.Tipo_medio_Id
        ]
      
      await Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            
            axios.spread((...allData) => {
               
            response.data.Turno_Id=allData[0].data
            response.data.Tipo_medio_Id=allData[1].data
            
            datos["Citacion"] = response.data
          //  console.log(response.data)
            })
            );
            console.log("//////////////")
     
        for await (const informacion_data of resp.data) {
            const res = await axios.get(config.urlApiConciliacion + "/personas/"+informacion_data.Persona_Id);
           personas[informacion_data.Persona_Id]=res.data

           
        }
       datos["Personas"]=personas
            return datos
         
    //console.log(datos)
   

} catch(err){
    throw new Error(err);
}

}    

// Esta funcion envia los datos especificos de la citacio con las personas incluidaas 
views.InformacionCitacion=(req,res)=>{

    let datos={}
axios.get(config.urlApiConciliacion + "/citaciones/"+req.params.id)
.then(response => {

    axios.get(config.urlApiConciliacion + "/relaciones_citacion_persona?Citacion_Id="+req.params.id)
    .then(resp => {
    
       
    InfoCitaciones(resp,response)
    .then(response => {
       // console.log(response)
        res.status(200).json(response)
        
    }).catch((err) => {
        
        res.status(404).json(err)
    });   



})
    
})

}
    
module.exports = views