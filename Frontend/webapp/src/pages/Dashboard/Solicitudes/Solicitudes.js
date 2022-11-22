import React from 'react'
import { Buscador, Tarjeta } from '../../../components'

/* import css */
import './Solicitudes.css'

function Solicitudes() {
  return (
    <div className='wrapp-solicitudes'>
      <Buscador/>
      <div className='wrapp-tarjetas'>
        <Tarjeta titulo="Radicado #2022102243265"/>  
        <Tarjeta titulo="Radicado #2022102243265"/> 
        <Tarjeta titulo="Radicado #2022102243265"/> 
      </div>
    </div>
  )
}

export default Solicitudes