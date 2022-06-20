const axios = require('axios'); 
var fileupload = require("express-fileupload");
const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json');
const { response } = require('express');
const res = require('express/lib/response');
const identificacion=1234
const express = require("express");
const app = express();
app.use(fileupload());

views.VerDocumentos=async(req,res)=>{
    let data=[]
    try{
   await  axios.get(config.urlApiConciliacion+ "/documentos?Solicitud_Id="+req.params.id)
    .then(async(result) => {
        for (const iterator of result.data) {
            console.log(iterator.Tipo_estado_Id)
           await axios.get(config.urlApiConciliacion+"/tipos_estado/"+iterator.Tipo_estado_Id)
            .then(res=>{
                iterator.Tipo_estado_Id=res.data
                data.push(iterator)
            })
           
               
            
        }

        
        res.status(200).json(data)
        
    }).catch((err) => {
        res.status(404).json(err)
    });
}catch(error){
    console.log(error)
}
}



views.CargarDocumentos=async(req,res)=>{
   
    try{
        app.post(config.urlApiConciliacion+"/documentos/", (req, res) => {
            let username = req.body;
            let userPicture = req.files;
            res.send(`
              Your username is: ${username}
              Uploaded image name is: ${userPicture.name}
            `);
        });
}catch(error){
    console.log(error)
}
}

module.exports = views