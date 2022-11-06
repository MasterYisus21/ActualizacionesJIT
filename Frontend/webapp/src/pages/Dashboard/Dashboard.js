import React from 'react'
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
          text={""}
          icon={"journal"}
        />
        <IconButton
          type={"Link"}
          linkto={"/dashboard/solicitudes"}
          text={""}
          icon={"file-diff"}
        />
      </div>
      <div className='dashboard-item dashboard-container-top-right'>top-right</div>
      <div className='dashboard-item dashboard-container-bottom-right'>bottom-right</div>
    </div>
  )
}

export default Dashboard