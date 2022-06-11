import React, {useEffect,useState} from  'react' // rfce
import axios from 'axios';
import ModuloSolicitud from './components/ModuloSolicitud';
import InicioSesion from './components/InicioSesion';
import './App.css'
import Dashboard from './components/Dashboard/Dashboard';


function App() {

  return (
    <div>
<<<<<<< HEAD
      <InicioSesion />  
    {/* <ul>
      {
      equipo.map(item => (
          <li key="item.Id"> { item.Nombre}</li>
        ))
      }
    </ul> */}

    <p> Nosotros</p>

=======
      {/* <InicioSesion /> */}
      <Dashboard />
      {/* <ModuloSolicitud /> */}
>>>>>>> e90a9ed9040ecef6dc18ae476438757ecf0fc773
    </div>
  )
}

export default App