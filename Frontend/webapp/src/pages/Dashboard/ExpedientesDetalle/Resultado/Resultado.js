import React, { useEffect, useRef, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';
import FileDownload from 'js-file-download'


// Importing css
import "./Resultado.css"

function Resultado() {

  const [tiposResultado, setTiposResultado] = useState([])
  const [previousData, setPreviousData] = useState(false)
  const [documentUploaded, setDocumentUploaded] = useState(false)
  const [fecha, setFecha] = useState(null)
  const [permisos, setPermisos] = useState([])

  let { id } = useParams();
  let uploadDocumentField = useRef()
  let resultadoId = useRef(null)

  const navigate = useNavigate();

  useEffect(() => {
    try {
      setPermisos(JSON.parse(localStorage.getItem("modulos")))
      console.log(JSON.parse(localStorage.getItem("modulos")));
    } catch {
      navigate("/", { replace: true });
    }
  }, []);

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
          console.log(result.data.id);
          resultadoId.current = result.data.id
          setPreviousData(true)
          setFecha(result.data.fecha)
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
      message: `¿Estás seguro de crear este resultado en el caso?, recuerda que este resultado ya no podrá ser modificado.`,
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

  const uploadDocument = (e) => {
    uploadDocumentField.current.click()
  }

  const handleDocumentChange = (e) => {
    console.log("document changed");
    console.log(resultadoId.current);
    const data = new FormData()
    data.append('files', e.target.files[0])
    axiosTokenInstanceApiExpedientes({
      method: 'patch',
      url: `/expedientes/${id}/resultados/${resultadoId.current}`,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(result => {
        console.log(result.data.id);
        setDocumentUploaded(true)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const downloadFormat = (e) => {
    console.log(resultadoId.current);
    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: `/expedientes/${id}/resultados/${resultadoId.current}/formato`,
      responseType: "blob",
      data: {},
    })
      .then(result => {
        console.log(result.data);
        FileDownload(result.data, 'resultado.docx')
      })
      .catch(err => {
        console.log(err);
      });
  }

  const downloadResult = (e) => {
    console.log(resultadoId.current);
    console.log('downloadResult');
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `/resultados/${resultadoId.current}`,
      responseType: "blob",
      data: {},
    })
      .then(result => {
        console.log(result.data);
        FileDownload(result.data, 'resultado.pdf')
      })
      .catch(err => {
        console.log(err);
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
          setFecha(result.data.fecha)
          resultadoId.current = result.data.id
          if (result.data.documento) {
            setDocumentUploaded(true)
          }
        }
      })
      .catch(err => {
        console.log(err);
      });

  }, [])



  return (
    <form className='resultado-container' onSubmit={e => saveResultado(e)}>
      <h2 className='center-text'>Resultado</h2>
      {fecha && <div className='h3'>Fecha: {fecha}</div>}
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
        <textarea type="text" className="form-control form-control-lg" id="acuerdos_resultado_expediente" name='acuerdos_resultado_expediente' style={{ height: "20rem" }} placeholder="Detalla el resultado del caso" required disabled={previousData} />
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
            <button className="resultado-button" type='button' onClick={e => { downloadFormat(e) }}>
              <img src='/icons/filetype-docx.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>DESCARGAR</p>
              {previousData && <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />}
            </button>
            <button className="resultado-button" type='button' onClick={e => uploadDocument(e)} disabled={documentUploaded && !permisos.includes("modulo_modificar_resultado")}>
              <img src='/icons/upload.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>CARGAR</p>
              {documentUploaded && <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />}
              <input ref={uploadDocumentField} type='file' style={{ display: "none" }} onChange={e => handleDocumentChange(e)}></input>
            </button>
            <button className="resultado-button" type='button' onClick={e => { downloadResult(e) }}>
              <img src='/icons/download.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>DESCARGAR</p>
              {documentUploaded && <img src='/icons/check-mark.svg' alt='imagen guardar' className="resultado-floating-corner" />}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Resultado