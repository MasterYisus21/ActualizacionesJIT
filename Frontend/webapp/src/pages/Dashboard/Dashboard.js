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
      <div className='dashboard-item dashboard-container-top-right'>top-right</div>
      <div className='dashboard-item dashboard-container-bottom-right'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard