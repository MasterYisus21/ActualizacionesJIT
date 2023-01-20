import React from 'react'
import './EvaluacionServicio.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';

function EvaluacionServicio() {
  return (

    <div>
      <div className='titulo-caras'>
        <label className='titulo-encuesta'>Selecciona de 1 a 5 tu calificación, siendo 1 el más bajo y 5 el más alto</label>
      </div>
      <br />
      <div className='contenedor-tabla-encuesta'>
        <table className='tabla-encuesta'>
          <tr className=''>
            <th></th>
            <th>
              <img className="imagen-caras-encuesta" src={"/images/caras-png.png"} alt="" />
            </th>
          </tr>
          <tr className=''>
            <td className='encuesta-contenedor-pregunta'>
              Servicio recibido por parssssssssssssssssssssssssssssssssssssssssssssssssssste del conciliador
            </td>
            <td className='text-center td-encuesta-checkbox-container'> 
              <ButtonToolbar className='encuesta-checkbox-container' aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" >
                  <Button className='cal-1'>1</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" >
                  <Button className='cal-2'>2</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" >
                  <Button className='cal-3'>3</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" >
                  <Button className='cal-4'>4</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button className='cal-5'>5</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </td>
          </tr>
        </table>
      </div>
      <div className='pregunta-medio-conocimiento'>
        <label className='label-medio'>Medio por el cual conoció el servicio</label>
        <Form.Select className='seleccionable-medio' aria-label="Default select example">
          <option></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className='contenedor-boton-enviar-encuesta'>
        <button className='boton-enviar-encuesta'>Enviar</button>
      </div>
    </div>
  )
}

export default EvaluacionServicio