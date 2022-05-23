const express = require("express")
//const { default: App } = require("../front/apiconciliaciones/src/App")
const app = express()

app.get("/api",(req,res)=>{
    res.json({"users":["userOne","userTwho","userThree","userFor"]})
})


app.listen(5000, ()=>{
    console.log("inicio de servidor en el puerto 5000")
})