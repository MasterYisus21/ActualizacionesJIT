import React, { useState } from 'react'
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

  const currentPage = 1;

  const search = (e) => {
    e.preventDefault()
    // console.log(e.target.documento.value)
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/estados_solicitudes/" + e.target.documento.value + "/?ordering=-id&count=3",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        // console.log(result.data);
        setResultadosBusqueda(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }

  return (
    <div>
      <div className=''>
        <div className='contenedor-rectangulo-verde'>
          <BarRectangulo text="Consulta tu solicitud" />
        </div>
        <div className='contenedor-consultar-documento'>
          <div className='rectangulo-pregunta-documento'>
            <Row className="g-2">
              <Form onSubmit={e => { search(e) }}>
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
                <div className='carta-caso-consulta'>
                  <div className='contenedor-rectangulo-tarjeta-consultar'>
                    <RectanguloCelular text="Número de Radicado 12345" />
                  </div>
                  <div className='contenedor-caso-consulta'>
                    <div className='lado-izquierdo'>
                      <div className='orden-lado-izquierdo'>
                        <label className='estado-consulta'>Estado:</label>
                        <label className='fecha-consulta'>Asignada</label>
                      </div>
                    </div>
                    <div className='centro'>
                      <div className='orden-centro'>
                        <label className='estado-consulta'>Radicado:</label>
                        <label className='fecha-consulta'>R2022102436546</label>
                      </div>
                    </div>
                    <div className='lado-derecho'>
                      <div className='orden-lado-izquierdo'>
                        <label className='estado-consulta'>Fecha:</label>
                        <label className='fecha-consulta'>{resultado["fecha_registro"]}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultar