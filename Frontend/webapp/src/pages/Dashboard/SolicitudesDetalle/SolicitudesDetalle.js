
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import { BarRectangulo, SubtemaRectangulo } from "../../../components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import './SolicitudesDetalle.css'

function SolicitudesDetalle() {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [seccion1, setSeccion1] = useState(false);
  const [seccion2, setSeccion2] = useState(false);
  const [seccion3, setSeccion3] = useState(false);
  const [seccion4, setSeccion4] = useState(false);
  const [formulario, setFormulario] = useState(new FormData());
  const [filelength, setFilelength] = useState([]);

  function Crear_anexo() {
    const oldElement = document.getElementById("subir-anexo");
    const newElement = document.createElement("input");
    // const texto = document.createTextNode('Hola Mundo')
    newElement.classList.add("input");
    newElement.setAttribute("type", "file");
    newElement.setAttribute("className", "inputs-registrar-solicitud");
    // newElement.appendChild(texto);
    oldElement.appendChild(newElement);
  }

  const handleFile = (e) => {
    e.preventDefault();
    console.log(e.target.file.files[0]);
    let form = new FormData();
    for (const pair of formulario.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
      form.append(pair[0], pair[1]);
    }
    form.append("files", e.target.file.files[0]);
    setFormulario(form);
    setFilelength([...filelength, e.target.file.files[0].name]);
  };

  return (
    <div className="wrapp-main-detalle-solicitud">

      <div className="wrapp-introduccion">
        <label className="introduccion-texto-solicitud">
          Aquí podrás consultar y hacer seguimiento de tu caso.
        </label>
      </div>

      <div className="secciones-temas">
        {/* Parte 1 - DATOS SOLICITANTE ---------------------------------> */}

        <SubtemaRectangulo
          text="Datos Solicitante"
          icon="datos-solicitante"
          seccion={seccion1}
          setSeccion={setSeccion1}
        />

        <Collapse in={seccion1}>
          <div className="form-datos">
            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Tipo de documento"
            >
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
              >
                <option>Abre el menú para ver las opciones</option>
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

            <label className="subtitles-secciones">Tipo de Persona</label>
            <div className="d-flex gap-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Natural
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Jurídica
                </label>
              </div>
            </div>

            <label className="subtitles-secciones">Sexo y Género</label>
            <FloatingLabel controlId="floatingSelectGrid" label="Sexo">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
              >
                <option>Abre el menú para ver las opciones</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelectGrid" label="Género">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
              >
                <option>Abre el menú para ver las opciones</option>
              </Form.Select>
            </FloatingLabel>

            <label className="subtitles-secciones">
              Estrato y dirección de residencia
            </label>
            <FloatingLabel controlId="floatingSelectGrid" label="Estrato">
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
              >
                <option>Abre el menú para ver las opciones</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Dirección">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </div>
        </Collapse>

        {/* Parte 2 - DATOS DEL CONVOCADO --------------------------------->*/}

        <SubtemaRectangulo
          text="Datos del convocado"
          icon="datos-convocados"
          seccion={seccion2}
          setSeccion={setSeccion2}
        />

        <Collapse in={seccion2}>
          <div className="form-datos">
            <label className="subtitles-secciones">Identificación</label>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Tipo de documento"
            >
              <Form.Select
                className="inputs-registrar-solicitud"
                aria-label="Floating label select example"
              >
                <option>Abre el menú para ver las opciones</option>
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

            <label className="subtitles-secciones">Tipo de Persona</label>
            <div className="d-flex gap-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Natural
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Jurídica
                </label>
              </div>
            </div>

            <label className="subtitles-secciones">Datos Adicionales</label>
            <FloatingLabel controlId="floatingInputGrid" label="Dirección">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Telefono">
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Correo electrónico"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </div>
        </Collapse>

        {/* Parte 3 - DATOS DE LOS HECHOS ---------------------------------> */}

        <SubtemaRectangulo
          text="Hechos"
          icon="hechos"
          seccion={seccion3}
          setSeccion={setSeccion3}
        />

        <Collapse in={seccion3}>
          <div className="form-datos">
            <label className="subtitles-secciones">Lugar de los hechos</label>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Lugar de los hechos"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Describa los hechos ocurridos"
            >
              <Form.Control
                className="inputs-registrar-solicitud"
                as="textarea"
                placeholder=""
                style={{ height: "130px" }}
              />
            </FloatingLabel>
          </div>
        </Collapse>

        {/* Parte 4 - CARGAR DOCUMENTOS ---------------------------------> */}

        <SubtemaRectangulo
          text="Documentos"
          icon="documentos"
          seccion={seccion4}
          setSeccion={setSeccion4}
        />

        <Collapse in={seccion4}>
          <div className="form-datos">
            <label className="subtitles-secciones">Identificación</label>
            <Form.Control className="inputs-registrar-solicitud" type="file" />
            <label className="subtitles-secciones">Recibo Público</label>
            <Form.Control className="inputs-registrar-solicitud" type="file" />
            <label className="subtitles-secciones">Anexos</label>
            {filelength.map((valor) => {
              return (<div>{valor}</div>)
            })}

            <form className="form-datos" onSubmit={handleFile}>
              <div className="wrapp-input-load">
                <input className="inputs-subir-archivos" type="file" name="file"/>
                <h1>Arrastra el archivo que deseeas subir</h1>
              </div>
              <input type="submit" />
            </form>
            <div id="subir-anexo"></div>
            <button
              id="btn"
              onClick={() => Crear_anexo()}
              className="boton-subir-anexos"
            >
              Subir más anexos
            </button>
          </div>
        </Collapse>
      </div>
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