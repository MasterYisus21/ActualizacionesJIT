import React, { cloneElement, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ThreePositionSwitch } from '../Utilities'
import './css/NewModuloSolicitudDocumentos.css'
// import axiosApiInstance from '../Utilities'
import axios from 'axios'
import config from '../../config.json'

function NewModuloSolicitudDocumentos() {
  const [documentos, setDocumentos] = useState([])
  const [file, setFile] = useState(null)

  let UrlParams = useParams();
  const alertContainer = useRef("")
  

  const handleFile = (event) => {
    console.log(event.target.files, "$$$$");
    console.log(event.target.files[0], "$$$$");

    setFile(event.target.files[0])

  }

  const handleUpload = (event) => {
    console.log(file)

    let formData = new FormData()

    formData.append('myFile', file)
    // formData.append('name', "imagen")

    // http://localhost:3001/api/gateway/v1/solicitudes/idsolicitud/documentos

    axios.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/documentos', formData, {headers: {'content-type': 'multipart/dorm-data',}})
    .then(response => {
      console.log(response)
      alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Cargado Correctamente</div>"
      let data = response.data
      data["Tipo_estado_Id"] = {
        Id: 1
      };
      setDocumentos([...documentos, data])
      setFile(null)
    })
    .catch(error => {
      console.log(error)
      alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>La solicitud ha fallado por un error desconocido</div>"
    })

  }



  useEffect(() => {
    // setDocumentos([
    //   { Nombre: 1, Fecha_documento: "22/06/2022", estado: 11 },
    //   { Nombre: 2, Fecha_documento: "22/06/2022", estado: 11 },
    //   { Nombre: 3, Fecha_documento: "22/06/2022", estado: 11 },
    //   { Nombre: 4, Fecha_documento: "22/06/2022", estado: 11 },
    //   { Nombre: 5, Fecha_documento: "22/06/2022", estado: 11 },
    //   { Nombre: 6, Fecha_documento: "22/06/2022", estado: 11 },
    //   { Nombre: 7, Fecha_documento: "22/06/2022", estado: 11 },
    // ])
    // http://localhost:3001/api/gateway/v1/solicitudes/idsolicitud/documentos

    axios.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/documentos')
    .then(response => {
      console.log(response.data)
      setDocumentos(response.data)
      // alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Cargado Correctamente</div>"

    })
    .catch(error => {
      console.log(error)
    })


  }, [])

  return (
    <div className='modulo-solicitudes-documentos-container'>
      <h6>Cargar Documento</h6>
      <div className='modulo-solicitudes-documentos-buscar'>
        <form className='display-flex modulo-solicitudes-documentos-buscar-form'>
          <div className="mb-3">
            {/* <label htmlFor="formFile" className="form-label">Default file input example</label> */}
            <input className="form-control" type="file" id="formFile" onChange={(event) => {handleFile(event)}} />
          </div>
          <div className="mb-3">
            <button type='button' className='border-0 btn btn-success btn-sm' onClick={(event) => {handleUpload(event)}}>
              Cargar
            </button>
          </div>
        </form>
        <div ref={alertContainer}></div>
      </div>
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Documento</th>
            <th scope="col" className='text-center'>Fecha</th>
            <th scope="col" className='text-center'>Tamaño</th>
            {/* <th scope="col" className='text-center'>Estado</th> */}
            <th scope="col" className='text-center'><div>Aprobado</div><div>No/Si</div></th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((dato) => {
            return (
              <tr>
                <th className='text-center' scope="row">{dato["Nombre"]}</th>
                <td className='text-center'>{dato["Fecha_documento"]}</td>
                <td className='text-center'>{dato["Tamanio"]}</td>
                {/* <td className='text-center'>{dato["estado"]}</td> */}
                <td className='d-flex justify-content-center'><ThreePositionSwitch key={dato["Id"]} initialValue={dato["Tipo_estado_Id"]["Id"]} id={3} /></td>
                {/* <td>{cloneElement(ThreePositionSwitch, {initialValue: dato["estado"], id: 3})}</td> */}
              </tr>
            )
          })}

        </tbody>
      </table>
    </div >
  )
}

export default NewModuloSolicitudDocumentos