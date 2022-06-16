import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import config from '../../config.json'
import './css/ModuloSolicitudManejoConflicto.css';
import { useParams } from 'react-router-dom';

function ModuloSolicitudManejoConflicto() {
    const [escalaConflicto, setEscaladaConflicto] = useState("no")
    const [intervieneTercero, setIntervieneTercero] = useState(false)
    
    const alertContainer = useRef("");

    const UrlParams = useParams()

    useEffect(()=> {
        axios.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/manejos_conflicto")
        .then((response) => {
            console.log(response.data["Flag_interviene_tercero"] )
            setEscaladaConflicto(response.data["Flag_violencia"] ? "si":"no")
            setIntervieneTercero(response.data["Flag_interviene_tercero"])
        })
    }, [])

    const modificarManejoConflicto = (event) => {
        event.preventDefault()
        const data = {
            "Flag_interviene_tercero": intervieneTercero,
            "Flag_violencia": escalaConflicto == "no" ? false : true
        }
        axios.patch(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/manejos_conflicto", data)
        .then((response) => {
            alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Creado o actualizado correctamente</div>"
        })
    }

    return (
        <>
            <form className='modulo-solicitud-content-main-manejo-conflicto-main' onSubmit={(event) =>{modificarManejoConflicto(event)}}>
                <div className='modulo-solicitud-content-main-manejo-conflicto'>
                    <div className='modulo-solicitud-content-main-manejo-conflicto-titulo'>
                        <h4 className='tab'>Escalada del Conflicto</h4>
                        <hr />
                    </div>
                    <div className='modulo-solicitud-content-main-manejo-conflicto-form1'>
                        Escala del conflicto:
                        <select className="form-select modulo-solicitud-content-main-manejo-conflicto-form1-select" aria-label="Default select example" id="violencia" name='violencia' value={escalaConflicto} onChange={event => setEscaladaConflicto(event.target.value)} required>
                            <option value="si">Con violencia fisica</option>
                            <option value="no">Sin violencia fisica</option>
                        </select>
                    </div>
                    <br />
                    <div className='modulo-solicitud-content-main-manejo-conflicto-titulo'>
                        <h4 className='tab'>Intervención de terceros</h4>
                        <hr />
                    </div>

                    <div className='modulo-solicitud-content-main-manejo-conflicto-form1'>
                        Intervención directa de terceros
                        <input type="radio" id="si" name="intervencion_terceros" value="si" checked={intervieneTercero} onChange={() => {setIntervieneTercero(true)}}/>
                        <label htmlFor="si">SI</label><br />
                        <input type="radio" id="no" name="intervencion_terceros" value="no" checked={!intervieneTercero} onChange={() => {setIntervieneTercero(false)}}/>
                        <label htmlFor="no">NO</label><br />
                    </div>
                    <br />
                    <div ref={alertContainer}></div>
                </div>
                <div className='modulo-solicitud-content-main-manejo-conflicto-guardar'>
                    <button>
                        <img src='/images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                        <p>GUARDAR</p>
                    </button>
                    
                </div>
                
            </form>
        </>
    )
}

export default ModuloSolicitudManejoConflicto