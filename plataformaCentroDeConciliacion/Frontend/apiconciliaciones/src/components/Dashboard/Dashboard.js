import React, { useEffect, useState } from 'react'
import SolicitudesView from './SolicitudesView';
import { ModuloSolicitud } from '../ModuloSolicitud'

import './css/Dashboard.css';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

function Dashboard({ loggedIn, setLoggedIn }) {

  let navigate = useNavigate();

  const [nombreUsuario, setNombreUsuario] = useState('')

  const logout = () => {
    localStorage.removeItem('conciliacionesToken')
    navigate('/', { replace: true} )
  }

  useEffect(()=> {
    setNombreUsuario(JSON.parse(localStorage.getItem('nombreUsuario'))["nombres"] + ' ' + JSON.parse(localStorage.getItem('nombreUsuario'))["apellidos"])
  }, [])


  return (
    <div className='dashboard-main'>
      <div className='dashboard-navbar z-index-top'>
        <div className='dashboard-corner-navbar'>
          <img className='icon dashboard-corner-navbar-icon' src='/icons/escudo_ugc_1.png' />
        </div>
        <nav className='dashboard-top-navbar'>
          <div className='dashboard-top-navbar-search'>
            <div className='beautiful-icon-container-1'>
              <img className='icon' src='/icons/teacher_icon_1.png' />
            </div>
            | Hola, {nombreUsuario}
          </div>
          <div className='dashboard-top-navbar-utilities'>
            Centros de conciliacion

            <a href="#" className='beautiful-icon-container-1' onClick={e => {logout()}}>
              <img className='icon' src='/icons/sign_out_icon_1.jpg' />
            </a>

            {/* <div className='beautiful-icon-container-2'>1010074595 - Andres Felipe Villamizar Palacio</div> */}
          </div>
        </nav>

      </div>
      <nav className='dashboard-sidebar z-index-top'>
        <Link className='dashboard-sidebar-link' to='/dashboard'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='/icons/solicitud_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Mis Solicitudes
          </div>
        </Link>
        <Link className='dashboard-sidebar-link' to='/dashboard/modulo-solicitudes/crear'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='/icons/plus_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Agregar Solicitud
          </div>
        </Link>
        <hr />
        <Link className='dashboard-sidebar-link' to='/dashboard/personas'>
          <div className='beautiful-icon-container-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="bg-dark" className="bi bi-people-fill icon" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
          </div>
          <div className='dashboard-sidebar-link-label'>
            Agregar Persona
          </div>
        </Link>
        <Link className='dashboard-sidebar-link' to='/dashboard/reportes'>
          <div className='beautiful-icon-container-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="bg/dark" className="bi bi-file-earmark-bar-graph icon" viewBox="0 0 16 16">
              <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
          </div>
          <div className='dashboard-sidebar-link-label'>
            Reportes
          </div>
        </Link>
      </nav>

      <div className='dashboard-content'>


        {/* <ModuloSolicitud /> */}
        <Outlet />
        {/* <Routes>
          <Route path='/' element={<SolicitudesView />}/>
          <Route path='/modulo-solicitudes' element={<ModuloSolicitud />}/>
        </Routes> */}
      </div>
    </div>
  )
}

export default Dashboard