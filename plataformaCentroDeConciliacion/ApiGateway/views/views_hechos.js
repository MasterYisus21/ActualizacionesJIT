
const axios = require('axios'); 
const config =require ('../config.json');
const { Ciudades } = require('./views_generales');

const views = {}

views.ListarHechos=(req,res)=>{
    let datos={}
    
    axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)

    .then(response => { 
        
        if (response.data.length ===0 ){
           
                // res.status(200).json({})
             
        }   
        else{
        axios.get(config.urlApiConciliacion +"/ciudades/" + response.data[0].Ciudad_Id)
        .then(resp=>{
            
            axios.get(config.urlApiConciliacion +"/departamentos/" + resp.data.Departamento_Id)
            .then(respon=>{
               
                resp.data.Departamento_Id=respon.data.Nombre
                response.data[0].Ciudad_Id = resp.data
                console.log(response.data)
                datos = {
                   Fecha:response.data[0].Fecha,
                   Descripcion_hecho: response.data[0].Descripcion_hecho,
                   Descripcion_pretension: response.data[0].Descripcion_pretension,
                   Cuantia:response.data[0].Cuantia,
                   Cuantia_indeterminada: response.data[0].Cuantia_indeterminada,
                   Ciudad_Id:resp.data
                }
                res.status(201).json(datos)
            })
           
        })
       
        }
    })

}


views.AgregarHechos=(req,res)=>{
    let datos={}
    datos = {
                

        "Descripcion_hecho": req.body.Descripcion_hecho,
        "Descripcion_pretension": req.body.Descripcion_pretension,
        "Cuantia": req.body.Cuantia,
        "Cuantia_indeterminada": req.body.Cuantia_indeterminada,
        "Solicitud_Id": req.params.Id,
        "Ciudad_Id": req.body.Ciudad_Id
    }

    
    axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)
    
    .then(response => { 
        
        if (response.data.length===0){      
           
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
                
                res.status(200).json(result.data)

            })
            .catch(function (error) {
                
                res.sendStatus(500).json(error)
          })
      
            
        }

        
    })

}

module.exports = views