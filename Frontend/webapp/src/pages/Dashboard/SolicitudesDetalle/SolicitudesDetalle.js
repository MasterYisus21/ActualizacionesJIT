
import React, { useState, useCallback, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import { BarRectangulo, SubtemaRectangulo } from "../../../components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import './SolicitudesDetalle.css'
import { useDropzone } from "react-dropzone"
import { useParams } from "react-router-dom";
import { axiosBasicInstanceApiSolicitudes, axiosTokenInstanceApiSolicitudes } from "../../../helpers/axiosInstances";

function SolicitudesDetalle() {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [seccion1, setSeccion1] = useState(false);
  const [seccion2, setSeccion2] = useState(false);
  const [seccion3, setSeccion3] = useState(false);
  const [seccion4, setSeccion4] = useState(false);

  const [openbutton, setOpenbutton] = useState(false)

  // forms options 
  const [sexos, setSexos] = useState([])
  const [generos, setGeneros] = useState([])
  const [estratosSocieconomicos, setEstratosSocieconomicos] = useState([])
  const [tiposPersona, setTiposPersona] = useState([])
  const [tiposDocumento, setTiposDocumento] = useState([])
  const [departamentos, setDepartamentos] = useState([])

  // data from api
  const [data, setData] = useState({})

  const [myFiles, setMyFiles] = useState([])


  // Getting solicitud id from urlParams
  let { id } = useParams();

  useEffect(() => {
    axiosTokenInstanceApiSolicitudes({
      method: 'get',
      url: "/solicitudes/" + id,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setData(result.data)
      })
      .catch(err => {
        console.log("error");
      });

  }, [])


  // fetch sexos options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/sexos/?count=20",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setSexos(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // fetch generos options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/generos/?count=20",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setGeneros(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // fetch estratosSocieconomicos options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/estratos_socioeconomicos/?count=20",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setEstratosSocieconomicos(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])


  // fetch tiposPersona options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/tipos_persona/?count=20",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setTiposPersona(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // fetch tiposDocumento options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/tipos_documento/?count=20",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setTiposDocumento(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // fetch departamentos options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/paises/1/?count=20",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setDepartamentos(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])


  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  }, [myFiles])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  })

  const removeFile = file => () => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const files = myFiles.map(file => (
    <div className="wrapp-visualizacion-anexos" key={file.path}>
      {file.path} - {file.size} bytes{" "}
      <svg onClick={removeFile(file)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-close" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    </div>
  ))

  return (
    <div className="wrapp-main-detalle-solicitud">

      <div className="wrapp-introduccion">
        <label className="introduccion-texto-solicitud">
          Aquí podrás consultar y hacer seguimiento de tu caso.
        </label>
      </div>

      <div className="secciones-temas">
        {/* Parte 1 - DATOS SOLICITANTE ---------------------------------> */}

        <SubtemaRectangulo
          text="Datos Solicitante"
          icon="datos-solicitante"
          seccion={seccion1}
          setSeccion={setSeccion1}
        />

        <Collapse in={seccion1}>
          <div className="form-datos">
            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="genero"
                required
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {tiposDocumento.map(tipoDocumento => {
                  return (<option key={"tipoDocumento" + tipoDocumento["id"]} value={tipoDocumento["id"]}>{tipoDocumento["nombre"]}</option>)
                })}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Número de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="number"
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

            <label className="subtitles-secciones">Lugar y fecha de nacimiento</label>

            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingInputGrid" label="País">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Ciudad">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>
            <FloatingLabel controlId="floatingInputGrid" label="Fecha">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="date"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Edad">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Tipo de Persona</label>
            <div className="d-flex gap-5">
              {tiposPersona.map(tipoPersona => {
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
              })}
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
                  {sexos.map(sexo => {
                    return (<option key={"sexos" + sexo["id"]} value={sexo["id"]}>{sexo["nombre"]}</option>)
                  })}
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
                  {generos.map(genero => {
                    return (<option key={"generos" + genero["id"]} value={genero["id"]}>{genero["nombre"]}</option>)
                  })}
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
                  {estratosSocieconomicos.map(estrato => {
                    return (<option key={"estratos" + estrato["id"]} value={estrato["id"]}>{estrato["nombre"]}</option>)
                  })}
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
              <FloatingLabel controlId="floatingInputGrid" label="Escolaridad">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
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
              <FloatingLabel controlId="floatingInputGrid" label="Estado civil">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <label className="subtitles-secciones">Presenta algún tipo de discapacidad</label>
            <FloatingLabel controlId="floatingInputGrid" label="Cuál?">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Hace parte de algún grupo minoritarío</label>
            <FloatingLabel controlId="floatingInputGrid" label="Cuál?">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">El conflicto se genera por su incapacidad</label>
            <div className="d-flex gap-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Si
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  No
                </label>
              </div>
            </div>


          </div>
        </Collapse>

        {/* Parte 2 - DATOS DEL CONVOCADO --------------------------------->*/}

        <SubtemaRectangulo
          text="Datos del convocado"
          icon="datos-convocados"
          seccion={seccion2}
          setSeccion={setSeccion2}
        />

        <Collapse in={seccion2}>
          <div className="form-datos">
            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="genero"
                required
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {tiposDocumento.map(tipoDocumento => {
                  return (<option key={"tipoDocumento" + tipoDocumento["id"]} value={tipoDocumento["id"]}>{tipoDocumento["nombre"]}</option>)
                })}
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
              {tiposPersona.map(tipoPersona => {
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
              })}
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
                  {sexos.map(sexo => {
                    return (<option key={"sexos" + sexo["id"]} value={sexo["id"]}>{sexo["nombre"]}</option>)
                  })}
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
                  {generos.map(genero => {
                    return (<option key={"generos" + genero["id"]} value={genero["id"]}>{genero["nombre"]}</option>)
                  })}
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
                  {estratosSocieconomicos.map(estrato => {
                    return (<option key={"estratos" + estrato["id"]} value={estrato["id"]}>{estrato["nombre"]}</option>)
                  })}
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
        </Collapse>

        {/* Parte 3 - DATOS DE LOS HECHOS ---------------------------------> */}

        <SubtemaRectangulo
          text="Hechos"
          icon="hechos"
          seccion={seccion3}
          setSeccion={setSeccion3}
        />

        <Collapse in={seccion3}>
          <div className="form-datos">
            <label className="subtitles-secciones">Lugar de los hechos</label>
            <div className='col-detalle-solicitud'>

              <FloatingLabel controlId="floatingSelectGrid" label="Departamento">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="departamento"
                  required
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {departamentos.map(departamento => {
                    return (<option key={"departamento" + departamento["id"]} value={departamento["id"]}>{departamento["nombre"]}</option>)
                  })}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelectGrid" label="Ciudad ">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Describa los hechos ocurridos"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                as="textarea"
                placeholder=""
                style={{ height: "130px" }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Pretenciones"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                as="textarea"
                placeholder=""
                style={{ height: "130px" }}
              />
            </FloatingLabel>

          </div>
        </Collapse>

        {/* Parte 4 - CARGAR DOCUMENTOS ---------------------------------> */}


        <SubtemaRectangulo
          text="Documentos"
          icon="documentos"
          seccion={seccion4}
          setSeccion={setSeccion4}
        />

        <Collapse in={seccion4}>

          <div className="form-datos">
            <label className="subtitles-secciones">Identificación</label>
            <Form.Control className="inputs-registrar-solicitud" type="file" />
            <label className="subtitles-secciones">Recibo Público</label>
            <Form.Control className="inputs-registrar-solicitud" type="file" />
            <label className="subtitles-secciones">Anexos</label>

            <section className="form-datos">
              <div className="dropzone" {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-drag-drop" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
                <h4>Selecciona los archivos que desseas anexar</h4>
              </div>
              <aside className="lista-anexos">
                {files}
              </aside>
              {files.length > 0}
            </section>

          </div>
        </Collapse>
        <button className="">Guardar cambios</button>
      </div>

      <hr></hr>

      <div className='contenedor-botones-detalle-solicitud'>
        <div className="mb-4">
          <button className='boton-remitir' onClick={() => setOpen2(false) & setOpen(!open) & setOpen3(false) & setOpen4(false)} aria-controls="ejemplo">REMITIR</button>
          <button className='boton-rechazar' onClick={() => setOpen2(!open2) & setOpen(false) & setOpen3(false) & setOpen4(false)} aria-controls="ejemplo">RECHAZAR</button>
          <button className='boton-incompleto' onClick={() => setOpen2(false) & setOpen(false) & setOpen3(!open3) & setOpen4(false)} aria-controls="ejemplo">INFORMACIÓN INCOMPLETA</button>
          <button className='boton-aceptar' onClick={() => setOpen2(false) & setOpen(false) & setOpen3(false) & setOpen4(!open4)} aria-controls="ejemplo">ACEPTAR SOLICITUD</button>
        </div>
        <Collapse className='colapse-general' in={open}>
          <div id="ejemplo">
            <div className='contenedor-remitir' >
              <label className='titulo-remitir'>Centro de conciliación</label>
              <Form.Select className='seleccionable-centro-conciliacion' aria-label="Default select example">
                <option></option>
                <option value="1">JIT</option>
                <option value="2">CCA</option>
              </Form.Select>
              <label className='label-explicacion-remitir'>Escriba una nota explicando al usuario la razón de la remisión y los pasos a seguir para continuar con el proceso</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-remitir1-solicitud'>Remitir Solicitud</button>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse className='colapse-general' in={open2}>
          <div id="ejemplo">
            <div className='contenedor-rechazar' >
              <label className='label-explicacion-rechazar'>Escriba una nota explicando al usuario el por qué se rechaza o no se puede atender su solicitud</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-rechazar-solicitud'>Rechazar</button>
              </div>
            </div>
          </div>
        </Collapse>

        <Collapse className='colapse-general' in={open3}>
          <div id="ejemplo">
            <div className='contenedor-incompleto' >
              <label className='label-explicacion-rechazar'>Escriba una nota explicando al usuario que información hace falta o una razón del por qué se retorna su solicitud</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-devolver-solicitud'>Rechazar</button>
              </div>
            </div>
          </div>
        </Collapse>

        <Collapse className='colapse-general' in={open4}>
          <div id="ejemplo">
            <div className='contenedor-aceptar' >
              <div className='contenedor-campos-aceptar-caso'>
                <div className='izquierda-aceptar-caso'>
                  <label className='titulo-remitir'>Centro de conciliación</label>
                  <input className='input-aceptar-valor'></input>
                </div>
                <div className='derecha-aceptar-caso'>
                  <label className='titulo-remitir'>Centro de conciliación</label>
                  <Form.Select className='seleccionable-centro-conciliacion-aceptar' aria-label="Default select example">
                    <option></option>
                    <option value="1">JIT</option>
                    <option value="2">CCA</option>
                  </Form.Select>
                </div>
              </div>
              <label className='label-explicacion-remitir'>Escriba una nota explicando al usuario la razón de aprobación y los pasos a seguir para continuar con el proceso</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-remitir-solicitud'>Aceptar solicitud</button>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default SolicitudesDetalle