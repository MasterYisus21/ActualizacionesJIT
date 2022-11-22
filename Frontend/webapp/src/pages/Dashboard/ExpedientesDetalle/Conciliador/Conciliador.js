import React from 'react'
import {useState} from 'react'

// Import css
import './Conciliador.css'

function Conciliador() {

  const [estado, setEstado] = useState(false);  

  return (
    <>
      <div className='container-conciliador'>
       
       <h2>Informacion del Conciliador</h2>
       <div className='navbar-conciliador'>
         <input type="search" className="form-control rounded input-buscar" placeholder="Buscar conciliador" aria-label="Search" aria-describedby="search-addon" />
         <button className='boton-crear-conciliador' onClick={()=> setEstado(!estado)}>Agregar Conciliador</button>
       </div>
        {estado &&
          <form className='contenedor-tabla-seleccion-conciliador mb-5 p-4 pb-3'>
            <label className='pb-3 h5'>Seleccione el conciliador que desea agregar</label>
            <table className='table table-striped table-bordered table-responsive'>
              <thead >
                <tr>
                  <th></th>
                  <th>Tipo de documento</th>
                  <th>Identificación</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio'></input></td>
                <td>Cedula</td>
                <td>1033816123</td>
                <td>Juan Diego Benavidez</td>
              </tr>
                {/* {conciliadoresDisponibles.map((dato, key) => {
                  return (
                    <tr>
                      <td><input className='class="custom-control-input"' name="identificacionPersona" type='radio' value={dato["Identificacion"]}></input></td>
                      <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                      <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                      <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
            <div className=''>
              <button type="submit" className="boton-crear-conciliador" id='boton-agregar-conciliador'> Agregar</button>
            </div>
          </form>
        }
        <form className='contenedor-tabla-convocado'>
          <table className='table table-striped table-bordered table-responsive '>
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
              <td>Natural</td>
              <td>Cedula</td>
              <td>1033816123</td>
              <td>Juan Diego Benavidez</td>
              <td><button className='boton-tabla-eliminar'>Eliminar</button></td>
            </tr>
              {/* {conciliadores.map((dato) => {
                return (
                  <tr key={dato["Id"]}>
                    <td key={dato["Tipo_persona_Id"]}>{dato["Tipo_persona_Id"]["Nombre"]}</td>
                    <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                    <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                    <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    <td><button className='boton-tabla-eliminar' value={dato["Identificacion"]} onClick={eliminarConciliadores}>Eliminar</button></td>
                  </tr>
                )
              })} */}
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default Conciliador