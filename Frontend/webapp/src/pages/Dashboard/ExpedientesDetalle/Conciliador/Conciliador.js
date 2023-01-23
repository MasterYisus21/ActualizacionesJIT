import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Buscador, Button } from '../../../../components';
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

  const [resultadosBusquedaCandidatos, setResultadosBusquedaCandidatos] = useState([]);
  const [valoresBuscadosCandidatos, setValoresBuscadosCandidatos] = useState([])
  const [numPagesCandidatos, setNumPagesCandidatos] = useState(1)
  const [pageCandidatos, setPageCandidatos] = useState(1)

  let { id } = useParams();
  let resultados = useRef([])
  let resultadosCandidatos = useRef([])

  useEffect(() => {
    if (estado && resultadosBusquedaCandidatos.length === 0) {
      searchCandidatos()
    }
  }, [estado])

  const searchCandidatos = (pageCustom) => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/personas/" + "?ordering=-id&count=5&page=" + (pageCustom ? pageCustom : pageCandidatos) + "&search=Conciliador," + (valoresBuscadosCandidatos.length !== 0 ? valoresBuscadosCandidatos[valoresBuscadosCandidatos.length - 1] : ""),
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        if (pageCandidatos == 1 || pageCustom == 1) {
          resultadosCandidatos.current = result.data.results
          setPageCandidatos(1)

        } else {
          resultadosCandidatos.current = [...resultadosCandidatos.current, ...result.data.results]
        }
        setResultadosBusquedaCandidatos(resultadosCandidatos.current)
        setNumPagesCandidatos(Math.ceil(result.data.count / 5))
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handlePageChangeCandidatos = (page) => {
    if (page <= numPagesCandidatos) {
      setPageCandidatos(page)
    }
  }

  const handleScrollCandidatos = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (e.target.scrollHeight - e.target.scrollTop - 100 < e.target.clientHeight) {
      // console.log("almost bottom");
      handlePageChangeCandidatos(pageCandidatos + 1)
    }
  }

  useEffect(() => {
    setResultadosBusquedaCandidatos([]);
    searchCandidatos(1)
  }, [valoresBuscadosCandidatos])

  useEffect(() => {
    if (pageCandidatos != 1) {
      searchCandidatos()
    }
  }, [pageCandidatos])

  const handleAddPerson = (idPersona, nombre) => {
    function addPerson(idPersona) {
      // alert(`deleted person ${idPersona}`)
      axiosTokenInstanceApiExpedientes({
        method: 'post',
        url: "/expedientes/" + id + "/conciliadores/" + idPersona,
        // headers: req.headers,
        data: {}
      })
        .then(result => {
          // setResultadosBusqueda(resultadosBusqueda.filter((resultadosBusqueda) => {
          //   return resultadosBusqueda["id"] != idPersona
          // }))
          if (result.status === 208) {
            alert("Esta persona ya esta registrada como conciliador")
          } else if (result.status === 200) {
            setResultadosBusqueda([result.data, ...resultadosBusqueda])
          }
        })
        .catch(err => {
          console.log(err);
        });

    }
    confirmAlert({
      title: `Confirmación para agregar persona`,
      message: `¿Estas seguro de agregar a ${nombre.toUpperCase()} al caso?.`,
      buttons: [
        {
          label: 'Si',
          onClick: () => addPerson(idPersona)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  }



  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/conciliadores/?ordering=-id&count=14&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }),
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
          <button className='boton-crear-conciliador' onClick={() => setEstado(!estado)}>Agregar Conciliador</button>
        </div>
        {estado &&
          <div className='contenedor-tabla-seleccion-conciliador mb-5 p-4 pb-3'>
            <label className='pb-3 h5'>Seleccione el conciliador que desea agregar</label>
            <Buscador
              valoresBuscados={valoresBuscadosCandidatos}
              setValoresBuscados={setValoresBuscadosCandidatos}
              filtros={[]}
              setFiltros={() => { }}
              setPage={handlePageChangeCandidatos}
              required
            />
            <div className='conciliadores-candidatos-container' onScroll={e => handleScrollCandidatos(e)}>
              <table className='table table-striped table-bordered table-responsive '>
                <thead >
                  <tr>
                    {/* <th></th> */}
                    <th>Tipo de documento</th>
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {resultadosBusquedaCandidatos.map((dato, key) => {
                    return (
                      <tr key={dato["id"]}>
                        {/* <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio' value={dato["id"]}></input></td> */}
                        <td>{dato["tipo_documento"]}</td>
                        <td>{dato["identificacion"]}</td>
                        <td>{dato["nombres"] + ' ' + dato["apellidos"]}</td>
                        <td>
                          <button type="submit" className="boton-crear-conciliador" id='boton-agregar-conciliador' onClick={(e) => { handleAddPerson(dato["id"], dato["nombres"] + ' ' + dato["apellidos"]) }}> Agregar</button>
                        </td>
                      </tr>
                    );
                  })}
                  <Button
                    onClick={e => { handlePageChangeCandidatos(pageCandidatos + 1) }}
                    className="span2"
                    text="Cargar más"
                  />
                </tbody>
              </table>
            </div>
          </div>
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