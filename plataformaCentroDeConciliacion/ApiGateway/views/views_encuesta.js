const axios = require('axios'); 

const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json');
const { response } = require('express');
const res = require('express/lib/response');
const identificacion=1234

axios.get(config.urlApiConciliacion+"/personas?Identificacion="+identificacion).then(resp=>{
    console.log(resp.data[0].Id)
    id_persona=resp.data[0].id
    }).catch(error=>{console.log(error)})

views.Respuestas=async(req,res)=>{

 let datos={}
data=[]
 try{
const persona=  await axios.get(config.urlApiConciliacion+"/encuestas?Solicitud_Id="+req.params.id+"&Persona_Id="+req.body[1].idpersona)
 console.log(config.urlApiConciliacion+"/encuestas?Solicitud_Id="+req.params.id+"&Persona_Id="+req.body[1].idpersona)
 console.log(persona.data)
 if (req.body[1].idpersona ===null |req.body[1].idpersona === ''){res.sendStatus(404);}
 else if (req.body[2].idmedioConocimiento ===null |req.body[2].idmedioConocimiento === '' ){res.sendStatus(404);}

 else if (persona.data.length){res.sendStatus(208)}else{
   
for await  (const iterator of req.body[0].preguntas) {
    if (iterator.idpregunta ===null |iterator.idpregunta === ''){console.log("if 1");res.sendStatus(404);break;}
    else if (iterator.idrespuesta ===null |iterator.idrespuesta === ''){console.log("if 2");res.sendStatus(404); break;}
  
}
    await axios.post(config.urlApiConciliacion + "/encuestas/",{"Solicitud_Id":req.params.id,
                                                                "Persona_Id":req.body[1].idpersona,
                                                                "Medio_conocimiento_Id":req.body[2].idmedioConocimiento}) 

    .then(async resp=>{
           
    for await  (const iterator of req.body[0].preguntas) {

        datos={
            "Pregunta_Id": iterator.idpregunta,
            "Calificacion": iterator.idrespuesta,
            "Encuesta_Id": resp.data.Id
        }
        console.log(datos)
       await axios.post(config.urlApiConciliacion + "/respuestas/",datos)
       
       

    }
    


    res.sendStatus(201)
  
        
})

}
}catch(error){
    
    console.log(error)
    //res.sendStatus(400)
} 
}
module.exports = views
