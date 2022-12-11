import React, { useEffect, useState } from 'react'
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

//Importing css

import './ManejoConflicto.css'

function ManejoConflicto() {

    const [escaladasConflicto, setEscaladasConflicto] = useState([])


    return (
        <form className='modulo-solicitud-content-main-manejo-conflicto-main'>
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
                        <input type="radio" id="intervencion_terceros" name="intervencion_terceros" value={true} />
                        <label htmlFor="si">SI</label><br />
                        <input type="radio" id="intervencion_terceros" name="intervencion_terceros" value={false} />
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