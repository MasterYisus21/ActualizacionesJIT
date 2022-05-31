
const axios = require('axios') 

const views = {}

views.GeneralGet= (req,res)=>{

    let datos={}
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/solicitante_servicios")
    .then(response => {
       datos["Solicitante_servicio"]=response.data

        axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_servicio")
        .then(response => {
        datos["Tipo_servicio"]=response.data


            axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/inicio_conflictos")
            .then(response => {
            datos["Inicio_conflicto"]=response.data

               
                    
                
                axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/areas")
                .then(response => {
                    datos["Area"]=response.data
                    


                    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/temas")
                    .then(response => {
                        datos["Tema"]=response.data
                        res.status(200).json(datos)
                        
                        


                        
                
                    })

                        
                
                
            
                })
                    
               

            })
        })
    })

    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })


   
  
}

views.SolicitudSubtema= (req,res)=>{
    let datos = {}
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/subtemas?Tema_Id=" +req.params.id)
    .then(response => {
        datos["Subtema"]=response.data
        res.status(200).json(datos)

    })


    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}



views.GeneralPost= (req,res)=>{

    axios.post("http://127.0.0.1:8000/api/conciliaciones/v1/solicitudes",{

        "Numero_caso": 1,
        "Descripcion": "",
        "Fecha_registro": "2022-05-31",
        "Fecha_finalizacion": "2022-06-30",
        "Caso_gratuito": true,
        "Asunto_juridico_definible": false,
        "Area_Id": 1,
        "Subtema_Id": 2,
        "Tipo_servicio_Id": 1,
        "Tipo_resultado_Id": null,
        "Inicio_conflicto_Id": null,
        "Solicitante_servicio_Id": null
    
    
    // "Descripcion": req.body.Descripcion,
    // "Fecha_finalizacion": req.body.Fecha_finalizacion,
    // "Caso_gratuito": req.body.Caso_gratuito,
    // "Asunto_juridico_definible": req.body.Asunto_juridico_definible,
    // "Area_Id": req.body.Area_Id,
    // "Subtema_Id": req.body.Subtema_Id,
    // "Tipo_servicio_Id": req.body.Tipo_servicio_Id,
    // "Tipo_resultado_Id": req.body.Tipo_resultado_Id,
    // "Inicio_conflicto_Id": req.body.Inicio_conflicto_Id,
    // "Solicitante_servicio_Id": req.body.Solicitante_servicio_Id
    })
   
    .then(function (response) {
        console.log(response);})

    .catch(function (error) {
        console.log(error);
        res.send(error)
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
