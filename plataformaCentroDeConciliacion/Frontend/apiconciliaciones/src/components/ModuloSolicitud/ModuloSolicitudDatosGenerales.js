import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './css/ModuloSolicitudDatosGenerales.css';
import config from '../../config.json'

function ModuloSolicitudDatosGenerales() {
    const date = new Date()
    const today = date.getFullYear() + '-' + (date.getMonth().toString().length > 1 ? (1+date.getMonth()) : '0' + (1 + date.getMonth())) + '-' + (date.getDate().toString().length > 1 ? (date.getDate()) : '0' + (date.getDate()));
    const [solicitanteServicioOpciones, setSolicitanteServicioOpciones] = useState([])
    const [tipoServicioOpciones, setTipoServicioOpciones] = useState([])
    const [inicioConflictoOpciones, setInicioConflictoOpciones] = useState([])
    const [areaOpciones, setAreaOpciones] = useState([])
    const [temaOpciones, setTemaOpciones] = useState([])
    const [subTemaOpciones, setSubTemaOpciones] = useState([])
    const [texto, setTexto] = useState([])

    const obtenerOpcionesGenerales = () => {
        axios.get(config.apiGatewayURL + "/solicitud")
        .then(response => {
            setSolicitanteServicioOpciones(response.data["Solicitante_servicio"])
            setTipoServicioOpciones(response.data["Tipo_servicio"])
            setInicioConflictoOpciones(response.data["Inicio_conflicto"])
            setAreaOpciones(response.data["Area"])
            setTemaOpciones(response.data["Tema"])
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    const obtenerOpcionesSubtema = (e) => {
        axios.get(config.apiGatewayURL + "/temas/" + e.target.value)
        .then(response => {
            setSubTemaOpciones(response.data)
        })
        .catch((error)=> {
            console.log(error.message.body)
        })
    }

    useEffect(() => {
        obtenerOpcionesGenerales()
    }, [])


    const postForm = (e) => {
        e.preventDefault();
        const datos = {
            "Descripcion": "",
            "Fecha_finalizacion": null,
            "Caso_gratuito": e.target.Caso_gratuito.checked,
            "Asunto_juridico_definible": e.target.asunto_definible.value === "si" ? true : false,
            "Area_Id": e.target.Area_Id.value,
            "Subtema_Id": e.target.Subtema_Id.value,
            "Tipo_servicio_Id": e.target.Tipo_servicio_Id.value,
            "Tipo_resultado_Id": null,
            "Inicio_conflicto_Id": e.target.Inicio_conflicto_Id.value,
            "Solicitante_servicio_Id": e.target.solicitante.value
        }
        axios.post("http://127.0.0.1:3001/api/gateway/v1/solicitud/", datos)
        
    }

    return (
    <>
    <form className='modulo-solicitud-content-main-datos' onSubmit={postForm}>
    <div className='modulo-solicitud-content-main-column1'>
        <div className="mb-3">
            <label htmlFor="Numero_caso" className="form-label">ID del caso</label>
            <input type="text" className="form-control" id="Numero_caso" name='Numero_caso' placeholder="Se generara automaticamente" disabled />
        </div>
        <div className="mb-3">
            <label htmlFor="solicitante" className="form-label">Solicitante del Servicio:</label>
            <select className="form-select" aria-label="Default select example" id="solicitante" name='solicitante' required>
                <option selected disabled label='Selecciona uno'></option>
                {solicitanteServicioOpciones.map(solicitanteServicioOpciones => <option key={solicitanteServicioOpciones["id"]} value={solicitanteServicioOpciones["id"]} label={solicitanteServicioOpciones["Nombre"]}>{solicitanteServicioOpciones["Id"]} </option>)}
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="Inicio_conflicto_Id" className="form-label">Hace cuanto incio el conflicto:</label>
            <select className="form-select" aria-label="Default select example" id="Inicio_conflicto_Id" name='Inicio_conflicto_Id' required>
            <option selected disabled label='Selecciona uno'></option>
                {inicioConflictoOpciones.map(inicioConflictoOpciones => <option key={inicioConflictoOpciones["id"]} value={inicioConflictoOpciones["id"]} label={inicioConflictoOpciones["Nombre"]}>{inicioConflictoOpciones["Id"]} </option>)}
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="fechasolicitud" className="form-label">Fecha de solicitud:</label>
            <input type="date" className="form-control" id="fechasolicitud" name='' defaultValue={today} disabled/>
        </div>
        <div className="mb-3">
            <label htmlFor="Tipo_servicio_Id" className="form-label">Finalidad de adquisición del servicio:</label>
            <select className="form-select" aria-label="Default select example" id="Tipo_servicio_Id" name='Tipo_servicio_Id' required>
                <option selected disabled label='Selecciona uno'></option>
                {tipoServicioOpciones.map(tipoServicioOpciones => <option key={tipoServicioOpciones["id"]} value={tipoServicioOpciones["id"]} label={tipoServicioOpciones["Nombre"]}>{tipoServicioOpciones["Id"]} </option>)}
            </select>
        </div>
        <br />
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="Caso_gratuito" name='Caso_gratuito' />
            <label className="form-check-label" htmlFor="flexCheckChecked" >
                Caso Gratuito
            </label>
        </div>
        
    </div>
    <div className='modulo-solicitud-content-main-column2'>
        <div>
            <h5>Definición del asunto juridico</h5>
        </div>
        <div className='modulo-solicitud-content-main-column2-form1'>
            ¿Asunto juridico definible?
            <div className="form-check">
                <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible1" value="si" />
                <label className="form-check-label" htmlFor="asunto_definible1">
                    SI
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible2" value="no" />
                <label className="form-check-label" htmlFor="asunto_definible2">
                    NO
                </label>
            </div>
        </div>
        <br />
        <div>
            <h5>Area y Tema</h5>
        </div>
        <div className='modulo-solicitud-content-main-column2-form2'>
            <div className="mb-3">
                <label htmlFor="Area_Id" className="form-label">Area:</label>
                <select className="form-select" aria-label="Default select example" id="Area_Id" name='Area_Id' required>
                <option selected disabled label='Selecciona uno'></option>
                    {areaOpciones.map(areaOpciones => <option key={areaOpciones["id"]} value={areaOpciones["id"]} label={areaOpciones["Nombre"]}>{areaOpciones["Id"]} </option>)}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="Tema" className="form-label">Tema:</label>
                <select className="form-select" aria-label="Default select example" id="Tema" name='Tema' onChange={e => obtenerOpcionesSubtema(e)} required>
                <option selected disabled label='Selecciona uno'></option>
                    {temaOpciones.map(temaOpciones => <option key={temaOpciones["id"]} value={temaOpciones["id"]} label={temaOpciones["Nombre"]}>{temaOpciones["Id"]} </option>)}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="Subtema_Id" className="form-label">Subtema:</label>
                <select className="form-select" aria-label="Default select example" id="Subtema_Id" name='Subtema_Id' required>
                    <option selected disabled label='Selecciona uno'></option>
                    {subTemaOpciones.map(subTemaOpciones => <option key={subTemaOpciones["Id"]} value={subTemaOpciones["Id"]} label={subTemaOpciones["Nombre"]}>{subTemaOpciones["Id"]} </option>)}
                </select>
            </div>
            <br />
            <button className="modulo-solicitud-content-main-column2-save-button">
                <img src='images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                <p>GUARDAR</p>
            </button>
        </div>
    </div>
    </form>
    </>
    )
}

export default ModuloSolicitudDatosGenerales