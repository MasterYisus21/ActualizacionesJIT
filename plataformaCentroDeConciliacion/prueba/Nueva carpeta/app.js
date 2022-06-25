const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();
app.listen(3002, "localhost", () => {
  console.log("Ya estoy escuchando en el puerto 8083");
});

let objMulter = multer({ dest: "./public/upload" }); // Instantiate multer, el objeto de parámetro pasado, dest representa la ruta de almacenamiento del archivo cargado
app.use(objMulter.any()); // cualquier significa cualquier tipo de archivo
// app.use (objMulter.image ()) // Solo permite cargar tipos de imágenes

app.use(express.static("./public"));
app.post("/api/uploadFile/", (req, res) => {
  let oldName = req.files[0].path;
  console.log(req.files[0].path)
  let newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
  fs.renameSync(oldName, newName);
  res.send({
    err: 0,
    url:
      "http://localhost:3005/upload/" +
      req.files[0].filename +
      path.parse(req.files[0].originalname).ext
  });
});