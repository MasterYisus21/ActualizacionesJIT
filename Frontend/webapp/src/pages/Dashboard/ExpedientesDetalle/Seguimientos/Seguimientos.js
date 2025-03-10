
import React, { useEffect, useRef, useState } from 'react'

//importing css
import "./Seguimientos.css"
import { Form, Collapse } from 'react-bootstrap'
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances'
import { useParams } from 'react-router-dom'
import Seguimiento from './Seguimiento'
import { toast } from 'react-toastify'


function Seguimientos() {

  const [open, setOpen] = useState(false)
  const [seguimientos, setSeguimientos] = useState([])
  const [preguntas, setPreguntas] = useState([])
  const [mediosSeguimiento, setMediosSeguimiento] = useState([])
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  let resultados = useRef([]);
  let { id } = useParams();

  useEffect(() => {
    search()
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
          // console.log(result.data.results);
          setPreguntas(result.data.results)
        })
        .catch(err => {
          // console.log(err);
        });
  }, [open])

  useEffect(() => {
    if (page != 1) {
      search();
    }
  }, [page]);

  const handlePageChange = (page) => {
    if (page <= numPages) {
      setPage(page);
    }
  };

  const search = async () => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/seguimientos/?ordering=id&count=14&page=" + page,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data.results);
        if (page != 1) {
          resultados.current = [...resultados.current, ...result.data.results];
        } else {
          resultados.current = result.data.results;
        }
        setSeguimientos(resultados.current);
        setNumPages(Math.ceil(result.data.count / 14));
      })
      .catch(err => {
        // console.log(err);
      });
  };

  const handleScroll = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (
      e.target.scrollHeight - e.target.scrollTop - 300 <
      e.target.clientHeight
    ) {
      // console.log("almost bottom");
      handlePageChange(page + 1);
    }
  };

  const getMediosSeguimiento = () => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/medios_seguimiento/",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data.results);
        setMediosSeguimiento(result.data.results);
      })
      .catch(err => {
        // console.log(err);
      });
  }

  const createSeguimiento = (e) => {
    e.preventDefault()
    const data = {
      "recomendacion_al_usuario": e.target["recomendacion_al_usuario"].value,
      "medio_seguimiento_id": e.target["medio_seguimiento_id"].value,
      "se_cumplio_acuerdo": e.target["se_cumplio_acuerdo"].value == 'true',
      "seguimiento_efectivo": e.target["seguimiento_efectivo"].value == 'true',
      "respuestas": []
    }
    preguntas.map(pregunta => {
      data.respuestas.push({
        "pregunta_seguimiento_id": pregunta.id,
        "si_o_no": e.target[`pregunta${pregunta.id}`].value == 'true',
        "porque": e.target[`pregunta${pregunta.id}detalle`].value,
        "nombre": pregunta.nombre
      })
    })
    // console.log(data);
    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: `/expedientes/${id}/seguimientos`,
      // headers: req.headers,
      data: data
    })
      .then(result => {
        // console.log(result.data);
        e.target.reset();
        setOpen(false)
        setSeguimientos([...seguimientos, result.data])
        toast.success('La información se ha guardado con éxito', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
      .catch(err => {
        // console.log(err);
      });
  }


  return (
    <div className='seguimientos-container' onScroll={e => handleScroll(e)}>
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
                      onClick={e => { let el = document.getElementById(`pregunta${pregunta.id}detalle`); el.setAttribute('disabled', true); el.value = ""; el.removeAttribute('required') }}
                    // required
                    />
                    <Form.Check
                      // disabled
                      type={'radio'}
                      label={'No'}
                      name={`pregunta${pregunta.id}`}
                      value={false}
                      onClick={e => { let el = document.getElementById(`pregunta${pregunta.id}detalle`); el.removeAttribute('disabled'); el.setAttribute('required', true) }}
                    // required
                    />
                  </div>
                  <Form.Control as="textarea" id={`pregunta${pregunta.id}detalle`} name={`pregunta${pregunta.id}detalle`} placeholder="Detalle" style={{ height: '10rem' }} />
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
                // required
                />
                <Form.Check
                  // disabled
                  type={'radio'}
                  label={'No'}
                  value={false}
                  name="se_cumplio_acuerdo"
                // required
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
                required
              />
              <Form.Check
                // disabled
                type={'radio'}
                label={'No'}
                value={false}
                name="seguimiento_efectivo"
                required
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