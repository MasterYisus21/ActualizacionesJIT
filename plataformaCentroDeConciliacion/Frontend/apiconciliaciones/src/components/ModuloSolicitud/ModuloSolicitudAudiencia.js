import React from 'react'
import './css/ModuloSolicitudAudiencia.css';
import { Link } from 'react-router-dom';
function ModuloSolicitudAudiencia() {


    return (
        <div className='contenedor-principal-modulo-audiencia mt-3'>
            <div className='titulo-modulo-audiencia'>
                <h5>Sesion de Audiencia</h5>
            </div>
            <div className='contenedor-boton-audiencia mb-4'>
                <Link to='crear'>
                    <button className='btn btn-sm btn-success boton-audiencia btn btn-primary m3-3'>Crear audiencia</button>
                </Link>
            </div>
            <form className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
                <table className='table table-striped table-bordered '>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Medio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16/07/2021</td>
                            <td>Pepito Cardenas Arias</td>
                            <td>No</td>
                            <td>
                                <button className='m-0 border-0 bg-transparent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>16/07/2021</td>
                            <td>Pepito Cardenas Arias</td>
                            <td>No</td>
                            <td>
                                <button className='m-0 border-0 bg-transparent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>


        </div>
    )

}

export default ModuloSolicitudAudiencia