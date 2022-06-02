
const axios = require('axios'); 
const { sendStatus } = require('express/lib/response');

const views = {}

views.GeneralGet= (req,res)=>{
    let datos = {}
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/relaciones_solicitud_persona?Solicitud_Id=" + req.params.id)
   .then(response => { 
   
   

     if (response.data.length>=1) {
       
        
         for (let i = 0; i < response.data.length; i++) {
             

            console.log(response.data[i].Id)

             axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas/" + response.data[i].Id)
             .then((response) => {
                
                
                datos[i]=response.data

                if(i==response.data.length) {
                    res.status(200).json(datos)
                  }
                
                               
              })
              
              
        
           
           
         }

         
        
         
         res.status(200).json(datos)
    
        }
    })
    
   .catch((err) => {
       res.status(404).json(err)
   });
    
}


module.exports = views



