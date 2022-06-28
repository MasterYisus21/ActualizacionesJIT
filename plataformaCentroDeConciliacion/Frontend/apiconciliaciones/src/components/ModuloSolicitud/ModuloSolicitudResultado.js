import React, { useEffect, useState } from 'react'
import './css/ModuloSolicitudResultado.css';
import config from '../../config.json'
import axiosApiInstance from '../Utilities/axiosApiInstance';
import FileDownload from 'js-file-download'
import { useParams } from 'react-router-dom';


function ModuloSolicitudResultado() {

    const [resultadoOpciones, setResultadoOpciones] = useState([])

    let UrlParams = useParams()

    const download = (event) => {
        event.preventDefault()
        console.log("entro")
        axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/resultados/' + 3, { responseType: "arraybuffer" })
          .then(response => {
            console.log(response)
            FileDownload(response.data, "resultado" + '.docx')
          })
          .catch(error => {
            console.log(error)
          })
      }

    useEffect(() => {

        // http://127.0.0.1:3001/api/gateway/v1/resultados
        axiosApiInstance.get(config.apiGatewayURL + '/resultados')
        .then(response => {
            console.log(response.data)
            setResultadoOpciones(response.data)
        })

    }, []);
    return (
        <>
        <div className='modulo-solicitud-content-main-resultado'>
            {/* <div className='modulo-solicitud-content-main-resultado-column'> */}
                {/* <div className='modulo-solicitud-content-main-resultado-titulo'>Elegir resultado</div> */}
                <div className="mb-3">
                    <label htmlFor="tipoResultado" className="form-label">Tipo de Resultado:</label>
                    <select className="form-select" size="11" aria-label="size 11 select example">
                        {/* <option value="Conciliacion parcial" selected>Conciliacion parcial</option> */}
                        {resultadoOpciones.map(resultadoOpciones => <option key={resultadoOpciones["Id"]} value={resultadoOpciones["Id"]} >{resultadoOpciones["Nombre"]} </option>)}
                    </select>
                    <br />
                    <button className='btn btn-success'>Guardar</button>
                </div>
                <button className='btn btn-success' onClick={e => {download(e)}}>Descargar</button>
            {/* </div> */}
            {/* <div className='modulo-solicitud-content-main-resultado-column'>
                <div className='modulo-solicitud-content-main-resultado-titulo2'>Descargar documento</div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label"></label>
                    <input className="form-control" type="file" id="formFile"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fechasolicitud" className="form-label">Fecha de solicitud:</label>
                    <input type="date" className="form-control" id="fechasolicitud" name=''/>
                </div>

                <button onClick={e => {download(e)}}>descargar</button>
            </div> */}
        </div>
        </>
    )
}

export default ModuloSolicitudResultado