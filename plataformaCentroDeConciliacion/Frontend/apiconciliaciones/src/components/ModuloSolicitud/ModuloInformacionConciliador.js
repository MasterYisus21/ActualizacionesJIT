import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './css/ModuloInformacionConciliador.css';
import config from '../../config.json'
import { useParams } from 'react-router-dom';


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

  const [variable, setVariable] = useState([])

  const UrlParams = useParams();

  // useEffect(()=>{
  //   axios.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/convocados/123")
  //   .then((response)=>{
  //     console.log(response.data)
  //     setVariable(response.data[0]["Tipo_cliente_Id"])
  //   })
  // })

  useEffect(()=>{
    axios.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/convocados")
    .then((response) => {
      console.log(response.data)
    })
  })


  return (

    <>
      <div className='container container-conciliador pt-3'>
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
                  onClick={() => setIsOpen(!isOpen)}>
                  Agregar conciliador
                </button>
              </div>
            </div>
          </nav>
        </div>
        {isOpen &&
          <form className='contenedor-tabla-conciliador mb-5 pt-3 pb-3'>
            <label className='pb-3 h5'>Seleccione el conciliador que desea agregar</label>
            <table className='table table-striped table-bordered table-responsive'>
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
                {variable.map((data, key) => {
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
            <div className=''>
              <button type="button" className="btn btn-primary me-3" id='boton-agregar-conciliador'> Agregar</button>
            </div>
          </form>
        }
        <form className='contenedor-tabla-convocado'>
          <table className='table table-striped table-bordered table-responsive '>
            <thead >
              <tr>
                <th>Nombre</th>
                <th>Clase del Convocado</th>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Departamento</th>
              </tr>
            </thead>
            <tbody>
              {variable.map((value) => {
                <td>{value}</td>
              })}
              {lista.map((data, key) => {
                return (
                  <tr>
                    <td>Pepito</td>
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