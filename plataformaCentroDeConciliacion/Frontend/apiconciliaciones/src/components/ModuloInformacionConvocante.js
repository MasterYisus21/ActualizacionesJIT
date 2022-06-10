import React, { useState } from 'react'
import './css/ModuloInformacionConvocante.css';



function ModuloInformacionConvocante() {

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
      <div className='container pt-3'>
        <div className='titulo-informacion-convocante align-items-center'>
          <h1>Informacion del convocante</h1>
        </div>
        <div className='contenedor-navbar-agregar-convocante'>
          <nav className="navbar navbar-light ">
            <div className="container-fluid">
              <form className="d-flex input-group w-auto align-items-sm-baseline gap-3">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Cédula"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button className='border-0 bg-transparent '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                  </svg>
                </button>

              </form>
              <div className="d-flex align-items-end">
                <button type="button" className="btn btn-primary me-3" id='boton-agregar-convocante'
                  onClick={() => setIsOpen(!isOpen)}>
                  Crea un convocante
                </button>
              </div>
            </div>
          </nav>
        </div>
        {isOpen &&
          <div className='registro-convocante mb-3'>
            <input className="input-registro-convocante form-control rounded w-25" placeholder="Identificación"></input>
            Nombre:<input className="input-registro-convocante form-control rounded w-25" placeholder="Nombres"></input>
            <input className="input-registro-convocante form-control rounded w-25" placeholder="Apellidos"></input>
            <input type="email" className="input-registro-convocante form-control rounded w-25" placeholder="Correo"></input>
            <input type="text" className="input-registro-convocante form-control rounded w-25" placeholder="Teléfono"></input>
            Fecha de Naciemiento<input type="date" class="form-control w-25" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            <select className="form-select drowdown-registro-convocante" aria-label="Default select example">
              <option selected>Tipo de Documento</option>
              <option value="1">Cedula</option>
              <option value="2">Documento de Identificación</option>
              <option value="3">Pasaporte</option>
            </select>
            <select className="form-select drowdown-registro-convocante" aria-label="Default select example">
              <option selected>Tipo de Vivienda</option>
              <option value="1">Cedula</option>
              <option value="2">Documento de Identificación</option>
              <option value="3">Pasaporte</option>
            </select>
            <select className="form-select drowdown-registro-convocante" aria-label="Default select example">
              <option selected>Barrio</option>
              <option value="1">Cedula</option>
              <option value="2">Documento de Identificación</option>
              <option value="3">Pasaporte</option>
            </select>
            <input className="input-registro-convocante form-control rounded" placeholder="Tipo de persona"></input>
            <select className="form-select drowdown-registro-convocante" aria-label="Default select example">
              <option selected>Estrato Socieconómico</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            
            <button className="btn btn-primary me-3" id='boton-aceptar-registro-convocante'>Registrar</button>
          </div>}
        <form className='contenedor-tabla-convocante'>
          <table className='table table-striped table-bordered table-responsive '>
            <thead >
              <tr>
                <th>Clase del convocante</th>
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

export default ModuloInformacionConvocante