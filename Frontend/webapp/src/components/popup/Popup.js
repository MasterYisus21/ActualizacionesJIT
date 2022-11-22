import React from 'react'

// import css
import './Popup.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Popup({text, setEstado, estado}){
    return (
        <div className='wrapp-popup'>
            <div className='popup'>
                <div className='titulo-popup'>
                    <h1>Crear Persona</h1>
                </div>
                <div className='form-popup'>
                    <div className='wrapp-boton-cerrar'>
                        <svg className='boton-cerrar-popup' onClick={() => setEstado(!estado)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </div>

                    <label className='subtitles-secciones'>Nombre</label>
                    <div className='columnas-inputs'>

                    <FloatingLabel controlId="floatingInputGrid" label="Nombres">
                        <Form.Control className='inputs-personas' type="text" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInputGrid" label="Apellidos">
                        <Form.Control className='inputs-personas' type="text" placeholder="name@example.com" />
                    </FloatingLabel>
                    </div>

                    <label className='subtitles-secciones'>Fecha de Nacimiento</label>
                    <FloatingLabel controlId="floatingInputGrid" label="Fecha de nacimiento">
                        <Form.Control className='input-fecha-nacimiento' type="date" placeholder="name@example.com" />
                    </FloatingLabel>

                    <label className='subtitles-secciones'>Identificación</label>
                    <div className='columnas-inputs'>
                    <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
                        <Form.Select className='inputs-personas' aria-label="Floating label select example">
                        <option>Abre el menú para ver las opciones</option>
                        <option value="1">Cédula de ciudadanía</option>
                        <option value="2">Cédula extranjera</option>
                        <option value="3">Tarjeta de Identidad</option>
                        <option value="1">Registro civil</option>
                        <option value="2">Pasaporte</option>
                        <option value="3">NIT</option>
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInputGrid" label="Número de documento">
                        <Form.Control className='inputs-personas'type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    </div>

                    <label className='subtitles-secciones'>Datos Adicionales</label>

                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingInputGrid" label="Correo Electrónico">
                            <Form.Control className='inputs-personas' type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInputGrid" label="Telefono">
                            <Form.Control className='inputs-personas' type="number" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>

                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingSelectGrid" label="Sexo">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelectGrid" label="Tipo Persona">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    
                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingSelectGrid" label="Tipo Vivienda">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelectGrid" label="Estrato Socioeconómico">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>

                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingSelectGrid" label="Departamento">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelectGrid" label="Ciudad">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>

                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingSelectGrid" label="Localidad">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelectGrid" label="Barrio">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>

                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingSelectGrid" label="Perfil">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelectGrid" label="Tipo Cargo">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option>Elige una</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula extranjera</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    
                    <h2>Mundo</h2>
                </div>
            </div>
        </div>
    )
}