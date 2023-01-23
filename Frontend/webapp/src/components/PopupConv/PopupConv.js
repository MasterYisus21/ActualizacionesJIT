import React from "react";
import { useState, useCallback, useEffect } from "react";
// Import css
import "./PopupConv.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  axiosBasicInstanceApiExpedientes,
  axiosTokenInstanceApiExpedientes,
} from "../../helpers/axiosInstances";
import { toast } from "react-toastify";
import { SearchableSelect } from "../../components";

export default function PopupConv({
  text,
  setEstado,
  estado,
  id,
  personas,
  setResultadosBusqueda,
  resultadosBusqueda,
  setPopupconv,
  popupconv,
  personaid,
  setPersonaid,
}) {
  const [sexos, setSexos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [civiles, setCiviles] = useState([]);
  const [etnicos, setEtnicos] = useState([]);
  const [discapacidad, setDiscapacidad] = useState([]);
  const [vivienda, setVivienda] = useState([]);
  const [escolaridad, setEscolaridad] = useState([]);
  const [estratosSocieconomicos, setEstratosSocieconomicos] = useState([]);
  const [tiposPersona, setTiposPersona] = useState([]);
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [conv2, setConv2] = useState(false);
  const [departamento, setDepartamento] = useState("");
  const [departamentoInitial, setDepartamentoInitial] = useState(null);
  const [ciudad, setCiudad] = useState("");
  const [ciudadInitial, setCiudadInitial] = useState(null);
  const [localidad, setLocalidad] = useState("");
  const [localidadInitial, setLocalidadInitial] = useState("");
  const [barrio, setBarrio] = useState("");
  const [barrioInitial, setBarrioInitial] = useState("");

  useEffect(() => {
    console.log(personaid);
    axiosTokenInstanceApiExpedientes({
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

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
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
    axiosTokenInstanceApiExpedientes({
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
    axiosTokenInstanceApiExpedientes({
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
    axiosBasicInstanceApiExpedientes({
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

  // fetch tiposPersona options
  useEffect(() => {
    axiosBasicInstanceApiExpedientes({
      method: "get",
      url: "/estados_civiles/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        setCiviles(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    axiosBasicInstanceApiExpedientes({
      method: "get",
      url: "/grupos_etnicos/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        setEtnicos(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    axiosBasicInstanceApiExpedientes({
      method: "get",
      url: "/tipos_discapacidad/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        setDiscapacidad(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    axiosBasicInstanceApiExpedientes({
      method: "get",
      url: "/tipos_vivienda/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        setVivienda(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    axiosBasicInstanceApiExpedientes({
      method: "get",
      url: "/escolaridades/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        setEscolaridad(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    if (personaid) {
      axiosTokenInstanceApiExpedientes({
        method: "get",
        url: `/personas/${personaid}`,
        // headers: req.headers,
        data: {},
      })
        .then((result) => {
          console.log(result.data);
          // toast.success("Los datos llegaron", {
          //   position: toast.POSITION.BOTTOM_RIGHT,
          // });
          document.getElementById("nombres").value = result.data["nombres"];
          document.getElementById("apellidos").value = result.data["apellidos"];
          document.getElementById("tipoDocumento").value =
            result.data["tipo_documento_id"];
          document.getElementById("identificacion").value =
            result.data["identificacion"];
          document.getElementById("fecha_nacimiento").value =
            result.data["fecha_nacimiento"];
          document.getElementById("lugar_nacimiento").value =
            result.data["lugar_nacimiento"];
          document.getElementById("fecha_expedicion").value =
            result.data["fecha_expedicion"];
          document.getElementById("lugar_expedicion").value =
            result.data["lugar_expedicion"];
          document.getElementById("tarjetaProfesional").value =
            result.data["tarjeta_profesional"];
          document.getElementById("correo").value = result.data["correo"];
          document.getElementById("tarjetaProfesional").value =
            result.data["tarjeta_profesional"];
          document.getElementById("telefono").value = result.data["telefono"];
          document.getElementById("sexo").value = result.data["sexo_id"];
          document.getElementById("genero").value = result.data["genero_id"];
          document.getElementById("celular").value = result.data["celular"];
          document.getElementById("escolaridad").value =
            result.data["escolaridad_id"];
          document.getElementById("estratosocioeconomico").value =
            result.data["estrato_socioeconomico_id"];
          document.getElementById("direccion").value = result.data["direccion"];
          document.getElementById("ocupacion").value = result.data["ocupacion"];
          document.getElementById("estado_civil").value =
            result.data["estado_civil_id"];
          document.getElementById("vivienda").value =
            result.data["tipo_vivienda_id"];
          document.getElementById("tipoDiscapacidad").value =
            result.data["tipo_discapacidad_id"];
          document.getElementById("grupo_etnico").value =
            result.data["grupo_etnico_id"];

          if (result.data["barrio_id"]) {
            setBarrioInitial({
              id: result.data["barrio_id"],
              nombre: result.data["barrio"],
            });
            setLocalidadInitial({
              id: result.data["localidad_id"],
              nombre: result.data["localidad"],
            });
            setCiudadInitial({
              id: result.data["ciudad_id"],
              nombre: result.data["ciudad"],
            });
            setDepartamentoInitial({
              id: result.data["departamento_id"],
              nombre: result.data["departamento"],
            });
          }

          if (result.data["tipo_persona_id"] == 1) {
            document.getElementById("tipoPersona1").checked =
              result.data["tipo_persona_id"];
          } else if (result.data["tipo_persona_id"] == 2) {
            document.getElementById("tipoPersona2").checked =
              result.data["tipo_persona_id"];
          }
        })
        .catch((err) => {
          console.log("error");
          console.log(err);
        });
    }
  }, []);

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      persona: {
        nombres: event.target.nombres.value,
        apellidos: event.target.apellidos.value,
        identificacion: event.target.identificacion.value,
        fecha_expedicion: event.target.fecha_expedicion.value,
        lugar_expedicion: event.target.lugar_expedicion.value,
        fecha_nacimiento: event.target.fecha_nacimiento.value,
        telefono: event.target.telefono.value,
        direccion: event.target.direccion.value,
        ocupacion: event.target.ocupacion.value,
        celular: event.target.celular.value,
        correo: event.target.correo.value,
        tarjeta_profesional: event.target.tarjetaProfesional.value,
        lugar_nacimiento: event.target.lugar_nacimiento.value,
        // barrio_id: null,
        estado_civil_id: event.target.estado_civil.value,
        estrato_socioeconomico_id: event.target.estratosocioeconomico.value,
        grupo_etnico_id: event.target.grupo_etnico.value,
        tipo_persona_id: event.target.tipoPersona.value,
        sexo_id: event.target.sexo.value,
        tipo_discapacidad_id: event.target.tipoDiscapacidad.value,
        genero_id: event.target.genero.value,
        tipo_vivienda_id: event.target.vivienda.value,
        tipo_documento_id: event.target.tipoDocumento.value,
        escolaridad_id: event.target.escolaridad.value,
        barrio_id: event.target.barrio.value,
      },
    };

    const dataModificar = {
      nombres: event.target.nombres.value,
      apellidos: event.target.apellidos.value,
      identificacion: event.target.identificacion.value,
      fecha_expedicion: event.target.fecha_expedicion.value,
      lugar_expedicion: event.target.lugar_expedicion.value,
      fecha_nacimiento: event.target.fecha_nacimiento.value,
      telefono: event.target.telefono.value,
      direccion: event.target.direccion.value,
      ocupacion: event.target.ocupacion.value,
      celular: event.target.celular.value,
      correo: event.target.correo.value,
      tarjeta_profesional: event.target.tarjetaProfesional.value,
      lugar_nacimiento: event.target.lugar_nacimiento.value,
      estado_civil_id: event.target.estado_civil.value,
      estrato_socioeconomico_id: event.target.estratosocioeconomico.value,
      grupo_etnico_id: event.target.grupo_etnico.value,
      tipo_persona_id: event.target.tipoPersona.value,
      sexo_id: event.target.sexo.value,
      tipo_discapacidad_id: event.target.tipoDiscapacidad.value,
      genero_id: event.target.genero.value,
      tipo_vivienda_id: event.target.vivienda.value,
      tipo_documento_id: event.target.tipoDocumento.value,
      escolaridad_id: event.target.escolaridad.value,
      barrio_id: event.target.barrio.value,
      departamento_id: event.target.departamento.value,
      ciuadad_id: event.target.ciudad.value,
      localidad_id: event.target.localidad.value,
    };

    data.apoderado = {};
    if (conv2) {
      data.apoderado = {
        nombres: event.target.nombresApoderado.value,
        apellidos: event.target.apellidosApoderado.value,
        tipo_documento_id: event.target.tipoDocumentoApoderado.value,
        identificacion: event.target.documentoApoderado.value,
        fecha_expedicion: event.target.fechaExpedicionApoderado.value,
        lugar_expedicion: event.target.lugarExpedicionApoderado.value,
        telefono: event.target.telefonoApoderado.value,
        celular: event.target.celularApoderado.value,
        correo: event.target.correoApoderado.value,
        tarjeta_profesional: event.target.tarjetaProfesionalApoderado.value,
      };
    }

    if (personaid) {
      axiosTokenInstanceApiExpedientes({
        method: "patch",
        url: `/personas/${personaid}`,
        // headers: req.headers,
        data: dataModificar,
      })
        .then((result) => {
          console.log(result);
          console.log("resultado:");
          console.log(result);
          toast.success("La persona ha sido modificada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });

          let tempArray = [...resultadosBusqueda];
          console.log(tempArray);

          const pos = tempArray
            .map((e) => {
              return e["persona_id"];
            })
            .indexOf(personaid);
          console.log(pos);
          tempArray[pos][
            "nombres"
          ] = `${result.data.nombres} ${result.data.apellidos}`;
          tempArray[pos]["persona_id"] = result.data.id;
          tempArray[pos]["identificacion"] = result.data.identificacion;
          tempArray[pos]["tipo_documento"] = result.data.tipo_documento;
          setResultadosBusqueda(tempArray);
          setEstado(!estado);
          setPersonaid(null);
        })
        .catch((err) => {
          console.log("error");
        });
    } else {
      console.log(data.persona);
      axiosBasicInstanceApiExpedientes({
        method: "post",
        url: `/expedientes/${id}/${personas}/`,
        // headers: req.headers,
        data: data,
      })
        .then((result) => {
          console.log(result.data);
          // event.target.reset();
          toast.success("La persona ha sido creada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });

          setResultadosBusqueda([...resultadosBusqueda, result.data]);
          setPopupconv(!popupconv);
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="wrapp-popup">
      <div className="popup">
        <div className="titulo-popup">
          <h1>{personaid ? "Modificar" : "Crear"} Persona</h1>
        </div>
        <form className="form-popup" onSubmit={(e) => submitForm(e)}>
          <div className="wrapp-boton-cerrar">
            <svg
              className="boton-cerrar-popup"
              onClick={() => {
                setEstado(!estado);
                setPersonaid(null);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </div>

          <div className="body-popup">
            <div className="form-datos pr-2">
              <label className="subtitles-secciones">Nombre</label>
              <FloatingLabel controlId="nombres" label="Nombres">
                <Form.Control
                  className="inputs-registrar-solicitud"
                  type="text"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="apellidos" label="Apellidos">
                <Form.Control
                  className="inputs-registrar-solicitud"
                  type="text"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>

              <label className="subtitles-secciones">
                Fecha y lugar de nacimiento
              </label>
              <FloatingLabel
                controlId="fecha_nacimiento"
                label="Fecha de nacimiento"
              >
                <Form.Control
                  className="inputs-registrar-solicitud"
                  type="date"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="lugar_nacimiento"
                label="Lugar de nacimiento"
              >
                <Form.Control
                  className="inputs-registrar-solicitud"
                  type="text"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>

              <label className="subtitles-secciones">Identificación</label>
              <FloatingLabel
                controlId="tipoDocumento"
                label="Tipo de documento"
              >
                <Form.Select
                  className="inputs-registrar-solicitud"
                  aria-label="Floating label select example"
                  name="tipo_documento"
                  required
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
                  required
                />
              </FloatingLabel>

              <label className="subtitles-secciones">
                Fecha y lugar de expedición de documento
              </label>
              <FloatingLabel
                controlId="fecha_expedicion"
                label="Fecha de expedición de documento"
              >
                <Form.Control
                  className="inputs-registrar-solicitud"
                  type="date"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="lugar_expedicion"
                label="Lugar de expedición"
              >
                <Form.Control
                  className="inputs-registrar-solicitud"
                  type="text"
                  placeholder="name@example.com"
                  required
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
                        id={"tipoPersona" + tipoPersona["id"]}
                        value={tipoPersona["id"]}
                        required
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
                  >
                    <option value={""}>
                      Abre el menú para ver las opciones
                    </option>
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
                  >
                    <option value={""}>
                      Abre el menú para ver las opciones
                    </option>
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
                <FloatingLabel
                  controlId="estratosocioeconomico"
                  label="Estrato"
                >
                  <Form.Select
                    className="col-inputs"
                    aria-label="Floating label select example"
                    name="estrato"
                  >
                    <option value={""}>
                      Abre el menú para ver las opciones
                    </option>
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
                  />
                </FloatingLabel>
              </div>

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

              <div className="col-detalle-solicitud">
                <div>
                  <label htmlFor="Localidad" className="col-inputs">
                    Localidad:
                  </label>
                  <SearchableSelect
                    axiosInstance={axiosTokenInstanceApiExpedientes}
                    url={
                      "/paises/1/departamentos/" +
                      departamento +
                      "/ciudades/" +
                      ciudad
                    }
                    name={"localidad"}
                    identifier={"id"}
                    initialValue={localidadInitial}
                    onChange={(val) => {
                      setLocalidad(val);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="barrio" className="col-inputs">
                    Barrio
                  </label>
                  <SearchableSelect
                    axiosInstance={axiosTokenInstanceApiExpedientes}
                    url={
                      "/paises/1/departamentos/" +
                      departamento +
                      "/ciudades/" +
                      ciudad +
                      "/localidades/" +
                      localidad
                    }
                    name={"barrio"}
                    identifier={"id"}
                    initialValue={barrioInitial}
                    onChange={(val) => {
                      setBarrio(val);
                    }}
                  />
                </div>
              </div>

              <label className="subtitles-secciones">Datos Adicionales</label>
              <div className="col-detalle-solicitud">
                <FloatingLabel controlId="escolaridad" label="Escolaridad">
                  <Form.Select
                    className="col-inputs"
                    aria-label="Floating label select example"
                    name="estrato"
                  >
                    <option value={""}>
                      Abre el menú para ver las opciones
                    </option>
                    {escolaridad.map((escolaridad) => {
                      return (
                        <option
                          key={"estratos" + escolaridad["id"]}
                          value={escolaridad["id"]}
                        >
                          {escolaridad["nombre"]}
                        </option>
                      );
                    })}
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="celular" label="Celular">
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>

              <div className="col-detalle-solicitud">
                <FloatingLabel controlId="ocupacion" label="Ocupación">
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="correo" label="Correo">
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                    required
                  />
                </FloatingLabel>
              </div>

              <div className="col-detalle-solicitud">
                <FloatingLabel controlId="estado_civil" label="Estado civil">
                  <Form.Select
                    className="col-inputs"
                    aria-label="Floating label select example"
                    name="tipo_documento"
                  >
                    <option value={""}>
                      Abre el menú para ver las opciones
                    </option>
                    {civiles.map((civiles) => {
                      return (
                        <option
                          key={"tipoDocumento" + civiles["id"]}
                          value={civiles["id"]}
                        >
                          {civiles["nombre"]}
                        </option>
                      );
                    })}
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="telefono" label="Teléfono">
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>

              <div className="col-detalle-solicitud">
                <FloatingLabel controlId="vivienda" label="Tipo de vivienda">
                  <Form.Select
                    className="col-inputs"
                    aria-label="Floating label select example"
                    name="vivienda"
                  >
                    <option value={""}>
                      Abre el menú para ver las opciones
                    </option>
                    {vivienda.map((vivienda) => {
                      return (
                        <option
                          key={"tipoDocumento" + vivienda["id"]}
                          value={vivienda["id"]}
                        >
                          {vivienda["nombre"]}
                        </option>
                      );
                    })}
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="tarjetaProfesional"
                  label="Tarjeta Profesional"
                >
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>

              <label className="subtitles-secciones">
                Presenta algún tipo de discapacidad
              </label>
              <FloatingLabel controlId="tipoDiscapacidad" label="Cuál?">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="estrato"
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {discapacidad.map((discapacidad) => {
                    return (
                      <option
                        key={"estratos" + discapacidad["id"]}
                        value={discapacidad["id"]}
                      >
                        {discapacidad["nombre"]}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>

              <label className="subtitles-secciones">
                Hace parte de algún grupo minoritarío
              </label>
              <FloatingLabel controlId="grupo_etnico" label="Cuál?">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="estrato"
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {etnicos.map((etnico) => {
                    return (
                      <option
                        key={"etnico" + etnico["id"]}
                        value={etnico["id"]}
                      >
                        {etnico["nombre"]}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>

              {/* Apoderado ---------------------------------------------------> */}
              {personaid == null && (
                <>
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
                          controlId="nombresApoderado"
                          label="Nombres "
                        >
                          <Form.Control
                            className="col-inputs"
                            type="text"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="apellidosApoderado"
                          label="Apellidos"
                        >
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
                      <div className="col-detalle-solicitud">
                        <FloatingLabel
                          controlId="tipoDocumentoApoderado"
                          label="Tipo de documento"
                        >
                          <Form.Select
                            className="col-inputs"
                            aria-label="Floating label select example"
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
                          controlId="documentoApoderado"
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
                          controlId="fechaExpedicionApoderado"
                          label="Fecha de expedición de documento"
                        >
                          <Form.Control
                            className="col-inputs"
                            type="date"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="lugarExpedicionApoderado"
                          label="Lugar de expedición"
                        >
                          <Form.Control
                            className="col-inputs"
                            type="text"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>

                      <label className="subtitles-secciones">
                        Datos adicionales
                      </label>
                      <div className="col-detalle-solicitud">
                        <FloatingLabel
                          controlId="tarjetaProfesionalApoderado"
                          label="Tarjeta profesional "
                        >
                          <Form.Control
                            className="col-inputs"
                            type="text"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="correoApoderado"
                          label="correo"
                        >
                          <Form.Control
                            className="col-inputs"
                            type="text"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>

                      <div className="col-detalle-solicitud">
                        <FloatingLabel
                          controlId="telefonoApoderado"
                          label="Teléfono"
                        >
                          <Form.Control
                            className="col-inputs"
                            type="text"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="celularApoderado"
                          label="Celular"
                        >
                          <Form.Control
                            className="col-inputs"
                            type="text"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="wrapp-botones">
            <button className="botones-popup" onClick={() => {}}>
              Guardar
            </button>
            <button
              className="botones-popup"
              onClick={() => {
                setPopupconv(!PopupConv);
                setPersonaid(null);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
