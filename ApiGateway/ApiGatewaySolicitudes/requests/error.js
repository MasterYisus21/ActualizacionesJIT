errores =(error) => {

    if (error.response) {
        //response status is an error code
        console.log("el error esta en la ruta: \n"+error.response.request.path);
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
        return 400
      }
}

module.exports = errores;