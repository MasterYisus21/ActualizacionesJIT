
import React, { useEffect, useState } from 'react'

//importing css
import "./Seguimientos.css"
import { Form, Collapse } from 'react-bootstrap'
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances'
import { useParams } from 'react-router-dom'
import Seguimiento from './Seguimiento'

function Seguimientos() {

  const [open, setOpen] = useState(false)
  const [seguimientos, setSeguimientos] = useState([])
  const [preguntas, setPreguntas] = useState([])
  const [mediosSeguimiento, setMediosSeguimiento] = useState([])

  let { id } = useParams();

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/seguimientos/?ordering=id&count=20&page=1",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data.results);
        setSeguimientos(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    // console.log(preguntas.length === 0);
    if (open && preguntas.length === 0)
      axiosTokenInstanceApiExpedientes({
        method: 'get',
        url: "/preguntas_seguimiento/",
        // headers: req.headers,
        data: {}
      })
        .then(result => {
          console.log(result.data.results);
          setPreguntas(result.data.results)
        })
        .catch(err => {
          console.log(err);
        });
  }, [open])

  const getMediosSeguimiento = () => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/medios_seguimiento/",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data.results);
        setMediosSeguimiento(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const createSeguimiento = (e) => {
    e.preventDefault()
    const data = {
      "recomendacion_al_usuario": e.target["recomendacion_al_usuario"].value,
      "medio_seguimiento_id": e.target["medio_seguimiento_id"].value,
      "se_cumplio_acuerdo": e.target["se_cumplio_acuerdo"].value == 'true',
      "seguimiento_efectivo": e.target["seguimiento_efectivo"].value == 'true',
      "respuestas": [
        {
          "pregunta_seguimiento_id": 1,
          "si_o_no": false,
          "porque": "este es el por que en caso de que respondan no"


        },
        {
          "pregunta_seguimiento_id": 2,
          "si_o_no": true,
          "porque": "este es el por que en caso de que respondan no"
        }
      ]
    }
    preguntas.map(pregunta => {
        data.respuestas.push({
          "pregunta_seguimiento_id": pregunta.id,
          "si_o_no": e.target[`pregunta${pregunta.id}`].value == true,
          "porque": "este es el por que en caso de que respondan no"
        })
    })
    console.log(data);
  }


  return (
    <div className='seguimientos-container'>
      <br />
      <h2>Seguimientos</h2>
      {seguimientos.map((seguimiento, index) => {
        return (
          <Seguimiento key={seguimiento["id"]} index={index + 1} seguimiento={seguimiento} />
        )
      })}
      <button className='seguimientos-card' style={{ justifyContent: "center" }} onClick={() => setOpen(!open)}>
        <h3>+ Agregar Seguimiento</h3>
      </button>
      <Collapse in={open}>
        <div className={"seguimientos-card-content"}>
          <Form onSubmit={(e) => { createSeguimiento(e) }}>
            <Form.Group className="mb-3">
              <Form.Label className='h3'>Medio de Seguimiento</Form.Label>
              <Form.Select size="lg" name='medio_seguimiento_id' onFocus={e => { if (mediosSeguimiento.length === 0) { getMediosSeguimiento() } }} required>
                <option value="">Selecciona una opción</option>
                {mediosSeguimiento.map(dato => {
                  return (
                    <option key={`medioSeguimiento${dato.id}`} value={dato.id}>{dato.nombre}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            <br />
            {preguntas.map(pregunta => {
              console.log(pregunta);
              return (
                <div key={`pregunta${pregunta.id}`}>
                  <Form.Label className='h3'>{pregunta.nombre}</Form.Label>
                  <div className="mb-3" style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
                    <Form.Check
                      // disabled
                      type={'radio'}
                      label={'Si'}
                      name={`pregunta${pregunta.id}`}
                      value={true}
                    // id={`disabled-default-${type}`}
                    />
                    <Form.Check
                      // disabled
                      type={'radio'}
                      label={'No'}
                      name={`pregunta${pregunta.id}`}
                      value={false}
                      // id={`disabled-default-${type}`}
                    />
                  </div>
                  <Form.Control as="textarea" name={`pregunta${pregunta.id}detalle`} placeholder="Detalle" style={{ height: '10rem' }} />
                  <br />
                </div>
              )
            })}
            <Form.Label className='h3'>Recomendación al usuario</Form.Label>
            <Form.Control as="textarea" name='recomendacion_al_usuario' placeholder="Detalle" style={{ height: '10rem' }} />
            <br />
            <div>
              <Form.Label className='h3'>¿Se cumplió o se esta cumpliendo el acuerdo de conciliación?</Form.Label>
              <div className="mb-3" style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'Si'}
                  value={true}
                  name="se_cumplio_acuerdo"
                // id={`disabled-default-${type}`}
                />
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'No'}
                  value={false}
                  name="se_cumplio_acuerdo"
                // id={`disabled-default-${type}`}
                />
              </div>
              <br />
            </div>
            <Form.Label className='h3'>¿Fue efectivo el seguimiento?</Form.Label>
            <div className="mb-3" style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
              <Form.Check
                // disabled
                type={'radio'}
                label={'Si'}
                value={true}
                name="seguimiento_efectivo"
              // id={`disabled-default-${type}`}
              />
              <Form.Check
                // disabled
                type={'radio'}
                label={'No'}
                value={false}
                name="seguimiento_efectivo"
                  // id={`disabled-default-${type}`}
              />


              <button className="modulo-solicitud-content-main-column2-save-button">
                <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                <p>GUARDAR</p>
              </button>
            </div>
          </Form>
        </div>
      </Collapse>
    </div>
  )
}

export default Seguimientos