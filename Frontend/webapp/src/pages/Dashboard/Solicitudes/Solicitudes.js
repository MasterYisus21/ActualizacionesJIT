import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Buscador, Tarjeta } from '../../../components'

/* import css */
import './Solicitudes.css'

function Solicitudes() {

  const outletContext = useOutletContext();
  // console.log(outletContext);
  const setPagina = outletContext?.setPagina

  return (
    <div className='wrapp-solicitudes'>
      <Buscador />
      <div className='wrapp-tarjetas'>
        <Link to="detalle/119" className='text-decoration-none ' onClick={() => { setPagina("Radicado #2022102243265") }}><Tarjeta titulo="Radicado #2022102243265" />  </Link>
        <Link to="detalle/119" className='text-decoration-none ' onClick={() => { setPagina("Radicado #2022102243265") }}><Tarjeta titulo="Radicado #2022102243265" /></Link>
        <Link to="detalle/119" className='text-decoration-none ' onClick={() => { setPagina("Radicado #2022102243265") }}><Tarjeta titulo="Radicado #2022102243265" /></Link>
      </div>
    </div>
  )
}

export default Solicitudes