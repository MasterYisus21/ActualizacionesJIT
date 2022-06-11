import React, { useEffect } from 'react'
import ModuloSolicitudDatosGenerales from './ModuloSolicitudDatosGenerales';
import ModuloInformacionConvocante from './ModuloInformacionConvocante';
import ModuloInformacionConvocado from './ModuloInformacionConvocado';
import ModuloInformacionConciliador from './ModuloInformacionConciliador';
import ModuloSolicitudAudiencia  from './ModuloSolicitudAudiencia';
import './css/ModuloSolicitud.css';
import ModuloSolicitudHechos from './ModuloSolicitudHechos';
import ModuloSolicitudManejoConflicto from './ModuloSolicitudManejoConflicto';
import ModuloSolicitudResultado from './ModuloSolicitudResultado';

function ModuloSolicitud() {

    

    return (
    <div className='modulo-solicitud-wrapper'>
        <div className='modulo-solicitud-container'>
            {/* <div className='modulo-solicitud-navbar'>
                <a href='#'><img src='images/user.png' alt='imagen usuario' className="modulo-solicitud-small-image" /></a>
                <a href='#'><img src='images/salida.png' alt='imagen usuario' className="modulo-solicitud-small-image" /></a>
            </div> */}
            <div className='modulo-solicitud-content'>
                <div className='modulo-solicitud-content-navbar'>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Datos Generales</a>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Convocante</a>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Convocado</a>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Hechos</a>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Conciliador</a>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</a>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Audiencia</a>
                    <a href='#' className='modulo-solicitud-content-navbar-link'>Resultado</a>
                </div>
                
                <div className='modulo-solicitud-content-main'>
                    <ModuloSolicitudDatosGenerales />{/* <ModuloInformacionConciliador /> */}
                    {/* <ModuloInformacionConvocante /> */}
                    {/* <ModuloInformacionConvocado /> */}
                    {/* <ModuloInformacionConciliador />                    */}
                    {/* <ModuloSolicitudAudiencia /> */}
                    {/* <ModuloSolicitudHechos /> */}
                    {/* <ModuloSolicitudManejoConflicto /> */}
                    {/* <ModuloSolicitudResultado />                     */}

                </div>
            </div>
        </div>
    </div>
    )
    }

export default ModuloSolicitud