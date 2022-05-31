import React from 'react'
import './css/ModuloSolicitud.css';

function ModuloSolicitud() {

    const date = new Date()
    const today = date.getFullYear() + '-' + (date.getMonth().toString().length > 1 ? (1+date.getMonth()) : '0' + (1 + date.getMonth())) + '-' + (date.getDate().toString().length > 1 ? (date.getDate()) : '0' + (date.getDate()));

    return (
    <div className='modulo-solicitud-wrapper'>
        <div className='modulo-solicitud-container'>
            <div className='modulo-solicitud-navbar'>
                <a href='#'><img src='images/user.png' alt='imagen usuario' className="modulo-solicitud-small-image" /></a>
                <a href='#'><img src='images/salida.png' alt='imagen usuario' className="modulo-solicitud-small-image" /></a>
            </div>
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
                    <div className='modulo-solicitud-content-main-column1'>
                        <div className="mb-3">
                            <label htmlFor="Numero_caso" className="form-label">ID del caso</label>
                            <input type="text" className="form-control" id="Numero_caso" name='Numero_caso' placeholder="Se generara automaticamente" disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="solicitante" className="form-label">Solicitante del servicio</label>
                            <input type="text" className="form-control" id="solicitante" name='' placeholder="Felipe Villamizar" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tiempoconflicto" className="form-label">Hace cuanto inicio el conflicto:</label>
                            <input type="date" className="form-control" id="tiempoconflicto" name='' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fechasolicitud" className="form-label">Fecha de solicitud:</label>
                            <input type="date" className="form-control" id="fechasolicitud" name='' defaultValue={today} disabled/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Numero_caso" className="form-label">ID del caso</label>
                            <input type="text" className="form-control" id="Numero_caso" name='Numero_caso' placeholder="123456789" />
                        </div>
                        
                    </div>
                    <div className='modulo-solicitud-content-main-column2'>
                        <h3>Definición del asunto juridico</h3>
                        <div className='modulo-solicitud-content-main-column2-form1'>
                            ¿Asunto juridico definible?
                            <input type="radio" id="si" name="asunto_definible" value="si" />
                            <label htmlFor="si">SI</label><br />
                            <input type="radio" id="no" name="asunto_definible" value="no" />
                            <label htmlFor="no">NO</label><br />
                        </div>
                        <h3>Area y Tema</h3>
                        <div className='modulo-solicitud-content-main-column2-form2'>
                            <p>Area:</p>
                            <input name=""/>
                            <p>Tema:</p>
                            <input name=""/>
                            <p>Subtema:</p>
                            <input name=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }

export default ModuloSolicitud