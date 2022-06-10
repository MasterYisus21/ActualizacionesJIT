const axios = require('axios'); 
const res = require('express/lib/response');
const config =require ('../config.json')
datosPersonas = {}


datosPersonas.datosBasicos = async (response) => {
    let datos= {}
   
    try {
        for await (const informacion_data of response.data) {
            // Incrementando el tamaño total.
            const resp = await axios.get(config.urlApiConciliacion + "/personas/"+informacion_data.Persona_Id);
            const barrio= await axios.get(config.urlApiConciliacion + "/barrios/"+resp.data.Barrio_Id);
            const localidad = await axios.get(config.urlApiConciliacion + "/localidades/"+barrio.data.Localidad_Id);
            const ciudad = await axios.get(config.urlApiConciliacion + "/ciudades/"+localidad.data.Ciudad_Id);
            const departamento = await axios.get(config.urlApiConciliacion + "/departamentos/"+ciudad.data.Departamento_Id);
            const pais = await  axios.get(config.urlApiConciliacion + "/paises/"+departamento.data.Pais_Id);
          
            departamento.data.Pais_Id = pais.data
            ciudad.data.Departamento_Id = departamento.data
            localidad.data.Ciudad_Id=ciudad.data
            barrio.data.Localidad_Id= localidad.data
            resp.data.Barrio_Id=barrio.data
            

            datos[informacion_data.Persona_Id] = resp.data
            
            
           
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

    
};

datosPersonas.datosCompletos = async (response) => {
    let datos= {}
  
   
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
        
            
           
     
          
            

            datos[informacion_data.Id] = resp.data
            
            
           
          }
          return datos
        
        
    } catch (err) {
        // Handle Error Here
        console.log(err)
        throw new Error(err);
        
    }

    
};

module.exports = datosPersonas