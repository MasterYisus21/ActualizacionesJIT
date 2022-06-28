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
                //res.json(datos)
                axios.post("http://localhost:8001/",datos)
                .then(async(result) => {
                    // await axios.get(result.data.url,{ responseType : 'arraybuffer' })
                    // .then((response) => {
                    //     res.end(response.data)
                        
                    // }).catch((err) => {
                    // res.sendStatus(404)
                    //   console.log(err)
                    // });
                    res.json(result.data)

                }).catch((err) => {
                    
                });
                

            })
            







            .catch(error => { console.log(error) })

 

    } catch (error) {
        console.log(error)
    }
}

module.exports = views