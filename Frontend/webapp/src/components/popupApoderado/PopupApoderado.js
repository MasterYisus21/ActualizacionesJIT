// Import css
import "./PopupApoderado.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState, useCallback, useEffect } from "react";
import { axiosTokenInstanceApiExpedientes } from "../../helpers/axiosInstances";
import { toast } from "react-toastify";

export default function PopupApoderado({
  text,
  setEstado,
  estado,
  apoderadoid,
  setResultadosBusqueda,
  resultadosBusqueda,
  setPopup,
  popup,
  newApoderado,
  setApoderadoid,
  personaid,
  setPersonaid,
}) {
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [tiposCargo, setTiposCargo] = useState([]);
  const [tiposGrupo, setTiposGrupo] = useState([]);

  useEffect(() => {
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
      url: "/tipos_cargo/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        console.log(result.data);
        setTiposCargo(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: "get",
      url: "/grupos/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        console.log(result.data);
        setTiposGrupo(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    if (apoderadoid) {
      axiosTokenInstanceApiExpedientes({
        method: "get",
        url: `/apoderados/${apoderadoid}`,
        // headers: req.headers,
        data: {},
      })
        .then((result) => {
          console.log(result.data);
          document.getElementById("nombres").value = result.data["nombres"];
          document.getElementById("apellidos").value = result.data["apellidos"];
          document.getElementById("tipoDocumento").value =
            result.data["tipo_documento_id"];
          document.getElementById("documento").value =
            result.data["identificacion"];
          document.getElementById("fechaExpedicion").value =
            result.data["fecha_expedicion"];
          document.getElementById("lugarExpedicion").value =
            result.data["lugar_expedicion"];
          document.getElementById("tarjetaProfesional").value =
            result.data["tarjeta_profesional"];
          document.getElementById("correo").value = result.data["correo"];
          document.getElementById("tarjetaProfesional").value =
            result.data["tarjeta_profesional"];
          document.getElementById("telefono").value = result.data["telefono"];
          document.getElementById("celular").value = result.data["celular"];
        })
        .catch((err) => {
          console.log("error");
        });
    }
  }, []);

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      nombres: event.target.nombres.value,
      apellidos: event.target.apellidos.value,
      identificacion: event.target.documento.value,
      fecha_expedicion: event.target.fechaExpedicion.value,
      lugar_expedicion: event.target.lugarExpedicion.value,
      tipo_documento_id: event.target.tipoDocumento.value,
      telefono: event.target.telefono.value,
      celular: event.target.celular.value,
      correo: event.target.correo.value,
      tarjeta_profesional: event.target.tarjetaProfesional.value,
    };

    if (apoderadoid) {
      axiosTokenInstanceApiExpedientes({
        method: "patch",
        url: `/apoderados/${apoderadoid}`,
        // headers: req.headers,
        data: data,
      })
        .then((result) => {
          console.log(result);
          // event.target.reset();
          toast.success("La persona ha sido modificada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          // setResultadosBusqueda([resultadosBusqueda]);
          setEstado(!estado);
        })
        .catch((err) => {
          console.log("error");
        });
    } else {
      axiosTokenInstanceApiExpedientes({
        method: "post",
        url: `/personas/${newApoderado}/apoderados`,
        // headers: req.headers,
        data: data,
      })
        .then((result) => {
          toast.success("El apoderado ha sido creado con exito", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setEstado(!estado);
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="wrapp-popup">
      <Form className="secciones-temas" onSubmit={(e) => submitForm(e)}>
        <div className="popup">
          <div className="titulo-popup">
            <h1>Modificar Apoderado</h1>
          </div>
          <div className="form-popup">
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

            <label className="subtitles-secciones">Nombre</label>
            <div className="columnas-inputs">
              <FloatingLabel controlId="nombres" label="Nombres">
                <Form.Control
                  className="inputs-personas"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="apellidos" label="Apellidos">
                <Form.Control
                  className="inputs-personas"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <label className="subtitles-secciones">Identificación</label>
            <div className="col-detalle-solicitud">
              <FloatingLabel
                controlId="tipoDocumento"
                label="Tipo de documento"
              >
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
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
              <FloatingLabel controlId="documento" label="Número de documento">
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
                controlId="fechaExpedicion"
                label="Fecha de expedición de documento"
              >
                <Form.Control
                  className="col-inputs"
                  type="date"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="lugarExpedicion"
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
                controlId="tarjetaProfesional"
                label="Tarjeta profesional "
              >
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="correo" label="correo">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <div className="col-detalle-solicitud">
              <FloatingLabel controlId="telefono" label="Teléfono">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="celular" label="Celular">
                <Form.Control
                  className="col-inputs"
                  type="text"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
            </div>

            <div className="wrapp-botones">
              <button className="botones-popup" onClick={() => {}}>
                Guardar
              </button>
              <button
                className="botones-popup"
                onClick={() => {
                  setEstado(!estado);
                  setPersonaid(null);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
