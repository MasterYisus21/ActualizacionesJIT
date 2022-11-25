errores =(error,code=0) => {

    if (error.response) {
        //response status is an error code
        console.log("El error ocurrio en la peticion: \n"+error.response.request.path);
        return error.response.status
        
      }
      else if (error.request) {
        //response not received though the request was sent
        console.log("Error al eviar la solicitud al servidor \n"+error.request._options.agent);
        return 500
      }
      else {
        //an error occurred when setting up the request
        console.log(error.message);
        if(code==0){return 400} else{return code}
        
      }
}

module.exports = errores;