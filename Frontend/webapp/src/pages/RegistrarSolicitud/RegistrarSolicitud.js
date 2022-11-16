import React from 'react'
import { BarRectangulo } from '../../components/BarRectangulo'
import SubtemaRectangulo from '../../components/BarRectangulo/SubtemaRectangulo'


// Importing css
import './RegistrarSolicitud.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function RegistrarSolicitud() {
  return (
    <div className='wrapp-main-registrar-solicitud'>

      <div className='heading-registrar-solicitud'>
        <BarRectangulo text = "Registrar Solicitud"/>
      </div>

      <div className='wrapp-introduccion'>
        <label className='introduccion-texto-solicitud'>Aquí  podrás consultar y hacer seguimiento de tu caso.</label>
      </div>

      <div className='secciones-temas'>

        <SubtemaRectangulo text = "Datos Solicitantes" icon ="datos-solicitante"/>
        <div className='form-datos'>
          
          <label className='subtitles-secciones'>Identificación</label>
          <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
            <Form.Select className='inputs-registrar-solicitud' aria-label="Floating label select example">
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
            <Form.Control className='inputs-registrar-solicitud' type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <label className='subtitles-secciones'>Fecha y lugar de expedición de documento</label>
          <FloatingLabel controlId="floatingInputGrid" label="Fecha de expedición de documento">
            <Form.Control className='inputs-registrar-solicitud' type="date" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Lugar de expedición">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>

          <label className='subtitles-secciones'>Nombre</label>
          <FloatingLabel controlId="floatingInputGrid" label="Nombres">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Apellidos">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>

          <label className='subtitles-secciones'>Tipo de Persona</label>
          <div className='d-flex gap-5'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                Natural
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label className="form-check-label" for="flexRadioDefault2">
                Jurídica
              </label>
            </div>
          </div>

          <label className='subtitles-secciones'>Sexo y Género</label>
          <FloatingLabel controlId="floatingSelectGrid" label="Sexo">
            <Form.Select className='inputs-registrar-solicitud' aria-label="Floating label select example">
              <option>Abre el menú para ver las opciones</option>
              <option value="1">Cédula de ciudadanía</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelectGrid" label="Género">
            <Form.Select className='inputs-registrar-solicitud' aria-label="Floating label select example">
              <option>Abre el menú para ver las opciones</option>
              <option value="1">Cédula de ciudadanía</option>
            </Form.Select>
          </FloatingLabel>

          <label className='subtitles-secciones'>Estrato y dirección de residencia</label>
          <FloatingLabel controlId="floatingSelectGrid" label="Estrato">
            <Form.Select className='inputs-registrar-solicitud' aria-label="Floating label select example">
              <option>Abre el menú para ver las opciones</option>
              <option value="1">Cédula de ciudadanía</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Dirección">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>
        
          <SubtemaRectangulo text = "Datos del convocado" icon ="datos-convocados"/>

          <label className='subtitles-secciones'>Identificación</label>
          <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
            <Form.Select className='inputs-registrar-solicitud' aria-label="Floating label select example">
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
            <Form.Control className='inputs-registrar-solicitud' type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <label className='subtitles-secciones'>Nombre</label>
          <FloatingLabel controlId="floatingInputGrid" label="Nombres">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Apellidos">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>

          <label className='subtitles-secciones'>Tipo de Persona</label>
          <div className='d-flex gap-5'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">
                Natural
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label className="form-check-label" for="flexRadioDefault2">
                Jurídica
              </label>
            </div>
          </div>

          <label className='subtitles-secciones'>Datos Adicionales</label>
          <FloatingLabel controlId="floatingInputGrid" label="Dirección">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Telefono">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>
          
          <SubtemaRectangulo text = "Hechos" icon ="hechos"/>
          <label className='subtitles-secciones'>Lugar de los hechos</label>
          <FloatingLabel controlId="floatingInputGrid" label="Lugar de los hechos">
            <Form.Control className='inputs-registrar-solicitud' type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Describa los hechos ocurridos">
            <Form.Control className='inputs-registrar-solicitud' as="textarea" placeholder="Mi nombre e s" style={{ height: '130px' }}/>
          </FloatingLabel>

          <SubtemaRectangulo text = "Documentos" icon ="documentos"/>
          
          <Form.Group controlId="formFile" className='inputs-registrar-solicitud'>
            <Form.Label>Documento de Identidad</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className='inputs-registrar-solicitud'>
            <Form.Label>Recibo Público</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <button className='boton-subir-anexos'>Subir más anexos</button>

        </div>
      </div>
    </div>
  )
}

export default RegistrarSolicitud