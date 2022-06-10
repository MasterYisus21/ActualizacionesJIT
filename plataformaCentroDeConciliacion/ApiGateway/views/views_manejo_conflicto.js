const axios = require('axios'); 
const config =require ('../config.json')
const views = {}

views.ListarManejoConflicto= (req,res)=>{
  
        let datos={}
        axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)
    
        .then(response => { 
            datos = {
                "Flag_interviene_tercero": response.data[0].Flag_interviene_tercero,
                "Flag_violencia":response.data[0].Flag_violencia
            }
          
            res.status(201).json(datos)
            
        })
    
    }
    


views.Agregar=(req,res)=>{
    let datos={}
    datos = {
                
        "Flag_interviene_tercero": req.body.Flag_interviene_tercero,
        "Flag_violencia": req.body.Flag_violencia,
        
    }
    axios.get(config.urlApiConciliacion + "/hechos?Solicitud_Id=" + req.params.id)
    .then((result) => {
        
        axios.patch(config.urlApiConciliacion + "/hechos/"+ result.data[0].Id +"/",datos)
        .then((result) => {
            
            res.status(200).json(result.data)
            
        })
    })
               
    .catch(function (error) {
        res.sendStatus(500).json(error)
    })
          
          
       

}

module.exports = views