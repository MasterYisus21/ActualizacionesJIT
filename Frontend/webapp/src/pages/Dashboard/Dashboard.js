import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { IconButton } from "../../components";

// import { Link } from "react-router-dom";

// Importing css
import "./Dashboard.css";

// Notification system
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
// toast.configure()

function Dashboard() {
  const [pagina, setPagina] = useState("Solicitudes");
  const [nombre, setNombre] = useState("Andres Felipe Villamizar Palacio");
  const [permisos, setPermisos] = useState([])

  let navigate = useNavigate();

  useEffect(() => {
    try {
      setNombre(JSON.parse(localStorage.getItem("usuario")).nombres);
      setPermisos(JSON.parse(localStorage.getItem("modulos")))
    } catch {
      navigate("/", { replace: true });
    }

    return () => {
      setNombre("");
    };
  }, []);

  const logout = () => {
    const salir = () => {
      localStorage.removeItem("tokens");
      localStorage.removeItem("usuario");
      localStorage.removeItem("modulos");
      navigate("/", { replace: true });
    };
    confirmAlert({
      title: `Confirmación`,
      message: `¿Estas seguro de cerrar la sesión?`,
      buttons: [
        {
          label: "Si",
          onClick: () => salir(),
        },
        {
          label: "No",
          onClick: () => { },
        },
      ],
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-item dashboard-container-top-left">
        <img src="/images/escudo_ugc.png" alt="escudo" />
      </div>
      <div className="dashboard-item dashboard-container-bottom-left">
        <div className="dashboard-item dashboard-container-bottom-left-top">
          {permisos.includes("modulo_solicitudes") &&
            <IconButton
              type={"Link"}
              linkto={"/dashboard/solicitudes"}
              text={"Solicitudes"}
              icon={"file-diff"}
              onClick={() => {
                setPagina("Solicitudes");
              }}
            />
          }
          {permisos.includes("modulo_expedientes") &&
            <IconButton
              type={"Link"}
              linkto={"/dashboard/expedientes"}
              text={"Expedientes"}
              icon={"journal"}
              onClick={() => {
                setPagina("Expedientes");
              }}
            />
          }
          <hr />
          {permisos.includes("modulo_personas") &&
            <IconButton
              type={"Link"}
              linkto={"/dashboard/personas"}
              text={"Personas"}
              icon={"people-fill"}
              onClick={() => {
                setPagina("Personas");
              }}
            />
          }
          <hr />
          {permisos.includes("modulo_reportes") &&
            <IconButton
              type={"Link"}
              linkto={"/dashboard/reportes"}
              text={"Reportes"}
              icon={"file-bar-graph"}
              onClick={() => {
                setPagina("Reportes");
              }}
            />
          }
        </div>
        <div className="dashboard-item dashboard-container-bottom-left-bottom">
          <IconButton
            type={"Link"}
            // linkto={"/"}
            text={"Cerrar Sesión"}
            icon={"bi-box-arrow-in-left"}
            onClick={(e) => logout()}
          />
        </div>
      </div>
      <div className="dashboard-item dashboard-container-top-right">
        <div className="dashboard-container-top-right-title">
          <img
            className="dashboard-container-top-right-title-image"
            src={"/icons/rectangulo_movil.svg"}
            alt="journal-icon"
          />
          <h3 className="dashboard-container-top-right-title-text">
            Centro de conciliación
          </h3>
          <h3 className="dashboard-container-top-right-title-text-hint">
            {pagina}
          </h3>
        </div>
        <div className="dashboard-container-top-right-title-text-hint">
          <h3>Hola, {nombre}</h3>
        </div>
      </div>
      <div className="dashboard-item dashboard-container-bottom-right">
        <Outlet context={{ setPagina }} />
      </div>

      <ToastContainer />
    </div>
  );
}

export default Dashboard;
