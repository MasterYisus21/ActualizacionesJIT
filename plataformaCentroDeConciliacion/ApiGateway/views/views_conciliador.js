const axios = require('axios'); 
const { get } = require('express/lib/response');
const config =require ('../config.json')
const views = {}
const datosPersonas = require('../views/datos')



views.ListarConciliadores=async(req,res)=>{
    try{
       
        // if(req.idpermiso==0){res.sendStatus(401);return }
        // const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
        
        // if(!response.data.Permiso_consulta){
        //     console.log("error")
        //     res.sendStatus(401)
        //     return
        // }
   let docentes= await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=3&Solicitud_Id=" + req.params.id)
   await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=5&Solicitud_Id=" + req.params.id)
   .then(async response => { 
    response.data=response.data.results
    docentes.data=docentes.data.results
    for (const iterator of docentes.data) {response.data.push(iterator)}
        
    
       await datosPersonas.datosBasicos(response)
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


views.AsignarConciliador=async(req,res)=>{
    try{
        if(req.idpermiso==0){res.sendStatus(401);return }
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_crear){
            
            res.sendStatus(401)
            return
        }
        let datos={}
        axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
        .then(async resp => {
               datos = {
                   "Solicitud_Id":req.params.id,
                   "Persona_Id":resp.data[0].Id,
                   "Tipo_cliente_Id":3
               }
            
               let validacion= await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id="+req.params.id + "&Persona_Id="+resp.data[0].Id)
               validacion.data=validacion.data.results
        
               if(validacion.data.length>0){res.sendStatus(208)}else{
               axios.post(config.urlApiConciliacion + "/relaciones_solicitud_persona/",datos)
               .then( async response => {
                   const resp = await axios.get(config.urlApiConciliacion + "/personas/"+response.data.Persona_Id);
                   const documento = await  axios.get(config.urlApiConciliacion + "/tipos_documento/"+resp.data.Tipo_documento_Id);
                   const tipo = await  axios.get(config.urlApiConciliacion + "/tipos_persona/"+resp.data.Tipo_persona_Id);
                   resp.data.Tipo_documento_Id= documento.data
                   resp.data.Tipo_persona_Id=tipo.data            
                           datos={
                               "persona":resp.data,
                               "relacion":response.data
                           }
                           res.status(201).json(datos)
                             
                         })
                .catch(function (error) {
                      res.sendStatus(500).json(error)
                })
            
    
            }
                
    
        })
    
       
        }catch(error){
        
            console.log(error)
            res.sendStatus(400)
        }
        
    
    }    

views.BuscarConciliador= async(req,res)=>{
    try{
        if(req.idpermiso==0){res.sendStatus(401);return }
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_consulta){
            console.log("error no tiene permisos")
            res.sendStatus(401)
            return
        }
        await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=3&Solicitud_Id=" + req.params.id)
       .then(response => { 
            response.data=response.data.result
            datosPersonas.BuscarPersona(response,req)
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
   
module.exports = views