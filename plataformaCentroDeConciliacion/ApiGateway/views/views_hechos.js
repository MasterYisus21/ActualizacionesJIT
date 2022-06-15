
const axios = require('axios'); 
const config =require ('../config.json');
const { Ciudades } = require('./views_generales');

const views = {}

views.ListarHechos=async(req,res)=>{
 
    try{
   await axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)

    .then(async response => { 
        
        if (response.data.length ===0 ){
           
                 res.status(200).json({})
             
        }   
        else{
            await  axios.get(config.urlApiConciliacion +"/ciudades/" + response.data[0].Ciudad_Id)
        .then(async resp=>{
            
           await axios.get(config.urlApiConciliacion +"/departamentos/" + resp.data.Departamento_Id)
            .then(respon=>{
               
                resp.data.Departamento_Id=respon.data
                response.data[0].Ciudad_Id = resp.data
                
                res.status(201).json(response.data)
            })
            .catch((err) => {
                res.status(404).json(err)})
           
        })
       
        }
    })
}catch(error){
    console.log(error)
        
    res.sendStatus(400)
}

}




views.AgregarHechos=async (req,res)=>{
    let datos={}
    try {
    datos = {
                

        "Descripcion_hecho": req.body.Descripcion_hecho,
        "Descripcion_pretension": req.body.Descripcion_pretension,
        "Cuantia": req.body.Cuantia,
        "Cuantia_indeterminada": req.body.Cuantia_indeterminada,
        "Solicitud_Id": req.params.id,
        "Ciudad_Id": req.body.Ciudad_Id
    }

    
    await axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)
    
    .then(async response => { 
      
        if  (response.data.length<1){      
                console.log(datos)
               await axios.post(config.urlApiConciliacion + "/hechos/",datos)
                .then((result) => {
                    console.log("Creado")
                    res.status(200).json(result.data)
                    
                })
                .catch((err) => {
                    res.status(404).json(err)})
               
          
          
        }

        else{
         
            console.log(response.data[0].Id)
    
            await axios.patch(config.urlApiConciliacion + "/hechos/" +response.data[0].Id +"/",datos)
          
            .then((result)=>{
                
                console.log("entre")
                res.status(200).json(result.data)

            })
            .catch((err) => {
                res.status(404).json(err)})
           
      
            
        }
    

        
    }).catch((err) => {
        res.status(404).json(err)})
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

module.exports = views