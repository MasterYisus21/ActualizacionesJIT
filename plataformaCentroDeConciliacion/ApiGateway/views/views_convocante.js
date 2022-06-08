
const axios = require('axios'); 
const views = {}
const datosPersonas = require('../views/datos')



views.ListarConvocantes=(req,res)=>{
    
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/relaciones_solicitud_persona?Tipo_cliente_Id=1&Solicitud_Id=" + req.params.id)
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
    
    

views.AgregarConvocante=(req,res)=>{

    let datos={}
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas?Identificacion="+req.params.documento)
    .then(response => {
           datos = {
               "Solicitud_Id":req.params.id,
               "Persona_Id":response.data[0].Id,
               "Tipo_cliente_Id":1
           }
            
            axios.post("http://127.0.0.1:8000/api/conciliaciones/v1/relaciones_solicitud_persona/",datos)
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
   

// views.InformacionConvocante=(req,res)=>{

    
//     axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas?Identificacion="+req.params.documento)
//     .then(response => {
          
//                 res.status(201).json(response.data)
        
//     })             

    

//     .catch((err) => {
//        res.status(404).json(err)
//    });
   

// }
   


module.exports = views



