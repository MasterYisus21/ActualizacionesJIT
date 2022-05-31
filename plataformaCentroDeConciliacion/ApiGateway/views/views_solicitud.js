
const axios = require('axios') 

const views = {}

views.General= (req,res)=>{

    let datos={}
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_servicio")
    .then(response => {
       datos["Tipo_servicio"]=response.data
           
        axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/objetivos_servicio")
        .then(response => {
            datos["Objetivo_servicio"]=response.data
            
            
            axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/areas")
            .then(response => {
                datos["Area"]=response.data
                res.status(200).json(datos)
                
               
            })
            


        })
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })


   
  
}









views.Departamentos= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/departamentos?Pais_Id=" +req.params.id)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.Ciudades= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/ciudades?Departamento_Id=" +req.params.id2)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.Localidades= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/localidades?Ciudad_Id="+req.params.id3)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.Barrios= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/barrios?Localidad_Id="+req.params.id4)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.ListarDocentes= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas?Tipo_cargo_Id=2")
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}


views.Conciliadorpost= (req,res)=>{

    console.log(req.body)

    // axios.post("http://127.0.0.1:8000/api/conciliaciones/v1/relaciones_solicitud_persona")
    // .then(response => {
    //     res.status(200).json(response.data)
    // })
    // .catch(function (error) {
    //     console.log(error);
    //     res.sendStatus(500)
    // })
    
}



module.exports = views






// const axios = require('axios') 

// const views = {}
// views.getpaises = (req,res)=>{
//     axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/paises"+ req.params.apiName)
//     .then(response => {
//         res.status(200).json(response.data)
//     })
//     .catch(function (error) {
//         console.log(error);
//         res.sendStatus(500)
//     })
    
// }

// module.exports = views
