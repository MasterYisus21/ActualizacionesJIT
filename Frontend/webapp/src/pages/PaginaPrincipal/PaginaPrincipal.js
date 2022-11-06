import React from 'react'

import { Link } from "react-router-dom";

// Importing css
import './PaginaPrincipal.css'


function PaginaPrincipal() {
  return (
    <div>
      <h4>PaginaPrincipal</h4>
      <nav>
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
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li style={{listStyle: "none"}}>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PaginaPrincipal