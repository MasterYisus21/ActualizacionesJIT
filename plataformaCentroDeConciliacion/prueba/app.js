
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()



app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` fil
    console.log(req.body)
    console.log(req.body)
    // req.body will hold the text fields, if there were any
  })
// Start up the server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});