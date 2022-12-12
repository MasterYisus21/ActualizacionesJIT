import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

//Importing css

import './ManejoConflicto.css'

function ManejoConflicto() {

    // Getting solicitud id from urlParams
    let { id } = useParams();

    const hechoId = useRef()

    // Fetch Database for initial Data
    useEffect(() => {
        axiosTokenInstanceApiExpedientes({
            method: 'get',
            url: "/expedientes/" + id + "/hechos",
            // headers: req.headers,
            data: {}
        })
            .then(result => {
                hechoId.current = result.data.results[0]["id"]
                document.getElementById("violencia").value = result.data.results[0]["flag_violencia"]
                document.getElementById("intervencion_terceros1").checked = result.data.results[0]["flag_interviene_tercero"]
                document.getElementById("intervencion_terceros2").checked = !result.data.results[0]["flag_interviene_tercero"]
            })
            .catch(err => {
                console.log("error");
            });
    }, [])

    // Save Data
    const saveInfo = (event) => {
        event.preventDefault()
        const data = {
            "flag_violencia": event.target.violencia.value,
            "flag_interviene_tercero": event.target.intervencion_terceros.value,
        }
        axiosTokenInstanceApiExpedientes({
            method: 'patch',
            url: `/hechos/${hechoId.current}`,
            // headers: req.headers,
            data: data
        })
            .then(result => {
                console.log(result.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <form className='modulo-solicitud-content-main-manejo-conflicto-main' onSubmit={e => saveInfo(e)}>
            <div className='modulo-solicitud-content-main-manejo-conflicto'>

                <div className='bloque_1'>
                    <div className='modulo-solicitud-content-main-manejo-conflicto-titulo'>
                        <h5 className='d-block'>Escalada del Conflicto</h5>
                        <hr />
                    </div>
                    <div className='modulo-solicitud-content-main-manejo-conflicto-form1'>
                        Escala del conflicto:
                        <select className="form-select form-select-sm modulo-solicitud-content-main-manejo-conflicto-form1-select" aria-label="Default select example" id="violencia" name='violencia' required>
                            <option value={true}>Con violencia fisica</option>
                            <option value={false}>Sin violencia fisica</option>
                        </select>
                    </div>
                </div>

                <div className='bloque_2'>
                    <div className='modulo-solicitud-content-main-manejo-conflicto-titulo'>
                        <h5 className='d-block'>Intervención de terceros</h5>
                        <hr />
                    </div>
                    <div className='modulo-solicitud-content-main-manejo-conflicto-form1'>
                        Intervención directa de terceros:
                        <input type="radio" id="intervencion_terceros1" name="intervencion_terceros" value={true} />
                        <label htmlFor="si">SI</label><br />
                        <input type="radio" id="intervencion_terceros2" name="intervencion_terceros" value={false} />
                        <label htmlFor="no">NO</label><br />
                    </div>
                    <br />
                </div>

                <div className='modulo-solicitud-content-main-manejo-conflicto-guardar'>
                    <button>
                        <img src={'/icons/save.svg'} alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                        <p>GUARDAR</p>
                    </button>

                </div>
            </div>
        </form>
    )
}

export default ManejoConflicto