// Import css
import './Popup.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useCallback, useEffect } from "react"
import { axiosTokenInstanceApiExpedientes } from "../../helpers/axiosInstances";


export default function Popup({text, setEstado, estado}){

    const [tiposDocumento, setTiposDocumento] = useState([])
    const [tiposCargo, setTiposCargo] = useState([])
    const [tiposGrupo, setTiposGrupo] = useState([])

    useEffect(() => {
        axiosTokenInstanceApiExpedientes({
          method: 'get',
          url: "/tipos_documento/?count=20",
          // headers: req.headers,
          data: {}
        })
          .then(result => {
            console.log(result.data);
            setTiposDocumento(result.data.results)
          })
          .catch(err => {
            console.log("error");
          });
      }, [])

      useEffect(() => {
        axiosTokenInstanceApiExpedientes({
          method: 'get',
          url: "/tipos_cargo/?count=20",
          // headers: req.headers,
          data: {}
        })
          .then(result => {
            console.log(result.data);
            setTiposCargo(result.data.results)
          })
          .catch(err => {
            console.log("error");
          });
      }, [])

      useEffect(() => {
        axiosTokenInstanceApiExpedientes({
          method: 'get',
          url: "/grupos/?count=20",
          // headers: req.headers,
          data: {}
        })
          .then(result => {
            console.log(result.data);
            setTiposGrupo(result.data.results)
          })
          .catch(err => {
            console.log("error");
          });
      }, [])

    return (
        <div className='wrapp-popup'>
           <Form className="secciones-temas" > 
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
                        <FloatingLabel controlId="nombres" label="Nombres">
                            <Form.Control className='inputs-personas' type="text" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInputGrid" label="Apellidos">
                            <Form.Control className='inputs-personas' type="text" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>

                    <label className='subtitles-secciones'>Identificación</label>
                    <div className='columnas-inputs'>
                    <FloatingLabel controlId="floatingSelectGrid" label="Tipo de documento">
                        <Form.Select className='inputs-personas' aria-label="Floating label select example">
          
                        <option value={""}>Abre el menú para ver las opciones</option>
                        {tiposDocumento.map(tipoDocumento => {
                            return (<option key={"tipoDocumento" + tipoDocumento["id"]} value={tipoDocumento["id"]}>{tipoDocumento["nombre"]}</option>)
                        })}
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInputGrid" label="Número de documento">
                        <Form.Control className='inputs-personas'type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    </div>

                    <label className='subtitles-secciones'>Tarjeta profesional</label>
                    <FloatingLabel controlId="floatingInputGrid" label="Número">
                        <Form.Control className=''type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <label className='subtitles-secciones'>Datos Adicionales</label>

                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingInputGrid" label="Correo Electrónico">
                            <Form.Control className='inputs-personas' type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInputGrid" label="Celular">
                            <Form.Control className='inputs-personas' type="number" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>

                    <div className='columnas-inputs'>
                        <FloatingLabel controlId="floatingSelectGrid" label="Cargo">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option value={""}>Abre el menú para ver las opciones</option>
                            {tiposCargo.map(tipoCargo => {
                                return (<option key={"tipoCargo" + tipoCargo["id"]} value={tipoCargo["id"]}>{tipoCargo["nombre"]}</option>)
                            })}
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelectGrid" label="Permiso">
                            <Form.Select className='inputs-personas' aria-label="Floating label select example">
                            <option value={""}>Abre el menú para ver las opciones</option>
                            {tiposGrupo.map(tipoGrupo => {
                                return (<option key={"tipoGrupo" + tipoGrupo["id"]} value={tipoGrupo["id"]}>{tipoGrupo["name"]}</option>)
                            })}
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    
                    <div className="wrapp-botones">
                        <button className='botones-popup'>Guardar</button>
                        <button className='botones-popup'>Cancelar</button>
                    </div>
                </div>
            </div>
            </Form>
        </div>
    )
}