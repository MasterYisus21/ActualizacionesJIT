import React, { useEffect, useState } from 'react'
import './css/ModuloSolicitudHechos.css';

function ModuloSolicitudHechos() {

    const [departamentoOpciones, setDepartamentoOpciones] = useState([])
    const [ciudadesOpciones, setCiudadesOpciones] = useState([])

    useEffect(() => {
        setDepartamentoOpciones([
            {
                id: 2,
                nombre: "Bogotá D.C."
            },
            {
                id: 4,
                nombre: "Magdalena"
            },
            {
                id: 5,
                nombre: "Bolivar"
            }
        ])

        setCiudadesOpciones([
            {
                id: 1,
                nombre: "Bogotá"
            },
            {
                id: 2,
                nombre: "Santa Marta"
            },
            {
                id: 3,
                nombre: "Ocaña"
            },
            {
                id: 4,
                nombre: "Cartagena"
            },
        ])

    }, [departamentoOpciones, ciudadesOpciones]);

    return (
    <>
        <div className='modulo-solicitud-content-main-hechos'>
            <div className='modulo-solicitud-content-main-hechos-lugar'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h4>Lugar de los hechos</h4></div>
                <div className="mb-3">
                    <label htmlFor="Departamento" className="form-label">Departamento:</label>
                    <select class="form-select" aria-label="Default select example" id="Departamento" name='Departamento'>
                        <option selected disabled>Selecciona uno</option>
                        {departamentoOpciones.map(departamento => <option key={departamento["id"]} value={departamento["id"]} >{departamento["nombre"]} </option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Ciudad" className="form-label">Ciudad:</label>
                    <select class="form-select" aria-label="Default select example" id="Ciudad" name='Ciudad'>
                        <option selected disabled>Selecciona uno</option>
                        {ciudadesOpciones.map(ciudades => <option key={ciudades["id"]} value={ciudades["id"]} >{ciudades["nombre"]} </option>)}
                    </select>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-resumen'>
                <div>
                    <label for="resumen">Resumen de los hechos:</label>
                    <textarea class="form-control" rows="8" id="resumen" name="resumen"></textarea>
                </div>
                <div>
                    <label for="pretensiones">Pretensiones iniciales:</label>
                    <textarea class="form-control" rows="8" id="pretensiones" name='pretensiones'></textarea>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-determinacion-cuantia'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h4>Determinacion De la cuantia</h4></div>
                <div className="mb-3" style={{display: "flex", width: "35%", justifyContent: "space-evenly"}}>
                    <label htmlFor="cuantia" className="form-label">Cuantía:</label>
                    <input type="text" className="form-control" id="cuantia" name='cuantia' placeholder="" style={{width: "60%"}}/>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Cuantía indeterminada
                    </label>
                </div>
                <button className="modulo-solicitud-content-main-column2-save-button">
                    <img src='images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                    <p>GUARDAR</p>
                </button>
            </div>
        </div>
    </>
    )
}

export default ModuloSolicitudHechos