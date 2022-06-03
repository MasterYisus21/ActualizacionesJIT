import React from 'react'
import './css/ModuloSolicitudResultado.css';

function ModuloSolicitudResultado() {
  return (
    <>
    <div className='modulo-solicitud-content-main-resultado'>
        <div className='modulo-solicitud-content-main-resultado-column'>
            <div className='modulo-solicitud-content-main-resultado-titulo'>Elegir resultado</div>
            <div className="mb-3">
                <label htmlFor="tipoResultado" className="form-label">Tipo de Resultado:</label>
                <select class="form-select" multiple aria-label="multiple select example">
                    <option value="Conciliacion parcial" selected>Conciliacion parcial</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
        <div className='modulo-solicitud-content-main-resultado-column'>
            <div className='modulo-solicitud-content-main-resultado-titulo2'>Cargar documento</div>
            <div class="mb-3">
                <label for="formFile" class="form-label"></label>
                <input class="form-control" type="file" id="formFile"/>
            </div>
            <div className="mb-3">
                <label htmlFor="fechasolicitud" className="form-label">Fecha de solicitud:</label>
                <input type="date" className="form-control" id="fechasolicitud" name=''/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ModuloSolicitudResultado