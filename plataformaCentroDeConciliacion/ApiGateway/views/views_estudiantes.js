const axios = require('axios'); 
const { get } = require('express/lib/response');
const config =require ('../config.json')
const views = {}
const datosPersonas = require('../views/datos')



views.ListarEstudiantes=async(req,res)=>{
    try{
    await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=4&Solicitud_Id=" + req.params.id)
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


views.AsignarEstudiante=async(req,res)=>{
    try{
    let datos={}
    
     
        await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
        .then(async resp => {
        datos = {
            "Solicitud_Id":req.params.id,
            "Persona_Id":resp.data[0].Id,
            "Tipo_cliente_Id":4
        }
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
        
             })
        
     
        
    }catch(error){
    
        console.log(error)
        res.sendStatus(400)
    }
    
}
   
views.BuscarEstudiante= async(req,res)=>{
    try{
        await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=4&Solicitud_Id=" + req.params.id)
       .then(response => { 
       
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