const axios = require('axios'); 

const res = require('express/lib/response');

const config =require ('../config.json')
const views = {}


const asisgnarPersonas=async(response,req)=>{       
    let datos={}
    
try{

    for await (const informacion_data of req.body.Personas) {
        
        let data={
            "Citacion_Id": response.data.Id,
            "Persona_Id": informacion_data.Id
        }
        const resp=await axios.post(config.urlApiConciliacion + "/relaciones_citacion_persona/",data)
                       
       datos[informacion_data.Id]=resp.data
        
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

try{

    for await (const informacion_data of response.data) {
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

views.ListarCitaciones=(req,res)=>{
   

    axios.get(config.urlApiConciliacion + "/citaciones?Solicitud_Id="+req.params.id)
    .then(response => {
        
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
    

    
}
views.CitacionEspecifica=(req,res)=>{
   

    axios.get(config.urlApiConciliacion + "/citaciones/"+req.params.id2)
    .then(response => {
        response.data=[response.data]
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
    

    
}

views.CitacionEspecifica=(req,res)=>{
   

    axios.get(config.urlApiConciliacion + "/citaciones/"+req.params.id2)
    .then(response => {
        response.data=[response.data]
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
    

    
}







views.CrearCitacion=(req,res)=>{
    let datos ={}
   
      datos=  {
            "Fecha_sesion": req.body.Citacion[0].Fecha_sesion,
            "Descripcion": req.body.Citacion[0].Descripcion,
            "Enlace": req.body.Citacion[0].Enlace,
            "Turno_Id": req.body.Citacion[0].Turno_Id,
            "Tipo_medio_Id": req.body.Citacion[0].Tipo_medio_Id,
            "Solicitud_Id": req.body.Citacion[0].Solicitud_Id
        }

        
    

    axios.post(config.urlApiConciliacion + "/citaciones/",datos)

    .then(response=>{
        asisgnarPersonas(response,req)
        .then(result=>{
            res.status(200).json(result)
        })
        
    }).catch((err) => {
        res.status(404).json(err)
    });

    
}




views.FechasDisponibles=(req,res)=>{
    
    axios.get(config.urlApiConciliacion + "/citaciones?Fecha_sesion="+req.params.fecha)// traer los Id de todas las citaciones para esa fecha 
  
  
    .then(rest=> {
        console.log("/////////")
        console.log(rest.data)
        console.log("/////")
        // buscar a la persona

        axios.get(config.urlApiConciliacion + "/relaciones_solicitud_persona?Tipo_cliente_Id=3&Solicitud_Id=" + req.params.id)// me trae el docente de la solicitud
        
        .then(response=>{
            console.log("/////////")
        console.log(response.data)
        console.log("/////")
        // buscar a la persona
           
    //         .then(turno=>{
        citaciones(rest,response)
            .then(resp=>{
                
                console.log(resp)
                res.status(200).json(resp)
            
                    // Turnos(turno=turno, lista=lista)
                })
            })
        
       

    })


    .catch((err) => {
        res.status(404).json(err)
    });   

   }



views.EliminarPersonas=(req,res)=>{

   datosPersonas.EliminarPersonasDeCitacion(req)


    
    

    
}
module.exports = views
