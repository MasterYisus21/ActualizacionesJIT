import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { useParams } from 'react-router-dom';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

// Importing css
import "./Resultado.css"

function Resultado() {

  const [tiposResultado, setTiposResultado] = useState([])
  const [previousData, setPreviousData] = useState(false)

  let { id } = useParams();

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

  const saveResultado = (e) => {
    e.preventDefault()
    function createResultado(data) {
      // alert(`deleted person ${idPersona}`)
      axiosTokenInstanceApiExpedientes({
        method: 'post',
        url: `/expedientes/${id}/resultados`,
        // headers: req.headers,
        data: data
      })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });

    }
    const data = {
      "acuerdo": e.target.acuerdos_resultado_expediente.value,
      "tipo_resultado_id": parseInt(e.target.tipo_resultado_expediente.value)
    }
    confirmAlert({
      title: `Confirmación para crear resultado`,
      message: `¿Estas seguro de crear este resultado en el caso?, recuerda que este resultado ya no podra ser modificado.`,
      buttons: [
        {
          label: 'Si',
          onClick: () => createResultado(data)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  }

  // Get initialData
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `/expedientes/${id}/resultados`,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result);
        if (result.status === 200) {
          document.getElementById('acuerdos_resultado_expediente').value = result.data.acuerdo
          document.getElementById('tipo_resultado_expediente').value = result.data.tipo_resultado_id
          setPreviousData(true)
        }
      })
      .catch(err => {
        console.log(err);
      });

  }, [])



  return (
    <form className='resultado-container' onSubmit={e => saveResultado(e)}>
      <h2 className='center-text'>Resultado</h2>
      <div className="">
        <label htmlFor="floatingTextarea2" className="form-label h4">Resultado del caso</label>
        <select type="text" className="form-select" id="tipo_resultado_expediente" name='tipo_resultado_expediente' required disabled={previousData}>
          <option value="">Selecciona una opción</option>
          {tiposResultado.map(tipoResultado => {
            return (<option key={`tipoResultado${tipoResultado["id"]}`} value={tipoResultado["id"]}>{tipoResultado["nombre"]}</option>)
          })}
        </select>
      </div>
      <br />
      <div className="form-floating">
        <textarea type="text" className="form-control form-control-lg" id="acuerdos_resultado_expediente" name='acuerdos_resultado_expediente' style={{ height: "20rem" }} placeholder="Detalla el resultado del caso" required disabled={previousData}/>
        <label htmlFor="floatingTextarea2" className="form-label h4">Acuerdos o comentarios</label>
      </div>
      <br />
      <div>
        <div className='resultado-button-container'>
          <div>
            <button className="resultado-button" disabled={previousData}>
              <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>GUARDAR</p>
              {previousData && <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />}
            </button>
          </div>
          <div className='resultado-button-container-actions'>
            <button className="resultado-button" type='button' disabled={previousData}>
              <img src='/icons/filetype-docx.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>DESCARGAR</p>
              {previousData && <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />}
            </button>
            <button className="resultado-button" type='button'>
              <img src='/icons/upload.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>CARGAR</p>
              <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />
            </button>
            <button className="resultado-button" type='button'>
              <img src='/icons/download.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>DESCARGAR</p>
              <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Resultado