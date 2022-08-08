
const axios = require('axios'); 
const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json')


views.ListarConvocantes=async(req,res)=>{
   try{ 
    await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=1&Solicitud_Id=" + req.params.id)
   .then(response => { 
    response.data=response.data.results
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
    .then(async resp => {
           datos = {
               "Solicitud_Id":req.params.id,
               "Persona_Id":resp.data[0].Id,
               "Tipo_cliente_Id":1
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
                  res.sendStatus(400).json(error)
            })
        

        }
            

    })

    .catch((err) => {
       res.status(404).json(err)
   });
   

}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

views.BuscarConvocante= async(req,res)=>{
    try{
        await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=1&Solicitud_Id=" + req.params.id)
       .then(response => { 
        response.data=response.data.results
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

views.CrearPersonasConvocante=async (req,res)=>{
    let datos={}
    try{
      await  datosPersonas.CrearPersona(req)
        .then(async resp=>{
            
        await axios.post(config.urlApiConciliacion + "/personas/",resp)
         .then(async response=>{
            await axios.get(config.urlApiConciliacion+"/tipos_documento/"+response.data.Tipo_documento_Id)
           .then(res=>{
           
            response.data.Tipo_documento_Id=res.data
           })
           await axios.get(config.urlApiConciliacion+"/tipos_persona/"+response.data.Tipo_persona_Id)
           .then(resp=>{
            response.data.Tipo_persona_Id=resp.data
            res.status(200).json(response.data)
           })
           
            
           // console.log(response.data)
            datos = {
                "Solicitud_Id":req.params.id,
                "Persona_Id":response.data.Id,
                "Tipo_cliente_Id":1
            }
           
             await axios.post(config.urlApiConciliacion + "/relaciones_solicitud_persona/",datos)
            .then(resp=>{
       
              res.status(200).json(response.data)
            })
  
            
         })
        })
        
        
        .catch( err=>{
            res.sendStatus(208)
        })  
   
    }catch(error){
        console.log(error)
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



