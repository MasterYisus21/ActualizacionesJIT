import React from 'react'
import { Link } from 'react-router-dom'
import { Buscador, Tarjeta } from '../../../components'

// Importing css
import './Expedientes.css'

function Expedientes() {
  return (
    <div className='wrapp-expedientes'>
      <Buscador />
      <div className='wrapp-tarjetas'>
        <Link to="detalle/119/datosgenerales" className='text-decoration-none '><Tarjeta titulo="Caso #119" />  </Link>
        <Link to="detalle/120/datosgenerales" className='text-decoration-none '><Tarjeta titulo="Caso #120" /> </Link>
        <Link to="detalle/117/datosgenerales" className='text-decoration-none '><Tarjeta titulo="Caso #117" /> </Link>
      </div>
    </div>
  )
}

export default Expedientes