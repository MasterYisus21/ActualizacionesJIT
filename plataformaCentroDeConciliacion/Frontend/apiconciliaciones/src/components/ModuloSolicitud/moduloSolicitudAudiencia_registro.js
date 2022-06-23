import React, { useEffect, useRef, useState } from 'react'
import './css/moduloSolicitudAudiencia_registro.css';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import config from '../../config.json';
import axiosApiInstance from '../Utilities/axiosApiInstance';

function ModuloSolicitudAudiencia_registro() {

    const [estado, setEstado] = useOutletContext();

    const UrlParams = useParams();
    const alertContainer = useRef("");
    const navigate = useNavigate();

    const [turnosDisponibles, setTurnosDisponibles] = useState([])
    const [turnoSeleccionado, setTurnoSeleccionado] = useState("")
    const [fecha, setFecha] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [tipoMedio, setTipoMedio] = useState(0)
    const [link, setLink] = useState("")
    const [showPeopleForms, setShowPeopleForms] = useState(UrlParams.hasOwnProperty('Id_audiencia'))
    const [personasPosibles, setPersonasPosibles] = useState([])
    const [personasCitadas, setPersonasCitadas] = useState([])


    const obtenerTurnos = (event) => {
        axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/fechas/' + event.target.value)
            .then(response => {
                
                setTurnosDisponibles(response.data)
            })
    }

    const crearAudiencia = (event) => {
        event.preventDefault()
        const data = {
            "Fecha_sesion": fecha,
            "Descripcion": descripcion,
            "Enlace": link,
            "Turno_Id": turnoSeleccionado,
            "Tipo_medio_Id": tipoMedio
        }
        if (UrlParams.hasOwnProperty('Id_audiencia')) {
            axiosApiInstance.patch(config.apiGatewayURL + '/citaciones/' + UrlParams["Id_audiencia"], data)
                .then((response) => {
                    console.log(response.data)
                    navigate("/dashboard/modulo-solicitudes/" + response.data["Solicitud_Id"] + "/audiencias/" + response.data["Id"])
                    setShowPeopleForms(true)
                    alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Creado o actualizado correctamente</div>"

                })
                .catch(error => {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>No se pudo procesar la solicitud por un error desconocido.</div>"
                })

        } else {
            axiosApiInstance.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/citaciones/', data)
                .then((response) => {
                    console.log(response.data)
                    navigate("/dashboard/modulo-solicitudes/" + response.data["Solicitud_Id"] + "/audiencias/" + response.data["Id"])
                    setShowPeopleForms(true)
                    alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Creado o actualizado correctamente</div>"
                    const dataEstado = {
                        "Descripcion": "Descripcion",
                        "Flag_requiere_documento": false,
                        "Tipo_estado_Id": 3
                    }
                    axiosApiInstance.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/estado_solicitud', dataEstado)
                    .then(response=>{
                        console.log("Estado cambiado")
                        setEstado(response.data)
                    })
                    axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/citaciones/' + response.data["Id"])
                        .then(response => {
                            console.log(response.data)
                            setPersonasPosibles(response.data[0]["personas_disponibles"])
                            setPersonasCitadas(response.data[1]["personas_citadas"])
                        })
                })
                .catch(error => {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>No se pudo procesar la solicitud por un error desconocido.</div>"
                })

        }


    }

    const citarPersona = (event) => {
        event.preventDefault()
        const data = [
            event.target.identificacion.value,
        ]
        axiosApiInstance.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/citaciones/' + UrlParams["Id_audiencia"] + '/personas', data)
            .then(response => {
                const personas1 = personasPosibles.filter(object => {
                    return object["Identificacion"] == event.target.identificacion.value
                })
                const personas2 = personasPosibles.filter(object => {
                    return object["Identificacion"] != event.target.identificacion.value
                })
                setPersonasCitadas([...personasCitadas, ...personas1])
                setPersonasPosibles(personas2)
            })
    }

    const eliminarPersona = (event) => {
        event.preventDefault()
        const data = [
            event.target.identificacion.value,
        ]
        axiosApiInstance.delete(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/citaciones/' + UrlParams["Id_audiencia"] + '/personas/', { data: data })
            .then(response => {
                const personas1 = personasCitadas.filter(object => {
                    return object["Identificacion"] == event.target.identificacion.value
                })
                const personas2 = personasCitadas.filter(object => {
                    return object["Identificacion"] != event.target.identificacion.value
                })
                setPersonasPosibles([...personasPosibles, ...personas1])
                setPersonasCitadas(personas2)
            })
    }

    useEffect(() => {
        if (UrlParams.hasOwnProperty('Id_audiencia')) {
            axiosApiInstance.get(config.apiGatewayURL + '/citaciones/' + UrlParams["Id_audiencia"])
                .then(response => {
                    console.log(response.data)
                    setFecha(response.data["Fecha_sesion"])
                    setTurnoSeleccionado(response.data["Turno_Id"]["Id"])
                    setDescripcion(response.data["Descripcion"])
                    setTipoMedio(response.data["Tipo_medio_Id"]["Id"])
                    setLink(response.data["Enlace"])
                    setTurnosDisponibles([{
                        Id: response.data["Turno_Id"]["Id"],
                        Franja_horaria: response.data["Turno_Id"]["Franja_horaria"]
                    }])
                })
            axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/citaciones/' + UrlParams["Id_audiencia"])
                .then(response => {
                    console.log(response.data)
                    setPersonasPosibles(response.data[0]["personas_disponibles"])
                    setPersonasCitadas(response.data[1]["personas_citadas"])
                })
        }
    }, [])

    return (
        <div className='contenedor-principal-modulo-audiencia mt-3'>
            <div className='contenedor-boton-audiencia'>
                <Link to={'../' + UrlParams["Id_solicitud"] + '/audiencias/'}> {/* Modifica la ruta al ID */}
                    <button className='boton-audiencia btn btn-primary'>regresar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                    </svg></button>
                </Link>
            </div>
            <div className='titulo-informacion-audiencia mb-3'>
                <h5>Sesion de Audiencia</h5>
            </div>

            <form className='contenedor-asignacion-turnos p-1' onSubmit={crearAudiencia}>
                <h6 className='pt-1 d-flex align-items-center'>Ingrese los datos de la audiencia</h6>
                <div className='contenedor-citacion-descripcion'>

                    <div className="row m-0 p-4 pt-3">
                        <label className="">Fecha de la Sesión: </label>
                        <input type="date" className="form-control form-control-sm col mb-3" id="exampleFormControlInput1" value={fecha} onChange={(e) => { setFecha(e.target.value); obtenerTurnos(e) }} required></input>

                        <label className="">Descripcion: </label>
                        <textarea className="form-control form-control-sm" rows="2" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} required></textarea>
                    </div>

                    <div className="row m-0 p-4 pt-3">
                        <label className="">Hora: </label>
                        <select className="form-select form-select-sm mb-3" value={turnoSeleccionado} onChange={(e) => { setTurnoSeleccionado(e.target.value) }} required>
                            <option key={""} value="">Seleccione</option>
                            {turnosDisponibles.map((data) => {
                                return <option key={data["Id"]} value={data["Id"]}>{data["Franja_horaria"]}</option>
                            })}
                        </select>
                        <label className="">Tipo de medio: </label><br></br>
                        <div className='separador-virtual-presencial'>
                            <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' checked={tipoMedio == 2 ? true : false} onChange={() => { setTipoMedio(2) }} required></input>
                            <label className="">Virtual </label>
                            <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' checked={tipoMedio == 1 ? true : false} onChange={() => { setTipoMedio(1) }} required></input>
                            <label className="">Presencial </label>
                        </div>
                        <input type="url" className="form-control col" placeholder="link" value={link} onChange={e => setLink(e.target.value)} required={tipoMedio == 2} disabled={tipoMedio != 2}></input>
                    </div>
                </div>
                <div className='pt-3 h5 d-flex align-items-center'>
                    <div ref={alertContainer}></div>
                    <button className="modulo-solicitud-content-main-column2-save-button">
                        <img src='/images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                        <p>GUARDAR</p>
                    </button>
                </div>
            </form>
            {showPeopleForms && <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
                <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas citadas</label>
                <table className='table table-striped table-bordered '>
                    <thead >
                        <tr>
                            <th>Identificación</th>
                            <th>Nombres y Apellidos</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personasCitadas.map(dato => {
                            return (
                                <tr key={dato["Id"]}>
                                    <td>{dato["Identificacion"]}</td>
                                    <td>{dato["Nombres"] + " " + dato["Apellidos"]}</td>
                                    <td>{dato["Tipo_cliente"]}</td>
                                    <td>
                                        <form onSubmit={event => eliminarPersona(event)}>
                                            <button className='btn btn-outline btn-sm' name="identificacion" value={dato["Identificacion"]}>
                                                <img className='mini-image' src="/icons/down_icon_1.png"></img>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>}

            {showPeopleForms && <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
                <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas que puedo citar</label>
                <table className='table table-striped table-bordered '>
                    <thead >
                        <tr>
                            <th>Identificación</th>
                            <th>Nombres y Apellidos</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personasPosibles.map(dato => {
                            return (
                                <tr key={dato["Id"]}>
                                    <td>{dato["Identificacion"]}</td>
                                    <td>{dato["Nombres"] + " " + dato["Apellidos"]}</td>
                                    <td>{dato["Tipo_cliente"]}</td>
                                    <td>
                                        <form onSubmit={event => citarPersona(event)}>
                                            <button className='btn btn-outline btn-sm' name="identificacion" value={dato["Identificacion"]}>
                                                <img className='mini-image' src="/icons/up_icon_1.png"></img>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>}
        </div >
    )

}

export default ModuloSolicitudAudiencia_registro