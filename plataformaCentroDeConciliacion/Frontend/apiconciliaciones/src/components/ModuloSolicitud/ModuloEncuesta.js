import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useOutletContext, useParams } from 'react-router-dom';
import config from '../../config.json';
import './css/ModuloEncuesta.css';
import axiosApiInstance from "../Utilities/axiosApiInstance";

function ModuloEncuesta() {

    const [estado, setEstado] = useOutletContext();

    const UrlParams = useParams();
    const alertContainer = useRef("");

    const [personas, setPersonas] = useState([])

    const cerrarCaso = (event) => {
        event.preventDefault()
        const dataEstado = {
            "Descripcion": "Descripcion",
            "Flag_requiere_documento": false,
            "Tipo_estado_Id": 7
        }
        axiosApiInstance.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/estado_solicitud', dataEstado)
            .then(response => {
                console.log("Estado cambiado")
                setEstado(response.data)
                alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible' role='alert'>Caso cerrado con exito</div>"

            })
            .catch(error => {
                if (error.status == 408) {
                    alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible' role='alert'>Caso cerrado con exito</div>"
                } else {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'>No se ha podido cerrar por un error desconocido.</div>"
                }
            })
    }

    useEffect(() => {
        axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/personas')
            .then(response => {
                console.log(response.data)
                if (response.data != "") {
                    setPersonas(response.data)
                }
            })
    }, [])


    return (
        <div className='contenedor-principal-modulo-audiencia mt-3'>
            <div className='titulo-modulo-audiencia'>
                <h5>Encuestas de satisfacción.</h5>
            </div>
            {/* <div className='contenedor-boton-audiencia mb-4'>
                <Link to='crear'>
                    <button className='btn btn-sm btn-success boton-audiencia btn btn-primary m3-3'>Crear audiencia</button>
                </Link>
            </div> */}
            <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column mt-4'>
                <table className='table table-striped table-bordered '>
                    <thead>
                        <tr>
                            <th>Identificación</th>
                            <th>Nombres y Apellidos</th>

                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map(dato => {
                            return (
                                <tr key={dato["Id"]}>
                                    <td>{dato["Identificacion"]}</td>
                                    <td>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                                    <td>
                                        <Link to={'/dashboard/modulo-solicitudes/' + UrlParams["Id_solicitud"] + '/encuestas/' + dato["Id"]} className='m-0 border-0 bg-transparent' value={dato["Id"]}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            {estado["Tipo_estado_Id"] != 7 &&
                <form onSubmit={cerrarCaso}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="cerrarCasoCheckbox" required />
                        <label className="form-check-label" for="cerrarCasoCheckbox" >
                            Cerrar Caso
                        </label>
                    </div>
                    <div className="btn-peligro">
                        <button className="btn btn-danger">Cerrar caso</button>
                    </div>
                    <div ref={alertContainer}></div>
                </form>
            }

            {estado["Tipo_estado_Id"] == 7 &&
                <div className='alert alert-success alert-dismissible' role='alert'>Caso Cerrado.</div>
            }

        </div>
    )
}

export default ModuloEncuesta

