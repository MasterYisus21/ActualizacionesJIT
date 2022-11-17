import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

// importing css
import './ExpedientesDetalle.css'


function ExpedientesDetalle() {

    const [idCaso, setIdCaso] = useState(23)

    return (
        <div className='modulo-solicitud-wrapper'>
            <div className='modulo-solicitud-container'>
                <div className='modulo-solicitud-content'>
                    <div className='modulo-solicitud-content-navbar'>

                        {Object.keys({urlparams: 1, prop2: 2}).length === 0 &&
                            <>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Convocantes</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Convocados</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Documentos</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Conciliador</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Estudiantes</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Audiencia</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Resultado</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Encuesta</Link>
                            </>
                        }

                        {Object.keys({urlparams: 1, prop2: 2}).length > 0 &&
                            <>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/datosgenerales"} className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/convocantes"} className='modulo-solicitud-content-navbar-link'>Convocantes</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/convocados"} className='modulo-solicitud-content-navbar-link'>Convocados</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/hechos"} className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/documentos"} className='modulo-solicitud-content-navbar-link'>Documentos</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/conciliador"} className='modulo-solicitud-content-navbar-link'>Conciliador</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/estudiantes"} className='modulo-solicitud-content-navbar-link'>Estudiantes</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/manejo_conflicto"} className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/audiencias"} className='modulo-solicitud-content-navbar-link'>Audiencia</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/resultado"} className='modulo-solicitud-content-navbar-link'>Resultado</Link>
                                <Link to={"/dashboard/expedientes/detalle/" + idCaso + "/encuestas"} className='modulo-solicitud-content-navbar-link'>Encuesta</Link>

                            </>
                        }
                    </div>

                    <div className='modulo-solicitud-content-main'>
                        <Outlet />
                    </div>

                    <div className="wrapper">
                        <ul className="StepProgress">
                            <li className={"StepProgress-item " + "is-done"}><strong>Nueva</strong></li>
                            <li className={"StepProgress-item " + "is-done"}><strong>Se requiere informacion</strong></li>
                            <li className={"StepProgress-item " + "is-done"}><strong>Asignada</strong></li>
                            <li className={"StepProgress-item " + "is-done"}><strong>Audiencia pendiente</strong></li>
                            <li className={"StepProgress-item " + "is-done"}><strong>Generacion de resultado</strong></li>
                            <li className={"StepProgress-item " + "is-done"}><strong>Resuelta</strong></li>
                            <li className={"StepProgress-item " + "is-done"}><strong>Cerrado</strong></li>
                            <li className={"StepProgress-item " + "is-done"}><strong>Anulada</strong>
                                {/* La solicitud ha sido anulada por */}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpedientesDetalle