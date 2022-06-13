const axios = require('axios'); 
const config =require ('../config.json')
const views = {}

views.ListarManejoConflicto= async (req,res)=>{
  
        try{
        let datos={}
        await axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)
    
        .then(response => { 
            datos = {
                "Flag_interviene_tercero": response.data[0].Flag_interviene_tercero,
                "Flag_violencia":response.data[0].Flag_violencia
            }
          
            res.status(201).json(datos)
            
        })
        .catch (error=>{
            res.status(400).json(error)
        })
        }catch(error){
    
            console.log(error)
            res.sendStatus(400)
        }
        
    }
    


views.Agregar=async(req,res)=>{
    try{
    let datos={}
    datos = {
                
        "Flag_interviene_tercero": req.body.Flag_interviene_tercero,
        "Flag_violencia": req.body.Flag_violencia,
        
    }
    await axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)
    .then((result) => {
        
        axios.patch(config.urlApiConciliacion + "/hechos/"+ result.data[0].Id +"/",datos)
        .then((result) => {
            
            res.status(200).json(result.data)
            
        })
    })
               
    .catch(function (error) {
        res.sendStatus(404).json(error)
    })
          
          
       
    }catch(error){
    
        console.log(error)
        res.sendStatus(400)
    }
    
}

module.exports = views