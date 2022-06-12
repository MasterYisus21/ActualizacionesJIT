import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './css/ModuloSolicitudHechos.css';
import config from '../../config.json'

function ModuloSolicitudHechos() {

    const [departamentoOpciones, setDepartamentoOpciones] = useState([])
    const [ciudadesOpciones, setCiudadesOpciones] = useState([])

    useEffect(() => {
        axios.get(config.apiGatewayURL + "/departamentos")
        .then((response) => {
            setDepartamentoOpciones(response.data)
        })

    }, []);

    const obtenerCiudadesOpciones = (e) => {
        axios.get(config.apiGatewayURL + "/ciudades/" + e.target.value)
        .then((response) => {
            setCiudadesOpciones(response.data)
        })
    }

    return (
    <>
        <div className='modulo-solicitud-content-main-hechos'>
            <div className='modulo-solicitud-content-main-hechos-lugar'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h4>Lugar de los hechos</h4></div>
                <div className="mb-3">
                    <label htmlFor="Departamento" className="form-label">Departamento:</label>
                    <select className="form-select" aria-label="Default select example" id="Departamento" name='Departamento' onChange={e => obtenerCiudadesOpciones(e)}>
                        <option selected disabled>Selecciona uno</option>
                        {departamentoOpciones.map(departamento => <option key={departamento["Id"]} value={departamento["Id"]} >{departamento["Nombre"]} </option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Ciudad" className="form-label">Ciudad:</label>
                    <select className="form-select" aria-label="Default select example" id="Ciudad" name='Ciudad'>
                        <option selected disabled>Selecciona uno</option>
                        {ciudadesOpciones.map(ciudades => <option key={ciudades["Id"]} value={ciudades["Id"]} >{ciudades["Nombre"]} </option>)}
                    </select>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-resumen'>
                <div>
                    <label htmlFor="resumen">Resumen de los hechos:</label>
                    <textarea class="form-control" rows="8" id="resumen" name="resumen"></textarea>
                </div>
                <div>
                    <label htmlFor="pretensiones">Pretensiones iniciales:</label>
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