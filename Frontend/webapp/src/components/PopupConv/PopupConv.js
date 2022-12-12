import React from 'react'
import { useState, useCallback, useEffect } from "react"
// Import css
import './PopupConv.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function PopupConv({text, setEstado, estado}){
    const [sexos, setSexos] = useState([])
    const [generos, setGeneros] = useState([])
    const [estratosSocieconomicos, setEstratosSocieconomicos] = useState([])
    const [tiposPersona, setTiposPersona] = useState([])
    const [tiposDocumento, setTiposDocumento] = useState([])
    const [conv2, setConv2] = useState(false)
    return (
        <div className='wrapp-popup'>
            <div className='popup'>
                <div className='titulo-popup'>
                    <h1>Crear Persona Convocante</h1>
                </div>
                <div className='form-popup'>
                    <div className='wrapp-boton-cerrar'>
                        <svg className='boton-cerrar-popup' onClick={() => setEstado(!estado)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </div>

                    <div className='body-popup'>

                    <div className="form-datos">
            
            <label className="subtitles-secciones">Nombre</label>
            <FloatingLabel controlId="floatingInputGrid" label="Nombres">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Apellidos">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Fecha y lugar de nacimiento
            </label>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Fecha de nacimiento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="date"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Lugar de nacimiento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="tipo_documento"
                required
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {tiposDocumento.map(tipoDocumento => {
                  return (<option key={"tipoDocumento" + tipoDocumento["id"]} value={tipoDocumento["id"]}>{tipoDocumento["nombre"]}</option>)
                })}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Número de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <label className="subtitles-secciones">
              Fecha y lugar de expedición de documento
            </label>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Fecha de expedición de documento"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="date"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Lugar de expedición"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>


            <label className="subtitles-secciones">Tipo de Persona</label>
            <div className="d-flex gap-5">
              {tiposPersona.map(tipoPersona => {
                return (
                  <div key={"tipoPersona" + tipoPersona["id"]} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      {tipoPersona["nombre"]}
                    </label>
                  </div>
                )
              })}
            </div>

            <label className="subtitles-secciones">Sexo y Género</label>
            <FloatingLabel controlId="floatingSelectGrid" label="Sexo">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="sexo"
                required
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {sexos.map(sexo => {
                  return (<option key={"sexos" + sexo["id"]} value={sexo["id"]}>{sexo["nombre"]}</option>)
                })}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelectGrid" label="Género">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
                name="genero"
                required
              >
                <option value={""}>Abre el menú para ver las opciones</option>
                {generos.map(genero => {
                  return (<option key={"generos" + genero["id"]} value={genero["id"]}>{genero["nombre"]}</option>)
                })}
              </Form.Select>
            </FloatingLabel>

            <label className="subtitles-secciones">
              Datos adicionales
            </label>

            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingSelectGrid" label="Estrato">
                <Form.Select
                  className="col-inputs"
                  aria-label="Floating label select example"
                  name="estrato"
                  required
                >
                  <option value={""}>Abre el menú para ver las opciones</option>
                  {estratosSocieconomicos.map(estrato => {
                    return (<option key={"estratos" + estrato["id"]} value={estrato["id"]}>{estrato["nombre"]}</option>)
                  })}
                </Form.Select>
              </FloatingLabel>
                <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                  />
              </FloatingLabel>
            </div>

            <div className='col-detalle-solicitud'>
              <FloatingLabel controlId="floatingInputGrid" label="Celular">
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                  />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Correo">
                  <Form.Control
                    className="col-inputs"
                    type="text"
                    placeholder="name@example.com"
                  />
              </FloatingLabel>
            </div>

            <FloatingLabel controlId="floatingInputGrid" label="Dirección">
                <Form.Control
                  className="inputs-registrar-solicitud"
                  type="text"
                  placeholder="name@example.com"
                />
            </FloatingLabel>

            <label className="subtitles-secciones">Posee apoderado</label>
            <div className='col-detalle-solicitud'>
              <button
                onClick={() => setConv2(true)}
                type = "button"
                className={conv2 ? "boton-datos-apoderado-active" : "boton-datos-apoderado"} >
                Si
              </button>
              <button
                onClick={() => setConv2(false)}
                type = "button"
                className={conv2 ? "boton-datos-apoderado" : "boton-datos-apoderado-active"} >
                No
              </button>
            </div>
            
            {conv2 &&

              <>
                <label className="subtitles-secciones">Nombre</label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel controlId="floatingSelectGrid" label="Nombres ">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">
                  Identificación
                </label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Tipo de documento"
                  >
                    <Form.Select
                      className="col-inputs"
                      aria-label="Floating label select example"
                    >
                      <option>Abre el menú para ver las opciones</option>
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="Número de documento">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">
                  Fecha y lugar de expedición de documento
                </label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Fecha de expedición de documento"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="date"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Lugar de expedición"
                  >
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <label className="subtitles-secciones">Datos adicionales</label>
                <div className='col-detalle-solicitud'>
                  <FloatingLabel controlId="floatingSelectGrid" label="Tarjeta profesional ">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="correo">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

                <div className='col-detalle-solicitud'>
                  <FloatingLabel controlId="floatingSelectGrid" label="Teléfono">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingInputGrid" label="Celular">
                    <Form.Control
                      className="col-inputs"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </div>

              </>
              }

          </div>
                        
                    </div>
                    
                    <div className="wrapp-botones">
                        <button className='botones-popup'>Guardar</button>
                        <button className='botones-popup'>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}