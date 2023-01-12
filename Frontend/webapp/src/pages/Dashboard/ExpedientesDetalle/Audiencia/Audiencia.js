import React from 'react'
import './Audiencia.css'
import { Link, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';
import { useState, useEffect } from 'react';


function Audiencia() {

  let { id } = useParams();
  const [dataApi, setDataApi] = useState({})
  const [turnosDisponibles, setTurnosDisponibles] = useState([])
  const [tiposMedio, setTiposMedio] = useState([])

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `/expedientes/${id}/citaciones/?ordering=id&count=1&page=1`,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setDataApi(result.data.results[0])
        document.getElementById("fecha_sesion").value = result.data.results[0].fecha_sesion
        document.getElementById("descripcion").value = result.data.results[0].descripcion
        if (result.data.results[0].enlace) { document.getElementById("link-audiencia").value = result.data.results[0].enlace }

      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `/tipos_medio`,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data.results);
        setTiposMedio(result.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    const turnos = [{
      id: dataApi.turno_id,
      estado: dataApi.estado,
      nombre: dataApi.turno
    }]
    getTurnosDisponibles(dataApi.fecha_sesion, turnos)
  }, [dataApi])

  useEffect(() => {
    if (dataApi) {
      document.getElementById("turno-seleccionado").value = dataApi.turno_id
    }
  }, [turnosDisponibles])

  useEffect(() => {
    if (dataApi) {
      // document.getElementById("tipo-de-medio").checked = dataApi.tipo_medio_id
    }
  }, [tiposMedio])


  const getTurnosDisponibles = (value, turnosAdicionales = []) => {
    // console.log(e);
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `/expedientes/${id}/turnos/${value}`,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setTurnosDisponibles([...turnosAdicionales, ...result.data])
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='contenedor-principal-modulo-audiencia'>
      {/* <div className='contenedor-boton-audiencia'>
        <Link to={'../' + '/audiencias/'}>
          <button className='boton-audiencia btn btn-primary'>regresar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
          </svg></button>
        </Link>
      </div> */}
      <div className='titulo-informacion-audiencia'>
        <label className='titulo-audiencia'>Sesion de Audiencia</label>
        <div className='contenedor-icono-descarga'>
          <img src='/icons/descarga-documento.svg' className='icono-descarga-documento' />
        </div>
      </div>
      <div className='contenedor-subtitulo'>
        <label className='subtitulo-audiencia'>Ingrese los datos de la audiencia</label>
      </div>

      <form>

        <div className='fecha-y-hora'>
          <div className='izquierda-fecha-descripcion'>
            <label className='titulo-fecha-sesion'>Fecha de la sesión:</label>
            <div className='contenedor-campos-de-llenado'>
              <input
                type="date"
                id='fecha_sesion'
                className='input-fecha-sesion'
                onChange={e => getTurnosDisponibles(e.target.value)}
              />
            </div>
            <label className='titulo-descripcion'>Descripción:</label>
            <div className='contenedor-campos-de-llenado'>
              <textarea id='descripcion' className='campo-descripcion'></textarea>
            </div>
          </div>
          <div className='derecha-hora-tipo'>
            <label className='titulo-fecha-sesion'>Hora:</label>
            <div className='contenedor-campos-de-llenado-derecha'>
              <Form.Select aria-label="Default select example" className='input-seleccionable-hora' id="turno-seleccionado">
                <option value="">Selecciona una hora</option>
                {turnosDisponibles.map((dato) => {
                  return (<option value={dato.id}>{dato.nombre}</option>)
                })}
              </Form.Select>
            </div>
            <label className='titulo-descripcion'>Tipo de medio:</label>
            <div className='separador-virtual-presencial'>
              {tiposMedio.map(dato => {
                return (
                  <>
                    <input className='class="custom-control-input"' id="tipo-de-medio" value={dato.id} name="tipo-de-medio" type='radio' checked={dataApi ? dataApi.tipo_medio_id == dato.id : false} onChange={e => setDataApi({...dataApi, tipo_medio_id: e.target.value})} required></input>
                    <label className="label-virtual">{dato.nombre} </label>
                  </>
                )
              })}
            </div>
            <div className='contenedor-campos-de-llenado-derecha'>
              <Form.Control
                id="link-audiencia"
                type="text"
                placeholder="Link"
                aria-label="Disabled input example"
                readOnly
                className='disabled-link'
              />
            </div>
          </div>
        </div>
        <div className='contenedor-imagen-guardar'>
          <button className='contenedor-imagen-guardar-button'>
            <img src='/icons/save.svg' className='icono-guardar' />
            <label className='nombre-guardar'>Guardar</label>
          </button>
        </div>
      </form>
      <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
        <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas citadas</label>
        <table className='table table-striped table-bordered '>
          <thead >
            <tr>
              <th>Identificación</th>
              <th>Nombres y Apellidos</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <form onSubmit={event => { }}>
                  <button className='btn btn-outline btn-sm' name="identificacion">
                    <img className='mini-image' src="/images/arrow-down.svg"></img>
                  </button>
                </form>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
        <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas que puedo citar</label>
        <table className='table table-striped table-bordered '>
          <thead >
            <tr>
              <th>Identificación</th>
              <th>Nombres y Apellidos</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <form onSubmit={event => { }}>
                  <button className='btn btn-outline btn-sm' name="identificacion">
                    <img className='mini-image' src="/images/arrow-up.svg"></img>
                  </button>
                </form>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className='contenedor-boton-notificar-via-correo'>
        <button className='boton-notificar'>Notificar vía correo</button>
      </div>
    </div >
  )
}

export default Audiencia