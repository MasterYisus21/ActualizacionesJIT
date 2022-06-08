
const axios = require('axios'); 


const views = {}

views.ListarHechos=(req,res)=>{
    
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/hechos?Solicitud_Id=" + req.params.id)

    .then(response => { 
        
        if (response.data.length ===0 ){
            axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/paises/1")
            .then((result) => {
                res.status(200).json(result.data)
            })    
        }   
        else{
        res.status(201).json(response.data)
        }
    })

}


views.AgregarHechos=(req,res)=>{
    let datos={}
    datos = {
                
        "Fecha": req.body.Fecha,
        "Descripcion_hecho": req.body.Descripcion_hecho,
        "Descripcion_pretension": req.body.Descripcion_pretension,
        "Flag_interviene_tercero": req.body.Flag_interviene_tercero,
        "Flag_violencia": req.body.Flag_violencia,
        "Cuantia": req.body.Cuantia,
        "Cuantia_indeterminada": req.body.Cuantia_indeterminada,
        "Solicitud_Id": req.body.Solicitud_Id,
        "Ciudad_Id": req.Ciudad_Id
    }
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/hechos?Solicitud_Id=" + req.params.id)
    
    .then(response => { 
        
        if (response.data.length===0){
           
                axios.post("http://127.0.0.1:8000/api/conciliaciones/v1/hechos/",datos)
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
            axios.patch("http://127.0.0.1:8000/api/conciliaciones/v1/hechos/" +response.data[0].Id +"/",datos)
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