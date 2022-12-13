import React, { useEffect, useState } from 'react'
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

// Importing css
import "./Resultado.css"

function Resultado() {

  const [tiposResultado, setTiposResultado] = useState([])

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/tipos_resultado/",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
          setTiposResultado(result.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])


  return (
    <div className='resultado-container'>
      <h2 className='center-text'>Resultado</h2>
      <div className="">
        <label htmlFor="floatingTextarea2" className="form-label h4">Resultado del caso</label>
        <select type="text" className="form-select" id="Numero_caso" name='Numero_caso' placeholder={"Se generara automaticamente"}>
          <option selected>Selecciona una opción</option>
          {tiposResultado.map(tipoResultado => {
            return(<option value={tipoResultado["id"]}>{tipoResultado["nombre"]}</option>)
          })}
        </select>
      </div>
      <br />
      <div className="form-floating">
        <textarea type="text" className="form-control form-control-lg" id="floatingTextarea2" name='floatingTextarea2' style={{ height: "20rem" }} placeholder="Detalla el resultado del caso" />
        <label htmlFor="floatingTextarea2" className="form-label h4">Acuerdos</label>
      </div>
      <br />
      <div>
        <div className='resultado-button-container'>
          <div>
            <button className="resultado-button">
              <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>GUARDAR</p>
              <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />
            </button>
          </div>
          <div className='resultado-button-container-actions'>
            <button className="resultado-button">
              <img src='/icons/filetype-docx.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>DESCARGAR</p>
              <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />
            </button>
            <button className="resultado-button">
              <img src='/icons/upload.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>CARGAR</p>
              <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />
            </button>
            <button className="resultado-button">
              <img src='/icons/download.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>DESCARGAR</p>
              <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resultado