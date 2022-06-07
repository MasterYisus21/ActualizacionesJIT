const axios = require('axios'); 

const views = {}




views.ListarCitaciones=(req,res)=>{
    let datos = {}
    let endpoints = [
    "http://127.0.0.1:8000/api/conciliaciones/v1/citaciones?Solicitud_Id="+req.params.id,
    "http://127.0.0.1:8000/api/conciliaciones/v1/turnos"
   
  ];
    
  Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    axios.spread((...allData) => {
     let citaciones=allData[0].data
     let turnos=allData[1].data
     datos={
         "Citacion":citaciones,
         "Turno":turnos
     }
     res.status(200).json(datos)
     
    })
  );

    

    
}


views.CrearCitacion=(req,res)=>{
    datos = 
        {
            "Fecha_sesion": req.body.Fecha_sesion,
            "Descripcion": req.body.Descripcion,
            "Enlace": req.body.Enlace,
            "Turno_Id": req.body.Turno_Id,
            "Tipo_medio_Id": req.body.Tipo_medio_Id,
            "Solicitud_Id": req.body.Solicitud_Id
        }
    

    axios.post("http://127.0.0.1:8000/api/conciliaciones/v1/citaciones/",datos)

    .then((result) => {
        res.status(200).json(result.data)
        
    }).catch((err) => {
        res.status(404).json(err)
    });

    
}



module.exports = views
