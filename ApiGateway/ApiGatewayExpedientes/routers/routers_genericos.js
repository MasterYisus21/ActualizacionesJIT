const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();
const config = require("../config.json");

const views_genericos = require("../views/views_genericos");

// listar 

router.get("/", (req, res) => {
    // console.log(req);
    axios({
        method: req.method.toLowerCase(),
        url: config.urlExpedientes + req.url,
        // headers: req.headers,
        data: req.body
    })
        .then(response => {
            // console.log(response.data);
            res.send(response.data)
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500)
        });
})

router.get("/paises", views_genericos.ListarPaises);
router.get("/:route", views_genericos.GenericList)
router.post("/:route", views_genericos.GenericList)
router.put("/:route/:id", views_genericos.GenericList)
router.delete("/:route/:id", views_genericos.GenericList)
module.exports = router;