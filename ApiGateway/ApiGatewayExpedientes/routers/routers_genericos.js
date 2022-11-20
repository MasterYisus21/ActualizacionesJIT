const express = require("express");
const axios = require("axios");
const app = express();
const router = express.Router();

const views_genericos = require("../views/views_genericos");

// listar 

router.get("/paises", views_genericos.ListarPaises);
module.exports = router;