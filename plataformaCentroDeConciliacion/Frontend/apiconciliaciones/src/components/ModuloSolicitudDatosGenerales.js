import React from 'react'
import './css/ModuloSolicitudDatosGenerales.css';

function ModuloSolicitudDatosGenerales() {
    const date = new Date()
    const today = date.getFullYear() + '-' + (date.getMonth().toString().length > 1 ? (1+date.getMonth()) : '0' + (1 + date.getMonth())) + '-' + (date.getDate().toString().length > 1 ? (date.getDate()) : '0' + (date.getDate()));

  return (
      <>
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
            <label htmlFor="Numero_caso" className="form-label">Finalidad de adquisición del servicio:</label>
            <input type="text" className="form-control" id="Numero_caso" name='Numero_caso' placeholder="123456789" />
        </div>
        
    </div>
    <div className='modulo-solicitud-content-main-column2'>
        <div>
            <h3>Definición del asunto juridico</h3>
        </div>
        <div className='modulo-solicitud-content-main-column2-form1'>
            ¿Asunto juridico definible?
            <input type="radio" id="si" name="asunto_definible" value="si" />
            <label htmlFor="si">SI</label><br />
            <input type="radio" id="no" name="asunto_definible" value="no" />
            <label htmlFor="no">NO</label><br />
        </div>
        <br />
        <div>
            <h3>Area y Tema</h3>
        </div>
        <div className='modulo-solicitud-content-main-column2-form2'>
            <p>Area:</p>
            <input name="" className="form-control"/>
            <p>Tema:</p>
            <input name="" className="form-control"/>
            <p>Subtema:</p>
            <input name="" className="form-control"/>
            <br />
            <button className="modulo-solicitud-content-main-column2-save-button">
                <img src='images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                <p>GUARDAR</p>
            </button>
        </div>
    </div>
    </>
  )
}

export default ModuloSolicitudDatosGenerales