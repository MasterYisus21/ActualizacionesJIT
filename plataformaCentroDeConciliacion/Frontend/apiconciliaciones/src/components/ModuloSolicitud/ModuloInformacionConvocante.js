import React, { useEffect, useRef, useState } from 'react'
import config from '../../config.json'
import './css/ModuloInformacionConvocante.css';
import { useLocation, useParams } from 'react-router-dom';
import axiosApiInstance from '../Utilities/axiosApiInstance';
import axios from 'axios';



function ModuloInformacionConvocante() {

  const [isOpen, setIsOpen] = useState(false);
  const [opcionesTipoDocumento, setOpcionesTipoDocumento] = useState([])
  const [opcionesSexo, setOpcionesSexo] = useState([])
  const [opcionesTipoPersona, setOpcionesTipoPersona] = useState([])
  const [opcionesTipoVivienda, setOpcionesTipoVivienda] = useState([])
  const [opcionesEstratoSocieconomico, setOpcionesEstratoSocieconomico] = useState([])
  const [opcionesDepartamentos, setOpcionesDepartamentos] = useState([])
  const [opcionesCiudades, setOpcionesCiudades] = useState([])
  const [opcionesLocalidades, setOpcionesLocalidades] = useState([])
  const [opcionesBarrios, setOpcionesBarrios] = useState([])

  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("")
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState("")


  const agregarConvocante = (event) => {
    event.preventDefault()
    axiosApiInstance.post(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/convocantes/" + event.target.cedula.value)
      .then((response) => {
        if (response.status != 208) {
          setConvocantes([...convocantes, response.data["persona"]])
          alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Agregado correctamente</div>"
        } else {
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

  const eliminarConvocante = (event) => {
    event.preventDefault()
    axiosApiInstance.delete(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/personas/" + event.target.value)
      .then((response) => {
        setConvocantes(convocantes.filter((object) => {
          return object["Identificacion"] != event.target.value
        }))
        alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>Eliminado correctamente</div>"
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const crearPersona = (event) => {
    event.preventDefault()
    const data = {
      "Identificacion": parseInt(event.target.numeroDocumento.value),
      "Nombres": event.target.nombres.value,
      "Apellidos": event.target.apellidos.value,
      "Correo": event.target.email.value,
      "Telefono": parseInt(event.target.telefono.value),
      "Fecha_de_nacimiento": event.target.fechaNacimiento.value,
      "Tipo_documento_Id": parseInt(event.target.tipoDocumento.value),
      "Tipo_vivienda_Id": parseInt(event.target.tipoVivienda.value),
      "Barrio_Id": parseInt(event.target.barrio.value),
      "Tipo_persona_Id": parseInt(event.target.tipoPersona.value),
      "Estrato_socioeconomico_Id": parseInt(event.target.estratoSocioeconomico.value),
      "Tipo_estado_Id": 1,
      "Perfil_Id": null,
      "Tipo_cargo_Id": null,
      "Genero_Id": parseInt(event.target.sexo.value),
    }

    axiosApiInstance.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + '/convocantes/crear_personas', data)
    .then(response => {
      console.log(response)
      setIsOpen(false)
      const persona = response.data
      setConvocantes([...convocantes, persona])
    })
    // api/gateway/v1/solicitudes/:Id/convocados/crear_personas

    console.log(data)
  }

  const obtenerOpcionesCrearPersona = () => {
    axiosApiInstance.get(config.apiGatewayURL + "/datos_persona")
      .then(response => {
        console.log(response.data)
        setOpcionesTipoDocumento(response.data["Tipo_documento"])
        setOpcionesSexo(response.data["Genero"])
        setOpcionesTipoPersona(response.data["Tipo_persona"])
        setOpcionesTipoVivienda(response.data["Tipo_vivienda"])
        setOpcionesEstratoSocieconomico(response.data["Estrato_socioeconomico"])
        setOpcionesDepartamentos(response.data["departamentos"])
      })
  }

  const obtenerOpcionesCiudades = (value) => {
    axiosApiInstance.get(config.apiGatewayURL + "/departamentos/" + value)
      .then((response) => {
        setOpcionesCiudades(response.data)
      })
  }

  const obtenerOpcionesLocalidades = (value) => {
    axiosApiInstance.get(config.apiGatewayURL + "/departamentos/" + departamentoSeleccionado + '/ciudades/' + value)
      .then((response) => {
        setOpcionesLocalidades(response.data)
      })
  }

  const obtenerOpcionesBarrios = (value) => {
    axiosApiInstance.get(config.apiGatewayURL + "/departamentos/" + departamentoSeleccionado + '/ciudades/' + ciudadSeleccionada + '/barrios/' + value)
      .then((response) => {
        console.log(response.data)
        setOpcionesBarrios(response.data)
      })
  }


  let location = useLocation();
  const UrlParams = useParams();

  const [convocantes, setConvocantes] = useState([])

  const obtenerConvocantes = () => {
    axiosApiInstance.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/convocantes")
      .then((response) => {
        console.log(response.data)
        if (response.data != "") {
          setConvocantes(response.data)
        }
      })
  }

  useEffect(() => {
    if (isOpen && opcionesDepartamentos.length == 0) {
      obtenerOpcionesCrearPersona()
    }

  }, [isOpen])

  useEffect(() => {
    obtenerConvocantes()
  }, [location])

  const alertContainer = useRef("");


  return (
    <>
      <div className='container container-convocante pt-3'>
        <div className='titulo-informacion-convocante align-items-center'>
          <h5>Informacion del convocante</h5>
        </div>
        <div className='contenedor-navbar-agregar-convocante'>
          <nav className="navbar p-0">
            <div className="container">
              <form className="d-flex input-group w-auto align-items-sm-baseline gap-1" onSubmit={agregarConvocante}>
                <input
                  type="text"
                  className="form-control form-control-sm rounded"
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
                <div ref={alertContainer}></div>
              </form>
              <div className="d-flex align-items-end">
                <button type="button" className="btn btn-primary btn-sm" id='boton-agregar-convocante'
                  onClick={() => setIsOpen(!isOpen)}>
                  Crea un convocante
                </button>
              </div>
            </div>
          </nav>
        </div>

        {isOpen &&
          <form className='registro-convocante mb-5' onSubmit={event => crearPersona(event)}>
            <div className='container d-grid gap-3'>
              <label>Nombre</label>
              <div className='row gap-3 ps-3 px-3'>
                <input className="form-control rounded col" placeholder="Nombre(s)" name='nombres' required></input>
                <input className="form-control rounded col" placeholder="Apellidos" name='apellidos' required></input>
              </div>
            </div>
            <div className='container d-grid gap-3'>
              <label>Fecha de Nacimiento</label>
              <input type="date" className="form-control" placeholder="fecha de Nacimiento" name='fechaNacimiento' required></input>
            </div>
            <div className='container d-grid gap-3'>
              <label>Identificación</label>
              <select className="form-select" aria-label="Default select example" defaultValue="" name='tipoDocumento' required>
                <option value="">Tipo de Documento</option>
                {opcionesTipoDocumento.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
              </select>
              <input className="form-control rounded" type="number" min="0" placeholder="Número de documento" name='numeroDocumento' required></input>
            </div>
            <div className='container d-grid gap-3'>
              <label>Datos adicionales</label>
              <div className=' d-grid gap-3 ps-3 px-3'>
                <div className='row gap-3'>
                  <input type="email" className="form-control rounded col" placeholder="Correo" name="email" required></input>
                  <input type="text" className="form-control rounded col" placeholder="Teléfono" name='telefono' required></input>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name="sexo" required>
                    <option value="">Sexo</option>
                    {opcionesSexo.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                    opcionesSexo
                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name="tipoPersona" required>
                    <option value="">Tipo Persona</option>
                    {opcionesTipoPersona.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name='tipoVivienda' required>
                    <option value="">Tipo de Vivienda</option>
                    {opcionesTipoVivienda.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name='estratoSocioeconomico' required>
                    <option value="">Estrato Socieconómico</option>
                    {opcionesEstratoSocieconomico.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Numero"]}</option>) })}
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" onChange={e => { obtenerOpcionesCiudades(e.target.value); setDepartamentoSeleccionado(e.target.value) }} required>
                    <option value="">Departamento</option>
                    {opcionesDepartamentos.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" onChange={e => { obtenerOpcionesLocalidades(e.target.value); setCiudadSeleccionada(e.target.value) }} required>
                    <option value="">Ciudad</option>
                    {opcionesCiudades.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" onChange={e => { obtenerOpcionesBarrios(e.target.value) }} required>
                    <option value="">Localidad</option>
                    {opcionesLocalidades.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name='barrio' required>
                    <option value="">Barrio</option>
                    {opcionesBarrios.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary me-3" id='boton-aceptar-registro-convocante'>Registrar</button>
          </form>}

        <form className='contenedor-tabla-convocante'>
          <table className='table table-striped table-bordered table-responsive '>
            <thead >
              <tr>
                <th>Clase del convocante</th>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {convocantes.map((dato) => {
                return (
                  <tr key={dato["Id"]}>
                    <td key={dato["Tipo_persona_Id"]}>{dato["Tipo_persona_Id"]["Nombre"]}</td>
                    <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                    <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                    <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    <td><button className='boton-tabla-eliminar' value={dato["Identificacion"]} onClick={eliminarConvocante}>Eliminar</button></td>
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

export default ModuloInformacionConvocante