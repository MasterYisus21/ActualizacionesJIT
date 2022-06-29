const axios = require('axios');

const views = {}
const datosPersonas = require('../views/datos')
const config = require('../config.json');
const { response } = require('express');
const res = require('express/lib/response');
const identificacion = 1234

axios.get(config.urlApiConciliacion + "/personas?Identificacion=" + identificacion).then(resp => {

    id_persona = resp.data[0].id
}).catch(error => { console.log(error) })

views.Respuestas = async (req, res) => {

    let datos = {}
    data = []
    try {
        const persona = await axios.get(config.urlApiConciliacion + "/encuestas?Solicitud_Id=" + req.params.id + "&Persona_Id=" + req.body[1].idpersona)


        if (req.body[1].idpersona === null | req.body[1].idpersona == '') { res.sendStatus(404); }
        else if (req.body[2].idmedioConocimiento === null | req.body[2].idmedioConocimiento === '') { res.sendStatus(404); }

        else if (persona.data.length) { res.sendStatus(208) } else {

            for await (const iterator of req.body[0].preguntas) {
                if (iterator.idpregunta === null | iterator.idpregunta === '') { console.log("error 1"); res.sendStatus(404); break; }
                else if (iterator.idrespuesta === null | iterator.idrespuesta === '') { console.log("error 2"); res.sendStatus(404); break; }

            }
            datos = {
                "Solicitud_Id": req.params.id,
                "Persona_Id": req.body[1].idpersona,
                "Medio_conocimiento_Id": req.body[2].idmedioConocimiento
            }
            console.log(datos)
            await axios.post(config.urlApiConciliacion + "/encuestas/", datos)

                .then(async resp => {
                    console.log(resp)
                    for await (const iterator of req.body[0].preguntas) {

                        datos = {
                            "Pregunta_Id": iterator.idpregunta,
                            "Calificacion": iterator.idrespuesta,
                            "Encuesta_Id": resp.data.Id
                        }

                        await axios.post(config.urlApiConciliacion + "/respuestas/", datos)



                    }



                    res.sendStatus(201)


                })

        }
    } catch (error) {

        console.log(error)
        //res.sendStatus(400)
    }
}

views.EncuestaEspecifica = async (req, res) => {



    try {
        if (req.idpermiso == 0) { res.sendStatus(401); return }
        const response = await axios.get(config.urlApiConciliacion + "/rol_permisos/" + req.idpermiso)

        if (!response.data.Permiso_consulta) {
            console.log("error")
            res.sendStatus(401)
            return
        }
        await axios.get(config.urlApiConciliacion + "/encuestas?Solicitud_Id=" + req.params.id + "&Persona_Id=" + req.params.id2)
            .then(async resp => {

                let data = []
                if (resp.data == '') { res.status(200).json(resp.data) } else {
                    console.log("entre")
                    const medio = await axios.get(config.urlApiConciliacion + "/medios_conocimiento/" + resp.data[0].Medio_conocimiento_Id)
                    await axios.get(config.urlApiConciliacion + "/respuestas?Encuesta_Id=" + resp.data[0].Id)

                        .then(response => {
                            data[0] = medio.data
                            data[1] = response.data

                            res.status(200).json(data)
                        })
                }

            })


    } catch (error) {

        console.log(error)
        res.sendStatus(400)
    }
}

module.exports = views
