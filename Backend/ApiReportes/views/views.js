const axios = require("axios");
const views = {};
const config = require("../config.json");
const LibroRadicador=require("../reportes/libro_radicador")



views.Reportes = async (req, res) => {
 
    axios.post(config.urlApiConsulta,req.body)
    .then((result) => {
        switch (req.body.nombre) {
            case "LibroRadicador":
                LibroRadicador.LibroRadicador(res,result.data);
                break;
        
            default:
                console.log("No se encuentra ningun archivo con ese reporte");
                res.sendStatus(400)
                break;
        }


        
       
    }).catch((err) => {
        res.send(err)
    });
}
module.exports = views;