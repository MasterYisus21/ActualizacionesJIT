import React from 'react'
import { Buscador } from '../../../components'
import TarjetaPersonas from '../../../components/Tarjeta/TarjetaPersonas'

// import css
import './Personas.css'

function Personas() {
  return (
    <div className='wrapp-personas'>
      <div className='search-load-bar'>
        <Buscador/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-people-fill icon-personas" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
        </svg>
        <button>Cargar Excel</button>
      </div>
      <div className='wrapp-tarjetas-personas'>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        <TarjetaPersonas titulo="Juan Diego Benavidez C."/>
        </div>
    </div>
  )
}

export default Personas