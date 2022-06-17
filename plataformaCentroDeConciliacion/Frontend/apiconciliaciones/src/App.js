import React, {useEffect,useState} from  'react' // rfce
import { Routes, Route, Link, Navigate } from "react-router-dom"

import axios from 'axios';
import {ModuloInformacionConciliador, ModuloInformacionConvocado, ModuloInformacionConvocante, ModuloSolicitudEstudiantes, ModuloSolicitud, ModuloSolicitudAudiencia, ModuloSolicitudAudiencia_registro, ModuloSolicitudDatosGenerales, ModuloSolicitudHechos, ModuloSolicitudDocumentos, ModuloSolicitudManejoConflicto, ModuloSolicitudResultado, ModuloEncuesta} from './components/ModuloSolicitud';
import InicioSesion from './components/InicioSesion';
import './App.css'
import { Dashboard } from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import SolicitudesView from './components/Dashboard/SolicitudesView';
import Personas from './components/Dashboard/Personas';
import ModuloEncuestas from './components/ModuloSolicitud/ModuloEncuesta';


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
            path="/dashboard/"
            element={loggedIn ? <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Navigate to="/login" replace={true} />}
          >
            <Route path='personas/' element={<Personas />}/>
            {/* ModuloSolicitudDatosGenerales  */}
            <Route path='' element={<SolicitudesView />}/>
            <Route path='modulo-solicitudes/' element={<ModuloSolicitud />}>
              <Route path='crear' element={<ModuloSolicitudDatosGenerales  nuevo={true} />}/>
              <Route path=':Id_solicitud/datos_generales' element={<ModuloSolicitudDatosGenerales nuevo={false} />}/>
              <Route path=':Id_solicitud/convocantes' element={<ModuloInformacionConvocante />}/>
              <Route path=':Id_solicitud/convocados' element={<ModuloInformacionConvocado />}/>
              <Route path=':Id_solicitud/hechos' element={<ModuloSolicitudHechos />}/>
              <Route path=':Id_solicitud/documentos' element={<ModuloSolicitudDocumentos />}/>
              <Route path=':Id_solicitud/conciliador' element={<ModuloInformacionConciliador />}/>
              <Route path=':Id_solicitud/estudiantes' element={<ModuloSolicitudEstudiantes />}/>
              <Route path=':Id_solicitud/manejo_conflicto' element={<ModuloSolicitudManejoConflicto />}/>
              <Route path=':Id_solicitud/audiencias/' element={<ModuloSolicitudAudiencia />}/>
              <Route path=':Id_solicitud/audiencias/crear' element={<ModuloSolicitudAudiencia_registro />}/>
              <Route path=':Id_solicitud/audiencias/:Id_audiencia' element={<ModuloSolicitudAudiencia_registro />}/>
              <Route path=':Id_solicitud/resultado' element={<ModuloSolicitudResultado />}/>
              <Route path=':Id_solicitud/encuesta' element={<ModuloEncuesta />}/>
            </Route>
          </Route>
          <Route exact path='/' element={loggedIn ? <Navigate to="/dashboard" replace={true} /> : <Navigate to="/login" replace={true} />}></Route>
          <Route path='/page-not-found' element={<ErrorPage  code={404} codeMessage={"Pagina no encontrada"} message={"La URL buscada no existe"} />}></Route>
          <Route path='*' element={<ErrorPage  code={404} codeMessage={"Pagina no encontrada"} message={"La URL buscada no existe"} />}></Route>
      </Routes>
    </div>
  )
}

export default App