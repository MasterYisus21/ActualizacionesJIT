import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BarRectangulo } from '../../components/BarRectangulo'
import { RectanguloCelular } from '../../components/RectanguloCelular'
import { axiosBasicInstanceApiSolicitudes } from '../../helpers/axiosInstances'

import { Link } from "react-router-dom";

// Importing css
import './Consultar.css'

function Consultar() {

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [documento, setDocumento] = useState(0)
  const [page, setPage] = useState(1)

  let currentPage = 1;

  const search = () => {

    // console.log(e.target.documento.value)
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/estados_solicitudes/" + documento + "/?ordering=-id&count=3&page=" + page,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setResultadosBusqueda([...resultadosBusqueda, ...result.data.results])
      })
      .catch(err => {
        console.log("error");
      });
  }

  useEffect(() => {
    setResultadosBusqueda([]);
    search()
  }, [documento])

  useEffect(() => {
    if (page != 1) {
      search()
    }
  }, [page])




  return (
    <div>
      <div className=''>
        <div className='contenedor-rectangulo-verde'>
          <BarRectangulo text="Consulta tu solicitud" />
        </div>
        <div className='contenedor-consultar-documento'>
          <div className='rectangulo-pregunta-documento'>
            <Row className="g-2">
              <Form onSubmit={e => { e.preventDefault(); setPage(1); setDocumento(e.target.documento.value); }}>
                <Col md className='seleccionable-cedula'>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Tipo de documento"
                  >

                    {/* seleccionable tipo de cedula */}

                    <Form.Select className='opciones-cedula' aria-label="Floating label select example">
                      <option>Abre el menú para ver las opciones</option>
                      <option value="1">Cédula de ciudadanía</option>
                      <option value="2">Cédula extranjera</option>
                      <option value="3">Tarjeta de Identidad</option>
                      <option value="1">Registro civil</option>
                      <option value="2">Pasaporte</option>
                      <option value="3">NIT</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md className='seleccionable-cedula'>
                  <FloatingLabel controlId="floatingInputGrid" label="Número de documento">
                    <Form.Control type="number" name="documento" required />
                  </FloatingLabel>
                </Col>
                <div className='contenedor-boton-buscar'>
                  <button className='boton-buscar-consultar'>Buscar<img className="icono-buscar-consultar" src={"./images/buscar.svg"} alt="" /></button>
                </div>
              </Form>
            </Row>


          </div>
        </div>
        <div className='cuerpo-consulta'>
          <div className='contenedor-casos-consulta'>
            {resultadosBusqueda.map(resultado => {
              return (
                <div className='carta-caso-consulta' key={resultado["id"]}>
                  <div className='contenedor-rectangulo-tarjeta-consultar'>
                    <RectanguloCelular text={resultado["numero_radicado"]} />
                  </div>
                  <div className='contenedor-caso-consulta'>
                    <div className='lado-izquierdo'>
                      <div className='orden-lado-izquierdo'>
                        <label className='estado-consulta'>Estado:</label>
                        <label className='fecha-consulta'>{resultado["estado_solicitud"]}</label>
                      </div>
                    </div>
                    <div className='centro'>
                      <div className='orden-centro'>
                        <label className='estado-consulta'>Radicado:</label>
                        <label className='fecha-consulta'>{resultado["numero_radicado"]}</label>
                      </div>
                    </div>
                    <div className='lado-derecho'>
                      <div className='orden-lado-izquierdo'>
                        <label className='estado-consulta'>Fecha:</label>
                        <label className='fecha-consulta'>{resultado["fecha_registro"]}</label>
                      </div>
                    </div>
                  </div>
                  <Link to={""} >entrar</Link>
                </div>
              )
            })}
            <button onClick={e => { setPage(page + 1) }} >Cargar mas</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultar