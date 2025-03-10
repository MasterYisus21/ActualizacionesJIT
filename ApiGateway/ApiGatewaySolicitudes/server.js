const express = require("express"); //
const axios = require("axios");
const app = express(); // aplicaicon express
const config = require("./config.json");



app.use(express.json()); // para usar json

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

const routers = require("./routers/routers");

// axios.defaults.headers['Id'] ="jairo"

//app.use("/api/gateway/v1/solicitudes", Solicitud);
function verificarApiKey(req,res,next) {
  
 
  next()
  
}
axios.defaults.headers.common['X-Api-Key'] =config.apiKey
app.use(verificarApiKey)
app.use("/api/gateway/v1/", routers);

const port = 3001;
 ;
app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto " + port);
});