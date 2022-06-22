const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

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
  if (file.mimetype.split("/")[1] === "jpeg"|file.mimetype.split("/")[1] ==="pdf"|file.mimetype.split("/")[1] ==="png" & file.size<1000000 ) {
    cb(null, true);
  
  } else {
    cb(new Error("Formato no valido"), false);
  }
};
//Calling the "multer" Function
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
app.post("/api/uploadFile", upload.single("myFile"), async(req, res) => {
  console.log("entre")
// Stuff to be added later
// console.log(req.file)
try {
  console.log(req.file)
  // const newFile = await File.create({
  //   name: req.file.filename,
  // });
  res.status(200).json({
    name: req.file.filename,
    status: "success",
    message: "File created successfully!!",
  });
} catch (error) {
  res.json({
    error,
  });
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