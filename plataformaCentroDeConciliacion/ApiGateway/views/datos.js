const axios = require('axios'); 
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
datosPersonas.datosBasicos = async (response) => {
    let datos= []
   
    try {
        for await (const informacion_data of response.data) {
            // Incrementando el tamaño total.
            const resp = await axios.get(config.urlApiConciliacion + "/personas/"+informacion_data.Persona_Id);
            const barrio= await axios.get(config.urlApiConciliacion + "/barrios/"+resp.data.Barrio_Id);
            const localidad = await axios.get(config.urlApiConciliacion + "/localidades/"+barrio.data.Localidad_Id);
            const ciudad = await axios.get(config.urlApiConciliacion + "/ciudades/"+localidad.data.Ciudad_Id);
            const departamento = await axios.get(config.urlApiConciliacion + "/departamentos/"+ciudad.data.Departamento_Id);
            const pais = await  axios.get(config.urlApiConciliacion + "/paises/"+departamento.data.Pais_Id);
            const documento = await  axios.get(config.urlApiConciliacion + "/tipos_documento/"+resp.data.Tipo_documento_Id);
            const tipo = await  axios.get(config.urlApiConciliacion + "/tipos_persona/"+resp.data.Tipo_persona_Id);
            console.log(resp.data)
            departamento.data.Pais_Id = pais.data
            ciudad.data.Departamento_Id = departamento.data
            localidad.data.Ciudad_Id=ciudad.data
            barrio.data.Localidad_Id= localidad.data
            resp.data.Barrio_Id=barrio.data
            resp.data.Tipo_documento_Id= documento.data
            resp.data.Tipo_persona_Id=tipo.data
            

            datos.push(resp.data)
            
            
           
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
};

datosPersonas.datosCompletos = async (response) => {
    let datos= []
  
   
    try {
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
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.log(err)
        throw new Error(err);
        
    }

    
};

datosPersonas.Solicitudes = async (response) => {
    let datos={}
    
    try {
       
        for await (const informacion_data of response.data) {
            const resp = await axios.get(config.urlApiConciliacion + "/solicitudes/"+informacion_data.Solicitud_Id);
            const historico = await axios.get(config.urlApiConciliacion + "/historicos_solicitud?Solicitud_Id="+informacion_data.Solicitud_Id);
            const estado = await axios.get(config.urlApiConciliacion + "/tipos_estado/"+historico.data[0].Tipo_estado_Id);
            datos[informacion_data.Solicitud_Id]={
                Solicitud_Id:informacion_data.Solicitud_Id,
                Fecha_registro:resp.data.Fecha_registro,
                Tipo_Estado:estado.data.Nombre
            }
            console.log("////")
            console.log(datos)
           
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }


    
}

datosPersonas.SolicitudesEspecificas = async (response) => {
    let datos={}
    
    try {
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
            
           
          
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }


    
}

datosPersonas.Historial = async (response) => {
    let datos={}
    
    try {
       
        for await (const informacion_data of response.data) {
            const resp = await axios.get(config.urlApiConciliacion + "/solicitudes/"+informacion_data.Solicitud_Id);
            const historico = await axios.get(config.urlApiConciliacion + "/historicos_solicitud?Solicitud_Id="+informacion_data.Solicitud_Id);
            const estado = await axios.get(config.urlApiConciliacion + "/tipos_estado/"+historico.data[0].Tipo_estado_Id);

            historico.data[0].Tipo_estado_Id = estado.data
            datos[informacion_data.Solicitud_Id]= historico.data
            
           
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
}
datosPersonas.SolicitudesSearch = async (response,search) => {
    let datos={}
    
    try {

        for await (const informacion_data of response.data) {

            if(informacion_data.Solicitud_Id==search){
            const resp = await axios.get(config.urlApiConciliacion + "/solicitudes/"+informacion_data.Solicitud_Id);
            const historico = await axios.get(config.urlApiConciliacion + "/historicos_solicitud?Solicitud_Id="+informacion_data.Solicitud_Id);
            const estado = await axios.get(config.urlApiConciliacion + "/tipos_estado/"+historico.data[0].Tipo_estado_Id);

            historico.data[0].Tipo_estado_Id = estado.data
            datos[informacion_data.Solicitud_Id]={
                Solicitud_Id:informacion_data.Solicitud_Id,
                Fecha_registro:resp.data.Fecha_registro,
                Tipo_Estado:estado.data.Nombre
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

            
            const resp = await axios.get(config.urlApiConciliacion + "/relaciones_citacion_persona?Citacion_Id="+req.params.id2+"&Persona_Id="+informacion_data);
            const eliminar = await axios.delete(config.urlApiConciliacion + "/relaciones_citacion_persona/"+ resp.data[0].Id + "/");
           
            datos[informacion_data]=resp.data
            
            }         
          
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
}




module.exports = datosPersonas
