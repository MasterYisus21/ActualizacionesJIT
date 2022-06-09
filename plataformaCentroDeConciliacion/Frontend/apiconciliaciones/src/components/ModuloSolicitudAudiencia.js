import React from 'react'
import './css/ModuloSolicitudAudiencia.css';

function ModuloSolicitudAudiencia() {

  
    return (
        <>
            <div className='contenedor-principal-modulo-audiencia mt-3'> 
                <div className='titulo-informacion-audiencia '>  
                    <h2>Sesion de Audiencia</h2>    
                </div>  
                <div className='contenedor-citacion-descripcion container'>
                    <div class="registro">
                        <label for="exampleFormControlInput1" class="form-label">Fecha de la Sesión: </label>
                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class=" registro">
                        <label for="exampleFormControlInput1" class="form-label">Hora: </label>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option value="1">7:05</option>
                        <option value="2">15:30</option>
                        <option value="3">4:06</option>
                      </select>
                    </div>
                    <div class="registro">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion: </label> 
                        <textarea class="form-control h-50" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                        <div className=" registro">
                        <label for="exampleFormControlTextarea1" class="form-label">Tipo de medio: </label><br></br>
                        <div className='separador-virtual-presencial'>
                            <input className='class="custom-control-input"' name="flexRadioDefault" type='radio'></input>
                            <label for="exampleFormControlTextarea1" class="form-label">Virtual </label>
                            <input className='class="custom-control-input"' name="flexRadioDefault" type='radio'></input>
                            <label for="exampleFormControlTextarea1" class="form-label">Precencial </label> 
                            </div> 
                        </div>
                </div>
                <form className='contenedor-tabla-conciliador d-flex align-items-center flex-column '>  
                    <table className='table table-striped table-bordered '>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Medio</th>
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
        </>
    )
     
}
  
  export default ModuloSolicitudAudiencia