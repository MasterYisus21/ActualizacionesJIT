import React from 'react'
import './css/ModuloSolicitud.css';

function ModuloSolicitud() {
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
                        <div class="mb-3">
                            <label for="Numero_caso" class="form-label">ID del caso</label>
                            <input type="text" class="form-control" id="Numero_caso" name='Numero_caso' placeholder="123456789" />
                        </div>
                        <div class="mb-3">
                            <label for="solicitante" class="form-label">Solicitante del servicio</label>
                            <input type="text" class="form-control" id="solicitante" name='' placeholder="Felipe Villamizar" />
                        </div>
                        <div class="mb-3">
                            <label for="tiempoconflicto" class="form-label">Hace cuanto incio el conflicto:</label>
                            <input type="date" class="form-control" id="tiempoconflicto" name='' />
                        </div>
                        <div class="mb-3">
                            <label for="tiempoconflicto" class="form-label">Hace cuanto incio el conflicto:</label>
                            <input type="date" class="form-control" id="tiempoconflicto" name='' />
                        </div>
                        <div class="mb-3">
                            <label for="Numero_caso" class="form-label">ID del caso</label>
                            <input type="text" class="form-control" id="Numero_caso" name='Numero_caso' placeholder="123456789" />
                        </div>
                        
                    </div>
                    <div>
                        <h3>Definición del asunto juridico</h3>
                        <div className='modulo-solicitud-content-main-column2-form1'>
                            ¿Asunto juridico definible?
                            <input type="radio" id="si" name="asunto_definible" value="si" />
                            <label for="si">SI</label><br />
                            <input type="radio" id="no" name="asunto_definible" value="no" />
                            <label for="no">NO</label><br />
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