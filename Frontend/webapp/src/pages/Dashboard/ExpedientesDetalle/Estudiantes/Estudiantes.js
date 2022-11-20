import React from 'react'
import { Button } from '../../../../components/Button'

// Importing css
import "./Estudiantes.css"

function Estudiantes() {
  return (
    <>
      <div className='container container-estudiantes pt-3'>
        <div className='center-text'><h2>Informacion de estudiantes</h2></div>
        <div className='contenedor-navbar-agregar-estudiantes'>
          <nav className="navbar navbar-light ">
            <div className="container-fluid">
              <form className="d-flex input-group w-auto align-items-sm-baseline gap-1" onSubmit={e => { }}>
                <input
                  type="text"
                  className="form-control form-control-lg rounded"
                  name="cedula"
                  placeholder="Cédula"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button className='border-0 bg-transparent '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                  </svg>
                </button>
              </form>
              <div className="d-flex align-items-end">
                <button type="button" className="btn btn-primary btn-lg me-3" id='boton-agregar-estudiantes'
                  onClick={() => { }}>
                  Agregar estudiantes
                </button>
                <Button
                  className={"btn btn-lg me-3"}
                  text={"Agregar Estudiantes"}
                />
              </div>
            </div>
          </nav>
        </div>
        <form className='contenedor-tabla-seleccion-estudiantes mb-5 p-4 pb-3' onSubmit={e => { }}>
          <label className='pb-3 h5'>Seleccione el estudiante que desea agregar</label>
          <table className='table table-striped table-bordered table-responsive'>
            <thead >
              <tr>
                <th></th>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio'></input></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className=''>
            <button type="submit" className="btn btn-primary me-3 " id='boton-agregar-estudiantes'> Agregar</button>
          </div>
        </form>
        <form className='contenedor-tabla-convocado'>
          <table className='table table-striped table-bordered table-responsive '>
            <thead >
              <tr>
                <th>Clase del Convocado</th>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button className='boton-tabla-eliminar'>Eliminar</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default Estudiantes