const axios = require('axios'); 

const views = {}

views.Ciudades= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/ciudades?Departamento_Id=" +req.params.id)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.Subtema= (req,res)=>{

    let datos = {}
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/subtemas?Tema_Id=" +req.params.id)
    .then(response => {
        datos=response.data
        res.status(200).json(datos)

    })


    .catch(function (error) {
        console.log(error);
        res.sendStatus(500).json(error)
    })
    
}


views.General= (req,res)=>{
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/" +req.params.nombre)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
    })
    
}

views.Docentes= (req,res)=>{

    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas?Tipo_cargo_Id=2")
    .then((result) => {
        res.status(200).json(result.data)
    }).catch((err) => {
        res.status(404).json(err)
        
    });


}
views.InformacionPersona= (req,res)=>{

    let datos={}
    
    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/personas?Identificacion="+req.params.identificacion)
    .then(response => {
        
        axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_documento/"+ response.data[0].Tipo_documento_Id)
        .then(documento =>{
           
            axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_vivienda/"+ response.data[0].Tipo_vivienda_Id)
            .then(vivienda =>{
           
                axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/barrios/"+ response.data[0].Barrio_Id)
                .then(barrio =>{
                    
                   
                    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_persona/"+ response.data[0].Tipo_persona_Id)
                    .then(tipo_persona =>{

                        axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_documento/"+ response.data[0].Tipo_documento_Id)
                        .then(estrato =>{

                            let tipo_estado = response.data[0].Tipo_estado_Id == undefined ? '' : response.data[0].Tipo_estado_Id;
                            console.log(tipo_estado)
                            axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_estado/" + tipo_estado)
                            .then(estado => {
                              
                                let perfil = response.data[0].Perfil_Id == undefined ? '' : response.data[0].Perfil_Id;
                                axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/perfiles/" + perfil)
                                .then(perfil => {

                                    let tipo_cargo = response.data[0].Tipo_cargo_Id == undefined ? '' : response.data[0].Tipo_cargo_Id;
                                    axios.get("http://127.0.0.1:8000/api/conciliaciones/v1/tipos_cargo/" + tipo_cargo)
                                    .then(cargo => {
                                      
                                        datos = {
                                            "Identificacion": response.data[0].Identificacion,
                                            "Primer_nombre": response.data[0].Primer_nombre,
                                            "Segundo_nombre": response.data[0].Segundo_nombre,
                                            "Primer_apellido": response.data[0].Primer_apellido,
                                            "Segundo_apellido": response.data[0].Segundo_apellido,
                                            "Correo": response.data[0].Correo,
                                            "Telefono": response.data[0].Telefono,
                                            "Fecha_de_nacimiento": response.data[0].Fecha_de_nacimiento,
                                            "Tipo_documento_Id": documento.data,
                                            "Tipo_vivienda_Id": vivienda.data ,
                                            "Barrio_Id": barrio.data,
                                            "Tipo_persona_Id": tipo_persona.data,
                                            "Estrato_socioeconomico_Id": estrato.data,
                                            "Tipo_estado_Id": estado.data,
                                            "Perfil_Id": perfil.data,
                                            "Tipo_cargo_Id": cargo.data

                                        }
                                        res.status(200).json(datos)
                                    })
                                    
                                })
                                
                            })

                           
                        
                        })
                        
                    })
        })

        })
            
        })
    })             

    .catch((err) => {
       res.status(404).json(err)
   });
   


}

module.exports = views