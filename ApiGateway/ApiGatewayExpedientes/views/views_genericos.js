const axios = require("axios");
const { response } = require("express");

const views = {};

const config = require("../config.json");
const error = require("../requests/requests_error.js")
const requests = require("../requests/requests_generales.js");

views.GenericList = async (req, res) => {
  try {
    axios({
      method: req.method.toLowerCase(),
      url: config.urlExpedientes + req.url.slice(1),
      // headers: req.headers,
      data: req.body
    })
      .then(result => {
        res.status(200).json(result.data)
      })
      .catch(err => {

        res.sendStatus(error(err))
      });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}
views.ListarDepartamentos = async (req, res) => {
  try {
    const url = config.urlExpedientes + "departamentos?pais_id=" + req.params.id
  
    requests.get(req, res, url, "&")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}
views.ListarCiudades = async (req, res) => {
  try {
    const url = config.urlExpedientes + "ciudades?departamento_id=" + req.params.id2
    requests.get(req, res, url, "&")

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
module.exports = views;