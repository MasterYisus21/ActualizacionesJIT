const axios = require('axios'); 

const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json');
const { response } = require('express');
const res = require('express/lib/response');
const identificacion=1234

// generar documento //




views.GenerarDocumentos= async(req,res)=>{
    try{

        console.log(req)

    }
catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}  

views.Ciudades= async(req,res)=>{
    try{
    await axios.get(config.urlApiConciliacion + "/ciudades?Departamento_Id=" +req.params.id)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

    
}

views.Localidades= async(req,res)=>{
    try{
    await axios.get(config.urlApiConciliacion + "/localidades?Ciudad_Id=" +req.params.id2)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

    
}

views.Barrios= async(req,res)=>{
    try{
    await axios.get(config.urlApiConciliacion + "/barrios?Localidad_Id=" +req.params.id3)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

    
}

views.Subtema= async(req,res)=>{
try{
    let datos = {}
    await axios.get(config.urlApiConciliacion + "/subtemas?Tema_Id=" +req.params.id)
    .then(response => {
        datos=response.data
        res.status(200).json(datos)

    })


    .catch(function (error) {
        console.log(error);
        res.sendStatus(404); console.log("1").json(error)
    })
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

views.Docentes= async(req,res)=>{
try{
   await axios.get(config.urlApiConciliacion + "/personas?Tipo_cargo_Id=2")
    .then(async(result) => {
       await datosPersonas.datosBasicosDocentes(result)
        .then(rest=>{
            res.status(200).json(rest)
        })
        
    }).catch((err) => {
        res.status(404).json(err)
        
    });
}catch(error){
    console.log(error)
}

}

views.Estudiantes= async(req,res)=>{
    try{
       await axios.get(config.urlApiConciliacion + "/personas?Tipo_cargo_Id=3")
        .then(async(result) => {
           await datosPersonas.datosBasicosDocentes(result)
            .then(rest=>{
                res.status(200).json(rest)
            })
            
        }).catch((err) => {
            res.status(404).json(err)
            
        });
    }catch(error){
        console.log(error)
    }
    
    }
views.Solicitudesview= async (req,res)=>{
    try{
    
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
   await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then(async(result) => {
      
       
       await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then(async(result) => {
            console.log("relacion solicitud")
           
          await datosPersonas.Solicitudes(result)
            .then((result) => {
                
            res.status(200).json(result)
            })
        })
       
    }).catch((err) => {
        res.status(404).json(err)

        
    });

    }catch(error){
        console.log(error)
    }
}

views.SolicitudesviewHistorial= async(req,res)=>{
    try{
   
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then(async(result) => {
        
       
       await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then(async(result) => {
            console.log(result.data)
           await datosPersonas.Historial(result)
            .then((result) => {
            res.status(200).json(result)
            })
        })
       
    }).catch((err) => {
        res.status(404).json(err)

        
    });

    }catch(err){
        console.log(err)
    }
}
views.SolicitudesviewEspecificas= async(req,res)=>{
    try{
    
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
   await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then(async(result) => {
        
        
      await  axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then(async(result) => {
            
            await datosPersonas.SolicitudesSearch(result,req.params.search)
            .then((result) => {
            res.status(200).json(result)
            })
        })
       
    }).catch((err) => {
        res.status(404).json(err)

        
    });

    }catch(err){
        console.log(error)
    }
}
views.InformacionPersona= async(req,res)=>{

    let datos={}
    try{
   await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    .then(async response => {
        console.log(response)
       await datosPersonas.datosCompletos(response)
        .then((result) => {
             
            res.status(200).json(result)
            
     
        }
   )
    })
   
  .catch((err) => {
      res.status(404).json(err)
  });
}catch(err){
    console.log(err)
}
   


}


views.DatosCrearPersonas=async (req,res)=>{
    let datos={}
    try{
    const departamentos = await axios.get(config.urlApiConciliacion + "/departamentos")
    const documento = await axios.get(config.urlApiConciliacion + "/tipos_documento")
    const vivienda =await axios.get(config.urlApiConciliacion + "/tipos_vivienda")
    const persona =await axios.get(config.urlApiConciliacion + "/tipos_persona")
    const estrato = await axios.get(config.urlApiConciliacion + "/estratos_socioeconomicos")
    const cargo = await axios.get(config.urlApiConciliacion + "/tipos_cargo")
    const perfil = await axios.get(config.urlApiConciliacion + "/perfiles")
    const estado = await axios.get(config.urlApiConciliacion + "/tipos_estado")
    
    datos={"departamentos":departamentos.data,
            "Tipo_documento":documento.data,
            "Tipo_vivienda":vivienda.data,
            "Tipo_persona":persona.data,
            "Estrato_socioeconomico":estrato.data,
            "Tipo_cargo":cargo.data,
            "Perfil":perfil.data,
            "Tipo_estado":estado.data
                                            }

    res.status(200).json(datos)
   
    }catch(error){
    console.log(error)
}
}


// Esta funcion envia los datos especificos de la citacio con las personas incluidaas 

const InfoCitaciones = async (resp,response)=>{ /// resp   las personas repsonse citacion especifica
    let endpoints = []
    let datos={}
    let personas={}
    
try{

       
        endpoints = [
            config.urlApiConciliacion + "/turnos/"+response.data.Turno_Id,
            config.urlApiConciliacion + "/tipos_medio/"+response.data.Tipo_medio_Id
        ]
      
      await Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            
            axios.spread((...allData) => {
               
            response.data.Turno_Id=allData[0].data
            response.data.Tipo_medio_Id=allData[1].data
            
            datos=response.data
          //  console.log(response.data)
            })
            );
            
     
       
            return datos
         
    //console.log(datos)
   

} catch(err){
    throw new Error(err);
}

}    

// Esta funcion envia los datos especificos de la citacio con las personas incluidaas 
views.InformacionCitacion=async(req,res)=>{
try{
    let datos={}
await axios.get(config.urlApiConciliacion + "/citaciones/"+req.params.id)
.then(async response => {

   await axios.get(config.urlApiConciliacion + "/relaciones_citacion_persona?Citacion_Id="+req.params.id)
    .then(async resp => {
    
       
   await InfoCitaciones(resp,response)
    .then(response => {
       // console.log(response)
        res.status(200).json(response)
        
    }).catch((err) => {
        
        res.status(404).json(err)
    });   



})
    
})
}catch(err){
    console.log(err)
}

}

views.ListarDepartamentos= async(req,res)=>{
    try{
   await axios.get(config.urlApiConciliacion + "/departamentos")
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        
        res.sendStatus(404); console.log("1")
    })
}catch(err){
    console.log(err)
}
    
}

views.Actualizar= async (req,res)=>{
   try{
   await axios.patch(config.urlApiConciliacion + "/"+req.params.nombre+"/" +req.params.id+"/",req.body)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        //console.log(error);
        res.sendStatus(404); console.log("1")
    })
}catch(err){
    console.log(err)
}
    
}

views.EliminarCitacion=async(req,res)=>{
  
    try{
    await axios.delete(config.urlApiConciliacion + "/citaciones/"+req.params.id+"/")

    .then(response=>{
    //    asisgnarPersonas(response,req)

        res.status(200).json(response.data)
      
        
    }).catch((err) => {
        res.status(404).json(err)
    });
    
    
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
} 
}

views.Preguntas=async(req,res)=>{
  
    try{
    await axios.get(config.urlApiConciliacion + "/respuestas?Solicitud_Id="+req.params.id + "&Persona_Id="+identificacion)
    await axios.get(config.urlApiConciliacion + "/preguntas")
    .then(response=>{
   
        res.status(200).json(response.data)
              
    }).catch((err) => {
        res.status(404).json(err)
    });
    
    
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
} 
}



views.Preguntas=async(req,res)=>{
 
    try{
    await axios.get(config.urlApiConciliacion + "/preguntas")
    .then(response=>{
        res.status(200).json(response.data)
        
       
    }).catch((err) => {
        res.status(404).json(err)
    });
    
    
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
} 
}
module.exports = views