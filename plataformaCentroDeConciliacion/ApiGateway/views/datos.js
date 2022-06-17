const axios = require('axios'); 
const { response } = require('express');
const res = require('express/lib/response');
const config =require ('../config.json')
datosPersonas = {}

datosPersonas.Actualizar= (req,res)=>{
   
    axios.patch(config.urlApiConciliacion + "/"+req.params.nombre+"/" +req.params.id+"/",req.body)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        //console.log(error);
        res.sendStatus(500)
    })
    
}
datosPersonas.datosBasicos = async(response) => {
    let datos= []
   
    try {
        if (response.data!=""){
        for await (const informacion_data of response.data) {
            
        
            // Incrementando el tamaño total.
            const resp = await axios.get(config.urlApiConciliacion + "/personas/"+informacion_data.Persona_Id);
            // const barrio= await axios.get(config.urlApiConciliacion + "/barrios/"+resp.data.Barrio_Id);
            // const localidad = await axios.get(config.urlApiConciliacion + "/localidades/"+barrio.data.Localidad_Id);
            // const ciudad = await axios.get(config.urlApiConciliacion + "/ciudades/"+localidad.data.Ciudad_Id);
            // const departamento = await axios.get(config.urlApiConciliacion + "/departamentos/"+ciudad.data.Departamento_Id);
            // const pais = await  axios.get(config.urlApiConciliacion + "/paises/"+departamento.data.Pais_Id);
            const documento = await  axios.get(config.urlApiConciliacion + "/tipos_documento/"+resp.data.Tipo_documento_Id);
            const tipo = await  axios.get(config.urlApiConciliacion + "/tipos_persona/"+resp.data.Tipo_persona_Id);
            
            // departamento.data.Pais_Id = pais.data
            // ciudad.data.Departamento_Id = departamento.data
            // localidad.data.Ciudad_Id=ciudad.data
            // barrio.data.Localidad_Id= localidad.data
            // resp.data.Barrio_Id=barrio.data
            resp.data.Tipo_documento_Id= documento.data
            resp.data.Tipo_persona_Id=tipo.data
            

            datos.push(resp.data)
            
            
            }
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
};
datosPersonas.datosBasicosDocentes = async(response) => {
    let datos= []
   
    try {
        for await (const informacion_data of response.data) {
            
            console.log(informacion_data)
           
            const documento = await  axios.get(config.urlApiConciliacion + "/tipos_documento/"+informacion_data.Tipo_documento_Id);
            const tipo = await  axios.get(config.urlApiConciliacion + "/tipos_persona/"+informacion_data.Tipo_persona_Id);
            
            // departamento.data.Pais_Id = pais.data
            // ciudad.data.Departamento_Id = departamento.data
            // localidad.data.Ciudad_Id=ciudad.data
            // barrio.data.Localidad_Id= localidad.data
            // resp.data.Barrio_Id=barrio.data
            informacion_data.Tipo_documento_Id= documento.data
            informacion_data.Tipo_persona_Id=tipo.data
            

            datos.push(informacion_data)
            
            
           
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
};
datosPersonas.datosCrearPersonas = async(response)=>{}

datosPersonas.datosCompletos = async (response) => {
    let datos= []
  
   
    try {
        if (response.data!=0){
        for await (const informacion_data of response.data) {
            // Incrementando el tamaño total.
            const resp = await axios.get(config.urlApiConciliacion + "/personas/"+informacion_data.Id);
            const barrio= await axios.get(config.urlApiConciliacion + "/barrios/"+resp.data.Barrio_Id);
            const localidad = await axios.get(config.urlApiConciliacion + "/localidades/"+barrio.data.Localidad_Id);
            const ciudad = await await axios.get(config.urlApiConciliacion + "/ciudades/"+localidad.data.Ciudad_Id);
            const departamento = await await axios.get(config.urlApiConciliacion + "/departamentos/"+ciudad.data.Departamento_Id);
            const pais = await await axios.get(config.urlApiConciliacion + "/paises/"+departamento.data.Pais_Id);
            const tipo_persona =(resp.data.Tipo_persona_Id=== null | '') ? resp.data.Tipo_persona_Id='' :  await axios.get(config.urlApiConciliacion + "/tipos_persona/"+resp.data.Tipo_persona_Id).then(result=>{ resp.data.Tipo_persona_Id=result.data});
            const documento= (resp.data.Tipo_documento_Id=== null | '') ? resp.data.Tipo_documento_Id='' :  await axios.get(config.urlApiConciliacion + "/tipos_documento/"+resp.data.Tipo_documento_Id).then(result=>{resp.data.Tipo_documento_Id=result.data})
            const vivienda= (resp.data.Tipo_documento_Id=== null | '') ? resp.data.Tipo_vivienda_Id='' :  await axios.get(config.urlApiConciliacion + "/tipos_vivienda/"+resp.data.Tipo_vivienda_Id).then(result=>{resp.data.Tipo_vivienda_Id=result.data})
            const tipo_estado= (resp.data.Tipo_estado_Id=== null | '') ? resp.data.Tipo_estado_Id='' :  await axios.get(config.urlApiConciliacion + "/tipos_estado/"+resp.data.Tipo_estado_Id).then(result=>{resp.data.Tipo_estado_Id=result.data})
            const estrato=(resp.data.Estrato_socioeconomico_Id=== null | '') ? resp.data.Estrato_socioeconomico_Id='' :  await axios.get(config.urlApiConciliacion + "/estratos_socioeconomicos/"+resp.data.Estrato_socioeconomico_Id).then(result=>{resp.data.Estrato_socioeconomico_Id=result.data})
            const perfil=(resp.data.Perfil_Id=== null | '') ? resp.data.Perfil_Id='' :  await axios.get(config.urlApiConciliacion + "/perfiles/"+resp.data.Perfil_Id).then(result=>{resp.data.Perfil_Id=result.data})
            const cargo=(resp.data.Tipo_cargo_Id=== null | '') ? resp.data.Tipo_cargo_Id='' :  await axios.get(config.urlApiConciliacion + "/tipos_cargo/"+resp.data.Tipo_cargo_Id).then(result=>{resp.data.Tipo_cargo_Id=result.data})
            if(resp.data.Fecha_de_nacimiento=== null ) resp.data.Fecha_de_nacimiento='';

            departamento.data.Pais_Id = pais.data
            ciudad.data.Departamento_Id = departamento.data
            localidad.data.Ciudad_Id=ciudad.data
            barrio.data.Localidad_Id= localidad.data
            resp.data.Barrio_Id=barrio.data
        
            
           
     
          
            

             datos.push(resp.data)
            
            
        }
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.log(err)
        throw new Error(err);
        
    }

    
};

datosPersonas.CrearPersona = async (req) => {
    let datos={}
    try{
        if (req.body.Fecha_de_nacimiento === '' ){{req.body.Fecha_de_nacimiento=""}}
        if (req.body.Telefono ==='' ){{req.body.Telefono=0}}
        if (typeof req.body.Perfil_Id != 'number'){{req.body.Perfil_Id=""}}
        if (typeof req.body.Tipo_cargo_Id  !='number'){{req.body.Tipo_cargo_Id=null}}
        if (req.body.Identificacion ===null | '' ){res.sendStatus(404);}
        else if (typeof req.body.Nombres != 'string'& null&''){res.sendStatus(404); }
        else if (typeof req.body.Apellidos != 'string'& null&''){{res.sendStatus(404); }}
        else if (typeof req.body.Telefono != 'number' ){{res.sendStatus(404); }}
        else if (typeof req.body.Tipo_documento_Id != 'number' ){{res.sendStatus(404); }}
        else if (typeof req.body.Tipo_vivienda_Id != 'number' ){{res.sendStatus(404); console.log("1")}}
        else if (typeof req.body.Barrio_Id != 'number' ){{res.sendStatus(404); console.log("2")}}
        else if (typeof req.body.Tipo_persona_Id != 'number' ){{res.sendStatus(404); console.log("3")}}
        else if (typeof req.body.Estrato_socioeconomico_Id != 'number' ){{res.sendStatus(404); console.log("4")}}
        else if (typeof req.body.Tipo_estado_Id != 'number' ){{res.sendStatus(404); console.log("5")}}
       
        
        else{
                           
      datos=  {
            
            "Identificacion": req.body.Identificacion,
            "Nombres": req.body.Nombres,
            "Apellidos": req.body.Apellidos,
            "Correo": req.body.Correo,
            "Telefono": req.body.Telefono,
            "Fecha_de_nacimiento":req.body.Fecha_de_nacimiento,
            "Tipo_documento_Id": req.body.Tipo_documento_Id,
            "Tipo_vivienda_Id": req.body.Tipo_vivienda_Id,
            "Barrio_Id": req.body.Barrio_Id,
            "Tipo_persona_Id": req.body.Tipo_persona_Id,
            "Estrato_socioeconomico_Id": req.body.Estrato_socioeconomico_Id,
            "Tipo_estado_Id": 1,
            "Perfil_Id": req.body.Perfil_Id,
            "Tipo_cargo_Id": req.body.Tipo_cargo_Id
        }
    
}return(datos)

    }catch(error){
        console.log(error)
    }
}

datosPersonas.Solicitudes = async (response) => {
    let datos=[]
   
    console.log(response.data)
    try {
        if (response.data!=0){
        for await (const informacion_data of response.data) {
            const resp = await axios.get(config.urlApiConciliacion + "/solicitudes/"+informacion_data.Solicitud_Id);
            
            const historico = await axios.get(config.urlApiConciliacion + "/historicos_solicitud?Solicitud_Id="+informacion_data.Solicitud_Id);
            if(historico.data.length>0){
            
            const estado = (historico.data[0].Tipo_estado_Id === null | '') ? historico.data.Tipo_estado_Id='' :await axios.get(config.urlApiConciliacion + "/tipos_estado/"+historico.data[0].Tipo_estado_Id).then(result=>{ historico.data.Tipo_estado_Id=result.data.Nombre});;
        
            let data={
                Solicitud_Id:informacion_data.Solicitud_Id,
                Fecha_registro:resp.data.Fecha_registro,
                Tipo_Estado:historico.data.Tipo_estado_Id
            }
            datos.push(data)
          
        }
           
          }}
          else{
            return datos
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }


    
}

datosPersonas.SolicitudesEspecificas = async (response) => {
    let datos=[]
    
    try { 
       // console.log(response.data)
        if (response.data!=0){
        informacion_data=response.data
       
       
            const area =(informacion_data.Area_Id=== null | '') ? informacion_data.Area_Id='' : await axios.get(config.urlApiConciliacion + "/areas/"+informacion_data.Area_Id);
            const subtema = (informacion_data.Subtema_Id=== null | '') ? informacion_data.Subtema_Id='' : await axios.get(config.urlApiConciliacion + "/subtemas/"+informacion_data.Subtema_Id);
            const tipo_servicio =(informacion_data.Tipo_servicio_Id=== null | '') ? informacion_data.Tipo_servicio_Id='' : await axios.get(config.urlApiConciliacion + "/tipos_servicio/"+informacion_data.Tipo_servicio_Id);
            const tipos_resultado =(informacion_data.Tipo_resultado_Id=== null | '') ? informacion_data.Tipo_resultado_Id='' : await axios.get(config.urlApiConciliacion + "/tipos_resultado/"+informacion_data.Tipo_resultado_Id);
            const inicio_conflicto =(informacion_data.Inicio_conflicto_Id=== null | '') ? informacion_data.Inicio_conflicto_Id='' : await axios.get(config.urlApiConciliacion + "/inicios_conflicto/"+informacion_data.Inicio_conflicto_Id);
            const solicitante = (informacion_data.Solicitante_servicio_Id=== null | '') ? informacion_data.Solicitante_servicio_Id='' :await axios.get(config.urlApiConciliacion + "/solicitantes_servicio/"+informacion_data.Solicitante_servicio_Id);
            informacion_data.Area_Id=area.data
            informacion_data.Subtema_Id=subtema.data
            informacion_data.Tipo_servicios_Id=tipo_servicio.data
            informacion_data.Tipo_resultados_Id=tipos_resultado.data
            informacion_data.Inicio_conficto_Id=inicio_conflicto.data
            informacion_data.Solicitante_servicio_Id=solicitante.data
            datos=informacion_data
            
           
        }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }


    
}

datosPersonas.Historial = async (response) => {
    let datos=[]
    
    try {
        if (response.data!=0){
        for await (const informacion_data of response.data) {
            const resp = await axios.get(config.urlApiConciliacion + "/solicitudes/"+informacion_data.Solicitud_Id);
            const historico = await axios.get(config.urlApiConciliacion + "/historicos_solicitud?Solicitud_Id="+informacion_data.Solicitud_Id);
            console.log("Historicos")
            console.log(historico.data[0])
            for await (const historial of historico.data) {
            historial.Fecha=historial.Fecha.substring(0,(historial.Fecha.indexOf("T")))
            const estado = (historial.Tipo_estado_Id === null | '') ? historial.Tipo_estado_Id='' :await axios.get(config.urlApiConciliacion + "/tipos_estado/"+historial.Tipo_estado_Id).then(result=>{ historial.Tipo_estado_Id=result.data.Nombre});;
            datos[datos.length]=historial   

           
        }
            // datos.push(""+resp.data.Solicitud_Id)
            // historico.data[0].Tipo_estado_Id = estado.data
            
            
            
    } 
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
}
datosPersonas.SolicitudesSearch = async (response,search) => {
    let datos=[]
    
    try {
        if (response.data!=0){
        for await (const informacion_data of response.data) {
           

            if(informacion_data.Solicitud_Id==search){


                const resp = await axios.get(config.urlApiConciliacion + "/solicitudes/"+informacion_data.Solicitud_Id);
                console.log("solicitud")
                console.log(resp.data)
                const historico = await axios.get(config.urlApiConciliacion + "/historicos_solicitud?Solicitud_Id="+informacion_data.Solicitud_Id);
                console.log("Historicos")
                //console.log(historico.data)
                if(historico.data.length>0){
                const estado = (historico.data[0].Tipo_estado_Id === null | '') ? historico.data.Tipo_estado_Id='' :await axios.get(config.urlApiConciliacion + "/tipos_estado/"+historico.data[0].Tipo_estado_Id).then(result=>{ historico.data.Tipo_estado_Id=result.data.Nombre});;
                    
                let data={
                    Solicitud_Id:informacion_data.Solicitud_Id,
                    Fecha_registro:resp.data.Fecha_registro,
                    Tipo_Estado:historico.data.Tipo_estado_Id
                }

                datos.push(data)
            }else{data={}}

           
            
            
            
            }
          }
        }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
}

datosPersonas.EliminarPersonasDeCitacion = async (req) => {
    let datos={}
    
    try {

        

        for await (const informacion_data of req.body) {

            const personas = await axios.get(config.urlApiConciliacion + "/personas?Identificacion="+informacion_data)
            const resp = await axios.get(config.urlApiConciliacion + "/relaciones_citacion_persona?Citacion_Id="+req.params.id2+"&Persona_Id="+personas.data[0].Id);
            const eliminar = await axios.delete(config.urlApiConciliacion + "/relaciones_citacion_persona/"+ resp.data[0].Id + "/");
           
            datos[informacion_data]=resp.data
            
            }         
          
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
}

datosPersonas.BuscarPersona = async (response,search) => {
    let datos= []
   
    try {
        if (response.data.length>0){
        for await (const informacion_data of response.data) {
            // Incrementando el tamaño total.
         await axios.get(config.urlApiConciliacion + "/personas/"+informacion_data.Persona_Id+"?Identificacion="+search.params.search)
          .then(async result => {
            const documento = await  axios.get(config.urlApiConciliacion + "/tipos_documento/"+result.data.Tipo_documento_Id);
            const tipo = await  axios.get(config.urlApiConciliacion + "/tipos_persona/"+result.data.Tipo_persona_Id);
            result.data.Tipo_documento_Id= documento.data
            result.data.Tipo_persona_Id=tipo.data
            datos.push(result.data)
            
        }).catch((err) => {
       
        }); 
          
          
            

          //  datos.push(resp.data)
            
            
    }
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
};




module.exports = datosPersonas
