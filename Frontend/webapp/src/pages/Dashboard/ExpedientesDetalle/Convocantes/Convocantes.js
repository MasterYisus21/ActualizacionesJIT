import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Buscador,
  Button,
  NotificationToast,
  Popup,
  PopupConv,
} from "../../../../components";
import { axiosTokenInstanceApiExpedientes } from "../../../../helpers/axiosInstances";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { confirmAlert } from "react-confirm-alert"; // Import

// Importing css
import "./Convocantes.css";

// Import necesary for notification center
import { toast } from "react-toastify";
import PopupApoderado from "./../../../../components/popupApoderado/PopupApoderado";

function Convocantes() {
  const [estado, setEstado] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupconv, setPopupconv] = useState(false);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([]);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [openbutton, setOpenbutton] = useState(false);
  const [apoderadoid, setApoderadoid] = useState([]);
  const [newApoderado, setNewApoderado] = useState(null);

  let { id } = useParams();
  let resultados = useRef([]);

  const search = () => {
    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: "get",
      url:
        "/expedientes/" +
        id +
        "/convocantes/?ordering=-numero_caso&count=14&page=" +
        page +
        valoresBuscados.map((valor) => {
          return "&search=" + valor;
        }),
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        console.log(result.data);
        if (page != 1) {
          resultados.current = [...resultados.current, ...result.data.results];
        } else {
          resultados.current = result.data.results;
        }
        setResultadosBusqueda(resultados.current);
        setNumPages(Math.ceil(result.data.count / 14));
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const handlePageChange = (page) => {
    if (page <= numPages) {
      setPage(page);
    }
  };

  const handleScroll = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (
      e.target.scrollHeight - e.target.scrollTop - 200 <
      e.target.clientHeight
    ) {
      // console.log("almost bottom");
      handlePageChange(page + 1);
    }
  };

  useEffect(() => {
    setResultadosBusqueda([]);
    search();
  }, [valoresBuscados]);

  useEffect(() => {
    if (page != 1) {
      search();
    }
  }, [page]);

  const handleDeletePerson = (idPersona, nombre) => {
    function deletePerson(idPersona) {
      // alert(`deleted person ${idPersona}`)
      axiosTokenInstanceApiExpedientes({
        method: "delete",
        url: "/expedientes/" + id + "/personas/" + idPersona,
        // headers: req.headers,
        data: {},
      })
        .then((result) => {
          setResultadosBusqueda(
            resultadosBusqueda.filter((resultadosBusqueda) => {
              return resultadosBusqueda["id"] != idPersona;
            })
          );
          toast.success("La información se ha guardado con exito", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
        .catch((err) => {
          console.log("error");
        });
    }
    confirmAlert({
      title: `Confirmación para eliminar`,
      message: `¿Estas seguro de borrar a ${nombre.toUpperCase()} del caso?.`,
      buttons: [
        {
          label: "Si",
          onClick: () => deletePerson(idPersona),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Editar Convocante
    </Tooltip>
  );

  return (
    <>
      <div className="container-convocante">
        {popupconv && (
          <PopupConv
            setEstado={setPopupconv}
            estado={popupconv}
            personas={"convocantes"}
            id={id}
            resultadosBusqueda={resultadosBusqueda}
            setResultadosBusqueda={setResultadosBusqueda}
            setPopupconv={setPopupconv}
            popupconv={popupconv}
            personaid={newApoderado}
            setPersonaid={setNewApoderado}
          ></PopupConv>
        )}

        {popup && (
          <PopupApoderado
            setEstado={setPopup}
            estado={popup}
            apoderadoid={apoderadoid}
            resultadosBusqueda={resultadosBusqueda}
            setResultadosBusqueda={setResultadosBusqueda}
            newApoderado={newApoderado}
            personaid={newApoderado}
            setPersonaid={setNewApoderado}
          ></PopupApoderado>
        )}
        <h2>Informacion del convocante</h2>
        <div className="navbar-convocante">
          {/* <Buscador
            valoresBuscados={valoresBuscados}
            setValoresBuscados={setValoresBuscados}
            setPage={handlePageChange}
            required
          /> */}
          <button
            className="boton-crear-convocante"
            onClick={() => setPopupconv(!popupconv)}
          >
            Crear Convocante
          </button>
        </div>

        <div
          className="contenedor-tabla-convocante"
          onScroll={(e) => handleScroll(e)}
        >
          <table className="table table-striped table-bordered table-responsive ">
            <thead>
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
                    <td>{resultadoBusqueda["nombres"]}</td>
                    <td>{resultadoBusqueda["tipo_documento"]}</td>
                    <td>{resultadoBusqueda["identificacion"]}</td>
                    <td>
                      {resultadoBusqueda.apoderado_id ? (
                        <button
                          onClick={() => {
                            setPopup(!popup);
                            setApoderadoid(resultadoBusqueda["apoderado_id"]);
                          }}
                          className="boton-tabla-eliminar"
                        >
                          {resultadoBusqueda["nombre_apoderado"]}
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setPopup(!popup);
                            setApoderadoid(null);
                            setNewApoderado(resultadoBusqueda["persona_id"]);
                          }}
                          className="boton-tabla-eliminar"
                        >
                          Crear apoderado
                        </button>
                      )}
                    </td>
                    <td>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <button
                          className="boton-tabla-eliminar"
                          value={resultadoBusqueda["id"]}
                          onClick={() => {
                            setPopupconv(!popupconv);
                            setNewApoderado(resultadoBusqueda["persona_id"]);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                      </OverlayTrigger>
                      <button
                        className="boton-tabla-eliminar"
                        onClick={(e) => {
                          handleDeletePerson(
                            resultadoBusqueda["id"],
                            resultadoBusqueda["nombres"]
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <Button
              onClick={(e) => {
                handlePageChange(page + 1);
              }}
              className="span2"
              text="Cargar más"
            />
          </table>
        </div>
      </div>
    </>
  );
}

export default Convocantes;
