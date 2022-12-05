import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SearchableSelect } from '../../../../components';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

//Importing css

import './Hechos.css'

function Hechos() {

    const [departamento, setDepartamento] = useState("")
    const [ciudad, setCiudad] = useState("")

    // Getting solicitud id from urlParams
    let { id } = useParams();

    useEffect(() => {
        console.log(document.querySelector('[name="ciudad"]').value);

    }, [departamento])



    return (
        <form className='modulo-solicitud-content-main-hechos'>
            <div className='modulo-solicitud-content-main-hechos-lugar'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h6>Lugar de los hechos</h6></div>
                <div>
                    <label htmlFor="Departamento" className="form-label">Departamento:</label>
                    <SearchableSelect
                        axiosInstance={axiosTokenInstanceApiExpedientes}
                        url={"/paises/1"}
                        name={"departamento"}
                        identifier={"id"}
                        initialValue={""}
                        onChange={(val) => { setDepartamento(val); setCiudad("") }}
                    />
                </div>
                <div>
                    <label htmlFor="ciudad" className="form-label">Ciudad:</label>
                    <SearchableSelect
                        axiosInstance={axiosTokenInstanceApiExpedientes}
                        url={"/paises/1/departamentos/" + departamento}
                        name={"ciudad"}
                        identifier={"id"}
                        initialValue={""}
                        onChange={(val) => {setCiudad(val) }}
                    />
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
                <div className="mb-3" style={{ display: "flex", width: "35%", justifyContent: "space-evenly" }}>
                    <label htmlFor="cuantia" className="form-label">Cuantía:</label>
                    <input type="text" className="form-control form-control-sm" id="cuantia" name='cuantia' placeholder="" required />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Cuantía indeterminada
                    </label>
                </div>
                <div className={{ display: "flex" }}>
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