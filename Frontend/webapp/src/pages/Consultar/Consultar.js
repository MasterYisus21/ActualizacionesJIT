import React from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BarRectangulo } from '../../components/BarRectangulo'
import { BarRectanguloPequeño } from '../../components/BarRectanguloPequeño'

import { Link } from "react-router-dom";

// Importing css
import './Consultar.css'

function Consultar() {
  return (
    <div>
      <div className=''>
        <div className='contenedor-rectangulo-verde'>
          <BarRectangulo text = "Consulta tu solicitud"/>
        </div>
        <div className='contenedor-consultar-documento'>
          <div className='rectangulo-pregunta-documento'>
            <Row className="g-2">
              <Col md className='seleccionable-cedula'>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Tipo de documento"
                >
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
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>

            </Row>
          </div>
        </div>
        <div className='cuerpo-consulta'>
          <div className='contenedor-casos-consulta'>
            <div className='carta-caso-consulta'>
              <div className='contenedor-rectangulo-tarjeta-consultar'>
                <BarRectanguloPequeño text = "Número de Radicado 12345"/>
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
                    <label className='fecha-consulta'>25/10/2022</label>
                  </div>
                </div>

              </div>
            </div>
            <div className='carta-caso-consulta'>
              <div className='contenedor-rectangulo-tarjeta-consultar'>
                <BarRectanguloPequeño text = "Número de Radicado 12345"/>
              </div>
              <div className='contenedor-caso-consulta'>
                <div className='lado-izquierdo'>
                  <div className='orden-lado-izquierdo'>
                    <label className='estado-consulta'>Estado:</label>
                    <label className='fecha-consulta'>Fecha:</label>
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
                    <label className='estado-consulta'>Asignada</label>
                    <label className='fecha-consulta'>25/10/2022</label>
                  </div>
                </div>

              </div>
            </div>
            <div className='carta-caso-consulta'>
              <div className='contenedor-rectangulo-tarjeta-consultar'>
                <BarRectanguloPequeño text = "Número de Radicado 12345"/>
              </div>
              <div className='contenedor-caso-consulta'>
                <div className='lado-izquierdo'>
                  <div className='orden-lado-izquierdo'>
                    <label className='estado-consulta'>Estado:</label>
                    <label className='fecha-consulta'>Fecha:</label>
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
                    <label className='estado-consulta'>Asignada</label>
                    <label className='fecha-consulta'>25/10/2022</label>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultar