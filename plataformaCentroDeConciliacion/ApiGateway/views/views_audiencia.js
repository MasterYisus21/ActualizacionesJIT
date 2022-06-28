const axios = require('axios'); 

const res = require('express/lib/response');

const config =require ('../config.json')
const views = {}


const asisgnarPersonas=async(req)=>{       
    let datos={}
    
try{

   
    for await (const informacion_data of req.body) {
        const personas = await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+informacion_data) 
      
        let data={
            "Citacion_Id": req.params.id2,
            "Persona_Id": personas.data[0].Id
        }
        const resp=await axios.post(config.urlApiConciliacion + "/relaciones_citacion_persona/",data)
                       
       datos[informacion_data]=resp.data
        
    }
    return datos
   
    


}catch(err){
    console.log(err)
    
}
}

const InfoCitaciones = async(response)=>{
    let endpoints = []
    let datos=[]
    let personas={}
    let data={}
    //datos[0]="personas"
try{

    
    for await (const informacion_data of response.data) {
        
    //     const resp = await  axios.get( config.urlApiConciliacion + "/relaciones_citacion_persona?Citacion_Id="+informacion_data.Id)
    //     console.log(resp)
    //     if(resp.data == ""){console.log("no hay nadie citado")}else{
    //     for await (const dat of resp.data) { const persona= await axios.get( config.urlApiConciliacion + "/personas/"+dat.Persona_Id) 
    //     personas[dat.Persona_Id]=persona.data
    //     datos[0].personas_Disponibles=personas}
    //     console.log(personas)
    //    // datos["personas"]=personas
    //   //  datos.push(personas)
    //     }
        endpoints = [
            config.urlApiConciliacion + "/turnos/"+informacion_data.Turno_Id,
            config.urlApiConciliacion + "/tipos_medio/"+informacion_data.Tipo_medio_Id
           

    ]
    //datos[datos.length]="Citaciones"        
       await Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            axios.spread((...allData) => {
            informacion_data.Turno_Id=allData[0].data
            informacion_data.Tipo_medio_Id=allData[1].data
            
            

            datos.push(informacion_data)
           
            
            
             
            })
            );
       
    }


    return datos

} catch(err){
    console.log(err);
}

}

const CitacionEspecifica = async(response, solicitud)=>{
    
    let datos=[{personas_disponibles:[]},{personas_citadas:[]}]
    let personas=[]
    let data=[]
    let solicitantes = []
    //datos[0]="personas"
try{

    for await (const informacion_data of response.data) {
        
        const resp = await  axios.get( config.urlApiConciliacion + "/relaciones_citacion_persona?Citacion_Id="+informacion_data.Id)
       if(resp.data == ""){ datos[1].personas_citadas=personas
    }else{
        
        for await (const dat of resp.data) { 
           
        const relacion_sol_per= await axios(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id="+solicitud+"&Persona_Id="+dat.Persona_Id)
        
        const tipo_cliente= await axios.get( config.urlApiConciliacion + "/tipos_cliente/"+relacion_sol_per.data[0].Tipo_cliente_Id)
        const persona= await axios.get( config.urlApiConciliacion + "/personas/"+dat.Persona_Id)
        data.push(persona.data.Id)
        persona.data={ 
                "Identificacion": persona.data.Identificacion,
                "Nombres": persona.data.Nombres,
                "Apellidos":  persona.data.Apellidos,
                "Tipo_cliente":tipo_cliente.data.Nombre,
                    }       
        personas.push(persona.data)
        }
        datos[1].personas_citadas=personas
    }

        await axios(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id="+solicitud)
        .then(async resp=>{
            if(resp.data == ""){datos[0].personas_disponibles=[]}else{
            for await (const dat of resp.data){solicitantes.push(dat.Persona_Id) }
            personas_no_incluidas=solicitantes.filter(element => !data.includes(element))
            for await (const i of personas_no_incluidas){ 

                const relacion_sol_per= await axios(config.urlApiConciliacion + "/relaciones_solicitud_persona?Solicitud_Id="+solicitud+"&Persona_Id="+i)
                const tipo_cliente= await axios.get( config.urlApiConciliacion + "/tipos_cliente/"+relacion_sol_per.data[0].Tipo_cliente_Id)
                const person= await axios.get( config.urlApiConciliacion + "/personas/"+i)
                person.data={ 
                        "Identificacion": person.data.Identificacion,
                        "Nombres": person.data.Nombres,
                        "Apellidos":  person.data.Apellidos,
                        "Tipo_cliente":tipo_cliente.data.Nombre,
                            }
                
            datos[0].personas_disponibles.push(person.data)} 
            
        }
        })
        
           
       
    }


    return datos

} catch(err){
    console.log(err);
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
 

    if (response.data ==''){return []}
    
    for await (const citaciones_fechas of rest.data) {
       
    const buscar_coincidencia = await axios.get(config.urlApiConciliacion + "/relaciones_citacion_persona?Persona_Id="+ response.data[0].Persona_Id +"&Citacion_Id="+citaciones_fechas.Id)//+ response.data[0].Persona_Id) // me trae las citaciones del docente
      
            if(buscar_coincidencia.data.length>=1)lista.push(citaciones_fechas.Turno_Id) 
        
      }
  
   
    

  
    const turno = await axios.get(config.urlApiConciliacion + "/turnos")
    const resultado = await Turnos(turno,lista)
    
    return resultado
 


}catch(err){

    console.log(err);

}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

views.ListarCitaciones=async(req,res)=>{
   
    try{
        // if(req.idpermiso==0){res.sendStatus(401);return }
        // const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        // if(!response.data.Permiso_consulta){
        //     console.log("error")
        //     res.sendStatus(401)
        //     return
        // }
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
        if(req.idpermiso==0){res.sendStatus(401);return }
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_consulta){
            console.log("error")
            res.sendStatus(401)
            return
        }
    await axios.get(config.urlApiConciliacion + "/citaciones/"+req.params.id2)
    .then(response => { 
        response.data=[response.data]
        CitacionEspecifica(response,req.params.id)
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
        if(req.idpermiso==0){res.sendStatus(401);return }
    let datos ={}
    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_crear){
            res.sendStatus(401)
            return
        }
    //console.log(req.body)
    if(req.body.Descripcion === null | ''){res.sendStatus(404)} else{
   
      datos=  {
            "Fecha_sesion": req.body.Fecha_sesion,
            "Descripcion": req.body.Descripcion,
            "Enlace": req.body.Enlace,
            "Turno_Id": req.body.Turno_Id,
            "Tipo_medio_Id": req.body.Tipo_medio_Id,
            "Solicitud_Id": req.params.id
        }

        
    

    await axios.post(config.urlApiConciliacion + "/citaciones/",datos)

    .then(response=>{
    //    asisgnarPersonas(response,req)

        res.status(200).json(response.data)
      
        
    }).catch((err) => {
        res.status(404).json(err)
    });
    
    }
}catch(error){
    
    console.log(error)
    res.sendStatus(400)
} 
}






views.FechasDisponibles=async(req,res)=>{
try{
    if(req.idpermiso==0){res.sendStatus(401);return }
    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_crear){
            res.sendStatus(401)
            return
        }
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
    if(req.idpermiso==0){res.sendStatus(401);return }
    const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
    if(!response.data.Permiso_eliminar){
        res.sendStatus(401)
        return
    }
  datosPersonas.EliminarPersonasDeCitacion(req)
  .then(result=>{
    res.sendStatus(200)
  })

    
    

    
}

views.AsignarPersonas=async(req,res)=>{

    try{
        if(req.idpermiso==0){res.sendStatus(401);return }
        const response=await axios.get(config.urlApiConciliacion+"/rol_permisos/"+req.idpermiso)
    
        if(!response.data.Permiso_crear){
            res.sendStatus(401)
            return
        }
    await asisgnarPersonas(req)
    .then(result=>{
        
        res.status(201).json(result)
    })
}catch(error) {
    res.status(400).json(error)
}
}
module.exports = views
