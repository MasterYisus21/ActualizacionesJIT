const express = require('express')
const app = express()

// app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.set('view engine', 'ejs')
app.use(logger)

/* 
app.get('/', logger, (req, res) => {
    console.log("Here")
    // res.sendStatus(500)
    // res.send("Hi")
    // res.status(500).send("Hi")
    // res.status(500).json({ message : "Error"})
    // res.json({ message : "Error"})
    // res.download('server.js')
    res.render("index", { text: 'World' })
})
 */

// const userRouter = require('./routes/users')

// app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send("Hello ApiGateway")
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

const port = 3001;

app.listen(port, ()=>{
    console.log("El servidor esta corriendo en el puerto "+port)
});