import React, { useEffect, useState } from 'react'
import { Form, Collapse } from 'react-bootstrap'

export default function Seguimiento({ index, seguimiento }) {
    const [opened, setopened] = useState(false)
    const [preguntas, setPreguntas] = useState([])



    useEffect(() => {
    //   console.log("seguimiento");
    //   console.log(seguimiento);
      setPreguntas([
        { enunciado: "¿Se cumplió o se esta cumpliendo el acuerdo de conciliación?" },
        { enunciado: "¿El acuerdo alcanzao en la conciliación fue llevado a proceso judicial?" },
        { enunciado: "¿Existe reincidencia del conflicto con que se acordó en el caso de conciliación?" },
      ])

      return () => {
        setPreguntas([])
      }
    }, [])


    return (
      <div className='seguimientos-container' style={{ gap: "0px" }}>
        <button className='seguimientos-card' onClick={e => setopened(!opened)}>
          <h3>Seguimiento #{index}</h3>
          <h4>Fecha: {seguimiento["fecha"]}</h4>
          <div className={'seguimientos-card-state ' + (seguimiento["estado"] ? "background-color-green" : "background-color-red")} />
        </button>
        <Collapse in={opened}>
          <div className={"seguimientos-card-content"}>
            <Form onSubmit={() => { console.log("Hola") }}>
              <Form.Group className="mb-3">
                <Form.Label className='h3'>Medio de Seguimiento</Form.Label>
                <Form.Select size="lg">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <br />
              <Form.Label className='h3'>¿Se cumplió o se esta cumpliendo el acuerdo de conciliación?</Form.Label>
              <div className="mb-3" style={{ display: "flex", gap: "2rem" }}>
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'Si'}
                // id={`disabled-default-${type}`}
                />
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'No'}
                // id={`disabled-default-${type}`}
                />
              </div>
              <Form.Control as="textarea" placeholder="Detalle" style={{ height: '10rem' }} />
              <br />
              <Form.Label className='h3'>¿El acuerdo alcanzado en la conciliación fue llevado a proceso judicial?</Form.Label>
              <div className="mb-3" style={{ display: "flex", gap: "2rem" }}>
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'Si'}
                // id={`disabled-default-${type}`}
                />
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'No'}
                // id={`disabled-default-${type}`}
                />
              </div>
              <Form.Control as="textarea" placeholder="Detalle" style={{ height: '10rem' }} />
              <br />
              <Form.Label className='h3'>¿Existe reincidencia del conflicto con que se acordó en el caso de conciliación?</Form.Label>
              <div className="mb-3" style={{ display: "flex", gap: "2rem" }}>
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'Si'}
                // id={`disabled-default-${type}`}
                />
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'No'}
                // id={`disabled-default-${type}`}
                />
              </div>
              <Form.Control as="textarea" placeholder="Detalle" style={{ height: '10rem' }} />
              <br />
              <Form.Label className='h3'>Recomendación al usuario</Form.Label>
              <Form.Control as="textarea" placeholder="Detalle" style={{ height: '10rem' }} />
              <br />
              <Form.Label className='h3'>¿Se cumplió o se esta cumpliendo el acuerdo de conciliación?</Form.Label>
              <div className="mb-3" style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'Si'}
                // id={`disabled-default-${type}`}
                />
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'No'}
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