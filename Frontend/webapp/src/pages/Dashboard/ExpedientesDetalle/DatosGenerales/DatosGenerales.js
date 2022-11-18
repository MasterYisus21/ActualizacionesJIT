import React from 'react'

//Importing css
import './DatosGenerales.css'

function DatosGenerales() {
  return (
    <>
      <form className='modulo-solicitud-datos-generales-container' onSubmit={() => { }}>
        <div className='modulo-solicitud-content-main-column1'>
          <div className='center-text'><h2>Datos generales</h2></div>
          <br />
          <div className="mb-3">
            <label htmlFor="Numero_caso" className="form-label h4">ID del caso</label>
            <input type="text" className="form-control form-control-lg" id="Numero_caso" name='Numero_caso' placeholder={"Se generara automaticamente"} disabled />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="solicitante" className="form-label h4">Solicitante del Servicio:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="solicitante" name='solicitante' required>
              <option value="" label={"Selecciona uno"} disabled></option>
            </select>
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="Inicio_conflicto_Id" className="form-label h4">Hace cuánto inicio el conflicto:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Inicio_conflicto_Id" name='Inicio_conflicto_Id' required>
              <option value="" label={"Selecciona uno"} disabled></option>
            </select>
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="fechasolicitud" className="form-label h4">Fecha de solicitud:</label>
            <input type="date" className="form-control form-control-lg" id="fechasolicitud" name='' disabled />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="Tipo_servicio_Id" className="form-label h4">Finalidad de adquisición del servicio:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Tipo_servicio_Id" name='Tipo_servicio_Id' required>
              <option value="" label={"Selecciona uno"} disabled></option>
            </select>
          </div>
          <br />
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="Caso_gratuito" name='Caso_gratuito' />
            <label className="form-check-label h4" htmlFor="flexCheckChecked" >
              Caso Gratuito
            </label>
          </div>

        </div>
        <div className='modulo-solicitud-content-main-column2-form1'>
          <div><h2>Definición del asunto juridico</h2></div>
          <h4>¿Asunto juridico definible?</h4>
          <div className='d-flex'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible1" value="si" />
              <label className="form-check-label h4" htmlFor="asunto_definible1">
                SI
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible2" value="no" />
              <label className="form-check-label h4" htmlFor="asunto_definible2">
                NO
              </label>
            </div>
          </div>
        </div>

        <div className='modulo-solicitud-content-main-column2-form2'>
        <div><h2>Area y Tema</h2></div>
          <div className="mb-3">
            <label htmlFor="Area_Id" className="form-label h4">Area:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Area_Id" name='Area_Id' required>
              <option value="" label={"Selecciona uno"} disabled></option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Tema" className="form-label h4">Tema:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Tema" name='Tema' required>
              <option value="" label={"Selecciona uno"} disabled></option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Subtema_Id" className="form-label h4">Subtema:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Subtema_Id" name='Subtema_Id' required>
              <option value="" label={"Selecciona uno"} disabled></option>
            </select>
          </div>
          <br />
          <div className='modulo-solicitud-content-main-column2-save-button-container'>
            <button className="modulo-solicitud-content-main-column2-save-button">
              <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>GUARDAR</p>
            </button>
          </div>
        </div>

      </form>
    </>
  )
}

export default DatosGenerales