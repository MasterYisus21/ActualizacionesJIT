import React from "react";

import { Link } from "react-router-dom";

// Importing css
import "./PaginaPrincipal.css";

function PaginaPrincipal() {
  return (
    <div>
      <div className="">
        <div className="logo-universidad-movil">
          <img src={"./images/escudo_ugc.png"} alt="" />
        </div>
        <img
          className="svg-rectangulo"
          src={"./icons/rectangulo.svg"}
          alt="journal-icon"
        />
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
