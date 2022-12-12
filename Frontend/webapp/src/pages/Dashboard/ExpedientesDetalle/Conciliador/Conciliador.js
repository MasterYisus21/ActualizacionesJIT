import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from '../../../../components';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

import { confirmAlert } from 'react-confirm-alert'; // Import


// Import css
import './Conciliador.css'

function Conciliador() {

  const [estado, setEstado] = useState(false);

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)

  let { id } = useParams();
  let resultados = useRef([])


  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/conciliadores/?ordering=-numero_caso&count=14&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }),
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        if (page != 1) {
          resultados.current = [...resultados.current, ...result.data.results]
        } else {
          resultados.current = result.data.results
        }
        setResultadosBusqueda(resultados.current)
        setNumPages(Math.ceil(result.data.count / 14))
      })
      .catch(err => {
        console.log("error");
      });
  }

  const handlePageChange = (page) => {
    if (page <= numPages) {
      setPage(page)
    }
  }

  const handleScroll = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (e.target.scrollHeight - e.target.scrollTop - 200 < e.target.clientHeight) {
      // console.log("almost bottom");
      handlePageChange(page + 1)
    }
  }

  useEffect(() => {
    setResultadosBusqueda([]);
    search()
  }, [valoresBuscados])

  useEffect(() => {
    if (page != 1) {
      search()
    }
  }, [page])

  const handleDeletePerson = (idPersona, nombre) => {
    function deletePerson(idPersona) {
      // alert(`deleted person ${idPersona}`)
      axiosTokenInstanceApiExpedientes({
        method: 'delete',
        url: "/expedientes/" + id + "/personas/" + idPersona,
        // headers: req.headers,
        data: {}
      })
        .then(result => {
          setResultadosBusqueda(resultadosBusqueda.filter((resultadosBusqueda) => {
            return resultadosBusqueda["id"] != idPersona
          }))
        })
        .catch(err => {
          console.log("error");
        });

    }
    confirmAlert({
      title: `Confirmación para eliminar`,
      message: `¿Estas seguro de borrar a ${nombre.toUpperCase()} del caso?.`,
      buttons: [
        {
          label: 'Si',
          onClick: () => deletePerson(idPersona)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  }

  return (
    <>
      <div className='container-conciliador'>

        <h2>Informacion del Conciliador</h2>
        <div className='navbar-conciliador'>
          <input type="search" className="form-control rounded input-buscar" placeholder="Buscar conciliador" aria-label="Search" aria-describedby="search-addon" />
          <button className='boton-crear-conciliador' onClick={() => setEstado(!estado)}>Agregar Conciliador</button>
        </div>
        {estado &&
          <form className='contenedor-tabla-seleccion-conciliador mb-5 p-4 pb-3'>
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
                <tr>
                  <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio'></input></td>
                  <td>Cedula</td>
                  <td>1033816123</td>
                  <td>Juan Diego Benavidez</td>
                </tr>
                {/* {conciliadoresDisponibles.map((dato, key) => {
                  return (
                    <tr>
                      <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio' value={dato["Identificacion"]}></input></td>
                      <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                      <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                      <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
            <div className=''>
              <button type="submit" className="boton-crear-conciliador" id='boton-agregar-conciliador'> Agregar</button>
            </div>
          </form>
        }
        <div className='contenedor-tabla-convocado' onScroll={e => handleScroll(e)}>
          <table className='table table-striped table-bordered table-responsive '>
            <thead >
              <tr>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {resultadosBusqueda.map((resultadoBusqueda) => {
                return (
                  <tr key={resultadoBusqueda["id"]}>
                    <td>{resultadoBusqueda["tipo_documento"]}</td> {/* Clase del convocado natural, juridica */}
                    <td>{resultadoBusqueda["identificacion"]}</td>
                    <td>{resultadoBusqueda["nombres"]}</td>
                    <td><button className='boton-tabla-eliminar' value={resultadoBusqueda["id"]} onClick={(e) => { handleDeletePerson(resultadoBusqueda["id"], resultadoBusqueda["nombres"]) }}>Eliminar</button></td>
                  </tr>
                )
              })}
            </tbody>
            <Button
              onClick={e => { handlePageChange(page + 1) }}
              className="span2"
              text="Cargar más"
            />
          </table>
        </div>
      </div>
    </>
  )
}

export default Conciliador