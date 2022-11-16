import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { IconButton } from '../../components'

// import { Link } from "react-router-dom";

// Importing css
import './Dashboard.css'

function Dashboard() {

  const [pagina, setPagina] = useState("Dashboard")

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
            onClick={() => {setPagina("Expedientes")}}
          />
          <IconButton
            type={"Link"}
            linkto={"/dashboard/solicitudes"}
            text={"Solicitudes"}
            icon={"file-diff"}
            onClick={() => {setPagina("Solicitudes")}}
          />
          <hr />
          <IconButton
            type={"Link"}
            linkto={"/dashboard/personas"}
            text={"Personas"}
            icon={"people-fill"}
            onClick={() => {setPagina("Personas")}}
          />
          <hr />
          <IconButton
            type={"Link"}
            linkto={"/dashboard/reportes"}
            text={"Reportes"}
            icon={"file-bar-graph"}
            onClick={() => {setPagina("Reportes")}}
          />
        </div>
        <div className='dashboard-item dashboard-container-bottom-left-bottom'>
          <IconButton
            type={"Link"}
            linkto={"/"}
            text={"Cerrar Sesión"}
            icon={"bi-box-arrow-in-left"}
          />
        </div>
      </div>
      <div className='dashboard-item dashboard-container-top-right'>
        <div className="dashboard-container-top-right-title">
          <img className="dashboard-container-top-right-title-image" src={"/icons/rectangulo.svg"} alt="journal-icon" />
          <h3 className='dashboard-container-top-right-title-text'>Centros de conciliación</h3>
          <h3 className='dashboard-container-top-right-title-text-hint'>{pagina}</h3>
        </div>
      </div>
      <div className='dashboard-item dashboard-container-bottom-right'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard