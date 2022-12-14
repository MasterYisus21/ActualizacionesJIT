import React from 'react'
import './Audiencia.css'
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


function Audiencia() {
  return (
    <div className='contenedor-principal-modulo-audiencia'>
      {/* <div className='contenedor-boton-audiencia'>
        <Link to={'../' + '/audiencias/'}>
          <button className='boton-audiencia btn btn-primary'>regresar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
          </svg></button>
        </Link>
      </div> */}
      <div className='titulo-informacion-audiencia'>
        <label className='titulo-audiencia'>Sesion de Audiencia</label>
        <div className='contenedor-icono-descarga'>
          <img src='/icons/descarga-documento.svg' className='icono-descarga-documento' />
        </div>
      </div>
      <div className='contenedor-subtitulo'>
        <label className='subtitulo-audiencia'>Ingrese los datos de la audiencia</label>
      </div>

      <form>

        <div className='fecha-y-hora'>
          <div className='izquierda-fecha-descripcion'>
            <label className='titulo-fecha-sesion'>Fecha de la sesión:</label>
            <div className='contenedor-campos-de-llenado'>
              <input type="date" className='input-fecha-sesion'></input>
            </div>
            <label className='titulo-descripcion'>Descripción:</label>
            <div className='contenedor-campos-de-llenado'>
              <textarea className='campo-descripcion'></textarea>
            </div>
          </div>
          <div className='derecha-hora-tipo'>
            <label className='titulo-fecha-sesion'>Hora:</label>
            <div className='contenedor-campos-de-llenado-derecha'>
              <Form.Select aria-label="Default select example" className='input-seleccionable-hora'>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <label className='titulo-descripcion'>Tipo de medio:</label>
            <div className='separador-virtual-presencial'>
              <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' required></input>
              <label className="label-virtual">Virtual </label>
              <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' required></input>
              <label className="label-presencial">Presencial </label>
              <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' required></input>
              <label className="label-mixto">Mixto </label>
            </div>
            <div className='contenedor-campos-de-llenado-derecha'>
              <Form.Control
                type="text"
                placeholder="Link"
                aria-label="Disabled input example"
                readOnly
                className='disabled-link'
              />
            </div>
          </div>
        </div>
        <div className='contenedor-imagen-guardar'>
          <img src='/icons/save.svg' className='icono-guardar' />
          <label className='nombre-guardar'>Guardar</label>
        </div>
      </form>
      <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
        <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas citadas</label>
        <table className='table table-striped table-bordered '>
          <thead >
            <tr>
              <th>Identificación</th>
              <th>Nombres y Apellidos</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <form onSubmit={event => { }}>
                  <button className='btn btn-outline btn-sm' name="identificacion">
                    <img className='mini-image' src="/images/arrow-down.svg"></img>
                  </button>
                </form>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
        <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas que puedo citar</label>
        <table className='table table-striped table-bordered '>
          <thead >
            <tr>
              <th>Identificación</th>
              <th>Nombres y Apellidos</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <form onSubmit={event => { }}>
                  <button className='btn btn-outline btn-sm' name="identificacion">
                    <img className='mini-image' src="/images/arrow-up.svg"></img>
                  </button>
                </form>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className='contenedor-boton-notificar-via-correo'>
        <button className='boton-notificar'>Notificar vía correo</button>
      </div>
    </div >
  )
}

export default Audiencia