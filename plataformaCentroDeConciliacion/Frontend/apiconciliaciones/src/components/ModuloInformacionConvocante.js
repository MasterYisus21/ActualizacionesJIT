import React from 'react'
import './css/ModuloInformacionConvocante.css';



function ModuloInformacionConvocante() {
  
  return (
        <>
        <div className='container'> 
          <div className='titulo-informacion-convocante'>  
          <h1>Informacion del Convocante</h1>    
          </div> 
          <div className='contenedor-navbar-agregar-convocante'>
            <nav class="navbar navbar-light ">
              <div class="container-fluid">
                <form class="d-flex input-group w-auto">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Buscar"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                </form>
                <div class="d-flex align-items-end">
                  <button type="button" class="btn btn-primary me-3" id='boton-agregar-convocante'>
                    Agregar convocante
                  </button>
                </div> 
              </div>
            </nav>
          </div>
          <div className='contenedor-tabla-convocante'>
            <table className='table table-striped table-responsive '>
              <thead>
                <tr>
                  <th>Clase del Convocante</th>
                  <th>Tipo de documento</th>
                  <th>Identificación</th>
                  <th>Nombre</th>
                  <th>Ciudad</th>
                  <th>Departamento</th>
                  <th>Acciones</th>
                </tr>
              </thead> 
              <tbody> 
                <tr>
                  <td>Juan</td>
                  <td>Diego</td>
                  <td>1044556824</td>
                  <td>Ninguna</td>
                  <td>Diego</td>
                  <td>1044556824</td>
                  <td>Diego</td>
                </tr>
                <tr>
                  <td>Juan</td>
                  <td>Diego</td>
                  <td>1044556824</td>
                  <td>Ninguna</td>
                  <td>Diego</td>
                  <td>1044556824</td>
                  <td>Diego</td>
                </tr>
                <tr>
                  <td>Juan</td>
                  <td>Diego</td>
                  <td>1044556824</td>
                  <td>Ninguna</td>
                  <td>Diego</td>
                  <td>1044556824</td>
                  <td>Diego</td>
                </tr>
              </tbody>    
            </table>
          </div>
          </div>
        </>
  )
}

export default ModuloInformacionConvocante