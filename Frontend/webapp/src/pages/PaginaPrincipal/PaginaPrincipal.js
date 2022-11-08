import React from 'react'

import { Link } from "react-router-dom";

// Importing css
import './PaginaPrincipal.css'


function PaginaPrincipal() {
  return (
    <div>
      <svg className='rectangulo' width="719" height="57" viewBox="0 0 719 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H719L661.318 57H0V0Z" fill="#00460F"/>
        <label>Hola</label>
    </svg>
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
            <Link to="/dashboard/expedientes">Dashboard</Link>
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