import React from 'react'
import './css/FormularioSolicitud.css'

import NewModuloSolicitudDatosGenerales from './NewModuloSolicitud/NewModuloSolicitudDatosGenerales';

import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';

function FormularioSolicitud() {

  const UrlParams = useParams();

  return (

    <div className='contenedor-registros-nuevos-principal'>
      <Link  to="/">
        <button className='btn btn-dark boton-volver' style={{ position: "relative", left: "93%" }} >volver</button>
      </Link>
      <div className='main-content-formulario-solicitud'>
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
                    <Link to="crear" className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                    <Link to="crear" className='modulo-solicitud-content-navbar-link'>Convocante</Link>
                    <Link to="crear" className='modulo-solicitud-content-navbar-link'>Convocado</Link>
                    <Link to="crear" className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                    <Link to="crear" className='modulo-solicitud-content-navbar-link'>Documentos</Link>

                  </>
                }

                {Object.keys(UrlParams).length > 0 &&
                  <>
                    <Link to={"/nueva-solicitud/" + UrlParams["Id_solicitud"] + "/datos_generales"} className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                    <Link to={"/nueva-solicitud/" + UrlParams["Id_solicitud"] + "/convocantes"} className='modulo-solicitud-content-navbar-link'>Convocante</Link>
                    <Link to={"/nueva-solicitud/" + UrlParams["Id_solicitud"] + "/convocados"} className='modulo-solicitud-content-navbar-link'>Convocado</Link>
                    <Link to={"/nueva-solicitud/" + UrlParams["Id_solicitud"] + "/hechos"} className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                    <Link to={"/nueva-solicitud/" + UrlParams["Id_solicitud"] + "/documentos"} className='modulo-solicitud-content-navbar-link'>Documentos</Link>


                  </>
                }
              </div>

              <div className='modulo-solicitud-content-main'>
                {/* <NewModuloSolicitudHechos /> */}
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

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormularioSolicitud