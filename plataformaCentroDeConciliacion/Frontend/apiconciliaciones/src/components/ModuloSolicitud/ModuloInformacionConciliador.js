import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import './css/ModuloInformacionConciliador.css';
import config from '../../config.json'
import { useLocation, useParams } from 'react-router-dom';


function ModuloInformacionConciliador() {

  const [isOpen, setIsOpen] = useState(false);

  const verDocente = () => {

  }

  const agregarConciliador = (event) => {
    event.preventDefault()
    axios.post(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/conciliadores/" + event.target.identificacionPersona.value)
      .then((response) => {
        setIsOpen(false)
        if (response.status != 208) {
          setConciliadores([...conciliadores, response.data["persona"]])
          alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Agregado correctamente</div>"
        }
        else {
          alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>Persona ya agregada a esta solicitud.</div>"
        }

      })
      .catch((error) => {
        console.log(error.response.status)
        if (error.response.status == 404) {
          alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Persona no encontrada</div>"
        } else {
          alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Hubo un error en el servidor, intente mas tarde.</div>"
        }
      })
  }

  const eliminarConciliadores = (event) => {
    event.preventDefault()
    axios.delete(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/personas/" + event.target.value)
      .then((response) => {
        setConciliadores(conciliadores.filter((object) => {
          return object["Identificacion"] != event.target.value
        }))
        alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>Eliminado correctamente</div>"
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const obtenerConciliadores = () => {
    axios.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/conciliadores")
      .then((response) => {
        console.log(response.data)
        setConciliadores(response.data)
      })
  }

  let location = useLocation();
  const UrlParams = useParams();

  const [conciliadores, setConciliadores] = useState([])
  const [conciliadoresDisponibles, setConciliadoresDisponibles] = useState([])

  useEffect(() => {
    obtenerConciliadores()
  }, [location])

  useEffect(() => {
    if (conciliadoresDisponibles.length == 0 && isOpen) {
      axios.get(config.apiGatewayURL + "/docentes")
        .then((response) => {
          console.log(response.data)
          setConciliadoresDisponibles(response.data)
        })
    }

  }, [location, isOpen])

  const alertContainer = useRef("");


  return (
    <>
      <div className='container container-conciliador pt-3'>
        <div className='titulo-informacion-conciliador'>
          <h5>Informacion del Conciliador</h5>
        </div>
        <div className='contenedor-navbar-agregar-conciliador'>
          <nav className="navbar navbar-light ">
            <div className="container-fluid">
              <form className="d-flex input-group w-autd-flex input-group w-auto align-items-sm-baseline gap-1">
                <input
                  type="search"
                  class="form-control form-control-sm rounded"
                  placeholder="Buscar"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <div ref={alertContainer}></div>
              </form>
              <div className="d-flex align-items-end">
                <button type="button" class="btn btn-primary btn-sm me-3" id='boton-agregar-conciliador'
                  onClick={() => setIsOpen(!isOpen)}>
                  Agregar conciliador
                </button>
              </div>
            </div>
          </nav>
        </div>
        {isOpen &&
          <form className='contenedor-tabla-seleccion-conciliador mb-5 p-4 pb-3' onSubmit={agregarConciliador}>
            <label className='pb-3 h5'>Seleccione el conciliador que desea agregar</label>
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
                {conciliadoresDisponibles.map((dato, key) => {
                  return (
                    <tr>
                      <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio' value={dato["Identificacion"]}></input></td>
                      <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                      <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                      <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className=''>
              <button type="submit" className="btn btn-primary me-3" id='boton-agregar-conciliador'> Agregar</button>
            </div>
          </form>
        }
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
              {conciliadores.map((dato) => {
                return (
                  <tr>
                    <td key={dato["Tipo_persona_Id"]}>{dato["Tipo_persona_Id"]["Nombre"]}</td>
                    <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                    <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                    <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    <td><button className='boton-tabla-eliminar' value={dato["Identificacion"]} onClick={eliminarConciliadores}>Eliminar</button></td>
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

export default ModuloInformacionConciliador