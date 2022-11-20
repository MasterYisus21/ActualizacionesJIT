import React from 'react'
import { BarRectanguloPequeño, Buscador, Tarjeta } from '../../../components'

// Importing css
import './Expedientes.css'

function Expedientes() {
  return (
    <div className='wrapp-expedientes'>
      <Buscador/>
      <div className='wrapp-tarjetas'>
        <Tarjeta/>  
        <Tarjeta/> 
        <Tarjeta/> 
      </div>
    </div>
  )
}

export default Expedientes