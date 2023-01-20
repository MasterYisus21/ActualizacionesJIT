const  email ={}
email.enviar= (tipo_mensaje, saludo,correoQuienRecibe, asunto, encabezado,cuerpo,adjunto=false) => {

    const correoCopia="jairourrego123@gmail.com"
    correoQuienRecibe.push(correoCopia)
    let email = {
      nombre_servicio:"Centro de Conciliación",
      tipo_mensaje: tipo_mensaje,
      destinatario: correoQuienRecibe,
      asunto: asunto,
     
      mensaje: {
        saludo: saludo,
        encabezado: encabezado,
        cuerpo:cuerpo,
        despedida: "Gracias por la atención prestada",
        
      }
    }
    if(adjunto){ email.adjunto=adjunto}
    return email
  } 

  module.exports = email