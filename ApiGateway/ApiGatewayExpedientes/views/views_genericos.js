const axios = require("axios");
const { response } = require("express");

const views = {};

const config = require("../config.json");

// listar 
views.ListarPaises = async (req, res) => {
  try {


    if (!req.query.page) {
      req.query.page = 1;
    }
    if (!req.query.count) {
      req.query.count = 10;
    }
    if (!req.query.ordering) {
      req.query.ordering = "id";
    }
    let url =
      config.urlExpedientes +
      "paises?page=" +
      req.query.page +
      "&ordering=" +
      req.query.ordering +
      "&count=" +
      req.query.count;
    if (req.query.search) {
      url =
        config.urlExpedientes +
        "paises?search=" +
        req.query.search +
        "&page=" +
        req.query.page +
        "&ordering=" +
        req.query.ordering +
        "&count=" +
        req.query.count;
    }

    await await axios
      .get(url, req.auth)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};


views.GenericList = async (req, res) => {
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
}



module.exports = views;