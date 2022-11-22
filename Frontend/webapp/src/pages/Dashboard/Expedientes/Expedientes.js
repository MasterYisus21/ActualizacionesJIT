import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Buscador, Tarjeta } from '../../../components'

// Importing css
import './Expedientes.css'

function Expedientes() {
  // Getting outlet context
  const outletContext = useOutletContext();
  // console.log(outletContext);
  const setPagina = outletContext?.setPagina

  return (
    <div className='wrapp-expedientes'>
      <Buscador />
      <div className='wrapp-tarjetas'>
        <Link to="detalle/119/datosgenerales" className='text-decoration-none ' onClick={() => { setPagina("Caso #119") }}><Tarjeta titulo="Caso #119" />  </Link>
        <Link to="detalle/120/datosgenerales" className='text-decoration-none ' onClick={() => { setPagina("Caso #120") }}><Tarjeta titulo="Caso #120" /> </Link>
        <Link to="detalle/117/datosgenerales" className='text-decoration-none ' onClick={() => { setPagina("Caso #117") }}><Tarjeta titulo="Caso #117" /> </Link>
      </div>
    </div>
  )
}

export default Expedientes