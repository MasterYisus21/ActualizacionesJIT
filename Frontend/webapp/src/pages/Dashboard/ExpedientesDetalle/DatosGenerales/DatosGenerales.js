import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

//importing axios instance
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances'

//Importing css
import './DatosGenerales.css'

function DatosGenerales() {

  const [solicitantesServicio, setSolicitantesServicio] = useState([])
  const [iniciosConflicto, setIniciosConflicto] = useState([])
  const [finalidadesServicio, setFinalidadesServicio] = useState([])
  const [areas, setAreas] = useState([])
  const [temas, setTemas] = useState([])
  const [subtemas, setSubtemas] = useState([])

  let { id } = useParams()


  //Fetch solicitanteServicioOptions
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/solicitantes_servicio" + "/?ordering=id&count=20&page=" + 1,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setSolicitantesServicio(result.data.results)
        // console.log(result)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // Fetch iniciosConflictoOptions
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/objetivos_servicio" + "/?ordering=id&count=20&page=" + 1,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setFinalidadesServicio(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // Fetch iniciosConflictoOptions
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/inicios_conflicto" + "/?ordering=id&count=20&page=" + 1,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setIniciosConflicto(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // Fetch areas
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/areas" + "/?ordering=id&count=20&page=" + 1,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setAreas(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // Fetch temas
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/temas" + "/?ordering=id&count=20&page=" + 1,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        //console.log(result.data);
        setTemas(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  // Fetch subtemas
  const fetchSubtemas = (tema) => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/temas/" + tema + "/?ordering=id&count=20&page=" + 1,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        //console.log(result.data);
        setSubtemas(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }

  //Fetch Database for initial Data
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        document.getElementById("Numero_caso").value = result.data["numero_caso"]
        document.getElementById("solicitante").value = result.data["solicitante_servicio_id"]
        document.getElementById("Inicio_conflicto_Id").value = result.data["inicio_conflicto_id"]
        document.getElementById("Tipo_servicio_Id").value = result.data["tipo_servicio_id"]
        document.getElementById("Caso_gratuito").checked = result.data["caso_gratuito"]
        document.getElementById("asunto_definible1").checked = result.data["asunto_juridico_definible"]
        document.getElementById("asunto_definible2").checked = !result.data["asunto_juridico_definible"]
        document.getElementById("Tema_Id").value = result.data["subtema_id"]
        // Falta arreglar la precarga del teme y subtema
        document.getElementById("Subtema_Id").value = result.data["subtema_id"]
      })
      .catch(err => {
        console.log("error");
      });
  }, [])

  return (
    <>
      <form className='modulo-solicitud-datos-generales-container' onSubmit={() => { }}>
        <div className='modulo-solicitud-content-main-column1'>
          <div className='center-text'><h2>Datos generales</h2></div>
          <br />
          <div className="mb-3">
            <label htmlFor="Numero_caso" className="form-label h4">ID del caso</label>
            <input type="text" className="form-control form-control-lg" id="Numero_caso" name='Numero_caso' placeholder={"Se generara automaticamente"} value={id} disabled />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="solicitante" className="form-label h4">Solicitante del Servicio:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="solicitante" name='solicitante' required>
              <option value={""}>Abre el menú para ver las opciones</option>
              {solicitantesServicio.map(solicitanteServicio => {
                return (<option key={"solicitanteServicio" + solicitanteServicio["id"]} value={solicitanteServicio["id"]}>{solicitanteServicio["nombre"]}</option>)
              })}
            </select>
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="Inicio_conflicto_Id" className="form-label h4">Hace cuánto inicio el conflicto:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Inicio_conflicto_Id" name='Inicio_conflicto_Id' required>
              <option value={""}>Abre el menú para ver las opciones</option>
              {iniciosConflicto.map(inicioConflicto => {
                return (<option key={"inicioConflicto" + inicioConflicto["id"]} value={inicioConflicto["id"]}>{inicioConflicto["nombre"]}</option>)
              })}
            </select>
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="fechasolicitud" className="form-label h4">Fecha de solicitud:</label>
            <input type="date" className="form-control form-control-lg" id="fechasolicitud" name='' disabled />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="Tipo_servicio_Id" className="form-label h4">Finalidad de adquisición del servicio:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Tipo_servicio_Id" name='Tipo_servicio_Id' required>
              <option value={""}>Abre el menú para ver las opciones</option>
              {finalidadesServicio.map(finalidadServicio => {
                return (<option key={"finalidadServicio" + finalidadServicio["id"]} value={finalidadServicio["id"]}>{finalidadServicio["nombre"]}</option>)
              })}
            </select>
          </div>
          <br />
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="Caso_gratuito" name='Caso_gratuito' />
            <label className="form-check-label h4" htmlFor="flexCheckChecked" >
              Caso Gratuito
            </label>
          </div>

        </div>
        <div className='modulo-solicitud-content-main-column2-form1'>
          <div><h2>Definición del asunto juridico</h2></div>
          <h4>¿Asunto juridico definible?</h4>
          <div className='d-flex'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible1" value="si" />
              <label className="form-check-label h4" htmlFor="asunto_definible1">
                SI
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="asunto_definible" id="asunto_definible2" value="no" />
              <label className="form-check-label h4" htmlFor="asunto_definible2">
                NO
              </label>
            </div>
          </div>
        </div>

        <div className='modulo-solicitud-content-main-column2-form2'>
          <div><h2>Area y Tema</h2></div>
          <div className="mb-3">
            <label htmlFor="Area_Id" className="form-label h4">Area:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Area_Id" name='Area_Id' required>
              <option value={""}>Abre el menú para ver las opciones</option>
              {areas.map(area => {
                return (<option key={"area" + area["id"]} value={area["id"]}>{area["nombre"]}</option>)
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Tema" className="form-label h4">Tema:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Tema_Id" name='Tema' required onChange={e => { fetchSubtemas(e.target.value) }}>
              <option value={""}>Abre el menú para ver las opciones</option>
              {temas.map(area => {
                return (<option key={"area" + area["id"]} value={area["id"]}>{area["nombre"]}</option>)
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Subtema_Id" className="form-label h4">Subtema:</label>
            <select className="form-select form-select-lg" aria-label="Default select example" id="Subtema_Id" name='Subtema_Id' required>
              <option value={""}>Abre el menú para ver las opciones</option>
              {subtemas.map(area => {
                return (<option key={"area" + area["id"]} value={area["id"]}>{area["nombre"]}</option>)
              })}
            </select>
          </div>
          <br />
          <div className='modulo-solicitud-content-main-column2-save-button-container'>
            <button className="modulo-solicitud-content-main-column2-save-button">
              <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
              <p>GUARDAR</p>
            </button>
          </div>
        </div>

      </form>
    </>
  )
}

export default DatosGenerales