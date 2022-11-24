import React from 'react'
import './EvaluacionServicio.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';

function EvaluacionServicio() {
  return (
    
    <div className='principal'>
      <div className='titulo-caras'>
        <label className='titulo-encuesta'>Selecciona de 1 a 5 tu calificación, siendo 1 el más bajo y 5 el más alto</label>
        <div className='contenedor-caras'>
          <img className="imagen-caras-encuesta" src={"/images/caras-png.png"} alt="" />
        </div>
      </div>
      <div className='contenedor-encuesta-calificacion'>
        <div className='contenedor-preguntas'>
          <label className='preguntas'>Servicio recibido por parte del conciliador</label>
          <label className='preguntas'>Puntualidad del conciliador</label>
          <label className='preguntas'>Dominio del tema del conciliador</label>
          <label className='preguntas'>Lenguaje utilizado del conciliador</label>
          <label className='preguntas'>Manejo de la audiencia del conciliador</label>
          <label className='preguntas'>Imparcialidad del conciliador</label>
          <label className='preguntas'>Servicio prestado por el centro</label>
          <label className='preguntas'>Satisfacción por la información que brinda el centro</label>
          <label className='preguntas'>Satisfacción por el tiempo de atención del centro</label>
        </div>
        <div className='contenedor-calificacion'>
        <ButtonToolbar className='grupo-botones' aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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

        <ButtonToolbar aria-label="Toolbar with button groups">
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
        </div>
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