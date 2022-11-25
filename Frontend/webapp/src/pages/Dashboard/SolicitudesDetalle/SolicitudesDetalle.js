
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import './SolicitudesDetalle.css'

function SolicitudesDetalle() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div>
      <div className='contenedor-botones-detalle-solicitud'>
        <button className='boton-remitir' onClick={() => setOpen2(false) & setOpen(!open) & setOpen3(false) & setOpen4(false)} aria-controls="ejemplo">REMITIR</button>
        <button className='boton-rechazar' onClick={() => setOpen2(!open2) & setOpen(false) & setOpen3(false) & setOpen4(false)}  aria-controls="ejemplo">RECHAZAR</button>
        <button className='boton-incompleto' onClick={() => setOpen2(false) & setOpen(false) & setOpen3(!open3) & setOpen4(false)} aria-controls="ejemplo">INFORMACIÓN INCOMPLETA</button>
        <button className='boton-aceptar' onClick={() => setOpen2(false) & setOpen(false) & setOpen3(false) & setOpen4(!open4)} aria-controls="ejemplo">ACEPTAR SOLICITUD</button>
        <Collapse className='colapse-general' in={open}>
          <div id="ejemplo">
            <div className='contenedor-remitir' >
              <label className='titulo-remitir'>Centro de conciliación</label>
              <Form.Select className='seleccionable-centro-conciliacion' aria-label="Default select example">
                <option></option>
                <option value="1">JIT</option>
                <option value="2">CCA</option>
              </Form.Select>
              <label className='label-explicacion-remitir'>Escriba una nota explicando al usuario la razón de la remisión y los pasos a seguir para continuar con el proceso</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-remitir1-solicitud'>Remitir Solicitud</button>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse className='colapse-general' in={open2}>
          <div id="ejemplo">
            <div className='contenedor-rechazar' >
              <label className='label-explicacion-rechazar'>Escriba una nota explicando al usuario el por qué se rechaza o no se puede atender su solicitud</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-rechazar-solicitud'>Rechazar</button>
              </div>
            </div>
          </div>
        </Collapse>
        
        <Collapse className='colapse-general' in={open3}>
          <div id="ejemplo">
            <div className='contenedor-incompleto' >
              <label className='label-explicacion-rechazar'>Escriba una nota explicando al usuario que información hace falta o una razón del por qué se retorna su solicitud</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-devolver-solicitud'>Rechazar</button>
              </div>
            </div>
          </div>
        </Collapse>
        
        <Collapse className='colapse-general' in={open4}>
          <div id="ejemplo">
            <div className='contenedor-aceptar' >
              <div className='contenedor-campos-aceptar-caso'>
                <div className='izquierda-aceptar-caso'>
                  <label className='titulo-remitir'>Centro de conciliación</label>
                  <input className='input-aceptar-valor'></input>
                </div>
                <div className='derecha-aceptar-caso'>
                  <label className='titulo-remitir'>Centro de conciliación</label>
                  <Form.Select className='seleccionable-centro-conciliacion-aceptar' aria-label="Default select example">
                    <option></option>
                    <option value="1">JIT</option>
                    <option value="2">CCA</option>
                  </Form.Select>
                </div>
              </div>
              <label className='label-explicacion-remitir'>Escriba una nota explicando al usuario la razón de aprovación y los pasos a seguir para continuar con el proceso</label>
              <textarea className='campo-explicacion'></textarea>
              <div className='contenedor-boton-remitir'>
                <button className='boton-remitir-solicitud'>Aceptar solicitud</button>
              </div>  
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default SolicitudesDetalle