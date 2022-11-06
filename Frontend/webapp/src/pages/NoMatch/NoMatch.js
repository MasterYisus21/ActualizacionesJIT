import React from 'react'

import { Link } from "react-router-dom";

// Importing css

function NoMatch() {
  return (
    <div>
      <h4>404 Not Found</h4>
      <nav>
        <ul>
          <li style={{listStyle: "none"}}>
            <Link to="/">PaginaPrincipal</Link>
          </li>
          <li style={{listStyle: "none"}}>
            <Link to="/login">Login</Link>
          </li>
          <li style={{listStyle: "none"}}>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NoMatch