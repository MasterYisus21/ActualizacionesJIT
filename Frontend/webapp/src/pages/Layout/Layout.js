import React from 'react'
import { Outlet } from "react-router-dom";

// Import css
import './Layout.css'

function Layout() {
  return (
    <div className='layout'>
      {/* Layout */}


      {/* <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <div className='layout-footer' >
        Copyright 2022 | Vigilado MINEDUCACIÓN Y MINJUSTICIA
      </div>
    </div>
  )
}

export default Layout