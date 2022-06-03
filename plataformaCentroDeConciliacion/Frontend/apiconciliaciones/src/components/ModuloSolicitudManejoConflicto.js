import React from 'react'
import './css/ModuloSolicitudManejoConflicto.css';

function ModuloSolicitudManejoConflicto() {
  return (
    <>
        <div className='modulo-solicitud-content-main-manejo-conflicto-main'>
            <div className='modulo-solicitud-content-main-manejo-conflicto'>
                <div className='modulo-solicitud-content-main-manejo-conflicto-titulo'>
                    <h4 className='tab'>Escalada del Conflicto</h4>
                    <hr/>
                </div>
                <div className='modulo-solicitud-content-main-manejo-conflicto-form1'>
                    Escala del conflicto: 
                    <select className="form-select modulo-solicitud-content-main-manejo-conflicto-form1-select" aria-label="Default select example" id="Departamento" name='Departamento'>
                        <option selected disabled>Selecciona uno</option>
                        <option>Con violencia fisica</option>
                    </select>
                </div>
                <br />
                <div className='modulo-solicitud-content-main-manejo-conflicto-titulo'>
                    <h4 className='tab'>Intervención de terceros</h4>
                    <hr/>
                </div>

                <div className='modulo-solicitud-content-main-manejo-conflicto-form1'>
                    Intervención directa de terceros
                    <input type="radio" id="si" name="intervencion_terceros" value="si" />
                    <label htmlFor="si">SI</label><br />
                    <input type="radio" id="no" name="intervencion_terceros" value="no" />
                    <label htmlFor="no">NO</label><br />
                </div>
                <br />
            </div>
            <div className='modulo-solicitud-content-main-manejo-conflicto-guardar'>
                <button>
                    <img src='images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                    <p>GUARDAR</p>
                </button>
            </div>
        </div>
    </>
  )
}

export default ModuloSolicitudManejoConflicto