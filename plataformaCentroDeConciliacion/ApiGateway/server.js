
const express = require('express') // 
const axios = require('axios') 
const app = express() // aplicaicon express 


// app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))

app.use(express.json()) // para usar json


var cors = require('cors')

app.use(cors()) // Use this after the variable declaration



app.post('/auth/ingresar', (req, res) => {
    const data = req.body;
    axios.post('http://127.0.0.1:4000/auth', data)
      .then(function (response) {
        // console.log(response);
        // req.headers['Authorization'] = "Bearer " + response.data.token
        res.set({ "Authorization": "Bearer " + response.data.token })
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        console.log(error);
        res.sendStatus(500)
      });
})

app.get("/auth/verificar", (req, res) => {
    axios.get("http://127.0.0.1:4000/get_identity", {
        headers: {
            Authorization: req.headers.authorization
        }
    })
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(500)
        })
})

app.get("/protectedView", verifier, (req, res) => {
    res.json({
        answer: "Passed Through authentication"
    })
})

function verifier(req, res, next) {
    console.log(req.headers.authorization)
    if(req.headers.authorization){
        axios.get("http://127.0.0.1:4000/get_identity", {
        headers: {
            Authorization: req.headers.authorization
        }
    })
        .then(response => {
            if(response.data["logged_in_as"]){
                console.log(response.data["logged_in_as"])
                next()
            }
            else {
                res.sendStatus(401)
            }
        })
        .catch(function (error) {
            res.sendStatus(404)
        })
    }
    else {
        res.sendStatus(401)
    }
    
}

const Solicitud = require('./routers/routers_solicitud')
const Genericos = require('./routers/routers_genericos')

app.use('/api/gateway/v1/solicitudes',Solicitud)
app.use('/api/gateway/v1/',Genericos)


const port = 3001;

app.listen(port, ()=>{
    console.log("El servidor esta corriendo en el puerto "+port)
});