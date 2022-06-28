import React, { useEffect, useRef, useState } from 'react'
import './css/ModuloSolicitudResultado.css';
import config from '../../config.json'
import axiosApiInstance from '../Utilities/axiosApiInstance';
import FileDownload from 'js-file-download'
import { useOutletContext, useParams } from 'react-router-dom';


function ModuloSolicitudResultado() {

    const [resultadoOpciones, setResultadoOpciones] = useState([])
    const [resultado, setResultado] = useState("")

    const [estado, setEstado] = useOutletContext();

    const alertContainer = useRef("");

    let UrlParams = useParams()

    const download = (event) => {
        event.preventDefault()
        console.log("entro")
        axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/resultados/' + resultado, { responseType: "arraybuffer" })
            .then(response => {
                console.log(response)
                FileDownload(response.data, "resultado" + '.docx')
            })
            .catch(error => {
                console.log(error)
            })
    }


    const guardarResultado = () => {
        console.log(resultado)
        const data = {
            "Tipo_resultado_Id": resultado
        }
        // http://localhost:3001/api/gateway/v1/solicitudes/109
        axiosApiInstance.patch(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"], data)
            .then(response => {
                console.log(response)
                alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible' role='alert'>Actualizado correctamente</div>"
                const dataEstado = {
                    "Descripcion": "Descripcion",
                    "Flag_requiere_documento": false,
                    "Tipo_estado_Id": resultado == 13 ? 8 : 5
                }
                axiosApiInstance.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/estado_solicitud', dataEstado)
                    .then(response => {
                        console.log("Estado cambiado")
                        setEstado(response.data)
                    })
            })
            .catch(error => {
                alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'>La solicitud ha fallado por un error desconocido</div>"

            })
    }


    useEffect(() => {

        // http://127.0.0.1:3001/api/gateway/v1/resultados
        axiosApiInstance.get(config.apiGatewayURL + '/resultados')
            .then(response => {
                console.log(response.data)
                setResultadoOpciones(response.data)
            })

        axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"])
            .then(response => {
                console.log(response.data)
                setResultado(response.data["Tipo_resultado_Id"]["Id"])
            })


    }, []);
    return (
        <>
            <div className='modulo-solicitud-content-main-resultado'>
                <div className="mb-3">
                    <label htmlFor="tipoResultado" className="form-label">Tipo de Resultado:</label>
                    <select className="form-select" size="11" aria-label="size 11 select example" value={resultado} onChange={e => setResultado(e.target.value)}>
                        {/* <option value="Conciliacion parcial" selected>Conciliacion parcial</option> */}
                        {resultadoOpciones.map(resultadoOpciones => <option key={resultadoOpciones["Id"]} value={resultadoOpciones["Id"]} >{resultadoOpciones["Nombre"]} </option>)}
                    </select>
                    <br />

                    <div ref={alertContainer}></div>

                </div>
                <button className='btn btn-success' onClick={guardarResultado}>Guardar</button> <br />
                <button className='btn btn-success' onClick={e => { download(e) }}>Descargar</button>

            </div>
        </>
    )
}

export default ModuloSolicitudResultado