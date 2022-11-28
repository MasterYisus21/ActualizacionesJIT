import React from 'react'
import { BarRectangulo } from '../../../components/BarRectangulo'
import { RectanguloCelular } from '../../../components/RectanguloCelular'
import './Solicitud.css'
function Solicitud() {
  return (
    <div>
      <div className='contenedor-rectangulo-verde'>
        <BarRectangulo text = "Consulta tu Soicitud"/>
      </div>
      <div className='contenedor-carta-consultar-expediente'>
        <div className='carta-consultar-expediente'>
          <div className='contenedor-rectangulo-pequeño-consultar'>
            <RectanguloCelular text="Radicado número 12345"/>
          </div>
          <div className='contenedor-cuerpo-consultar'>
            <div className='contenedor-radicado-fecha-estado'>
              <div className='contenedor-redicado-consultar'>
                <label className='titulos-consultar'>Radicado:</label>
                <label className='descripcion-consultar'>R2022102436546</label>
              </div>
              <div className='contenedor-fecha-consultar'>
                <label className='titulos-consultar'>Fecha:</label>
                <label className='descripcion-consultar'>24/10/2022</label>
              </div>
              <div className='contenedor-estado-consultar'>
                <label className='titulos-consultar'>Estado:</label>
                <label className='descripcion-consultar'>Audiencia Pendiente</label>
              </div>
            </div>
            <label className='titulos-consultar'>Comentario:</label>
            <label className='descripcion-consultar'>Es necesario anexar el registro civil</label>
            <div className='contenedor-carga-documentos'>
              <label className='titulos-consultar'>Cargar documentos solicitados</label>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solicitud