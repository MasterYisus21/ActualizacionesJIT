import React, { useEffect, useState } from 'react'
import { Form, Collapse } from 'react-bootstrap'
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances'

export default function Seguimiento({ index, seguimiento }) {
  const [opened, setopened] = useState(false)
  const [data, setData] = useState([])
  const [mediosSeguimiento, setMediosSeguimiento] = useState([])



  useEffect(() => {
    //   console.log("seguimiento");
    // console.log(seguimiento);
    if (opened && mediosSeguimiento.length === 0) {

      setMediosSeguimiento([{
        id: seguimiento.medio_seguimiento_id,
        nombre: seguimiento.medio_seguimiento
      }])

      axiosTokenInstanceApiExpedientes({
        method: 'get',
        url: `/seguimientos/${seguimiento.id}`,
        // headers: req.headers,
        data: {}
      })
        .then(result => {
          console.log(result.data);
          setData(result.data)
        })
        .catch(err => {
          // console.log(err);
        });

    }
  }, [opened])


  return (
    <div className='seguimientos-container' style={{ gap: "0px" }}>
      <button className='seguimientos-card' onClick={e => setopened(!opened)}>
        <h3>Seguimiento #{index}</h3>
        <h4>Fecha: {seguimiento["fecha"]}</h4>
        <div className={'seguimientos-card-state ' + (seguimiento["seguimiento_efectivo"] ? "background-color-green" : "background-color-red")} />
      </button>
      <Collapse in={opened}>
        <div className={"seguimientos-card-content"}>
          <Form onSubmit={() => { console.log("Hola") }}>
            <Form.Group className="mb-3">
              <Form.Select size="lg" name='medio_seguimiento_id' disabled required>
                {/* <option value="">Selecciona una opción</option> */}
                {mediosSeguimiento.map(dato => {
                  return (
                    <option key={`medioSeguimiento${dato.id}`} value={dato.id}>{dato.nombre}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            <br />
            {data?.respuestas?.map(dato => {
              return (
                <div key={`pregunta${dato.id}`}>
                  <Form.Label className='h3'>{dato.nombre}</Form.Label>
                  <div className="mb-3" style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
                    <Form.Check
                      // disabled
                      type={'radio'}
                      label={'Si'}
                      name={`pregunta${dato.id}`}
                      defaultChecked={dato['si_o_no']}
                      disabled
                    />
                    <Form.Check
                      // disabled
                      type={'radio'}
                      label={'No'}
                      name={`pregunta${dato.id}`}
                      defaultChecked={!dato['si_o_no']}
                      disabled
                    />
                  </div>
                  <Form.Control as="textarea" defaultValue={dato.porque} placeholder="Detalle" style={{ height: '10rem' }} />
                  <br />
                </div>
              )
            })}
            
            <Form.Label className='h3'>Recomendación al usuario</Form.Label>
            <Form.Control as="textarea" placeholder="Detalle" style={{ height: '10rem' }} defaultValue={data["recomendacion_al_usuario"] ? data["recomendacion_al_usuario"] : ""} disabled />
            <br />
            <Form.Label className='h3'>¿Se cumplió o se esta cumpliendo el acuerdo de conciliación?</Form.Label>
            <div className="mb-3" style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
              <Form.Check
                disabled
                type={'radio'}
                label={'Si'}
                name="se_cumplio_acuerdo"
                defaultChecked={data['se_cumplio_acuerdo']}
              // id={`disabled-default-${type}`}
              />
              <Form.Check
                disabled
                type={'radio'}
                label={'No'}
                name="se_cumplio_acuerdo"
                defaultChecked={!data['se_cumplio_acuerdo']}
              // id={`disabled-default-${type}`}
              />
              {/* <button className="modulo-solicitud-content-main-column2-save-button">
                <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                <p>GUARDAR</p>
              </button> */}
            </div>
          </Form>
        </div>
      </Collapse>
    </div>
  )
}