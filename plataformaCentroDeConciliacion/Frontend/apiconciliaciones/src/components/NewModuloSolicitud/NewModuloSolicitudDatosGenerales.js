import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import './css/NewModuloSolicitudDatosGenerales.css';
import config from '../../config.json'
import { useParams, useNavigate, useLocation, useOutletContext } from 'react-router-dom';
import ErrorPage from '../ErrorPage';



function NewModuloSolicitudDatosGenerales() {


    let navigate = useNavigate();
    const date = new Date()
    const today = date.getFullYear() + '-' + (date.getMonth().toString().length > 1 ? (1 + date.getMonth()) : '0' + (1 + date.getMonth())) + '-' + (date.getDate().toString().length > 1 ? (date.getDate()) : '0' + (date.getDate()));
    const [solicitanteServicioOpciones, setSolicitanteServicioOpciones] = useState([])
    const [tipoServicioOpciones, setTipoServicioOpciones] = useState([])
    const [inicioConflictoOpciones, setInicioConflictoOpciones] = useState([])
    const [areaOpciones, setAreaOpciones] = useState([])
    const [temaOpciones, setTemaOpciones] = useState([])
    const [subTemaOpciones, setSubTemaOpciones] = useState([])
    const [numeroCaso, setNumeroCaso] = useState('')
    const [solicitante, setSolicitante] = useState('')
    const [inicioConflicto, setInicioConflicto] = useState('')
    const [finalidadServicio, setFinalidadServicio] = useState('')
    const [casoGratuito, setCasoGratuito] = useState(true)
    const [asuntoJuridicoDefinible, setAsuntoJuridicoDefinible] = useState(false)
    const [area, setArea] = useState('')
    const [tema, setTema] = useState('')
    const [subtema, setSubtema] = useState('')

    let location = useLocation();

    useEffect(() => {
        if (location.pathname == "/nueva-solicitud/crear") {
            setNumeroCaso('')
            setSolicitante('')
            setInicioConflicto('')
            setFinalidadServicio('')
            setCasoGratuito(true)
            setAsuntoJuridicoDefinible(false)
            setArea('')
            setTema('')
            setSubtema('')
        }
    }, [location])

    const UrlParams = useParams();
    const obtenerDatosGenerales = () => {
        if (Object.keys(UrlParams).length > 0) {
            axios.get(config.apiGatewayURL + "/solicitudes/" + (UrlParams["Id_solicitud"]))
                .then(response => {
                    console.log(response.data)
                    setNumeroCaso(response.data["Numero_caso"])
                    setSolicitante(response.data["Solicitante_servicio_Id"]["Id"])
                    setInicioConflicto(response.data["Inicio_conflicto_Id"])
                    setFinalidadServicio(response.data["Tipo_servicio_Id"])
                    setCasoGratuito(response.data["Caso_gratuito"])
                    setAsuntoJuridicoDefinible(response.data["Asunto_juridico_definible"])
                    setArea(response.data["Area_Id"]["Id"])
                    setTema(response.data["Subtema_Id"]["Tema_Id"])
                    obtenerOpcionesSubtema(response.data["Subtema_Id"]["Tema_Id"])
                    setSubtema(response.data["Subtema_Id"]["Id"])
                })
                .catch((error) => {
                    navigate('/page-not-found', { replace: true })
                })
        }

    }

    const obtenerOpcionesGenerales = () => {
        axios.get(config.apiGatewayURL + "/solicitud/")
            .then(response => {
                setSolicitanteServicioOpciones(response.data["Solicitante_servicio"])
                setTipoServicioOpciones(response.data["Tipo_servicio"])
                setInicioConflictoOpciones(response.data["Inicio_conflicto"])
                setAreaOpciones(response.data["Area"])
                setTemaOpciones(response.data["Tema"])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const obtenerOpcionesSubtema = (value) => {
        axios.get(config.apiGatewayURL + "/temas/" + value)
            .then(response => {
                setSubTemaOpciones(response.data)
            })
            .catch((error) => {
                console.log(error.message.body)
            })
    }

    useEffect(() => {
        obtenerOpcionesGenerales()
    }, [])

    useEffect(() => {
        obtenerDatosGenerales()
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
        if (Object.keys(UrlParams).length > 0) {
            axios.post(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"], datos)
                .then((response) => {
                    navigate("/nueva-solicitud/" + response.data["Numero_caso"] + "/datos_generales")
                    console.log(response.data)
                    setNumeroCaso(response.data["Numero_caso"])
                    alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Creado o actualizado correctamente</div>"
                })
                .catch((error) => {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'>Error Intente nuevamente</div>"
                })
        } else {
            axios.post(config.apiGatewayURL + "/solicitudes/", datos)
                .then((response) => {
                    alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible' role='alert'>Creado o actualizado correctamente</div>"
                    navigate("/nueva-solicitud/" + response.data["Numero_caso"] + "/datos_generales")
                    setNumeroCaso(response.data["Numero_caso"])

                })
        }


    }

    const alertContainer = useRef("");

    return (
        <>
            <form className='modulo-solicitud-content-main-datos' onSubmit={postForm}>
                <div className='modulo-solicitud-content-main-column1'>
                    <div className="mb-3">
                        <label htmlFor="Numero_caso" className="form-label">ID del caso</label>
                        <input type="text" className="form-control form-control-sm" id="Numero_caso" name='Numero_caso' placeholder={Object.keys(UrlParams).length === 0 ? "Se generara automaticamente" : numeroCaso} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="solicitante" className="form-label">Solicitante del Servicio:</label>
                        <select className="form-select form-select-sm" aria-label="Default select example" id="solicitante" name='solicitante' value={solicitante} onChange={e => setSolicitante(e.target.value)} required>
                            <option value="" label={"Selecciona uno"} disabled></option>
                            {solicitanteServicioOpciones.map(solicitanteServicioOpciones => <option key={solicitanteServicioOpciones["id"]} value={solicitanteServicioOpciones["id"]} label={solicitanteServicioOpciones["Nombre"]}>{solicitanteServicioOpciones["Id"]} </option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Inicio_conflicto_Id" className="form-label">Hace cuanto incio el conflicto:</label>
                        <select className="form-select form-select-sm" aria-label="Default select example" id="Inicio_conflicto_Id" name='Inicio_conflicto_Id' value={inicioConflicto} onChange={e => setInicioConflicto(e.target.value)} required>
                            <option value="" label={"Selecciona uno"} disabled></option>
                            {inicioConflictoOpciones.map(inicioConflictoOpciones => <option key={inicioConflictoOpciones["Id"]} value={inicioConflictoOpciones["Id"]} label={inicioConflictoOpciones["Nombre"]}>{inicioConflictoOpciones["Id"]} </option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fechasolicitud" className="form-label">Fecha de solicitud:</label>
                        <input type="date" className="form-control form-control-sm" id="fechasolicitud" name='' defaultValue={today} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Tipo_servicio_Id" className="form-label">Finalidad de adquisición del servicio:</label>
                        <select className="form-select form-select-sm" aria-label="Default select example" id="Tipo_servicio_Id" name='Tipo_servicio_Id' value={finalidadServicio} onChange={e => setFinalidadServicio(e.target.value)} required>
                            <option value="" label={"Selecciona uno"} disabled></option>
                            {tipoServicioOpciones.map(tipoServicioOpciones => <option key={tipoServicioOpciones["id"]} value={tipoServicioOpciones["id"]} label={tipoServicioOpciones["Nombre"]}>{tipoServicioOpciones["Id"]} </option>)}
                        </select>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="Caso_gratuito" name='Caso_gratuito' checked={casoGratuito} onChange={() => setCasoGratuito(!casoGratuito)} />
                        <label className="form-check-label" htmlFor="flexCheckChecked" >
                            Caso Gratuito
                        </label>
                    </div>

                </div>
                <div className='modulo-solicitud-content-main-column2'>
                    <div>
                        <h6>Definición del asunto juridico</h6>
                    </div>
                    <div className='modulo-solicitud-content-main-column2-form1'>
                        ¿Asunto juridico definible?
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible1" value="si" checked={asuntoJuridicoDefinible} onChange={() => { setAsuntoJuridicoDefinible(true) }} />
                            <label className="form-check-label" htmlFor="asunto_definible1">
                                SI
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible2" value="no" checked={!asuntoJuridicoDefinible} onChange={() => { setAsuntoJuridicoDefinible(false) }} />
                            <label className="form-check-label" htmlFor="asunto_definible2">
                                NO
                            </label>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h6>Area y Tema</h6>
                    </div>
                    <div className='modulo-solicitud-content-main-column2-form2'>
                        <div className="mb-3">
                            <label htmlFor="Area_Id" className="form-label">Area:</label>
                            <select className="form-select form-select-sm" aria-label="Default select example" id="Area_Id" name='Area_Id' value={area} onChange={(e) => setArea(e.target.value)} required>
                                <option value="" label={"Selecciona uno"} disabled></option>
                                {areaOpciones.map(areaOpciones => <option key={areaOpciones["id"]} value={areaOpciones["id"]} label={areaOpciones["Nombre"]}>{areaOpciones["Id"]} </option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Tema" className="form-label">Tema:</label>
                            <select className="form-select form-select-sm" aria-label="Default select example" id="Tema" name='Tema' onChange={e => { obtenerOpcionesSubtema(e.target.value); setTema(e.target.value) }} value={tema} required>
                                <option value="" label={"Selecciona uno"} disabled></option>
                                {temaOpciones.map(temaOpciones => <option key={temaOpciones["id"]} value={temaOpciones["id"]} label={temaOpciones["Nombre"]}>{temaOpciones["Id"]} </option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Subtema_Id" className="form-label">Subtema:</label>
                            <select className="form-select form-select-sm" aria-label="Default select example" id="Subtema_Id" name='Subtema_Id' value={subtema} onChange={(e) => setSubtema(e.target.value)} required>
                                <option value="" label={"Selecciona uno"} disabled></option>
                                {subTemaOpciones.map(subTemaOpciones => <option key={subTemaOpciones["Id"]} value={subTemaOpciones["Id"]} label={subTemaOpciones["Nombre"]}>{subTemaOpciones["Id"]} </option>)}
                            </select>
                        </div>
                        <br />
                        <div className='modulo-solicitud-content-main-column2-save-button-container'>
                            <div ref={alertContainer}></div>
                            <button className="modulo-solicitud-content-main-column2-save-button">
                                <img src='/images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                                <p>GUARDAR</p>
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )


}


export default NewModuloSolicitudDatosGenerales