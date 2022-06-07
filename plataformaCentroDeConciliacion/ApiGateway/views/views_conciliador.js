const axios = require('axios'); 
const { get } = require('express/lib/response');

const views = {}

const datosPersona = async (response) => {
    let datos= {}
   
    try {
        for await (const informacion_data of response.data) {
            // Incrementando el tamaño total.
            const resp = await axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas/"+informacion_data.Persona_Id);
            datos[informacion_data.Persona_Id] = resp.data
            
            
           
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
};



views.ListarConciliadores=(req,res)=>{
    
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/relaciones_solicitud_persona?Tipo_cliente_Id=3&Solicitud_Id=" + req.params.id)
   .then(response => { 
   
         datosPersona(response)
         .then((result) => {
             
             res.status(200).json(result)
             
         }).catch((err) => {
            res.status(404).json(err)
         });   
    
        }
    )
    
   .catch((err) => {
       res.status(404).json(err)
   });
    
}


views.AsignarConciliador=(req,res)=>{

    let datos={}
    
        datos = {
            "Solicitud_Id":req.params.id,
            "Persona_Id":req.params.Persona_Id,
            "Tipo_cliente_Id":3
        }
        
        axios.post("http://127.0.0.1:8000/api/conciliaciones/v1/relaciones_solicitud_persona/",datos)
        .then(response => {
    
            res.status(201).json(response.data)
    
        })
        .catch(function (error) {
                res.sendStatus(500).json(error)
        })
        

}
   
module.exports = views