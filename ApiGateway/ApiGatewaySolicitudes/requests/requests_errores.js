errores =(error,code=0) => {

    if (error.response) {
        //response status is an error code
        console.log("el error esta en la ruta: \n"+error.response.request.path);
        console.log(error.response.data)
        
        return error.response.status
        
      }
      else if (error.request) {
        //response not received though the request was sent
        console.log("el error fue en esta la ruta \n"+error.request._options.agent.path);
        return 500
      }
      else {
        //an error occurred when setting up the request
        console.log(error.message);
        if(code!=0) return code
        return 400
      }
}

module.exports = errores;