import React, { useState } from 'react'
import './css/ModuloInformacionConciliador.css';


function ModuloInformacionConciliador() {

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
              <div className='titulo-informacion-conciliador'>  
              <h1>Informacion del Conciliador</h1>    
              </div> 
              <div className='contenedor-navbar-agregar-conciliador'>
                  <nav className="navbar navbar-light ">
                      <div className="container-fluid">
                          <form className="d-flex input-group w-auto">
                          <input
                              type="search"
                              class="form-control rounded"
                              placeholder="Buscar"
                              aria-label="Search"
                              aria-describedby="search-addon"
                          />
                          </form>
                          <div className="d-flex align-items-end">
                            <button type="button" class="btn btn-primary me-3" id='boton-agregar-conciliador'
                                onClick={()=>setIsOpen(!isOpen)}>
                                Agregar convocado
                            </button>
                          </div> 
                      </div>
                  </nav>                
              </div>
              {isOpen &&<div className='registro-convocado'>
                      <input className="input-registro-convocado form-control rounded" placeholder="Nombre"></input>
                      <select className="form-select drowdown-registro-convocado" aria-label="Default select example">
                        <option selected>Tipo de Documento</option>
                        <option value="1">Cedula</option>
                        <option value="2">Documento de Identificación</option>
                        <option value="3">Pasaporte</option>
                      </select>
                      <input className="input-registro-convocado form-control rounded" placeholder="Identificación"></input>
                      <input className="input-registro-convocado form-control rounded" placeholder="Clase del Convocado"></input>
                      <select className="form-select drowdown-registro-convocado" aria-label="Default select example">
                        <option selected>Ciudad</option>
                        <option value="1">Bogotá</option>
                        <option value="2">Cali</option>
                        <option value="3">Barranquilla</option>
                      </select>
                      <select className="form-select drowdown-registro-convocado" aria-label="Default select example">
                        <option selected>Departamento</option>
                        <option value="1">Cundinamarca</option>
                        <option value="2">Boyacá</option>
                        <option value="3">Santander</option>
                      </select>
                      <button className="btn btn-primary me-3"  id='boton-aceptar-registro-conciliador'>Aceptar</button>
                  </div>}
                  <form className='contenedor-tabla-convocado'>
              <table className='table table-striped table-bordered table-responsive '>
                <thead >
                  <tr>
                    <th></th>
                    <th>Clase del Convocado</th>
                    <th>Tipo de documento</th>
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    <th>Departamento</th>
                  </tr>
                </thead> 
                <tbody>
                    {lista.map((data, key) => {
                      return (
                          <tr>
                            <td><input className='class="custom-control-input"' name="flexRadioDefault" type='radio'></input></td>
                            <td>{data.company}</td>
                            <td>{data.ticker}</td>
                            <td>{data.stockPrice}</td>
                            <td>{data.timeElapsed}</td>
                            <td>Bogotá</td>
                            <td>Cundinamarca</td>
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
  
  export default ModuloInformacionConciliador