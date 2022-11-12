import React from 'react'
import { Outlet } from 'react-router-dom'
import { IconButton } from '../../components/IconButton'

// import { Link } from "react-router-dom";

// Importing css
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-item dashboard-container-top-left'>
        <img src='/images/escudo_ugc.png' alt='escudo' />
      </div>
      <div className='dashboard-item dashboard-container-bottom-left'>
        <div className='dashboard-item dashboard-container-bottom-left-top'>
          <IconButton
            type={"Link"}
            linkto={"/dashboard/expedientes"}
            text={"Expedientes"}
            icon={"journal"}
          />
          <IconButton
            type={"Link"}
            linkto={"/dashboard/solicitudes"}
            text={"Solicitudes"}
            icon={"file-diff"}
          />
          <hr />
          <IconButton
            type={"Link"}
            linkto={"/dashboard/personas"}
            text={"Personas"}
            icon={"people-fill"}
          />
          <hr />
          <IconButton
            type={"Link"}
            linkto={"/dashboard/reportes"}
            text={"Reportes"}
            icon={"file-bar-graph"}
          />
        </div>
        <div className='dashboard-item dashboard-container-bottom-left-bottom'>
          <IconButton
            type={"Link"}
            linkto={"/"}
            text={"Cerrar Sesión"}
            icon={"bi-box-arrow-in-left"}
            onClick={() => { console.log("function"); }}
          />
        </div>
      </div>
      <div className='dashboard-item dashboard-container-top-right'>
        <div className="dashboard-container-top-right-title">
          <img className="dashboard-container-top-right-title-image" src={"/icons/rectangulo.svg"} alt="journal-icon" />
          <h3 className='dashboard-container-top-right-title-text'>Centros de conciliación</h3>
        </div>
      </div>
      <div className='dashboard-item dashboard-container-bottom-right'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard