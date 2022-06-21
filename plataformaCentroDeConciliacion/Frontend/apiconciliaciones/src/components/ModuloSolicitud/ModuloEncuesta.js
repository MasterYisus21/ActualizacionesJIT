import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import config from '../../config.json';
import './css/ModuloEncuesta.css';
import axiosApiInstance from "../Utilities/axiosApiInstance";

function ModuloEncuesta() {


    const UrlParams = useParams();

    const [personas, setPersonas] = useState([])

    useEffect(() => {
        axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/personas')
            .then(response => {
                console.log(response.data)
                setPersonas(response.data)
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
            <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
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
                                    <td>{dato["Nombres"] + ' ' + dato["Apellidos"] }</td>
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


        </div>
    )
}

export default ModuloEncuesta

