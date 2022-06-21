const axios = require('axios'); 

const views = {}
const datosPersonas = require('../views/datos')
const config =require ('../config.json');

const identificacion=1234

//////////////////////////////////////////
const express = require("express");
var fileupload = require("express-fileupload");

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



<<<<<<< HEAD
=======
views.CargarDocumentos=async(req,res)=>{
   
    try{

     console.log(req.files)
       
}catch(error){
    console.log(error)
}
}

>>>>>>> dbbf8765a1449c04a3ebd40eae2b996856af8881
module.exports = views