import React from 'react'
import './css/moduloSolicitudAudiencia_registro.css';
import { Link, useParams } from 'react-router-dom';

function ModuloSolicitudAudiencia_registro() {

    const UrlParams = useParams()

    return (
        <div className='contenedor-principal-modulo-audiencia mt-3'>
            <div className='contenedor-boton-audiencia'>
                <Link to={'../'+ UrlParams["Id_solicitud"] +'/audiencias/'}> {/* Modifica la ruta al ID */}
                    <button className='boton-audiencia btn btn-primary'>regresar  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                    </svg></button>
                </Link>
            </div>
            <div className='titulo-informacion-audiencia mb-3'>
                <h1>Sesion de Audiencia</h1>
            </div>

            <div className='contenedor-asignacion-turnos p-2'>
                <label className='pt-3 h5 d-flex align-items-center'>Seleccione el conciliador que desea agregar</label>
                <div className='contenedor-citacion-descripcion'>

                    <div class="row m-0 p-4 pt-3">
                        <label class="h6">Fecha de la Sesión: </label>
                        <input type="date" class="form-control col mb-3" id="exampleFormControlInput1" placeholder="name@example.com"></input>

                        <label class="h6">Descripcion: </label>
                        <textarea className="form-control" rows="2"></textarea>
                    </div>

                    <div class="row m-0 p-4 pt-3">
                        <label class="h6">Hora: </label>
                        <select className="form-select mb-3">
                            <option selected>Seleccione</option>
                            <option value="1">7:05</option>
                            <option value="2">15:30</option>
                            <option value="3">4:06</option>
                        </select>
                        <label class="h6">Tipo de medio: </label><br></br>
                        <div className='separador-virtual-presencial'>
                            <input className='class="custom-control-input"' name="flexRadioDefault" type='radio'></input>
                            <label class="h6">Virtual </label>
                            <input className='class="custom-control-input"' name="flexRadioDefault" type='radio'></input>
                            <label class="h6">Presencial </label>
                        </div>
                        <input type="text" class="form-control col" placeholder="link"></input>
                    </div>
                </div>

            </div>
            <form className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
                <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas citadas</label>
                <table className='table table-striped table-bordered '>
                    <thead >
                        <tr>
                            <th>Clase del Convocado</th>
                            <th>Tipo de documento</th>
                            <th>Identificación</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16/07/2021</td>
                            <td>Pepito Cardenas Arias</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>16/07/2021</td>
                            <td>Pepito Cardenas Arias</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <form className='contenedor-tabla-audiencia d-flex align-items-center flex-column '>
                <label className='pt-3 h5 w-100 d-flex justify-content-start'>Personas que puedo citar</label>
                <table className='table table-striped table-bordered '>
                    <thead >
                        <tr>
                            <th>Clase del Convocado</th>
                            <th>Tipo de documento</th>
                            <th>Identificación</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16/07/2021</td>
                            <td>Pepito Cardenas Arias</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>16/07/2021</td>
                            <td>Pepito Cardenas Arias</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )

}

export default ModuloSolicitudAudiencia_registro