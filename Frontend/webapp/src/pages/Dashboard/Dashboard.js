import React from 'react'

// import { Link } from "react-router-dom";

// Importing css
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-item dashboard-container-top-left'>
        <img src='/images/escudo_ugc.png' alt='escudo' />
      </div>
      <div className='dashboard-item dashboard-container-bottom-left'>bottom-left</div>
      <div className='dashboard-item dashboard-container-top-right'>top-right</div>
      <div className='dashboard-item dashboard-container-bottom-right'>bottom-right</div>
    </div>
  )
}

export default Dashboard