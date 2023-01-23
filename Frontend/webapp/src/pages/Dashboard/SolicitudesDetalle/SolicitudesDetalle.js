import React, { useState, useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import { BarRectangulo, SubtemaRectangulo } from "../../../components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./SolicitudesDetalle.css";
import { useDropzone } from "react-dropzone";
import { useNavigate, useParams } from "react-router-dom";
import {
  axiosBasicInstanceApiSolicitudes,
  axiosTokenInstanceApiSolicitudes,
} from "../../../helpers/axiosInstances";
import { axiosTokenInstanceApiExpedientes } from "../../../helpers/axiosInstances";
import { SearchableSelect } from "../../../components";
import FileDownload from "js-file-download";
import { toast } from "react-toastify";

function SolicitudesDetalle() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [seccion1, setSeccion1] = useState(false);
  const [seccion2, setSeccion2] = useState(false);
  const [seccion3, setSeccion3] = useState(false);
  const [seccion4, setSeccion4] = useState(false);

  const [departamento, setDepartamento] = useState("");
  const [departamentoInitial, setDepartamentoInitial] = useState(null);
  const [ciudad, setCiudad] = useState("");
  const [conciliador, setConciliador] = useState(null);
  const [nameconciliador, setNameconciliador] = useState("");
  const [ciudadInitial, setCiudadInitial] = useState(null);

  const [apoderado_convocante, setApoderado_convocante] = useState(false);

  const fechaNacimiento = document.getElementById("fechaNacimiento");
  const edad = document.getElementById("edad_convocante");

  // forms options
  const [sexos, setSexos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [estratosSocieconomicos, setEstratosSocieconomicos] = useState([]);
  const [tiposPersona, setTiposPersona] = useState([]);
  const [tiposDocumento, setTiposDocumento] = useState([]);

  // data from api
  const [data, setData] = useState({});

  const [myFiles, setMyFiles] = useState([]);

  // Getting solicitud id from urlParams
  let { id } = useParams();

  useEffect(() => {
    axiosTokenInstanceApiSolicitudes({
      method: "get",
      url: "/solicitudes/" + id,
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        // console.log(result.data);
        setData(result.data);

        //Convocante

        document.getElementById("identificacion").value =
          result.data.convocante["identificacion"];
        document.getElementById("tipoDocumento").value =
          result.data.convocante["tipo_documento_id"];
        document.getElementById("fechaExpedicion").value =
          result.data.convocante["fecha_expedicion"];
        document.getElementById("lugarExpedicion").value =
          result.data.convocante["lugar_expedicion"];
        document.getElementById("nombres").value =
          result.data.convocante["nombres"];
        document.getElementById("apellidos").value =
          result.data.convocante["apellidos"];
        document.getElementById("fechaNacimiento").value =
          result.data.convocante["fecha_nacimiento"];
        document.getElementById("lugarNacimiento").value =
          result.data.convocante["lugar_nacimiento"];
        document.getElementById("correo").value =
          result.data.convocante["correo"];
        document.getElementById("sexo").value =
          result.data.convocante["sexo_id"];
        document.getElementById("genero").value =
          result.data.convocante["genero_id"];
        document.getElementById("estratoSocioeconomico").value =
          result.data.convocante["estrato_socioeconomico_id"];
        document.getElementById("direccion").value =
          result.data.convocante["direccion"];
        document.getElementById("telefono").value =
          result.data.convocante["telefono"];
        document.getElementById("celular").value =
          result.data.convocante["celular"];

        //Convocado

        document.getElementById("identificacion_Convocado").value =
          result.data.convocado["identificacion"];
        document.getElementById("tipoDocumento_Convocado").value =
          result.data.convocado["tipo_documento_id"];
        document.getElementById("fechaExpedicion_Convocado").value =
          result.data.convocado["fecha_expedicion"];
        document.getElementById("lugarExpedicion_Convocado").value =
          result.data.convocado["lugar_expedicion"];
        document.getElementById("nombres_Convocado").value =
          result.data.convocado["nombres"];
        document.getElementById("apellidos_Convocado").value =
          result.data.convocado["apellidos"];
        document.getElementById("celular_Convocado").value =
          result.data.convocado["celular"];
        document.getElementById("correo_Convocado").value =
          result.data.convocado["correo"];

        // Hechos
        document.getElementById("descripcion_hechos").value =
          result.data.hechos[0].descripcion;

        // Documentos

        //document.getElementById("descripcion_hechos").value = result.data.documentos.result[0].descripcion

        // Apoderado Convocante
        if (
          result.data.convocante["apoderado_id"] != null &&
          result.data?.convocante["apoderado_id"] != ""
        ) {
          setApoderado_convocante(true);
        }

        if (result.data.convocante["tipo_persona_id"] == 1) {
          document.getElementById("tipoPersona1").checked =
            result.data.convocante["tipo_persona_id"];
        } else if (result.data.convocante["tipo_persona_id"] == 2) {
          document.getElementById("tipoPersona2").checked =
            result.data.convocante["tipo_persona_id"];
        }

        if (result.data.convocado["tipo_persona_id"] == 1) {
          document.getElementById("tipoPersonaConvocado1").checked =
            result.data.convocado["tipo_persona_id"];
        } else if (result.data.convocado["tipo_persona_id"] == 2) {
          document.getElementById("tipoPersonaConvocado2").checked =
            result.data.convocado["tipo_persona_id"];
        }
        if (result.data.hechos[0]["ciudad_id"]) {
          setDepartamentoInitial({
            id: result.data.hechos[0]["ciudad_id"],
            nombre: result.data.hechos[0]["departamento"],
          });
          setCiudadInitial({
            id: result.data.hechos[0]["ciudad_id"],
            nombre: result.data.hechos[0]["ciudad"],
          });
        }
      })
      .catch((err) => {
        console.log("error");
        // console.log(err)
      });
  }, []);

  const downloadDocument = (event, idDocumento, nombre) => {
    event.preventDefault();
    console.log(idDocumento);
    console.log(nombre);

    axiosTokenInstanceApiSolicitudes({
      method: "get",
      url: `/documentos/${idDocumento}`,
      responseType: "blob",
      data: {},
    })
      .then((response) => {
        FileDownload(response.data, nombre);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // const calcularEdad

    if (data.apoderado && apoderado_convocante) {
      document.getElementById("identificacion_Apoderado").value =
        data?.apoderado?.identificacion;
      document.getElementById("tipoDocumento_Apoderado").value =
        data?.apoderado?.tipo_documento_id;
      document.getElementById("fechaExpedicion_Apoderado").value =
        data?.apoderado?.fecha_expedicion;
      document.getElementById("lugarExpedicion_Apoderado").value =
        data?.apoderado?.lugar_expedicion;
      document.getElementById("nombres_Apoderado").value =
        data?.apoderado?.nombres;
      document.getElementById("apellidos_Apoderado").value =
        data?.apoderado?.apellidos;
      document.getElementById("telefono_Apoderado").value =
        data?.apoderado?.telefono;
      document.getElementById("celular_Apoderado").value =
        data?.apoderado?.celular;
      document.getElementById("correo_Apoderado").value =
        data?.apoderado?.correo;
      document.getElementById("tarjetaProfesional_Apoderado").value =
        data?.apoderado?.tarjeta_profesional;
    }

    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const edad = document.getElementById("edad_convocante");
    edad.value = CalcularFecha(fechaNacimiento);
  }, [apoderado_convocante]);

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

  // Calcular fecha

  if (fechaNacimiento) {
    fechaNacimiento.addEventListener("change", (event) => {
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
      edad.value = CalcularFecha(fechaNacimiento);
    });
  }

  const CalcularFecha = (fechaNacimiento) => {
    const fechaActual = new Date();
    const currentYear = parseInt(fechaActual.getFullYear());
    const currentMonth = parseInt(fechaActual.getMonth()) + 1;
    const currentDay = parseInt(fechaActual.getDate());

    const bornYear = parseInt(String(fechaNacimiento).substring(0, 4));
    const bornMonth = parseInt(String(fechaNacimiento).substring(5, 7));
    const bornDay = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = currentYear - bornYear;
    if (currentMonth < bornMonth) {
      edad--;
    } else if (currentMonth == bornMonth) {
      if (currentDay < bornDay) edad--;
    }
    return edad;
  };

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

  const rechazarSolicitud = (e) => {
    e.preventDefault();
    const descripcionRechazada = document.getElementById(
      "descripcionRechazada"
    ).value;
    const body = {
      estado_solicitud: "rechazada",
      estado_solicitud_id: 3,
      comentario: descripcionRechazada,
      valor_caso: null,
      conciliador: null,
      conciliador_id: null,
    };
    console.log(body);
    axiosTokenInstanceApiSolicitudes({
      method: "post",
      url: "/solicitudes/"+id,
      data: body,
    })
      .then((response) => {
        console.log('====================================');
        console.log("entré");
        console.log('====================================');
        e.target.reset();
        toast.info("La solicitud ha sido rechazada", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const aceptarSolicitud = (e) => {
    e.preventDefault();
    const descripcionAceptada = document.getElementById("descripcionAprovado").value;
    const valorCaso = document.getElementById("valorCaso").value;
    const body = {
      estado_solicitud: "aprobada",
      estado_solicitud_id: 2,
      comentario: descripcionAceptada,
      valor_caso: valorCaso,
      conciliador: nameconciliador,
      conciliador_id: conciliador,
    };
    console.log(body);
    axiosTokenInstanceApiSolicitudes({
      method: "post",
      url: "/solicitudes/" + id,
      data: body,
    })
      .then((response) => {
        e.target.reset();
        toast.info("La solicitud ha sido aceptada", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate(
          "/dashboard/expedientes/detalle/" +
            response.data.id +
            "/datosgenerales"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    
    axiosTokenInstanceApiExpedientes({
      method: "get",
      url: "conciliadores?ordering=-" + id,
    })
      .then((response) => {
        const choseConciliador = response.data.results[0].nombres;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [conciliador]);

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
            <label className="subtitles-secciones">Nombre</label>
            <FloatingLabel controlId="nombres" label="Nombres">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>
            <FloatingLabel controlId="apellidos" label="Apellidos">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel controlId="tipoDocumento" label="Tipo de documento">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="tipoDocumento"
                disabled
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
              controlId="identificacion"
              label="Número de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                name="identificacion"
                disabled
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Fecha y lugar de expedición de documento
            </label>
            <FloatingLabel
              controlId="fechaExpedicion"
              label="Fecha de expedición de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="date"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="lugarExpedicion"
              label="Lugar de expedición"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Lugar y fecha de nacimiento
            </label>

            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="floatingInputGrid" label="País">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
              <FloatingLabel controlId="lugarNacimiento" label="Ciudad">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
            </div>

            <div className="col-detalle-solicitud">
              <FloatingLabel
                controlId="fechaNacimiento"
                label="Fecha de Nacimiento"
              >
                <Form.Control
                  className="col-inputs"
                  type="date"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
              <FloatingLabel controlId="edad_convocante" label="Edad">
                <Form.Control
                  className="col-inputs"
                  type="number"
                  placeholder="name@example.com"
                  min="1"
                  pattern="^[0-9]+"
                  disabled
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
                      id={"tipoPersona" + tipoPersona["id"]}
                      disabled
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
            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="sexo" label="Sexo">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="sexo"
                  disabled
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
              <FloatingLabel controlId="genero" label="Género">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="genero"
                  disabled
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {generos.map((genero) => {
                    return (
                      <option
                        key={"generos" + genero["id"]}
                        value={genero["id"]}
                      >
                        {genero["nombre"]}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </div>

            <label className="subtitles-secciones">
              Estrato y dirección de residencia
            </label>
            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="estratoSocioeconomico" label="Estrato">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="estrato"
                  disabled
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
              <FloatingLabel controlId="direccion" label="Dirección">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
            </div>

            <label className="subtitles-secciones">Datos Adicionales</label>
            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="celular" label="Celular">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
              <FloatingLabel controlId="telefono" label="Teléfono">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
            </div>

            <FloatingLabel controlId="correo" label="Correo">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Posee apoderado</label>
            <div className="col-detalle-solicitud">
              <button
                onClick={() => setApoderado_convocante(true)}
                type="button"
                className={
                  apoderado_convocante
                    ? "boton-datos-apoderado-active"
                    : "boton-datos-apoderado"
                }
              >
                Si
              </button>
              <button
                onClick={() => setApoderado_convocante(false)}
                type="button"
                className={
                  apoderado_convocante
                    ? "boton-datos-apoderado"
                    : "boton-datos-apoderado-active"
                }
              >
                No
              </button>
            </div>

            {/* Datos de Apoderado Convocante --------------------------------> */}

            {apoderado_convocante && (
              <>
                <label className="subtitles-secciones">Nombre</label>
                <div className="col-detalle-solicitud">
                  <FloatingLabel controlId="nombres_Apoderado" label="Nombres">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="apellidos_Apoderado"
                    label="Apellidos"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">Identificación</label>
                <div className="col-detalle-solicitud">
                  <FloatingLabel
                    controlId="tipoDocumento_Apoderado"
                    label="Tipo de documento"
                  >
                    <Form.Select
                      className="col-inputs"
                      aria-label="Floating label select example"
                      name="tipoDocumento"
                      disabled
                    >
                      <option value={""}>
                        Abre el menú para ver las opciones
                      </option>
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
                    controlId="identificacion_Apoderado"
                    label="Número de documento"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">
                  Fecha y lugar de expedición de documento
                </label>
                <div className="col-detalle-solicitud">
                  <FloatingLabel
                    controlId="fechaExpedicion_Apoderado"
                    label="Fecha de expedición de documento"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="date"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="lugarExpedicion_Apoderado"
                    label="Lugar de expedición"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">Datos adicionales</label>
                <div className="col-detalle-solicitud">
                  <FloatingLabel
                    controlId="tarjetaProfesional_Apoderado"
                    label="Tarjeta profesional "
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="correo_Apoderado" label="correo">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                </div>

                <div className="col-detalle-solicitud">
                  <FloatingLabel
                    controlId="telefono_Apoderado"
                    label="Teléfono"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="celular_Apoderado" label="Celular">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                      disabled
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
            <FloatingLabel controlId="nombres_Convocado" label="Nombres">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>
            <FloatingLabel controlId="apellidos_Convocado" label="Apellidos">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel
              controlId="tipoDocumento_Convocado"
              label="Tipo de documento"
            >
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="genero"
                disabled
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
              controlId="identificacion_Convocado"
              label="Número de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Fecha y lugar de expedición de documento
            </label>
            <FloatingLabel
              controlId="fechaExpedicion_Convocado"
              label="Fecha de expedición de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="date"
                placeholder="name@example.com"
                disabled
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="lugarExpedicion_Convocado"
              label="Lugar de expedición"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
                disabled
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
                      name="flexRadioDefault1"
                      id={"tipoPersonaConvocado" + tipoPersona["id"]}
                      disabled
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

            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="celular_Convocado" label="Celular">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="correo_Convocado"
                label="Correo electrónico"
              >
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                  disabled
                />
              </FloatingLabel>
            </div>
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
                <label htmlFor="Departamento" className="col-inputs">
                  Departamento:
                </label>
                <SearchableSelect
                  axiosInstance={axiosTokenInstanceApiExpedientes}
                  url={"/paises/1"}
                  name={"departamento"}
                  identifier={"id"}
                  initialValue={departamentoInitial}
                  onChange={(val) => {
                    setDepartamento(val);
                    setCiudad("");
                  }}
                />
              </div>
              <div>
                <label htmlFor="ciudad" className="col-inputs">
                  Ciudad:
                </label>
                <SearchableSelect
                  axiosInstance={axiosTokenInstanceApiExpedientes}
                  url={"/paises/1/departamentos/" + departamento}
                  name={"ciudad"}
                  identifier={"id"}
                  initialValue={ciudadInitial}
                  onChange={(val) => {
                    setCiudad(val);
                  }}
                />
              </div>
            </div>

            <FloatingLabel
              controlId="descripcion_hechos"
              label="Describa los hechos ocurridos"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                as="textarea"
                placeholder=""
                style={{ height: "130px" }}
                disabled
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
            {data?.documentos?.results.map((dato) => {
              return (
                <div className="wrapp-visualizacion-anexos">
                  {dato.nombre}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="doc-download"
                    viewBox="0 0 16 16"
                    onClick={(event) => {
                      downloadDocument(event, dato["id"], dato["nombre"]);
                    }}
                  >
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                  </svg>
                </div>
              );
            })}
          </div>
        </Collapse>
      </div>

      <div className="contenedor-botones-detalle-solicitud">
        <div className="mb-4">
          <button
            className="boton-remitir"
            onClick={() =>
              setOpen2(false) &
              setOpen(!open) &
              setOpen3(false) &
              setOpen4(false)
            }
            aria-controls="ejemplo"
            disabled
          >
            REMITIR
          </button>
          <button
            className="boton-rechazar"
            onClick={() =>
              setOpen2(!open2) &
              setOpen(false) &
              setOpen3(false) &
              setOpen4(false)
            }
            aria-controls="ejemplo"
          >
            RECHAZAR
          </button>
          <button
            className="boton-aceptar"
            onClick={() =>
              setOpen2(false) &
              setOpen(false) &
              setOpen3(false) &
              setOpen4(!open4)
            }
            aria-controls="ejemplo"
          >
            ACEPTAR SOLICITUD
          </button>
        </div>
        <Collapse className="colapse-general" in={open}>
          <div id="ejemplo">
            <div className="contenedor-remitir">
              <label className="titulo-remitir">Centro de conciliación</label>
              <Form.Select
                className="seleccionable-centro-conciliacion"
                aria-label="Default select example"
              >
                <option></option>
                <option value="1">JIT</option>
                <option value="2">CCA</option>
              </Form.Select>
              <label className="label-explicacion-remitir">
                Escriba una nota explicando al usuario la razón de la remisión y
                los pasos a seguir para continuar con el proceso
              </label>
              <textarea className="campo-explicacion"></textarea>
              <div className="contenedor-boton-remitir">
                <button className="boton-remitir1-solicitud">
                  Remitir Solicitud
                </button>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse className="colapse-general" in={open2}>
          <form
            id="ejemplo"
            onSubmit={(e) => {
              rechazarSolicitud(e);
            }}
          >
            <div className="contenedor-rechazar">
              <label className="label-explicacion-rechazar">
                Escriba una nota explicando al usuario el por qué se rechaza o
                no se puede atender su solicitud
              </label>
              <textarea
                className="campo-explicacion"
                id="descripcionRechazada"
              ></textarea>
              <div className="contenedor-boton-remitir">
                <button className="boton-rechazar-solicitud">Rechazar</button>
              </div>
            </div>
          </form>
        </Collapse>

        <Collapse className="colapse-general" in={open4}>
          <form
            id="ejemplo"
            onSubmit={(e) => {
              aceptarSolicitud(e);
            }}
          >
            <div className="contenedor-aceptar">
              <div className="contenedor-campos-aceptar-caso">
                <div className="izquierda-aceptar-caso">
                  <label className="titulo-remitir">
                    Valor estimado del caso
                  </label>
                  <input
                    className="input-aceptar-valor"
                    id="valorCaso"
                    min="1"
                    pattern="^[0-9]+"
                    type="number"
                  ></input>
                </div>
                <div className="derecha-aceptar-caso">
                  <label className="titulo-remitir">Conciliador</label>
                  <SearchableSelect
                    axiosInstance={axiosTokenInstanceApiExpedientes}
                    url={"/conciliadores/"}
                    name={"conciliador"}
                    identifier={"id"}
                    initialValue=""
                    onChange={(val) => {
                      setConciliador(val);
                    }}
                    label="nombres"
                  />
                </div>
              </div>
              <label className="label-explicacion-remitir">
                Escriba una nota explicando al usuario la razón de aprobación y
                los pasos a seguir para continuar con el proceso
              </label>
              <textarea
                className="campo-explicacion"
                id="descripcionAprovado"
              ></textarea>
              <div className="contenedor-boton-remitir">
                <button className="boton-remitir-solicitud">
                  Aceptar solicitud
                </button>
              </div>
            </div>
          </form>
        </Collapse>
      </div>
    </div>
  );
}

export default SolicitudesDetalle;
