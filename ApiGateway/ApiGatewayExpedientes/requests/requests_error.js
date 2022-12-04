errores =(error,code=0) => {

    if (error.response) {
        //response status is an error code
        console.log("El error ocurrio en la peticion: \n"+error.response.request.path);
        console.log(error.response.data)
        return error.response.status
        
      }
      else if (error.request) {
        //response not received though the request was sent
        console.log("Error al conectar con el servidor ");
        return 500
      }
      else {
        //an error occurred when setting up the request
        console.log(error.message);
        if(code==0){return 400} else{return code}
        
      }
}

module.exports = errores;