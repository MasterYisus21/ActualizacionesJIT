const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const maxSize = 10 * 1000 * 1000 // 10Mb Max
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));
const FormData = require('form-data');
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
app.post("/api/uploadFile", upload.single("myFile"), async(req, res) => {
  try {
  let datos = {}
  datos=
     {

        "Ruta_directorio": req.file.filename,
        "Tamanio": req.file.size,
        "Solicitud_Id": 103,
        "Tipo_estado_Id": 1
  }
  const form = new FormData();
  formData.append('Tamanio', req.file.size);
  formData.append('Solicitud_Id', 103);
  formData.append('Tipo_estado_Id', 1);
  formData.append(req.file.filename, fs.createReadStream('/public/files/'+ req.file.filename));
  
await  axios.post("http://localhost:8000/api/conciliaciones/v1/documentos/",formData,{
  headers: formData.getHeaders()
})
  .then((result) => {
    res.status(200).json(result.data)
  })
// Stuff to be added later
// console.log(req.file)

  
} catch (error) {
console.log(error)
}
});


// Configurations for "body-parser"
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



// Configurations for setting up ejs engine &
// displaying static files from "public" folder
// TO BE ADDED LATER




app.use("/", (req, res) => {
  res.status(200).render("index");
});
// Routes will be added here later on

//Express server
const port = 3000;

const server = app.listen(port, () => {
  console.log("Server is up listening on port:" + port);

});

module.exports = app;