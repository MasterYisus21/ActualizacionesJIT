const axios = require('axios'); 
const { get } = require('express/lib/response');
const config =require ('../config.json')
const views = {}
const datosPersonas = require('../views/datos')



views.ListarConciliadores=async(req,res)=>{
    try{
    await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=3&Solicitud_Id=" + req.params.id)
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


views.AsignarConciliador=async(req,res)=>{
    try{
    let datos={}
    
        datos = {
            "Solicitud_Id":req.params.id,
            "Persona_Id":req.params.Persona_Id,
            "Tipo_cliente_Id":3
        }
        
       await axios.post(config.urlApiConciliacion + "/relaciones_solicitud_persona/",datos)
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
   
module.exports = views