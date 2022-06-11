import React, { useEffect, useState } from 'react'
import SolicitudesView from './SolicitudesView';
import { ModuloSolicitud } from '../ModuloSolicitud'

import './css/Dashboard.css';

function Dashboard() {


  return (
    <div className='dashboard-main'>
      <div className='dashboard-navbar z-index-top'>
        <div className='dashboard-corner-navbar'>
          <img className='icon dashboard-corner-navbar-icon' src='icons/escudo_ugc_1.png' />
        </div>
        <nav className='dashboard-top-navbar'>
          <div className='dashboard-top-navbar-search'>
            <div className='beautiful-icon-container-1'>
              <img className='icon' src='icons/teacher_icon_1.png' />
            </div>
            | Hola, Felipe Villamizar
          </div>
          <div className='dashboard-top-navbar-utilities'>
            Centro de conciliaciones
            <div className='beautiful-icon-container-1'>
              <img className='icon' src='icons/sign_out_icon_1.jpg' />
            </div>
            {/* <div className='beautiful-icon-container-2'>1010074595 - Andres Felipe Villamizar Palacio</div> */}
          </div>
        </nav>

      </div>
      <nav className='dashboard-sidebar z-index-top'>
        <a className='dashboard-sidebar-link' href='#'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='icons/solicitud_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Mis Solicitudes
          </div>
        </a>
        <a className='dashboard-sidebar-link' href='#'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='icons/solicitud_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Solicitudes
          </div>
        </a>
        <a className='dashboard-sidebar-link' href='#'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='icons/solicitud_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Solicitudes generales e importantes
          </div>
        </a>
        <a className='dashboard-sidebar-link' href='#'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='icons/solicitud_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Solicitudes
          </div>
        </a>
        <a className='dashboard-sidebar-link' href='#'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='icons/solicitud_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Solicitudes
          </div>
        </a>
        <a className='dashboard-sidebar-link' href='#'>
          <div className='beautiful-icon-container-1'>
            <img className='icon' src='icons/solicitud_icon_1.png' />
          </div>
          <div className='dashboard-sidebar-link-label'>
            Solicitudes
          </div>
        </a>
      </nav>

      <div className='dashboard-content'>
        <SolicitudesView />
        {/* <ModuloSolicitud /> */}
      </div>
    </div>
  )
}

export default Dashboard