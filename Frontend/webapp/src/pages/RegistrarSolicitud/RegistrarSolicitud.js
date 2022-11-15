import React from 'react'
import { BarRectangulo } from '../../components/BarRectangulo'
import SubtemaRectangulo from '../../components/BarRectangulo/SubtemaRectangulo'


// Importing css
import './RegistrarSolicitud.css'

function RegistrarSolicitud() {
  return (
    <div>
      <div className='heading-registrar-solicitud'>
        <BarRectangulo text = "Registrar Solicitud"/>
      </div>
      <SubtemaRectangulo text = "Registrar Solicitud" icon ="datos-solicitante"/>
      <SubtemaRectangulo text = "Datos del convocado" icon ="datos-convocados"/>
      <SubtemaRectangulo text = "Hechos" icon ="hechos"/>
      <SubtemaRectangulo text = "Documentos" icon ="documentos"/>
    </div>
  )
}

export default RegistrarSolicitud