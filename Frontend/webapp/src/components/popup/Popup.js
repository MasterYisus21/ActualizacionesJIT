// Import css
import "./Popup.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState, useCallback, useEffect } from "react";
import { axiosTokenInstanceApiExpedientes } from "../../helpers/axiosInstances";
import { toast } from "react-toastify";

export default function Popup({
  text,
  setEstado,
  estado,
  setResultadosBusqueda,
  resultadosBusqueda,
  modificar,
  setModificar,
  id,
}) {
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [tiposCargo, setTiposCargo] = useState([]);
  const [tiposGrupo, setTiposGrupo] = useState([]);
  const [usuarioid, setUsuarioid] = useState(null);

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: "get",
      url: "/tipos_documento/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
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
        setTiposGrupo(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: "get",
      url: "personas/" + id,
      // headers: req.headers,
      data: {},
    }).then((result) => {
      if (modificar != null) {
        console.log(result.data);
        
        document.getElementById("nombres").value = result.data["nombres"];
        document.getElementById("apellidos").value = result.data["apellidos"];
        document.getElementById("tipoDocumento").value =
          result.data["tipo_documento_id"];
        document.getElementById("documento").value =
          result.data["identificacion"];
        document.getElementById("tarjetaProfesional").value =
          result.data["tarjeta_profesional"];
        document.getElementById("correo").value = result.data["correo"];
        document.getElementById("celular").value = result.data["celular"];
        document.getElementById("cargo").value = result.data["tipo_cargo_id"];
        document.getElementById("permiso").value = result.data["grupo_id"];
        setUsuarioid(result.data["usuario_id"]);

          document.getElementById("lugarExpedicion").value =
            result.data["lugar_expedicion"];
      }
    });
  }, []);

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      nombres: event.target.nombres.value,
      apellidos: event.target.apellidos.value,
      identificacion: event.target.documento.value,
      tipo_documento_id: event.target.tipoDocumento.value,
      celular: event.target.celular.value,
      correo: event.target.correo.value,
      tarjeta_profesional: event.target.tarjetaProfesional.value,
      tipo_cargo_id: event.target.cargo.value,
      grupo_id: event.target.permiso.value,
      usuario_id: usuarioid,
      lugar_expedicion: event.target.lugarExpedicion.value,
    };

    if (modificar == null) {
      axiosTokenInstanceApiExpedientes({
        method: "post",
        url: "/personas",
        data: data,
      })
        .then((result) => {
          console.log(result);
          // event.target.reset();
          if (result.status === 208) {
            toast.warning("Está persona ya ha sido registrada anteriormente", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.success("La persona ha sido creada correctamente", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            setResultadosBusqueda([result.data, ...resultadosBusqueda]);
            setEstado(!estado);
          }
        })
        .catch((err) => {
          console.log("error");
        });
    } else {
      axiosTokenInstanceApiExpedientes({
        method: "patch",
        url: "/personas/" + id,
        // headers: req.headers,
        data: data,
      })
        .then((result) => {
          console.log(result);
          console.log("resultado:");
          console.log(result);
          toast.success("La persona ha sido modificada correctamente", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });

          let tempArray = [...resultadosBusqueda];
          const pos = tempArray.map((e) => e["id"]).indexOf(id);
          tempArray[pos] = result.data;
          setResultadosBusqueda(tempArray);
          setEstado(!estado);
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="wrapp-popup">
      <Form
        className="secciones-temas"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div className="popup">
          <div className="titulo-popup">
            <h1>{modificar != null ? "Modificar Persona" : "Crear Persona"}</h1>
          </div>
          <div className="form-popup">
            <div className="wrapp-boton-cerrar">
              <svg
                className="boton-cerrar-popup"
                onClick={() => {
                  setEstado(!estado);
                  setModificar(null);
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
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="apellidos" label="Apellidos">
                <Form.Control
                  className="inputs-personas"
                  type="text"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
            </div>

            <label className="subtitles-secciones">Identificación</label>
            <div className="columnas-inputs">
              <FloatingLabel
                controlId="tipoDocumento"
                label="Tipo de documento"
              >
                <Form.Select
                  className="inputs-personas"
                  aria-label="Floating label select example"
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
              <FloatingLabel controlId="documento" label="Número de documento">
                <Form.Control
                  className="inputs-personas"
                  type="text"
                  placeholder="name@example.com"
                  // disabled = {modificar !== null}
                  required
                />
              </FloatingLabel>
              
            </div>
            <label className="subtitles-secciones">
               Lugar de expedición de documento
            </label>
            <FloatingLabel controlId="lugarExpedicion" label="Lugar de expedición">
              <Form.Control
                className=""
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <label className="subtitles-secciones">Tarjeta profesional</label>
            <FloatingLabel controlId="tarjetaProfesional" label="Número">
              <Form.Control
                className=""
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
                
            <label className="subtitles-secciones">Datos Adicionales</label>

            <div className="columnas-inputs">
              
              <FloatingLabel controlId="correo" label="Correo Electrónico">
                <Form.Control
                  className="inputs-personas"
                  type="email"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="celular" label="Celular">
                <Form.Control
                  className="inputs-personas"
                  type="text"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
            </div>

            <div className="columnas-inputs">
              <FloatingLabel controlId="cargo" label="Cargo">
                <Form.Select
                  className="inputs-personas"
                  aria-label="Floating label select example"
                  required
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {tiposCargo.map((tipoCargo) => {
                    return (
                      <option
                        key={"tipoCargo" + tipoCargo["id"]}
                        value={tipoCargo["id"]}
                      >
                        {tipoCargo["nombre"]}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="permiso" label="Permiso">
                <Form.Select
                  className="inputs-personas"
                  aria-label="Floating label select example"
                  required
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {tiposGrupo.map((tipoGrupo) => {
                    return (
                      <option
                        key={"tipoGrupo" + tipoGrupo["id"]}
                        value={tipoGrupo["id"]}
                      >
                        {tipoGrupo["name"]}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </div>
            
            <div className="wrapp-botones">
              <button className="botones-popup">Guardar</button>
              <button
                className="botones-popup"
                onClick={() => {
                  setEstado(!estado);
                  setModificar(null);
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
