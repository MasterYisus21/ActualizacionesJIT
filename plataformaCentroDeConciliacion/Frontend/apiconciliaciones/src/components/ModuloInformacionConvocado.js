import React, { useState } from 'react'
import './css/ModuloInformacionConvocado.css';



function ModuloInformacionConvocado() {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <>
        <div className='container'> 
            <div className='titulo-informacion-convocante'>  
            <h1>Informacion del Convocado</h1>    
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
                        <button type="button" class="btn btn-primary me-3" id='boton-agregar-convocante'
                            onClick={()=>setIsOpen(!isOpen)}>
                            Agregar convocado
                        </button>
                        </div> 
                    </div>
                </nav>                
            </div>
            {isOpen &&<div className='registro-convocado'>

                    <input className="input-registro-convocado form-control rounded" placeholder="Nombre"></input>
                    <select class="form-select drowdown-registro-convocado" aria-label="Default select example">
                      <option selected>Tipo de Documento</option>
                      <option value="1">Cedula</option>
                      <option value="2">Documento de Identificación</option>
                      <option value="3">Pasaporte</option>
                    </select>
                    <input className="input-registro-convocado form-control rounded" placeholder="Identificación"></input>
                    <input className="input-registro-convocado form-control rounded" placeholder="Clase del Convocado"></input>
                    <select class="form-select drowdown-registro-convocado" aria-label="Default select example">
                      <option selected>Ciudad</option>
                      <option value="1">Bogotá</option>
                      <option value="2">Cali</option>
                      <option value="3">Barranquilla</option>
                    </select>
                    <select class="form-select drowdown-registro-convocado" aria-label="Default select example">
                      <option selected>Departamento</option>
                      <option value="1">Cundinamarca</option>
                      <option value="2">Boyacá</option>
                      <option value="3">Santander</option>
                    </select>
                    <input className="input-registro-convocado form-control rounded" placeholder="Acciones"></input>
                    <button class="btn btn-primary me-3"  id='boton-aceptar-registro-convocante'>Aceptar</button>
                </div>}
                
          <div className='contenedor-tabla-convocante'>
            <table className='table table-striped table-responsive '>
              <thead>
                <tr>
                  <th>Clase del Convocado</th>
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

export default ModuloInformacionConvocado