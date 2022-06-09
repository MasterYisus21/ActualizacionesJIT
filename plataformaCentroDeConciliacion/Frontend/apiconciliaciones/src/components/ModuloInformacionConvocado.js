import React, { useState } from 'react'
import './css/ModuloInformacionConvocado.css';

  function ModuloInformacionConvocado() {

    const [isOpen, setIsOpen] = useState(false);
    const lista = [
      {
        "company": "Twitter Inc",
        "ticker": "TWTR",
        stockPrice: "22.76 USD",
        timeElapsed: "5 sec ago",

      },
      {
        company: "Square Inc",
        ticker: "SQ",
        stockPrice: "45.28 USD",
        timeElapsed: "10 sec ago",
      },
      {
        company: "Shopify Inc",
        ticker: "SHOP",
        stockPrice: "341.79 USD",
        timeElapsed: "3 sec ago",
      },
      {
        company: "Sunrun Inc",
        ticker: "RUN",
        stockPrice: "9.87 USD",
        timeElapsed: "4 sec ago",
      },
      {
        company: "Adobe Inc",
        ticker: "ADBE",
        stockPrice: "300.99 USD",
        timeElapsed: "10 sec ago",
      }
    ];

    return (
          <>
          
          <div className='container'> 
            
              <div className='titulo-informacion-convocado'>  
              <h1>Informacion del convocado</h1>    
              </div> 
              <div className='contenedor-navbar-agregar-convocado'>
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
                            <button type="button" class="btn btn-primary me-3" id='boton-agregar-convocado'
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
                      <button class="btn btn-primary me-3"  id='boton-aceptar-registro-convocado'>Aceptar</button>
                  </div>}
                  
            <form className='contenedor-tabla-convocado'>
              <table className='table table-striped table-bordered table-responsive '>
              <thead >
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
                  {lista.map((data, key) => {
                    return (
                          <tr>
                          <td>{data.company}</td>
                          <td>{data.ticker}</td>
                          <td>{data.stockPrice}</td>
                          <td>{data.timeElapsed}</td>
                          <td>Bogotá</td>
                          <td>Cundinamarca</td>
                          <td><button className='boton-tabla-eliminar'>Eliminar</button></td>
                          </tr>
                    );
                  })} 
                  </tbody>
                </table>
              </form>
            
            </div>
          </>
    )
  }

  export default ModuloInformacionConvocado