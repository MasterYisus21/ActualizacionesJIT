const express = require("express"); //
const axios = require("axios");
const app = express(); // aplicaicon express
const config = require("./config.json");

// app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))

app.use(express.json()); // para usar json

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

const Genericos = require("./routers/routers_genericos");

//app.use("/api/gateway/v1/solicitudes", Solicitud);
app.use("/api/gateway/v1/", Genericos);



const port = 3002;


app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto " + port);
});