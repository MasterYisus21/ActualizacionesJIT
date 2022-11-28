import React from 'react'

// Impirting css
import './Reportes.css'

function Reportes() {
  return (
    <form className="contenedor-principal-reportes">
      <img src={"/images/Reportes.png"}></img>
      <div className="contedor-encapsulamiento-gris">

          <div className="seleccionar-buscar">
              <div className='seleccionar-reporte'>
                  <label className="h3">Generar reporte</label><br></br>
                  <label className="h6">Seleccionar reporte</label><br></br>
                  <select className="input-reportes" required>
                      <option value=""></option>
                      <option value="1">Reporte de Información SNIES</option>
                      <option value="2">Consolidado</option>
                  </select>
              </div>
          </div>

          <div className="fecha-inicio-finalizacion">
              <img src={"/images/calendar.png"} className="iconos-reportes"></img>
              <input type="date" className="input-fecha" name='fechaInicio' placeholder="Fecha de inicio" required></input>
              <input type="date" className="input-fecha" name='fechaFinal' placeholder="Fecha de finalización" required></input>
              <img src={"/images/sobresalir.png"} className="iconos-reportes"></img>
          </div>
          <div>
              <button className="btn btn-reportes">Descargar</button>
          </div>
          <br />
      </div>
    </form>
  )
}

export default Reportes