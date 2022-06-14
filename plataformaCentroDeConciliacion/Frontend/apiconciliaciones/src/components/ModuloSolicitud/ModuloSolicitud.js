import React, { useEffect } from 'react'
import ModuloSolicitudDatosGenerales from './ModuloSolicitudDatosGenerales';
import ModuloInformacionConvocante from './ModuloInformacionConvocante';
import ModuloInformacionConvocado from './ModuloInformacionConvocado';
import ModuloInformacionConciliador from './ModuloInformacionConciliador';
import ModuloSolicitudAudiencia  from './ModuloSolicitudAudiencia';
import ModuloSolicitudAudiencia_registro  from './moduloSolicitudAudiencia_registro';
import './css/ModuloSolicitud.css';
import ModuloSolicitudHechos from './ModuloSolicitudHechos';
import ModuloSolicitudManejoConflicto from './ModuloSolicitudManejoConflicto';
import ModuloSolicitudResultado from './ModuloSolicitudResultado';
import { Link, Outlet, useParams } from 'react-router-dom';

function ModuloSolicitud() {

    const UrlParams = useParams();

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
                            <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Conciliador</Link>
                            <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</Link>
                            <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Audiencia</Link>
                            <Link to="/dashboard/modulo-solicitudes/crear" className='modulo-solicitud-content-navbar-link'>Resultado</Link>
                        </>
                    }

                    {Object.keys(UrlParams).length > 0 &&
                        <>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/datos_generales"} className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/convocantes"} className='modulo-solicitud-content-navbar-link'>Convocante</Link>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/convocados"} className='modulo-solicitud-content-navbar-link'>Convocado</Link>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/hechos"} className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/conciliador"} className='modulo-solicitud-content-navbar-link'>Conciliador</Link>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/manejo_conflicto"} className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</Link>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/audiencias"} className='modulo-solicitud-content-navbar-link'>Audiencia</Link>
                            <Link to={"/dashboard/modulo-solicitudes/"+UrlParams["Id_solicitud"]+"/resultado"} className='modulo-solicitud-content-navbar-link'>Resultado</Link>
                        </>
                    }
                </div>
                
                <div className='modulo-solicitud-content-main'>
                    {/* <ModuloSolicitudDatosGenerales /> */}
                    {/* <ModuloInformacionConciliador /> */}
                    {/* <ModuloInformacionConvocante /> */}
                    {/* <ModuloInformacionConvocado /> */}
                    {/* <ModuloInformacionConciliador /> */}
                    {/* <ModuloSolicitudAudiencia /> */}
                    {/* <ModuloSolicitudHechos /> */}
                    {/* <ModuloSolicitudManejoConflicto /> */}
                    {/* <ModuloSolicitudResultado />  */}
                    <Outlet/>

                </div>
            </div>
        </div>
    </div>
    )
    }

export default ModuloSolicitud