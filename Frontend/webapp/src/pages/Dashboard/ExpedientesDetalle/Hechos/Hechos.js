import React from 'react'

//Importing css

import './Hechos.css'

function Hechos() {
  return (
    <form className='modulo-solicitud-content-main-hechos'>
            <div className='modulo-solicitud-content-main-hechos-lugar'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h6>Lugar de los hechos</h6></div>
                <div className="mb-3">
                    <label htmlFor="Departamento" className="form-label">Departamento:</label>
                    <select className="form-select form-select-sm" aria-label="Default select example" id="Departamento" name='Departamento' required>
                        <option value="" label={"Selecciona uno"} disabled></option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Ciudad" className="form-label">Ciudad:</label>
                    <select className="form-select form-select-sm" aria-label="Default select example" id="Ciudad" name='Ciudad' required>
                        <option value="" label={"Selecciona uno"} disabled></option>
                    </select>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-resumen'>
                <div>
                    <label htmlFor="resumen">Resumen de los hechos:</label>
                    <textarea className="form-control form-control-sm text-area-hechos" id="resumen" name="resumen" required></textarea>
                </div>
                <div>
                    <label htmlFor="pretensiones">Pretensiones iniciales:</label>
                    <textarea className="form-control form-control-sm text-area-hechos" id="pretensiones" name='pretensiones' required></textarea>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-determinacion-cuantia'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h6>Determinacion De la cuantia</h6></div>
                <div className="mb-3" style={{display: "flex", width: "35%", justifyContent: "space-evenly"}}>
                    <label htmlFor="cuantia" className="form-label">Cuantía:</label>
                    <input type="text" className="form-control form-control-sm" id="cuantia" name='cuantia' placeholder="" required />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Cuantía indeterminada
                    </label>
                </div>
                <div className={{display: "flex"}}>
                        <button className="modulo-solicitud-content-main-column2-save-button">
                        <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                    <p>GUARDAR</p>
                </button>
                </div>
            </div>
        </form>
  )
}

export default Hechos