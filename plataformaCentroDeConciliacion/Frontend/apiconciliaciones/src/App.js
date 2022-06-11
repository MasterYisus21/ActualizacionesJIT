import React, {useEffect,useState} from  'react' // rfce
import { Routes, Route, Link, Navigate } from "react-router-dom"

import axios from 'axios';
import ModuloSolicitud from './components/ModuloSolicitud';
import InicioSesion from './components/InicioSesion';
import './App.css'
import { Dashboard } from './components/Dashboard';
import ErrorPage from './components/ErrorPage';



function App() {

  const[loggedIn, setLoggedIn] = useState(true)

  // useEffect(() => {})

  return (
    <div>

      {/* <InicioSesion /> */}
      

      <Routes>
        
          {/* {loggedIn ? <Navigate to="/dashboard" replace={true} /> : <Navigate to="/login" replace={true} />} */}
          <Route
            path="/login"
            element={<InicioSesion />}
          />
          <Route
            path="/dashboard"
            element={loggedIn ? <Dashboard /> : <Navigate to="/login" replace={true} />}
          />
          <Route exact path='/' element={loggedIn ? <Navigate to="/dashboard" replace={true} /> : <Navigate to="/login" replace={true} />}></Route>
          <Route path='*' element={<ErrorPage  code={404} codeMessage={"Pagina no encontrada"} message={"La URL buscada no existe"} />}></Route>
      </Routes>
    </div>
  )
}

export default App