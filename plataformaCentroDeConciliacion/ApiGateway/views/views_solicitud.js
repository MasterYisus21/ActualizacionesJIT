
const axios = require('axios') 
const config =require ('../config.json')
const views = {}
const datosPersonas = require('../views/datos')
const identificacion=1234
views.Traer_datos= async(req,res)=>{
try{
    let datos={}
    await axios.get(config.urlApiConciliacion + "/solicitantes_servicio")
    .then(async response => {
       datos["Solicitante_servicio"]=response.data
 
       await  axios.get(config.urlApiConciliacion + "/tipos_servicio")
        .then(async response => {
        datos["Tipo_servicio"]=response.data


            await axios.get(config.urlApiConciliacion + "/inicios_conflicto")
            .then(async response => {
            datos["Inicio_conflicto"]=response.data

               
                    
                
                await axios.get(config.urlApiConciliacion + "/areas")
                .then(async response => {
                    datos["Area"]=response.data
                    


                   await axios.get(config.urlApiConciliacion + "/temas")
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
        res.sendStatus(404).json(error)
    })

}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

   
  
}

views.Crear= async (req,res)=>{
    try{
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
    
    if ((await axios.post(config.urlApiConciliacion + "/solicitudes/"+req.params.id).length>0)) {
        
        
    }

    await axios.post(config.urlApiConciliacion + "/solicitudes/",datos)
    
      
    .then(response => {
        
        res.status(201).json(response.data)

    })
    .catch(function (error) {
          res.sendStatus(500).json(error)
    })

}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

views.EliminarPersona=async(req,res)=>{
    try{
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_eliminar){
            console.log("error")
            res.sendStatus(401)
            return
        }
   await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.documento)
    .then(async response => {
        console.log(response.data)
        await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id="+ req.params.id+ "&Persona_Id="+response.data[0].Id ) 
        .then( async response =>{
            
           
           
          await  axios.delete(config.urlApiConciliacion + "/relaciones_solicitud_persona/"+response.data[0].Id + "/")
            .then( rest => {
                console.log(rest.data)
                res.status(202).json(rest.data)
            })
        })
    })
    
    .catch((err) => {
        res.status(404).json(err)
    });
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

views.Personas_de_una_solicitud=async(req,res)=>{

try{
   await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id=" + req.params.id)
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
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

views.ListarSolicitudes= async(req,res)=>{
    try{
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_colsulta){
            
            res.sendStatus(401)
            return
        }
    

        await axios.get(config.urlApiConciliacion + "/solicitudes")
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(500)
        })
       

  
   
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}
   
}

views.InformacionSolicitud= async(req,res)=>{
try{

    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
    if(!response.data.Permiso_colsulta){
        
        res.sendStatus(401)
        return
    }
    
 
   
    await axios.get(config.urlApiConciliacion + "/solicitudes/"+req.params.id)
    .then((result) => {
        console.log( result)
        datosPersonas.SolicitudesEspecificas(result)
        .then((result) => {
            
            res.status(200).json(result)
        })
     
    }).catch((err) => {
        res.status(404).json(err)
        
    });
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}



}

views.ActualizarSolicitud= async(req,res)=>{
try{
    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)

    if(!response.data.Permiso_actualizar){
        
        res.sendStatus(401)
        return
    }
    
    await axios.patch(config.urlApiConciliacion + "/solicitudes/" +req.params.id+"/",req.body)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        //console.log(error);
        res.sendStatus(500)
    })
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}


views.CrearSolicitud= async(req,res)=>{
    try{
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
    

    await axios.post(config.urlApiConciliacion + "/solicitudes/",datos)
    .then(async response => {
        let datos ={}
        let historico={Descripcion:"Nuevo",
                        Solicitud_Id:response.data.Numero_caso,
                        Tipo_estado_Id: 1}
        await axios.post(config.urlApiConciliacion + "/historicos_solicitud/",historico)
       
        const admin = await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
       
        datos={
            "Solicitud_Id":response.data.Numero_caso,
            "Persona_Id": admin.data[0].Id, //admin.data[0].Id,
            "Tipo_cliente_Id":3
        }
        const relacion_sol_per = await axios.post(config.urlApiConciliacion + "/relaciones_solicitud_persona/",datos)
       
        

        res.status(201).json(response.data)

    })


}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}
   
}
module.exports = views


