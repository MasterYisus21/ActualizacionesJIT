import React, { useEffect, useRef, useState } from 'react'
import './css/ModuloSolicitudEstudiantes.css';
import config from '../../config.json'
import { useLocation, useParams } from 'react-router-dom';
import axiosApiInstance from '../Utilities/axiosApiInstance';

function ModuloSolicitudEstudiantes() {

    const [isOpen, setIsOpen] = useState(false);



    const agregarestudiantes = (value) => {
        // event.preventDefault()
        axiosApiInstance.post(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/estudiantes/" + value)
            .then((response) => {
                setIsOpen(false)
                if (response.status != 208) {
                    setConciliadores([...conciliadores, response.data["persona"]])
                    alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Agregado correctamente</div>"
                } else {
                    alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>Persona ya añadida a esta solicitud.</div>"
                }

                console.log()
            })
            .catch((error) => {
                console.log(error.response.status)
                if (error.response.status == 404) {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Persona no encontrada</div>"
                } else {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Hubo un error en el servidor, intente mas tarde.</div>"
                }
            })
    }

    const eliminarConciliadores = (event) => {
        event.preventDefault()
        axiosApiInstance.delete(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/personas/" + event.target.value)
            .then((response) => {
                setConciliadores(conciliadores.filter((object) => {
                    return object["Identificacion"] != event.target.value
                }))
                alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>Eliminado correctamente</div>"
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const obtenerConciliadores = () => {
        axiosApiInstance.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/estudiantes")
            .then((response) => {
                console.log(response.data)
                if (response.data != "") {
                    setConciliadores(response.data)
                }
            })
    }

    let location = useLocation();
    const UrlParams = useParams();

    const [conciliadores, setConciliadores] = useState([])
    const [conciliadoresDisponibles, setConciliadoresDisponibles] = useState([])

    useEffect(() => {
        obtenerConciliadores()
    }, [location])

    useEffect(() => {
        if (conciliadoresDisponibles.length == 0 && isOpen) {
            axiosApiInstance.get(config.apiGatewayURL + "/estudiantes")
                .then((response) => {
                    console.log(response.data)
                    setConciliadoresDisponibles(response.data)
                })
        }

    }, [location, isOpen])

    const alertContainer = useRef("");

    return (
        <>
            <div className='container container-estudiantes pt-3'>
                <div className='titulo-informacion-estudiantes'>
                    <h5>Informacion de estudiantes</h5>
                </div>
                <div className='contenedor-navbar-agregar-estudiantes'>
                    <nav className="navbar navbar-light ">
                        <div className="container-fluid">
                            <form className="d-flex input-group w-auto align-items-sm-baseline gap-1" onSubmit={e => { e.preventDefault(); agregarestudiantes(e.target.cedula.value) }}>
                                <input
                                    type="text"
                                    className="form-control form-control-sm rounded"
                                    name="cedula"
                                    placeholder="Cédula"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                                <button className='border-0 bg-transparent '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                    </svg>
                                </button>
                                <div ref={alertContainer}></div>
                            </form>
                            <div className="d-flex align-items-end">
                                <button type="button" className="btn btn-primary btn-sm me-3" id='boton-agregar-estudiantes'
                                    onClick={() => setIsOpen(!isOpen)}>
                                    Agregar estudiantes
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
                {isOpen &&
                    <form className='contenedor-tabla-seleccion-estudiantes mb-5 p-4 pb-3' onSubmit={e => { e.preventDefault(); agregarestudiantes(e.target.identificacionPersona.value) }}>
                        <label className='pb-3 h5'>Seleccione el estudiantes que desea agregar</label>
                        <table className='table table-striped table-bordered table-responsive'>
                            <thead >
                                <tr>
                                    <th></th>
                                    <th>Tipo de documento</th>
                                    <th>Identificación</th>
                                    <th>Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {conciliadoresDisponibles.map((dato, key) => {
                                    return (
                                        <tr key={dato["Id"]}>
                                            <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio' value={dato["Identificacion"]}></input></td>
                                            <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                                            <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                                            <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className=''>
                            <button type="submit" className="btn btn-primary me-3" id='boton-agregar-estudiantes'> Agregar</button>
                        </div>
                    </form>
                }
                <form className='contenedor-tabla-convocado'>
                    <table className='table table-striped table-bordered table-responsive '>
                        <thead >
                            <tr>
                                <th>Clase del Convocado</th>
                                <th>Tipo de documento</th>
                                <th>Identificación</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conciliadores.map((dato) => {
                                return (
                                    <tr key={dato["Id"]}>
                                        <td key={dato["Tipo_persona_Id"]}>{dato["Tipo_persona_Id"]["Nombre"]}</td>
                                        <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                                        <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                                        <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                                        <td><button className='boton-tabla-eliminar' value={dato["Identificacion"]} onClick={eliminarConciliadores}>Eliminar</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}
export default ModuloSolicitudEstudiantes