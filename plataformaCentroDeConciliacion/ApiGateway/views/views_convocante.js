
const axios = require('axios'); 
const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json')


views.ListarConvocantes=async(req,res)=>{
   try{ 
    await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=1&Solicitud_Id=" + req.params.id)
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
    
views.AgregarConvocante=async(req,res)=>{
try{
    let datos={}
    await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.documento)
    .then(async response => {
           datos = {
               "Solicitud_Id":req.params.id,
               "Persona_Id":response.data[0].Id,
               "Tipo_cliente_Id":1
           }
            
            await axios.post(config.urlApiConciliacion + "/relaciones_solicitud_persona/",datos)
            .then(response => {
        
                res.status(201).json(response.data)
        
            })
            .catch(function (error) {
                  res.sendStatus(400).json(error)
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
   

// views.InformacionConvocante=(req,res)=>{

    
//     axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.documento)
//     .then(response => {
          
//                 res.status(201).json(response.data)
        
//     })             

    

//     .catch((err) => {
//        res.status(404).json(err)
//    });
   

// }
   


module.exports = views



