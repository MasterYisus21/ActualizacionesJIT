import React from 'react'
import { Buscador, Tarjeta } from '../../../components'

// Importing css
import './Expedientes.css'

function Expedientes() {
  return (
    <div className='wrapp-expedientes'>
      <Buscador/>
      <div className='wrapp-tarjetas'>
        <Tarjeta titulo="Caso #119"/>  
        <Tarjeta titulo="Caso #119"/> 
        <Tarjeta titulo="Caso #117"/> 
      </div>
    </div>
  )
}

export default Expedientes