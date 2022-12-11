import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

// importing css
import './ExpedientesDetalle.css'


function ExpedientesDetalle() {
    
  let { id } = useParams();


    return (

        <div className='modulo-solicitud-wrapper'>
            <div className='modulo-solicitud-content'>
                <div className='modulo-solicitud-content-navbar'>


                    <>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/datosgenerales"} className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/convocantes"} className='modulo-solicitud-content-navbar-link'>Convocantes</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/convocados"} className='modulo-solicitud-content-navbar-link'>Convocados</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/hechos"} className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/documentos"} className='modulo-solicitud-content-navbar-link'>Documentos</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/conciliador"} className='modulo-solicitud-content-navbar-link'>Conciliador</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/estudiantes"} className='modulo-solicitud-content-navbar-link'>Estudiantes</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/manejoconflicto"} className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/audiencia"} className='modulo-solicitud-content-navbar-link'>Audiencia</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/resultado"} className='modulo-solicitud-content-navbar-link'>Resultado</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/evaluacionservicio"} className='modulo-solicitud-content-navbar-link'>Evaluacion del servicio</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/seguimientos"} className='modulo-solicitud-content-navbar-link'>Seguimientos</Link>

                    </>

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
            </div >
        </div >

    )
}

export default ExpedientesDetalle