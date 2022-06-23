const axios = require('axios'); 

const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json');
const { response } = require('express');
const res = require('express/lib/response');


// generar documento //




views.GenerarDocumentos= async(req,res)=>{
    try{

        

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
        res.sendStatus(404); 
    })
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

views.Docentes= async(req,res)=>{

try{
    if(req.idpermiso==0){res.sendStatus(401);return }
    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
    if(!response.data.Permiso_consulta){
        console.log("error")
        res.sendStatus(401)
        return
    }
        const docentes =await axios.get(config.urlApiConciliacion + "/personas?Tipo_cargo_Id=2")
        await axios.get(config.urlApiConciliacion + "/personas?Tipo_cargo_Id=1")
        .then(async(result) => {
            for await (let iterator of docentes.data) {result.data.push(iterator)}
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
        if(req.idpermiso==0){res.sendStatus(401);return }
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_consulta){
            console.log("error")
            res.sendStatus(401)
            return
        }
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
        
        if(req.idpermiso==0){res.sendStatus(401);return }
       
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
        
        if(!response.data.Permiso_consulta){
            console.log("error")
            res.sendStatus(401)
            return
        }
       let identificacion = req.identificacion
      
    
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
   await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then(async(result) => {
      
       
       await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then(async(result) => {
            
           
          await datosPersonas.Solicitudes(result)
            .then((result) => {
                
            res.status(200).json(result)
            })
            .catch(error=>{
                console.log(error)
            })
        })
       
    }).catch((err) => {
        res.status(404).json(err)

        
    });

    }catch(error){
     //   console.log(error)
    }
}

views.SolicitudesviewHistorial= async(req,res)=>{
    try{
        if(req.idpermiso==0){res.sendStatus(401);return }
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_consulta){
            console.log("error")
            res.sendStatus(401)
            return
        }
       let identificacion = req.identificacion
   // console.log(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+identificacion)
    
    .then(async(result) => {
        
       
       await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Persona_Id="+ result.data[0].Id)
        .then(async(result) => {
            
           await datosPersonas.Historial(result)
            .then((result) => {
            res.status(200).json(result)
            })
            .catch(error=>{console.log(error)})
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

        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_colsulta){
            res.sendStatus(401)
            return
        }
       let identificacion = req.identificacion
    
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
        if(req.idpermiso==0){res.sendStatus(401);return }
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_consulta){
            console.log("error")
            res.sendStatus(401)
            return
        }
   await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+req.params.identificacion)
    .then(async response => {
       
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
    const genero = await axios.get(config.urlApiConciliacion + "/generos")
    
    datos={"departamentos":departamentos.data,
            "Tipo_documento":documento.data,
            "Tipo_vivienda":vivienda.data,
            "Tipo_persona":persona.data,
            "Estrato_socioeconomico":estrato.data,
            "Tipo_cargo":cargo.data,
            "Perfil":perfil.data,
            "Tipo_estado":estado.data,
            "Genero":genero.data
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
    if(req.idpermiso==0){res.sendStatus(401);return }
    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
    if(!response.data.Permiso_consulta){
        console.log("error")
        res.sendStatus(401)
        return
    }
await axios.get(config.urlApiConciliacion + "/citaciones/"+req.params.id)
.catch(error=>{
    res.sendStatus(400)
})

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

views.  ListarDepartamentos= async(req,res)=>{
    try{
   await axios.get(config.urlApiConciliacion + "/departamentos")
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        
        res.sendStatus(404); 
    })
}catch(err){
    console.log(err)
}
    
}

views.Actualizar= async (req,res)=>{
   try{
    if(req.idpermiso==0){res.sendStatus(401);return }
    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)

    if(!response.data.Permiso_actualizar){
        
        res.sendStatus(401)
        return
    }
   await axios.patch(config.urlApiConciliacion + "/"+req.params.nombre+"/" +req.params.id+"/",req.body)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        //console.log(error);
        res.sendStatus(404); 
    })
}catch(err){
    console.log(err)
}
    
}

views.EliminarCitacion=async(req,res)=>{
  
    try{
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)

        if(!response.data.Permiso_eliminar){
            
            res.sendStatus(401)
            return
        }
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





views.CrearPersonas=async(req,res)=>{
    
 
    let datos={}
    try{
      await  datosPersonas.CrearPersona(req)
        .then(async resp=>{
            
        await axios.post(config.urlApiConciliacion + "/personas/",resp)
         .then(async response=>{
            
            if(response.data.Tipo_cargo_Id ===null | response.data.Tipo_cargo_Id ===''){res.status(200).json(response.data)}
            else{
                datos = {
                    "Usuario":response.data.Identificacion,
                    "Rol_Id":response.data.Tipo_cargo_Id,
                    "Persona_Id":response.data.Id
                    
                    
                }
              
                await axios.post(config.urlApiConciliacion + "/usuarios/",datos)
                .then(resp=>{
                    res.status(200).json(response.data)
                })

               
            }
            
            
            
         })
        })
        
        
        .catch( err=>{
            res.status(404).json(err)
            console.log(err)
        })  
   
    }catch(error){
        console.log(error)
    }
    
}

module.exports = views