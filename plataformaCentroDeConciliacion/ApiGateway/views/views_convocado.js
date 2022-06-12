
const axios = require('axios'); 
const config =require ('../config.json')

const views = {}

const datosPersonas = require('../views/datos')


views.ListarConvocados=(req,res)=>{
    
    axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=2&Solicitud_Id=" + req.params.id)
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
    
    

views.AgregarConvocado=(req,res)=>{

    let datos={}
    axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.documento)
    .then(response => {
           datos = {
               "Solicitud_Id":req.params.id,
               "Persona_Id":response.data[0].Id,
               "Tipo_cliente_Id":2
           }
            
            axios.post(config.urlApiConciliacion + "/relaciones_solicitud_persona/",datos)
            .then(response => {
        
                res.status(201).json(response.data)
        
            })
            .catch(function (error) {
                  res.sendStatus(500).json(error)
            })
        

            
            

    })

    .catch((err) => {
       res.status(404).json(err)
   });
   


}
   

// views.InformacionConvocado=(req,res)=>{

//     let datos={}
//     axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.documento)
//     .then(response => {
          
//                 res.status(201).json(response.data)
        
//     })             



//     .catch((err) => {
//        res.status(404).json(err)
//    });
   

// }
   
views.EliminarConvocado=(req,res)=>{
    axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.documento)
    .then(response => {
        console.log(response.data)
        axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id="+ req.params.id+ "&Persona_Id="+response.data[0].Id ) 
        .then( response =>{
            
            console.log(response.data)
            console.log ("////////")
           
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

module.exports = views



