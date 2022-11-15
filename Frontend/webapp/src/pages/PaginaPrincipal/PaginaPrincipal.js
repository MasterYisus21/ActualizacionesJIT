import React from "react";

import { Link } from "react-router-dom";

// Importing css
import "./PaginaPrincipal.css";

function PaginaPrincipal() {
  return (
    <div>
      <div className="">
        <div className="logo-universidad-movil">
          <img className="imagen-logo-principal" src={"./images/logo-ugc.png"} alt="" />
        </div>
        <section class="container">
          <img
            className="svg-rectangulo"
            src={"./icons/rectangulo.svg"}
            alt="journal-icon"
          />
          <p>Centros de conciliación</p>
        </section>
        <div className="cuerpo-principal">
          <div className="carta-solicitud">
            <div className="contenedor-descripcion">
              <div className="contenido-descripcion">
                
                <label className="titulo">Haz tu solicitud</label>
                <label className="contenido">Aquí podrás realizar una solicitud sin ningún registro previo</label>
              </div>
            </div>
            <div className="contenedor-imagen">
              <img className="imagen_solicitud" src={"./images/imagen-solicitud.jpg"} alt="" />
            </div>    
          </div>
          <div className="carta-consulta">
            <div className="contenedor-descripcion">
              <div className="contenido-descripcion">
                <label className="titulo">Haz tu solicitud</label>
                <label className="contenido">Aquí podrás consultar y hacer seguimiento de tu caso</label>
              </div>
            </div>
            <div className="contenedor-imagen">
              <img className="imagen_solicitud" src={"./images/imagen-consultar.jpg"} alt="" />
            </div>   
          </div>
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
