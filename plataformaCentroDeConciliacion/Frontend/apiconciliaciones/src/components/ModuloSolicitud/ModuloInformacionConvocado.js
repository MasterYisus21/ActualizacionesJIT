import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import './css/ModuloInformacionConvocado.css';
import config from '../../config.json'
import { useLocation, useParams } from 'react-router-dom';


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
  const eliminarConvocado = (event) => {
    event.preventDefault()
    axios.delete(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/personas/" + event.target.value)
      .then((response) => {
        setConvocados(convocados.filter((object) => {
          return object["Identificacion"] != event.target.value
        }))
        alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>Eliminado correctamente</div>"

      })
      .catch((error) => {
        console.log(error)
      })
  }
  const agregarConvocado = (event) => {
    event.preventDefault()
    axios.post(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/convocados/" + event.target.cedula.value)
      .then((response) => {
        console.log()
        setConvocados([...convocados, response.data["persona"]])
        alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Agregado correctamente</div>"
      })
      .catch(error => {
        console.log(error.response.status)
        if(error.response.status == 404) {
          alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Persona no encontrada</div>"
        } else {
          alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Hubo un error en el servidor, intente mas tarde.</div>"
        }
      })

  }

  const obtenerConvocados = () => {
    axios.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/convocados")
      .then((response) => {
        console.log(response.data)
        setConvocados(response.data)
      })
  }

  const UrlParams = useParams();

  const [convocados, setConvocados] = useState([])

  let location = useLocation();

  useEffect(() => {
    obtenerConvocados()
  }, [location])

  const alertContainer = useRef("");



  return (
    <>
      <div className='container container-convocado pt-3'>
        <div className='titulo-informacion-convocado'>
          <h5>Informacion del convocado</h5>
        </div>
        <div className='contenedor-navbar-agregar-convocado'>
          <nav class="navbar p-0">
            <div class="container">
              <form class="d-flex input-group w-auto align-items-sm-baseline gap-1" onSubmit={agregarConvocado}>
                <input
                  type="text"
                  name="cedula"
                  class="form-control form-control-sm rounded"
                  placeholder="Cédula"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button className='border-0 bg-transparent' type='submit'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                  </svg>
                </button>
                <div ref={alertContainer}></div>
              </form>
              <div className="d-flex align-items-end">
                <button type="button" class="btn btn-primary btn-sm" id='boton-agregar-convocado'
                  onClick={() => setIsOpen(!isOpen)}>
                  Agregar convocado
                </button>
              </div>
            </div>
          </nav>
        </div>

        {isOpen &&
          <div className='registro-convocante mb-5'>
            <div className='container d-grid gap-3'>
              <label>Nombre</label>
              <div className='row gap-3 ps-3 px-3'>
                <input className="form-control rounded col" placeholder="Nombre(s)"></input>
                <input className="form-control rounded col" placeholder="Apellidos"></input>
              </div>
            </div>
            <div className='container d-grid gap-3'>
              <label>Fecha de Nacimiento</label>
              <input type="date" class="form-control" placeholder="fecha de Nacimiento"></input>
            </div>
            <div className='container d-grid gap-3'>
              <label>Identificación</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>Tipo de Documento</option>
                <option value="1">Cedula</option>
                <option value="2">Documento de Identificación</option>
                <option value="3">Pasaporte</option>
              </select>
              <input className="form-control rounded" placeholder="Número de documento"></input>
            </div>
            <div className='container d-grid gap-3'>
              <label>Datos adicionales</label>
              <div className=' d-grid gap-3 ps-3 px-3'>
                <div className='row gap-3'>
                  <input type="email" className="form-control rounded col" placeholder="Correo"></input>
                  <input type="text" className="form-control rounded col" placeholder="Teléfono"></input>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Sexo</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                    <option value="3">Personalizado</option>
                  </select>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Tipo Persona</option>
                    <option value="1">Jurídica</option>
                    <option value="2">Natural</option>
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Tipo de Vivienda</option>
                    <option value="1">Propia</option>
                    <option value="2">Arriendo</option>
                  </select>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Estrato Socieconómico</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Departamento</option>
                    <option value="1">Cundinamarca</option>
                    <option value="2">Boyacá</option>
                    <option value="3">Meta</option>
                  </select>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Ciudad</option>
                    <option value="1">Bototá</option>
                    <option value="2">Medellín</option>
                    <option value="3">Tunja</option>
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Localidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <select className="form-select col" aria-label="Default select example">
                    <option selected>Barrio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary me-3" id='boton-aceptar-registro-convocante'>Registrar</button>
          </div>}

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
              {convocados.map((dato) => {
                return (
                  <tr>
                    <td key={dato["Tipo_persona_Id"]}>{dato["Tipo_persona_Id"]["Nombre"]}</td>
                    <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                    <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                    <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    {/* <td key={dato["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Id"]}>{dato["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Nombre"]}</td> */}
                    {/* <td key={dato["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Departamento_Id"]["Id"]}>{dato["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Departamento_Id"]["Nombre"]}</td> */}
                    <td><button className='boton-tabla-eliminar' value={dato["Identificacion"]} onClick={eliminarConvocado}>Eliminar</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default ModuloInformacionConvocado