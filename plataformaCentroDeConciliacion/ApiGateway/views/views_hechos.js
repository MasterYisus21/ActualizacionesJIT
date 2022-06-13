
const axios = require('axios'); 
const config =require ('../config.json');
const { Ciudades } = require('./views_generales');

const views = {}

views.ListarHechos=async(req,res)=>{
    let datos={}
    
    axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)

    .then(response => { 
        
        if (response.data.length ===0 ){
           
                 res.status(200).json({})
             
        }   
        else{
        axios.get(config.urlApiConciliacion +"/ciudades/" + response.data[0].Ciudad_Id)
        .then(resp=>{
            
            axios.get(config.urlApiConciliacion +"/departamentos/" + resp.data.Departamento_Id)
            .then(respon=>{
               
                resp.data.Departamento_Id=respon.data
                response.data[0].Ciudad_Id = resp.data
                
                res.status(201).json(response.data)
            })
           
        })
       
        }
    })

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
    
    .then(response => { 
      
        if  (response.data.length<1){      
                console.log(datos)
                axios.post(config.urlApiConciliacion + "/hechos/",datos)
                .then((result) => {
                    console.log("Creado")
                    res.status(200).json(result.data)
                    
                })
                .catch(function (error) { 
                    res.sendStatus(500).json(error)
              })
          
          
        }

        else{
         
            console.log(response.data[0].Id)
    
            axios.patch(config.urlApiConciliacion + "/hechos/" +response.data[0].Id +"/",datos)
          
            .then((result)=>{
                
                console.log("entre")
                res.status(200).json(result.data)

            })
            .catch(function (error) {
                console.log(error)
                res.status(500).json(error)
          })
      
            
        }

        
    })
}catch(error){
    
    console.log(error)
    res.status(400).json()
}

}

module.exports = views