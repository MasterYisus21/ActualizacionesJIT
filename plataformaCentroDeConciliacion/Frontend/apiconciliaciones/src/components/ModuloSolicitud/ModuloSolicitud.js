import React, { useEffect, useState } from 'react'
import ModuloSolicitudDatosGenerales from './ModuloSolicitudDatosGenerales';
import ModuloInformacionConvocante from './ModuloInformacionConvocante';
import ModuloInformacionConvocado from './ModuloInformacionConvocado';
import ModuloInformacionConciliador from './ModuloInformacionConciliador';
import ModuloSolicitudAudiencia from './ModuloSolicitudAudiencia';
import ModuloSolicitudAudiencia_registro from './moduloSolicitudAudiencia_registro';
import './css/ModuloSolicitud.css';
import ModuloSolicitudHechos from './ModuloSolicitudHechos';
import ModuloSolicitudManejoConflicto from './ModuloSolicitudManejoConflicto';
import ModuloSolicitudResultado from './ModuloSolicitudResultado';
import ModuloSolicitudEstudiantes from './ModuloSolicitudEstudiantes';
import ModuloEncuesta from './ModuloEncuesta';
import { Link, Outlet, useParams } from 'react-router-dom';
import axiosApiInstance from '../Utilities/axiosApiInstance';
import config from './../../config.json'

function ModuloSolicitud() {

    const UrlParams = useParams();

    const [estado, setEstado] = useState({})

    const getStatus = () => {
        axiosApiInstance.get(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/estado_solicitud')
            .then(response => {
                // console.log(response.data)
                console.log(response.data[0]["Tipo_estado_Id"])
                setEstado(response.data[0])
            })
    }

    useEffect(() => {
        getStatus()
    }, [])

    return (
        <div className='modulo-solicitud-wrapper'>
            <div className='modulo-solicitud-container'>
                {/* <div className='modulo-solicitud-navbar'>
                <a href='#'><img src='images/user.png' alt='imagen usuario' className="modulo-solicitud-small-image" /></a>
                <a href='#'><img src='images/salida.png' alt='imagen usuario' className="modulo-solicitud-small-image" /></a>
            </div> */}
                <div className='modulo-solicitud-content'>
                    <div className='modulo-solicitud-content-navbar'>
                        {/* {Object.keys(UrlParams).length === 0 ? console.log("igual"):console.log("diferente")} */}

                        {Object.keys(UrlParams).length === 0 &&
                            <>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Convocante</Link>
                                <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Convocado</Link>
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

                        {Object.keys(UrlParams).length > 0 &&
                            <>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/datos_generales"} className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/convocantes"} className='modulo-solicitud-content-navbar-link'>Convocante</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/convocados"} className='modulo-solicitud-content-navbar-link'>Convocado</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/hechos"} className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/documentos"} className='modulo-solicitud-content-navbar-link'>Documentos</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/conciliador"} className='modulo-solicitud-content-navbar-link'>Conciliador</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/estudiantes"} className='modulo-solicitud-content-navbar-link'>Estudiantes</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/manejo_conflicto"} className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/audiencias"} className='modulo-solicitud-content-navbar-link'>Audiencia</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/resultado"} className='modulo-solicitud-content-navbar-link'>Resultado</Link>
                                <Link to={"/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/encuestas"} className='modulo-solicitud-content-navbar-link'>Encuesta</Link>

                            </>
                        }
                    </div>

                    <div className='modulo-solicitud-content-main'>
                        {/* <ModuloSolicitudDatosGenerales /> */}
                        {/* <ModuloInformacionConciliador /> */}
                        {/* <ModuloInformacionConvocante /> */}
                        {/* <ModuloInformacionConvocado /> */}
                        {/* <ModuloSolicitudEstudiantes />  */}
                        {/* <ModuloInformacionConciliador /> */}
                        {/* <ModuloSolicitudAudiencia /> */}
                        {/* <ModuloSolicitudHechos /> */}
                        {/* <ModuloSolicitudManejoConflicto /> */}
                        {/* <ModuloSolicitudResultado />  */}
                        {/* <ModuloEncuesta />  */}
                        <Outlet />
                    </div>

                    <div className="wrapper">
                        <ul className="StepProgress">
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] >= 1 && estado["Tipo_estado_Id"] != 8 ? "is-done": "")}><strong>Nueva</strong></li>
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] == 6 && estado["Tipo_estado_Id"] != 8 || estado["Tipo_estado_Id"] > 1 ? "is-done": "")}><strong>Se requiere informacion</strong></li>
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] >= 2 && estado["Tipo_estado_Id"] != 8 ? "is-done": "")}><strong>Asignada</strong></li>
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] >= 3 && estado["Tipo_estado_Id"] != 6 && estado["Tipo_estado_Id"] != 8 ? "is-done": "")}><strong>Audiencia pendiente</strong></li>
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] >= 4 && estado["Tipo_estado_Id"] != 6 && estado["Tipo_estado_Id"] != 8 ? "is-done": "")}><strong>Generacion de resultado</strong></li>
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] >= 5 && estado["Tipo_estado_Id"] != 6 && estado["Tipo_estado_Id"] != 8 ? "is-done": "")}><strong>Resuelta</strong></li>
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] >= 7 && estado["Tipo_estado_Id"] != 8 ? "is-done": "")}><strong>Cerrado</strong></li>
                            <li className={"StepProgress-item " + (estado["Tipo_estado_Id"] >= 8 ? "is-done": "")}><strong>Anulada</strong>
                                {/* La solicitud ha sido anulada por */}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModuloSolicitud