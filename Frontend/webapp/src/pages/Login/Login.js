import React from 'react'

import { Link } from "react-router-dom";

// Importing css
import './Login.css'

function Login() {
  return (
    <div>
      <h4>Login</h4>
      <nav>
        <ul>
          <li style={{listStyle: "none"}}>
            <Link to="/">PaginaPrincipal</Link>
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

export default Login