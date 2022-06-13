const axios = require('axios'); 

const res = require('express/lib/response');

const config =require ('../config.json')
const views = {}


const asisgnarPersonas=async(req)=>{       
    let datos={}
    
try{

    for await (const informacion_data of req.body) {
        
        let data={
            "Citacion_Id": req.params.id2,
            "Persona_Id": informacion_data
        }
        const resp=await axios.post(config.urlApiConciliacion + "/relaciones_citacion_persona/",data)
                       
       datos[informacion_data]=resp.data
        
    }
    return datos
   
    


}catch(err){
    console.log(err)
    throw new Error(err);
}
}

const InfoCitaciones = async(response)=>{
    let endpoints = []
    let datos={}
    let personas={}
try{

    
    for await (const informacion_data of response.data) {
        const resp = await  axios.get( config.urlApiConciliacion + "/relaciones_citacion_persona?Citacion_Id="+informacion_data.Id)
        for await (const dat of resp.data) { const persona= await axios.get( config.urlApiConciliacion + "/personas/"+dat.Persona_Id) 
        personas[dat.Persona_Id]=persona.data}
        datos["personas"]=personas
        endpoints = [
            config.urlApiConciliacion + "/turnos/"+informacion_data.Turno_Id,
            config.urlApiConciliacion + "/tipos_medio/"+informacion_data.Tipo_medio_Id
           

    ]
        
       await Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            axios.spread((...allData) => {
            informacion_data.Turno_Id=allData[0].data
            informacion_data.Tipo_medio_Id=allData[1].data
           
           
                     
            datos[informacion_data.Id] = informacion_data
             
            })
            );
        
    }
    return datos

} catch(err){
    throw new Error(err);
}

}


const Turnos = async(turno, lista)=>{
    // trae todos los Id de citaciones para esa fecha 
    // lista turnos ocupados
   
    let turnos=[]
    let datos=[]
   
try{


    for await (const informacion_data of turno.data) {turnos[turnos.length]= informacion_data.Id}
    lista=lista.sort((a, b)=>{return a - b}); //
    turnos_disponibles=turnos.filter(element => !lista.includes(element))
    for await (const turno_especifico of turnos_disponibles) {
    const resp= await axios.get(config.urlApiConciliacion + "/turnos/"+ turno_especifico);
    datos.push(resp.data)}
    
    return datos

}catch(err){

    throw new Error(err);
}

}
const citaciones = async(rest,response)=>{ // rest es las citaciones de esa fecha   respponse es el id del docente
   
    let lista=[]
    
try{

    if (rest.data.length>=1){
    for await (const citaciones_fechas of rest.data) {
        console.log("persona"+response.data[0].Persona_Id)
        console.log("Ciacion"+citaciones_fechas.Id)
        console.log(config.urlApiConciliacion + "/relaciones_citacion_persona?Persona_Id="+ response.data[0].Persona_Id +"&Citacion_Id="+citaciones_fechas.Id)
        
    const buscar_coincidencia = await axios.get(config.urlApiConciliacion + "/relaciones_citacion_persona?Persona_Id="+ response.data[0].Persona_Id +"&Citacion_Id="+citaciones_fechas.Id)//+ response.data[0].Persona_Id) // me trae las citaciones del docente
      
            if(buscar_coincidencia.data.length>=1)lista.push(citaciones_fechas.Turno_Id) 
        
      }
  
   
    }

    console.log("lista es"+lista)
    const turno = await axios.get(config.urlApiConciliacion + "/turnos")
    const resultado = await Turnos(turno,lista)
    
    return resultado
 


}catch(err){

    console.log("No tiene para esa fecha");

}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

views.ListarCitaciones=async(req,res)=>{
   
    try{
   await axios.get(config.urlApiConciliacion + "/citaciones?Solicitud_Id="+req.params.id)
    .then(async response => {
        
        InfoCitaciones(response)
        .then((result) => {
            
            res.status(200).json(result)
            
        }).catch((err) => {
           
           res.status(404).json(err)
        });   


            
    }).catch(err =>{
        res.status(400).json(err)
    }

    )
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

    
}


views.CitacionEspecifica=async(req,res)=>{
   
    try{
    await axios.get(config.urlApiConciliacion + "/citaciones/"+req.params.id2)
    .then(response => {
        response.data=[response.data]
        InfoCitaciones(response)
        .then((result) => {
            
            res.status(200).json(result)
            
        }).catch((err) => {
           
           res.status(404).json(err)
        });   


            
    }).catch(err =>{
        res.status(404).json(err)
    }

    )
    
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
}
    
}



views.CrearCitacion=async(req,res)=>{
    try{
    let datos ={}
    console.log(req.body)
      datos=  {
            "Fecha_sesion": req.body.Fecha_sesion,
            "Descripcion": req.body.Descripcion,
            "Enlace": req.body.Enlace,
            "Turno_Id": req.body.Turno_Id,
            "Tipo_medio_Id": req.body.Tipo_medio_Id,
            "Solicitud_Id": req.body.Solicitud_Id
        }

        
    

    await axios.post(config.urlApiConciliacion + "/citaciones/",datos)

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




views.FechasDisponibles=async(req,res)=>{
try{
   await axios.get(config.urlApiConciliacion + "/citaciones?Fecha_sesion="+req.params.fecha)// traer los Id de todas las citaciones para esa fecha 
  
  
    .then(async rest=> {
       
        
        // buscar a la persona

       await axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=3&Solicitud_Id=" + req.params.id)// me trae el docente de la solicitud
        
        .then(response=>{
         
           
    //         .then(turno=>{
        citaciones(rest,response)
            .then(resp=>{
                
               
                res.status(200).json(resp)
            
                    // Turnos(turno=turno, lista=lista)
                })
            })
        
       

    })


    .catch((err) => {
        res.status(404).json(err)
    });   

   }catch(error){
    
    console.log(error)
    res.sendStatus(400)
}

}

views.EliminarPersonas=async(req,res)=>{

  datosPersonas.EliminarPersonasDeCitacion(req)
  .then(result=>{
    res.status(200).json(result)
  })


    
    

    
}

views.AsignarPersonas=async(req,res)=>{
    asisgnarPersonas(req)
    .then(result=>{
        
        res.status(201).json(result)
    })
}
module.exports = views
