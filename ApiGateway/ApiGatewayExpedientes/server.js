const express = require("express"); //
const axios = require("axios");
const app = express(); // aplicaicon express
const config = require("./config.json");
const error = require("./requests/requests_error.js")

app.use(express.json()); // para usar json

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration
app.disable('x-powered-by');

app.post("/api/gateway/v1/auth/ingresar/", async (req, res) => {
  try {
    let modulos=[]
    const data = req.body;
    axios.defaults.headers['X-Api-Key'] =config.apiKey ;
    axios.defaults.headers['Id'] =data.username;
    let endpoints = [config.urlApiExpedientes + "usuarios?username=" + data.username,
    config.urlApiExpedientes + "personas?identificacion=" + data.username,config.urlApiExpedientes+"modulos"]

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread(async (data1, data2,data3) => {
        if (Object.keys(data1.data.results).length < 1|Object.keys(data2.data.results).length < 1) { res.sendStatus(401); return }
        data.rol = data1.data.results[0].groups
        data.app = "Centro Conciliacion JIT";
        await axios.post(config.urlAutenticacion + "auth", data)
          .then(async function (response) {
            for (const iterator in data3.data) {
             if(data3.data[iterator]==true){modulos.push(iterator)}
            }
            response.data.modulos = modulos
            response.data.nombres = data2.data.results[0].nombres +" "+data2.data.results[0].apellidos ;
            res.status(200).json(response.data)
          })
          .catch(function (err) {
            // console.log("error en el servidor de autenticacion")
            res.sendStatus(error(err))
          });
      }))
      .catch(err => {

        res.sendStatus(error(err))
        return

      })



  } catch (error) {
    console.log(error);
  }
});

app.post("/api/gateway/v1/auth/verificar", (req, res) => {
  /// es para probar
  axios
    .post(
      config.urlAutenticacion + "get_identity",
      {},
      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
});

app.post("/api/gateway/v1/auth/refresh", (req, res) => {
  // refresh token
  axios
    .post(
      config.urlAutenticacion + "refresh",
      {},
      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
});


app.get("/api/gateway/v1/protectedView", verifier, (req, res) => {
  res.json({
    answer: "Passed Through authentication",
  });
});




async function verifier(req, res, next) {

  // console.log(req.headers.authorization)
  try {
    axios.defaults.headers['X-Api-Key'] =config.apiKey ;
    axios.defaults.headers['Id'] ="jairo";
    req.identificacion="1013689035";
    req.grupo=2
   
    if (req.headers.authorization) {

      await axios
        .post(
          config.urlAutenticacion + "get_identity",
          {},
          {
            headers: {
              Authorization: req.headers.authorization,
            },
          }
        )
        .then((response) => {
          if (response.data["logged_in_as"]) {

            req.idgrupo = response.data.claims.rol;
            req.identificacion = response.data.claims.sub;
       
       
            next();
          } else {

            res.sendStatus(401);
          }
        })
        .catch(function (err) {

        
            res.sendStatus(error());
            return;
       

        
        });
    } else {

      // res.sendStatus(403)
      // return;
      
      next()
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

app.use(verifier);







const Genericos = require("./routers/routers_genericos");

//app.use("/api/gateway/v1/solicitudes", Solicitud);
app.use("/api/gateway/v1/", Genericos);



const port = 3002;


app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto " + port);
});