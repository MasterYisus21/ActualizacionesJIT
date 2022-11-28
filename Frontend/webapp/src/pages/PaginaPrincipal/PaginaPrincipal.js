import { Button } from "bootstrap";
import React from "react";
import { BarRectangulo } from '../../components/BarRectangulo'
import { Link } from "react-router-dom";

// Importing css
import "./PaginaPrincipal.css";

function PaginaPrincipal() {
  return (
      <div className="wrapp-main-pantalla-principal">
        <div className="uno">
          <div className="logo-universidad-movil">
            <img className="imagen-logo-principal" src={"./images/logo-ugc.png"} alt="" />
          </div>
          <div className="contenedor-rectangulo-grande">
            <BarRectangulo text="Centros de conciliación" />
          </div>
          <div className="logo-pagina-escritorio">
            <img className="imagen-logo-principal2" src={"./images/logo_universidad_texto.png"} alt="" />
          </div>
        </div>

        <div className="dos">
        <div className="cuerpo-principal">
          <Link to="/registrarsolicitud" className="text-decoration-none carta-solicitud">
            <div className="contenedor-descripcion">
              <div className="contenido-descripcion">
                <label className="titulo">Haz tu solicitud</label>
                <label className="contenido">Aquí podrás consultar y hacer seguimiento de tu caso</label>
                <div className="contenedor-label">
                  <label className="contenido2">Aquí podrás realizar una solicitud sin ningún registro previo</label>
                </div>
              </div>
            </div>
            <div className="contenedor-imagen">
              <img className="imagen_solicitud" src={"./images/imagen-solicitud.jpg"} alt="" />
            </div>
          </Link>
          <Link to="/consultar" className="text-decoration-none carta-solicitud">
            <div className="contenedor-descripcion">
              <div className="contenido-descripcion">
                <label className="titulo">Consulta tu solicitud</label>
                <label className="contenido">Aquí podrás consultar y hacer seguimiento de tu caso</label>
                <div className="contenedor-label">
                  <label className="contenido2">Aquí podrás consultar y hacer seguimiento de tu caso</label>
                </div>
              </div>
            </div>
            <div className="contenedor-imagen">
              <img className="imagen_solicitud" src={"./images/imagen-consultar.jpg"} alt="" />
            </div>
          </Link>
          <Link to="login" className="boton-ingreso">
            Ingresar
          </Link>
        </div>
      </div>
        </div>
  );
}

export default PaginaPrincipal;

{
  /* <nav>
  <ul>
    <li style={{listStyle: "none"}}>
      <Link to="/">PaginaPrincipal</Link>
    </li>
    <li style={{listStyle: "none"}}>
      <Link to="/login">Login</Link>
    </li>
    <li style={{listStyle: "none"}}>
      <Link to="/consultar">Consultar</Link>
    </li>
    <li style={{listStyle: "none"}}>
      <Link to="/dashboard/expedientes">Dashboard</Link>
    </li>
    <li style={{listStyle: "none"}}>
      <Link to="/nothing-here">Nothing Here</Link>
    </li>
  </ul>
</nav> */
}
