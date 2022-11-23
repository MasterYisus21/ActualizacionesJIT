import React from 'react'

//importing css
import "./Seguimientos.css"

function Seguimientos() {
  return (
    <div className='seguimientos-container'>
      <br />
      <h2>Seguimientos</h2>
      <br />
      <div className='seguimientos-card'>
        <h3>Seguimiento #1</h3>
        <h4>Fecha: 23/11/2022</h4>
        <div className='seguimientos-card-state background-color-red' />
      </div>
      <br />
      <div className='seguimientos-card'>
        <h3>Seguimiento #2</h3>
        <h4>Fecha: 23/11/2022</h4>
        <div className='seguimientos-card-state background-color-green' />
      </div>
      <br />
      <div className='seguimientos-card' style={{ justifyContent: "center" }}>
        <h3>+ Agregar Seguimiento</h3>
      </div>
    </div>
  )
}

export default Seguimientos