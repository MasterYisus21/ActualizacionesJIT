import React, { useEffect, useState } from 'react'
import SolicitudesView from './SolicitudesView';
import { ModuloSolicitud } from '../ModuloSolicitud'

import './css/Dashboard.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

function Dashboard() {


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
            | Hola, Felipe Villamizar
          </div>
          <div className='dashboard-top-navbar-utilities'>
            Centro de conciliaciones
            <div className='beautiful-icon-container-1'>
              <img className='icon' src='/icons/sign_out_icon_1.jpg' />
            </div>
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
        <hr />
        <Link className='dashboard-sidebar-link' to='/dashboard/modulo-solicitudes/crear'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='/icons/plus_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Agregar Solicitud
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