import React, { useState, useCallback, useEffect } from "react";
import {
  BarRectangulo,
  SearchableSelect,
  SubtemaRectangulo,
} from "../../components";
import { useDropzone } from "react-dropzone";

// Importing css
import "./RegistrarSolicitud.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import { axiosBasicInstanceApiSolicitudes } from "../../helpers/axiosInstances";
import { Button } from "../../components/Button";

function RegistrarSolicitud() {
  const [seccion1, setSeccion1] = useState(true);
  const [seccion2, setSeccion2] = useState(false);
  const [seccion3, setSeccion3] = useState(false);
  const [seccion4, setSeccion4] = useState(false);

  const [sexos, setSexos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [estratosSocieconomicos, setEstratosSocieconomicos] = useState([]);
  const [tiposPersona, setTiposPersona] = useState([]);
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [departamento, setDepartamento] = useState("")
  const [ciudad, setCiudad] = useState("")

  const [conv2, setConv2] = useState(false);

  const [myFiles, setMyFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const files = myFiles.map((file) => (
    <div className="wrapp-visualizacion-anexos" key={file.path}>
      {file.path} - {file.size} bytes{" "}
      <svg
        onClick={removeFile(file)}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="icon-close"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    </div>
  ));

  const submitForm = (event) => {
    event.preventDefault();
    console.log("sexo " + event.target.sexo.value);
    console.log("genero " + event.target.genero.value);
    const data = {
      convocante: [
        {
          // nombres: event.target.nombres.value,
          // apellidos: event.target.apellidos.value,
          // identificacion: event.target.identificacion.value,
          // telefono: event.target.telefono.value,
          // celular: event.target.celular.value,
          // direccion: event.target.direccion.value,
          // correo: event.target.correo.value,
          // tipo_persona_id: parseInt(event.target.tipoPersona.value),
          // sexo_id: event.target.sexo.value,
          // genero_Id: event.target.genero.value,
          // estrato_socioeconomico_id: event.target.estratoSocioeconomico.value,
          // tipo_documento_id: event.target.tipoDocumento.value,
          // fecha_expedicion: event.target.fechaExpedicion.value,
          // lugar_expedicion: event.target.lugarExpedicion.value,
          // fecha_nacimiento: event.target.fechaNacimiento.value,
          // lugar_nacimiento: event.target.lugarNacimiento.value,
          // apoderado_id: null,

          nombres: "jairo",
          apellidos: "urrego",
          identificacion: "120423098",
          telefono: null,
          direccion: null,
          celular: "32122183723",
          correo: "jairo@ugc.edu.co",
          tipo_persona_id: null,
          sexo_id: 1,
          genero_id: 1,
          estrato_socioeconomico_id: 1,
          tipo_documento_id: 1,
          apoderado_id: null,
        },
      ],
      apoderado: [
        {
          identificacion: event.target.identificacionApoderado.value,
          nombres: event.target.nombresApoderado.value,
          apellidos: event.target.apellidosApoderado.value,
          lugar_expedicion: event.target.lugarExpedicionApoderado.value,
          telefono: event.target.telefonoApoderado.value,
          celular: event.target.celularApoderado.value,
          correo: event.target.correoApoderado.value,
          tarjeta_profesional: event.target.celularApoderado.value,
          tipo_documento_id: event.target.tipoDocumentoApoderado.value,

          identificacion: "12345",
          nombres: "roberto",
          apellidos: "pruebas",
          lugar_expedicion: "bogota",
          telefono: null,
          celular: "23112879",
          correo: "ka@igc.edu.co",
          tarjeta_profesional: "432432h",
          estado: true,
          tipo_documento_id: 1,
        },
      ],
      convocado: [
        {
          nombres: "camilo",
          apellidos: "rios",
          identificacion: "2022101",
          fecha_expedicion: "2022-11-17",
          lugar_expedicion: "bogota",
          fecha_nacimiento: "1999-12-08",
          telefono: null,
          direccion: null,
          celular: "32122183723",
          correo: "jairo@ugc.edu.co",
          ciudad_nacimiento_id: 3,
          tipo_persona_id: null,
          tipo_documento_id: 1,
        },
      ],
      hechos: [
        {
          descripcion: "esto ocurrio",
          ciudad_id: null,
        },
      ],
    };
    let dataSolicitud = new FormData();
    dataSolicitud.append("datos", JSON.stringify(data));
    console.log(JSON.stringify(data));

    dataSolicitud.append("files", event.target.fileIdentificacion.files[0]);
    dataSolicitud.append("files", event.target.fileRecibo.files[0]);

    for (let i=0; i < myFiles.length; i++) {
      dataSolicitud.append("files", myFiles[i]);
    }

    axiosBasicInstanceApiSolicitudes({
      method: "post",
      url: "/solicitud/",
      // headers: req.headers,
      data: dataSolicitud,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((result) => {
        console.log(result);
        event.target.reset()
      })
      .catch((err) => {
        console.log("error");
      });
  };

  // fetch sexos options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: "get",
      url: "/sexos/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        // console.log(result.data);
        setSexos(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // fetch generos options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: "get",
      url: "/generos/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        // console.log(result.data);
        setGeneros(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // fetch estratosSocieconomicos options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: "get",
      url: "/estratos_socioeconomicos/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        // console.log(result.data);
        setEstratosSocieconomicos(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // fetch tiposPersona options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: "get",
      url: "/tipos_persona/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        // console.log(result.data);
        setTiposPersona(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // fetch tiposDocumento options
  useEffect(() => {
    axiosBasicInstanceApiSolicitudes({
      method: "get",
      url: "/tipos_documento/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        console.log(result.data);
        setTiposDocumento(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);



  return (
    <div className="wrapp-main-registrar-solicitud">
      <div className="heading-registrar-solicitud">
        <BarRectangulo text="Registrar Solicitud" />
      </div>

      <div className="wrapp-introduccion">
        <label className="introduccion-texto-solicitud">
          Aquí podrás consultar y hacer seguimiento de tu caso.
        </label>
      </div>

      <Form className="secciones-temas" onSubmit={(e) => submitForm(e)}>

        {/* Parte 1 - DATOS SOLICITANTE ---------------------------------> */}

        <SubtemaRectangulo
          text="Datos Solicitante"
          icon="datos-solicitante"
          seccion={seccion1}
          setSeccion={setSeccion1}
        />

        <Collapse in={seccion1}>
          <div className="form-datos">
            <label className="subtitles-secciones">Nombre</label>
            <FloatingLabel controlId="floatingInputGrid" label="Nombres">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                name="nombres"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Apellidos">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                name="apellidos"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Fecha y lugar de nacimiento
            </label>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Fecha de nacimiento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="date"
                placeholder="name@example.com"
                name="fechaNacimiento"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Lugar de nacimiento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                name="lugarNacimiento"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Tipo de documento"
            >
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="tipoDocumento"
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {tiposDocumento.map((tipoDocumento) => {
                  return (
                    <option
                      key={"tipoDocumento" + tipoDocumento["id"]}
                      value={tipoDocumento["id"]}
                    >
                      {tipoDocumento["nombre"]}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Número de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                name="identificacion"
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
                name="fechaExpedicion"
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
                name="lugarExpedicion"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Tipo de Persona</label>
            <div className="d-flex gap-5">
              {tiposPersona.map((tipoPersona) => {
                return (
                  <div
                    key={"tipoPersona" + tipoPersona["id"]}
                    className="form-check"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tipoPersona"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {tipoPersona["nombre"]}
                    </label>
                  </div>
                );
              })}
            </div>

            <label className="subtitles-secciones">Sexo y Género</label>
            <FloatingLabel controlId="floatingSelectGrid" label="Sexo">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="sexo"
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {sexos.map((sexo) => {
                  return (
                    <option key={"sexos" + sexo["id"]} value={sexo["id"]}>
                      {sexo["nombre"]}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelectGrid" label="Género">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="genero"
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {generos.map((genero) => {
                  return (
                    <option key={"generos" + genero["id"]} value={genero["id"]}>
                      {genero["nombre"]}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>

            <label className="subtitles-secciones">Datos adicionales</label>

            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="floatingSelectGrid" label="Estrato">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="estratoSocioeconomico"
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {estratosSocieconomicos.map((estrato) => {
                    return (
                      <option
                        key={"estratos" + estrato["id"]}
                        value={estrato["id"]}
                      >
                        {estrato["nombre"]}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  name="telefono"
                />
              </FloatingLabel>
            </div>

            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="floatingInputGrid" label="Celular">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  name="celular"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Correo">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  name="correo"
                />
              </FloatingLabel>
            </div>

            <FloatingLabel controlId="floatingInputGrid" label="Dirección">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                name="direccion"
              />
            </FloatingLabel>

            {/* Parte 1 - DATOS APODERADO ---------------------------------> */}

            <label className="subtitles-secciones">Posee apoderado</label>
            <div className="col-detalle-solicitud">
              <button
                onClick={() => setConv2(true)}
                type="button"
                className={
                  conv2
                    ? "boton-datos-apoderado-active"
                    : "boton-datos-apoderado"
                }
              >
                Si
              </button>
              <button
                onClick={() => setConv2(false)}
                type="button"
                className={
                  conv2
                    ? "boton-datos-apoderado"
                    : "boton-datos-apoderado-active"
                }
              >
                No
              </button>
            </div>

            {conv2 && (
              <>
                <label className="subtitles-secciones">Nombre</label>
                <div className="col-detalle-solicitud">
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Nombres "
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      required
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Apellidos"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">Identificación</label>
                <div className="col-detalle-solicitud">
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
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Número de documento"
                  >
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
                <div className="col-detalle-solicitud">
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
                <div className="col-detalle-solicitud">
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Tarjeta profesional "
                  >
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

                <div className="col-detalle-solicitud">
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Teléfono"
                  >
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
            )}
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
            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Tipo de documento"
            >
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="tipo_documento"
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {tiposDocumento.map((tipoDocumento) => {
                  return (
                    <option
                      key={"tipoDocumento" + tipoDocumento["id"]}
                      value={tipoDocumento["id"]}
                    >
                      {tipoDocumento["nombre"]}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Número de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Fecha y lugar de expedición de documento
            </label>
            <div className="col-detalle-solicitud">
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

            <label className="subtitles-secciones">Tipo de Persona</label>
            <div className="d-flex gap-5">
              {tiposPersona.map((tipoPersona) => {
                return (
                  <div
                    key={"tipoPersona" + tipoPersona["id"]}
                    className="form-check"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {tipoPersona["nombre"]}
                    </label>
                  </div>
                );
              })}
            </div>

            <label className="subtitles-secciones">Datos Adicionales</label>
            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Correo">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <FloatingLabel controlId="floatingInputGrid" label="Dirección">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
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
            <div className="col-detalle-solicitud">
            <div>
                    <label htmlFor="Departamento" className="form-label">Departamento:</label>
                    <SearchableSelect
                        axiosInstance={axiosBasicInstanceApiSolicitudes}
                        url={"/paises/1"}
                        name={"departamento"}
                        identifier={"id"}
                        initialValue={""}
                        onChange={(val) => { setDepartamento(val); setCiudad("") }}
                    />
                </div>
                <div>
                    <label htmlFor="ciudad" className="form-label">Ciudad:</label>
                    <SearchableSelect
                        axiosInstance={axiosBasicInstanceApiSolicitudes}
                        url={"/paises/1/departamentos/" + departamento}
                        name={"ciudad"}
                        identifier={"id"}
                        initialValue={""}
                        onChange={(val) => { setCiudad(val) }}
                    />
                </div>
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
            <Form.Control className="inputs-registrar-solicitud" type="file" name="fileIdentificacion" required/>
            <label className="subtitles-secciones">Recibo Público</label>
            <Form.Control className="inputs-registrar-solicitud" type="file" name="fileRecibo" required/>
            <label className="subtitles-secciones">Anexos</label>

            <section className="form-datos">
              <div
                className="dropzone"
                {...getRootProps({ className: "dropzone" })}
              >
                <input {...getInputProps()} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="icon-drag-drop"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
                <h4>Selecciona los archivos que desseas anexar</h4>
              </div>
              <aside className="lista-anexos">{files}</aside>
              {files.length > 0}
            </section>
          </div>
        </Collapse>
        <Button
          className={""}
          type={"submit"}
          linkto={""}
          text={"Enviar Solicitud"}
          icon={""}
          onClick={() => {}}
        />
      </Form>
    </div>
  );
}

export default RegistrarSolicitud;
