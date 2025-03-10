import React from 'react'
import { BarRectangulo } from '../../../components/BarRectangulo'
import { RectanguloCelular } from '../../../components/RectanguloCelular'
import './Expediente.css'

function Expediente() {
  return (
    <div>
      <div className='contenedor-rectangulo-verde'>
        <BarRectangulo text = "Consulta tu expediente"/>
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
            <label className='titulos-consultar'>Programación de audiencia:</label>
            <label className='descripcion-consultar'>24/10/2022</label>
            <div className='contenedor-iconos-titulos-descarga'>
              <div className='contenedor-icono-titulo-carta'>
                <label className='titulos-consultar'>Descarga carta de citación</label>
                <div className='contenedor-imagenes-descargar-consultar'>
                  <img className="descargar-documentos-consultar" src="/icons/descarga-documento.svg" alt="" />
                </div>
              </div>
              <div className='contenedor-icono-titulo-resultado'>
                <label className='titulos-consultar'>Descarga Resultado</label>
                <div className='contenedor-imagenes-descargar-consultar2'>
                  <img className="descargar-documentos-consultar" src="/icons/descarga-documento.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expediente