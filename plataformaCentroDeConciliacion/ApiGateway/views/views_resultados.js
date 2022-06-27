const axios = require('axios');
const { get } = require('express/lib/response');
const config = require('../config.json')
const views = {}
const datosPersonas = require('../views/datos')

views.ListarResultados = async (req, res) => {
    try {
        axios.get(config.urlApiConciliacion + "/tipos_resultado")
            .then((result) => {
                res.status(200).json(result.data)
            }).catch((err) => {
                console.log(err)
                res.sendStatus(400)
            });
    } catch (error) {
        console.log(error)
    }
}

views.ResultadoEspecifico = async (req, res) => {
    try {
        let datos = {}
        await axios.get(config.urlApiConciliacion + "/tipos_resultado/" + req.params.id2)
            .then(async (result) => {
                datos.tipo_resultado= result.data.Nombre
                datos.convocante = await datosPersonas.ExportarDatosPersona(req, "convocantes")
                datos.convocado = await datosPersonas.ExportarDatosPersona(req, "convocados")
                datos.conciliador = await datosPersonas.ExportarDatosPersona(req, "conciliadores")
                datos.estudiante = await datosPersonas.ExportarDatosPersona(req, "estudiantes")
                datos.hechos= await datosPersonas.ExportarDatos(req,"hechos")
                datos.citacion= await datosPersonas.ExportarDatos(req,"citaciones")
                datos.solicitud =  await datosPersonas.ExportarDatos(req," ")

                axios.post("http://localhost:3002/",datos)
                .then(async(result) => {
                   // await axios.get(result.data.url, { responseType : 'arraybuffer' })//,
                   // .then(response => {
                        res.json(result.data.url)
                   // })
                }).catch((err) => {
                    
                });
                

            })
            





            //convocado

            .catch(error => { console.log(error) })

        //convocante

        //        const convocantes= await axios.get(config.urlGateway + "solicitudes/"+ req.params.id+"/convocantes")
        //     if(convocantes.data == ''  |convocantes.data == null ){res.sendStatus(400);return}
        //     const barrio_convocante= await axios.get(config.urlApiConciliacion + "/barrios/"+convocantes.data[0].Barrio_Id);
        //     const localidad_convocante = await axios.get(config.urlApiConciliacion + "/localidades/"+barrio_convocante.data.Localidad_Id);
        //     const ciudad_convocante =  await axios.get(config.urlApiConciliacion + "/ciudades/"+localidad_convocante.data.Ciudad_Id);
        //     const departamento_convocante = await axios.get(config.urlApiConciliacion + "/departamentos/"+ciudad_convocante.data.Departamento_Id);
        //     const pais_convocante =  await axios.get(config.urlApiConciliacion + "/paises/"+departamento_convocante.data.Pais_Id);
        //     // const nombre_convocante= String(convocantes.data[0].Nombres+" "+(convocantes.data[0].Apellidos))
        //     // const identificacion_convocante = String(convocantes.data[0].Identificacion)
        //     // const tipo_documento_convocante = String(convocantes.data[0].Tipo_documento_Id.Nombre)
        //     // const telefono_convocante =  String(convocantes.data[0].Telefono)
        //     // const correo_convocante = String(convocantes.data[0].Correo)
        //    convocantes.data[0].Tipo_documento_Id=convocantes.data[0].Tipo_documento_Id.Nombre
        //    convocantes.data[0].Barrio_Id=barrio_convocante.data.Nombre
        //    convocantes.data[0].Localidad=localidad_convocante.data.Nombre
        //    convocantes.data[0].Ciudad=ciudad_convocante.data.Nombre
        //    convocantes.data[0].Departamento=departamento_convocante.data.Nombre
        //    convocantes.data[0].Pais=pais_convocante.data.Nombre

        //    convocantes.data[0].Tipo_persona_Id=convocantes.data[0].Tipo_persona_Id.Nombre
        //    convocantes.data[0].Tipo_persona_Id=convocantes.data[0].Tipo_persona_Id.Nombre

        //    datos.convocante=convocantes.data[0]
        // datos.barrio_convocante=barrio_convocante.data.Nombre
        // datos.localidad_convocante=localidad_convocante.data.Nombre
        // datos.ciudad_convocante=ciudad_convocante.data.Nombre
        // datos.departamento_convocante=departamento_convocante.data.Nombre
        // datos.pais_convocante=pais_convocante.data.Nombre
        // datos.nombre_convocante=nombre_convocante
        // datos.identificacion_convocante=identificacion_convocante
        // datos.tipo_documento_convocante=tipo_documento_convocante
        // datos.telefono_convocante=telefono_convocante
        // datos.correo_convocante=correo_convocante

        // convocado


        //res.status(200).json(datos) 

    } catch (error) {
        console.log(error)
    }
}

module.exports = views