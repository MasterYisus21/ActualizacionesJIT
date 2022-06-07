
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
        res.sendStatus(500).json(error)
    })


   
  
}




views.GeneralPost= (req,res)=>{
console.log(req.body)
    let datos =
        {
            "Descripcion": req.body.Descripcion,
            "Fecha_finalizacion": req.body.Fecha_finalizacion,
            "Caso_gratuito": req.body.Caso_gratuito,
            "Asunto_juridico_definible": req.body.Asunto_juridico_definible,
            "Area_Id": req.body.Area_Id,
            "Subtema_Id": req.body.Subtema_Id,
            "Tipo_servicio_Id": req.body.Tipo_servicio_Id,
            "Tipo_resultado_Id": req.body.Tipo_resultado_Id,
            "Inicio_conflicto_Id": req.body.Inicio_conflicto_Id,
            "Solicitante_servicio_Id": req.body.Solicitante_servicio_Id
                              
        }
    

    axios.post("http://127.0.0.1:8000/api/conciliaciones/v1/solicitudes/",datos)
    
      
    .then(response => {
        
        res.status(201).json(response.data)

    })
    .catch(function (error) {
          res.sendStatus(500).json(error)
    })

    
}


module.exports = views



