import React, {useEffect,useState} from  'react' // rfce
import axios from 'axios';
import ModuloSolicitud from './components/ModuloSolicitud';
import InicioSesion from './components/InicioSesion';
import './App.css'
import Dashboard from './components/Dashboard/Dashboard';


function App() {

  return (
    <div>
      {/* <InicioSesion /> */}
      <Dashboard />
      {/* <ModuloSolicitud /> */}
    </div>
  )
}

export default App