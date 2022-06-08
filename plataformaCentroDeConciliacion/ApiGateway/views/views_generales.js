const axios = require('axios'); 

const views = {}
const datosPersonas = require('../views/datos')
views.Ciudades= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/ciudades?Departamento_Id=" +req.params.id)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.Subtema= (req,res)=>{

    let datos = {}
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/subtemas?Tema_Id=" +req.params.id)
    .then(response => {
        datos=response.data
        res.status(200).json(datos)

    })


    .catch(function (error) {
        console.log(error);
        res.sendStatus(500).json(error)
    })
    
}


views.General= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/" +req.params.nombre)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.GeneralId= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/" +req.params.nombre + "/" + +req.params.id)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}
views.Docentes= (req,res)=>{

    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas?Tipo_cargo_Id=2")
    .then((result) => {
        res.status(200).json(result.data)
    }).catch((err) => {
        res.status(404).json(err)
        
    });


}
views.InformacionPersona= (req,res)=>{

    let datos={}
    
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas?Identificacion="+req.params.identificacion)
    .then(response => {
        console.log(response)
        datosPersonas.datosCompletos(response)
        .then((result) => {
             
            res.status(200).json(result)
            
     
        }
   )
    })
   
  .catch((err) => {
      res.status(404).json(err)
  });
   
   


}



module.exports = views