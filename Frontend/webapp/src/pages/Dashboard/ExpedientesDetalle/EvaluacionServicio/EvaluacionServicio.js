import React, { useEffect, useState } from 'react'
import './EvaluacionServicio.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function EvaluacionServicio() {

  const [previousData, setPreviousData] = useState(false)
  const [preguntas, setPreguntas] = useState([])
  const [respuestasData, setRespuestasData] = useState({
    "observacion": '',
    "medio_conocimiento_id": null,
    "respuestas": []
  })

  let { id } = useParams();


  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `expedientes/${id}/encuestas`,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        if (result.status == 204) {
          getRespuestas()
        } else {
          setRespuestasData(result.data)
          let tempPreguntas = []
          result.data["respuestas"].map(valor => {
            tempPreguntas.push({
              id: valor["pregunta_encuesta_id"],
              nombre: "cualquier valor temporal"
            })
          })
          setPreguntas(tempPreguntas)
          document.getElementById("medio-conocimiento").value = result.data.medio_conocimiento_id
          document.getElementById("medio-conocimiento").setAttribute('disabled', true)
          document.getElementById("observacion").value = result.data.observacion
          document.getElementById("observacion").setAttribute('disabled', true)
          setPreviousData(true)
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  //////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log(respuestasData);
  }, [respuestasData])
  //////////////////////////////////////////////////////////////////////////////////////////

  const getRespuestas = () => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/preguntas_encuesta/",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data.results);
        if (respuestasData["respuestas"].length === 0) {
          setPreguntas(result.data.results)
          let tempRespuestas = { ...respuestasData }
          result.data.results.map((pregunta) => {
            tempRespuestas["respuestas"].push({
              "pregunta_encuesta_id": pregunta.id,
              "calificacion": null
            })
          })
          setRespuestasData(tempRespuestas)
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const setValorRespuesta = (index, valor) => {
    console.log(index);
    console.log(valor);
    let tempRespuestas = { ...respuestasData }
    // tempRespuestas.findIndex(idPregunta)
    // const pos = tempRespuestas["respuestas"].map(e => e["pregunta_encuesta_id"]).indexOf(idPregunta);
    tempRespuestas["respuestas"][index]["calificacion"] = valor
    setRespuestasData(tempRespuestas)
  }

  const setMedioConocimiento = (valor) => {
    let tempRespuestas = { ...respuestasData }
    tempRespuestas["medio_conocimiento_id"] = valor
    setRespuestasData(tempRespuestas)
  }

  const setObservacion = (valor) => {
    let tempRespuestas = { ...respuestasData }
    tempRespuestas["observacion"] = valor
    setRespuestasData(tempRespuestas)
  }

  const saveEncuesta = () => {
    if (respuestasData["respuestas"].map(e => e["calificacion"]).indexOf(null) >= 0) {
      toast.warning('Tiene preguntas por responder aún.', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return
    }
    if (!respuestasData["medio_conocimiento_id"]) {
      toast.warning('Por favor complete el campo de medio de conocimiento.', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return
    }
    console.log(respuestasData["observacion"]);
    if (respuestasData["observacion"] == '') {
      toast.warning('Por favor complete el campo de observación.', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return
    }
    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: `expedientes/${id}/respuestas`,
      // headers: req.headers,
      data: respuestasData
    })
      .then(result => {
        console.log(result.data);
        let tempRespuestasData = {...respuestasData}
        tempRespuestasData.fecha = result.data.fecha
        setRespuestasData(tempRespuestasData)
        toast.success('Encuesta creada con exito.', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        setPreviousData(true)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (

    <div>
      {!previousData &&
        <div className='titulo-caras'>
          <label className='titulo-encuesta'>Selecciona de 1 a 5 tu calificación, siendo 1 el más bajo y 5 el más alto</label>
        </div>
      }
      {previousData &&
        <div className='titulo-caras'>
          <label className='titulo-encuesta'>{respuestasData["fecha"]}</label>
        </div>
      }
      <br />
      <div className='contenedor-tabla-encuesta'>
        <table className='tabla-encuesta'>
          <tr className=''>
            <th></th>
            <th>
              <img className="imagen-caras-encuesta" src={"/images/caras-png.png"} alt="" />
            </th>
          </tr>
          {preguntas.map((dato, index) => {
            return (
              <tr className=''>
                <td className='encuesta-contenedor-pregunta'>
                  {dato.nombre}
                </td>
                <td className='text-center td-encuesta-checkbox-container'>
                  <ButtonToolbar className='encuesta-checkbox-container' aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" >
                      <Button className={`cal-1 ${respuestasData["respuestas"][index]["calificacion"] == 1 ? 'cal-n-selected' : ''}`} onClick={e => { if (!previousData) { setValorRespuesta(index, 1) } }}>1</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" >
                      <Button className={`cal-2 ${respuestasData["respuestas"][index]["calificacion"] == 2 ? 'cal-n-selected' : ''}`} onClick={e => { if (!previousData) { setValorRespuesta(index, 2) } }}>2</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" >
                      <Button className={`cal-3 ${respuestasData["respuestas"][index]["calificacion"] == 3 ? 'cal-n-selected' : ''}`} onClick={e => { if (!previousData) { setValorRespuesta(index, 3) } }}>3</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" >
                      <Button className={`cal-4 ${respuestasData["respuestas"][index]["calificacion"] == 4 ? 'cal-n-selected' : ''}`} onClick={e => { if (!previousData) { setValorRespuesta(index, 4) } }}>4</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button className={`cal-5 ${respuestasData["respuestas"][index]["calificacion"] == 5 ? 'cal-n-selected' : ''}`} onClick={e => { if (!previousData) { setValorRespuesta(index, 5) } }}>5</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
      <div className='pregunta-medio-conocimiento'>
        <label className='label-medio'>Medio por el cual conoció el servicio</label>
        <Form.Select className='seleccionable-medio' aria-label="Default select example" id='medio-conocimiento' onChange={e => { setMedioConocimiento(e.target.value) }} disabled={previousData}>
          <option></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className='contenedor-tabla-encuesta'>
        <Form.Control as="textarea" placeholder="Observación" id="observacion" style={{ height: '10rem' }} onChange={e => { setObservacion(e.target.value) }} disabled={previousData} />
      </div>
      {!previousData &&
        <div className='contenedor-boton-enviar-encuesta'>
          <button className='boton-enviar-encuesta' onClick={e => { saveEncuesta(e) }}>Enviar</button>
        </div>
      }
    </div>
  )
}

export default EvaluacionServicio