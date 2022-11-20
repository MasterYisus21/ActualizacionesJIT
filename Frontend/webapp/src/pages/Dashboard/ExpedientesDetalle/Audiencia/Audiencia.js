import React from 'react'

import { Link } from "react-router-dom";


function Audiencia() {
  return (
    <div className='contenedor-principal-modulo-audiencia mt-3'>
      <div className='contenedor-boton-audiencia'>
        <Link to={'../' + '/audiencias/'}> {/* Modifica la ruta al ID */}
          <button className='boton-audiencia btn btn-primary'>regresar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
          </svg></button>
        </Link>
      </div>
      <div className='titulo-informacion-audiencia mb-3'>
        <h5>Sesion de Audiencia</h5>
      </div>

      <form className='contenedor-asignacion-turnos p-1' onSubmit={() => { }}>
        <h6 className='pt-1 d-flex align-items-center'>Ingrese los datos de la audiencia</h6>
        <div className='contenedor-citacion-descripcion'>

          <div className="row m-0 p-4 pt-3">
            <label className="">Fecha de la Sesión: </label>
            <input type="date" className="form-control form-control-sm col mb-3" id="exampleFormControlInput1" required></input>

            <label className="">Descripcion: </label>
            <textarea className="form-control form-control-sm" rows="2" required></textarea>
          </div>

          <div className="row m-0 p-4 pt-3">
            <label className="">Hora: </label>
            <select className="form-select form-select-sm mb-3" required>
              <option key={""} value="">Seleccione</option>
            </select>
            <label className="">Tipo de medio: </label><br></br>
            <div className='separador-virtual-presencial'>
              <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' required></input>
              <label className="">Virtual </label>
              <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' required></input>
              <label className="">Presencial </label>
              <input className='class="custom-control-input"' name="flexRadioDefault" type='radio' required></input>
              <label className="">Mixto </label>
            </div>
            <input type="url" className="form-control col" placeholder="link"></input>
          </div>
        </div>
        <div className='pt-3 h5 d-flex align-items-center'>
          <button className="modulo-solicitud-content-main-column2-save-button">
            <img src='/images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
            <p>GUARDAR</p>
          </button>
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
                    <img className='mini-image' src="/icons/down_icon_1.png"></img>
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
                    <img className='mini-image' src="/icons/up_icon_1.png"></img>
                  </button>
                </form>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Audiencia