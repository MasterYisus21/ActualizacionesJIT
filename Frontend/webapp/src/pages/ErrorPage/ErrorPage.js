import React from 'react'
import "./ErrorPage.css";

import { useNavigate } from "react-router-dom";
import { IconButton } from '../../components';
import { confirmAlert } from 'react-confirm-alert';


// Importing css

function ErrorPage() {

  const navigate = useNavigate();

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

  const goToHomePage = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("usuario");
    localStorage.removeItem("modulos");
    window.location.href = "/";

  };

  return (
    <div className='error-page-container'>
      <div className=''>
        <img className="error-page-logo-principal" src={"/images/logo_universidad_texto.png"} alt="" />
      </div>
      <div className='error-page-text'>Centro de Conciliación José Ignacio Talero Losada.</div>
      <div className='error-page-title'>404</div>
      <div className='error-page-subtitle'>Ooops...</div>
      <div className='error-page-text'>Pagina no encontrada.</div>
      <div className='error-page-links-container'>
        <div className='error-page-floating-button'>
          <IconButton
            type={"Link"}
            // linkto={"/"}
            text={"Volver atras"}
            icon={"bi-arrow-left"}
            onClick={(e) => { navigate(-1, { replace: true }) }}
          />
        </div>
        <IconButton
          type={"Link"}
          // linkto={"/"}
          text={"Pagina Principal"}
          icon={"house"}
          onClick={() => { goToHomePage(); }}
        />
        <IconButton
          type={"Link"}
          // linkto={"/"}
          text={"Cerrar Sesión"}
          icon={"bi-box-arrow-in-left"}
          onClick={(e) => { logout() }}
        />
      </div>

    </div>
  )
}

export default ErrorPage