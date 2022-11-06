import React from 'react'

import { Link } from "react-router-dom";

// Importing css
import './Consultar.css'

function Consultar() {
  return (
    <div>
      <h4>Consultar</h4>
      <nav>
        <ul>
          <li style={{listStyle: "none"}}>
            <Link to="/">PaginaPrincipal</Link>
          </li>
          <li style={{listStyle: "none"}}>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Consultar