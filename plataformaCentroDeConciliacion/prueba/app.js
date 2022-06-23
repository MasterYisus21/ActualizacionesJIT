const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const maxSize = 10 * 1000 * 1000 // 10Mb Max
const app = express();
var unirest = require('unirest');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

const fs = require('fs');
const axios = require("axios")
const FormData = require('form-data');

//Configuration for Multer
//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/${file.fieldname}-${Date.now()}.${ext}`);
  },
});

// Multer Filter
const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "jpeg"|file.mimetype.split("/")[1] ==="pdf"|file.mimetype.split("/")[1] ==="png") {
    cb(null, true);
  
  } else {
    cb(new Error("Formato no valido"), false);
  }
};
//Calling the "multer" Function
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: maxSize },
});
app.use(express.static('public'))

app.post("/api/uploadFile", upload.single("myFile"), async(req, res) => {
  try {

    const filename = "dowload.jpeg"; // existing local file on server

unirest
    .post('http://127.0.0.1:8000/api/conciliaciones/v1/documentos/')
    .field('Tamanio', 123)
    .field('Solicitud_Id', 102)
    .field('Tipo_estado_Id', 1)
    
    .attach('Ruta_directorio', req.file.path) // reads directly from local file
//.attach('myFile', fs.createReadStream(req.file.path)) // creates a read stream
    //.attach('data', fs.readFileSync(filename)) // 400 - The submitted data was not a file. Check the encoding type on the form. -> maybe check encoding?
    .then(function (response) {
        console.log(response.body) // 201
        res.status(200).json(response.body)
    })
    .catch((error) => console.log(error.response.data));
       
      }
    catch (err){
      console.log(err)
    }
 

//  datos={

//         "Ruta_directorio": req.file,
//         "Tamanio": 12,

//         "Solicitud_Id": 103,
//         "Tipo_estado_Id": 1
//  }
  



});


// Configurations for "body-parser"




// Configurations for setting up ejs engine &
// displaying static files from "public" folder
// TO BE ADDED LATER




app.use("/", (req, res) => {
  res.status(200).render("index");
});
// Routes will be added here later on

//Express server
const port = 3002;

const server = app.listen(port, () => {
  console.log("Server is up listening on port:" + port);

});

module.exports = app;