const axios = require("axios");
const views = {};
const config = require("../config.json");
const LibroRadicador = require("../reportes/LibroRadicador")
const FuncionRemplazar = require("../reportes/FuncionRemplazar")
const apiKey = "prueba"


views.Reportes = async (req, res) => {

    axios.post(config.urlApiConsulta, req.body, {
        headers: {
            Authorization: `Api-Key ${apiKey}`
        }
    })
        .then((result) => {
            let data = {}
            
            switch (req.body.nombre) {
                case "libro_radicador":
                    LibroRadicador.LibroRadicador(res, result.data);
                    break;
                case "snies":

                    data = {}
                    for (const iterator of result.data) {

                        data[iterator.datos] = parseInt(iterator.cantidad)

                    }

                    FuncionRemplazar(req.body.nombre, data, res);
                    break;
                case "constancias_de_inasistencia":
                case "constancias_de_no_acuerdo":
                case "actas_de_conciliación":
                case "actas_cumplidas":    
                    data = {}
                    let i = 1
                    for (const iterator of result.data) {
                     
                        for (const key in iterator) {

                            data[key + "_" + iterator.semestre] = iterator[key]

                        }

                        i++
                    }

                    FuncionRemplazar(req.body.nombre, data, res);
                    break;
                    
                default:
                    console.log("No se encuentra ningun archivo con ese reporte");
                    res.sendStatus(400)
                    break;
            }




        }).catch((err) => {
            console.log("Ocurrio un error en el servicio de reportes")
            console.log(err);
            res.sendStatus(400)
        });
}
module.exports = views;