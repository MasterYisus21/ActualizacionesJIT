import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Buscador, Button, NotificationToast, Popup, PopupConv } from '../../../../components';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from 'react-bootstrap/Form';

import { confirmAlert } from 'react-confirm-alert'; // Import


// Importing css
import './Convocantes.css'

function Convocantes() {

  const [estado, setEstado] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupconv, setPopupconv] = useState(false);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)
  const [openbutton, setOpenbutton] = useState(false)

  let { id } = useParams();
  let resultados = useRef([])

  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/convocantes/?ordering=-numero_caso&count=14&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }),
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
      <div className='container-convocante'>
        {popupconv &&
          <PopupConv setEstado={setPopupconv} estado={popupconv}></PopupConv>
        }

        {popup &&
          <Popup setEstado={setPopup} estado={popup}></Popup>
        }
        <h2>Informacion del convocante</h2>
        <div className='navbar-convocante'>
          <Buscador
            valoresBuscados={valoresBuscados}
            setValoresBuscados={setValoresBuscados}
            setPage={handlePageChange}
            required
          />
          <button className='boton-crear-convocante' onClick={() => setEstado(!estado)}>Crear Convocante</button>
        </div>


        {estado &&
           <div className="datos-crear-convocante">
            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="genero"
                required
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {/* {tiposDocumento.map(tipoDocumento => {
                  return (<option key={"tipoDocumento" + tipoDocumento["id"]} value={tipoDocumento["id"]}>{tipoDocumento["nombre"]}</option>)
                })} */}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Número de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Fecha y lugar de expedición de documento
            </label>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Fecha de expedición de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="date"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Lugar de expedición"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Nombre</label>
            <FloatingLabel controlId="floatingInputGrid" label="Nombres">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Apellidos">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Tipo de Persona</label>
            <div className="d-flex gap-5">
              {/* {tiposPersona.map(tipoPersona => {
                return (
                  <div key={"tipoPersona" + tipoPersona["id"]} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      {tipoPersona["nombre"]}
                    </label>
                  </div>
                )
              })} */}
            </div>

            <label className="subtitles-secciones">Sexo y Género</label>
            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingSelectGrid" label="Sexo">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="sexo"
                  required
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {/* {sexos.map(sexo => {
                    return (<option key={"sexos" + sexo["id"]} value={sexo["id"]}>{sexo["nombre"]}</option>)
                  })} */}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelectGrid" label="Género">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="genero"
                  required
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {/* {generos.map(genero => {
                    return (<option key={"generos" + genero["id"]} value={genero["id"]}>{genero["nombre"]}</option>)
                  })} */}
                </Form.Select>
              </FloatingLabel>
            </div>

            <label className="subtitles-secciones">
              Estrato y dirección de residencia
            </label>
            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingSelectGrid" label="Estrato">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="genero"
                  required
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {/* {estratosSocieconomicos.map(estrato => {
                    return (<option key={"estratos" + estrato["id"]} value={estrato["id"]}>{estrato["nombre"]}</option>)
                  })} */}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Dirección">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>
            <FloatingLabel controlId="floatingInputGrid" label="Ciudad de Residencia">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Datos Adicionales</label>
            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingSelectGrid" label="Estado civil ">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Edad">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingSelectGrid" label="Escolaridad ">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                >
                  <option>Abre el menú para ver las opciones</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Ocupación">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingSelectGrid" label="Teléfono ">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <label className="subtitles-secciones">Posee apoderado</label>
            <div className='col-detalle-solicitud'>
              <button
                onClick={() => setOpenbutton(true)}
                className={openbutton ? "boton-datos-apoderado-active" : "boton-datos-apoderado"} >
                Si
              </button>
              <button
                onClick={() => setOpenbutton(false)}
                className={openbutton ? "boton-datos-apoderado" : "boton-datos-apoderado-active"} >
                No
              </button>
            </div>

            {openbutton &&
              <>
                <label className="subtitles-secciones">Nombre</label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel controlId="floatingSelectGrid" label="Nombres ">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">
                  Identificación
                </label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Tipo de documento"
                  >
                    <Form.Select
                      className="col-inputs"
                      aria-label="Floating label select example"
                    >
                      <option>Abre el menú para ver las opciones</option>
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="Número de documento">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">
                  Fecha y lugar de expedición de documento
                </label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Fecha de expedición de documento"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="date"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Lugar de expedición"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">Datos adicionales</label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel controlId="floatingSelectGrid" label="Tarjeta profesional ">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="correo">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <div className='col-detalle-solicitud'>
                  <FloatingLabel controlId="floatingSelectGrid" label="Teléfono">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="Celular">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>
              </>
           }
         </div>
          }

        <div className='contenedor-tabla-convocante' onScroll={e => handleScroll(e)}>
          <table className='table table-striped table-bordered table-responsive '>
            <thead >
              <tr>
                <th>Nombre</th>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Apoderado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {resultadosBusqueda.map((resultadoBusqueda) => {
                return (
                  <tr key={resultadoBusqueda["id"]}>
                    <td>{resultadoBusqueda["nombres_persona"]}</td>
                    <td>{resultadoBusqueda["tipo_documento_persona"]}</td>
                    <td>{resultadoBusqueda["identificacion_persona"]}</td>
                    <td><button onClick={() => setPopup(!popup)} className='boton-tabla-eliminar'>{resultadoBusqueda["nombre_apoderado"]}</button></td>
                    <td>
                      <button className='boton-tabla-eliminar' value={resultadoBusqueda["id"]} onClick={() => setPopupconv(!popupconv)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </button>
                      <button className='boton-tabla-eliminar' onClick={(e) => { handleDeletePerson(resultadoBusqueda["id"], resultadoBusqueda["nombres_persona"]) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </button>
                    </td>
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


export default Convocantes