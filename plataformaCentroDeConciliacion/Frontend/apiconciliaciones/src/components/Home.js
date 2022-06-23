import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'

function Home() {
  return (
    <div className='home'>
      <nav className='home-navbar'>
        <img className='' width={"200"} height={"200"} src='/icons/escudo_ugc_1.png' />
        {/* <div className='vertical-line'></div> */}
        <div className='home-navbar-login-button'><Link to="/login" className='btn btn-outline-success'> Ingresar </Link></div>
        <div className='home-navbar-title'>Centro de Conciliaciones</div>
        <div className='home-navbar-link'><Link to="/nueva-solicitud/crear" className='btn btn-outline-success'>Quiero hacer mi solicitud</Link></div>
      </nav>
      <div className='home-hero-section'>
        <video className='background-video' autoPlay controls = '' loop muted={true}>
          <source src="./videos/heroSection.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Home