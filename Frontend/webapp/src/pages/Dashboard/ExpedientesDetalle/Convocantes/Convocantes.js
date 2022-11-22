import React from 'react'
import {useState} from 'react'

// Importing css
import './Convocantes.css'

function Convocantes() {

  const [estado, setEstado] = useState(false);  

  return (
    <>
      <div className='container-convocante'>
       
        <h2>Informacion del convocante</h2>
        <div className='navbar-convocante'>
          <input type="search" className="form-control rounded input-buscar" placeholder="Buscar Convocado" aria-label="Search" aria-describedby="search-addon" />
          <button className='boton-crear-convocante' onClick={()=> setEstado(!estado)}>Crear Convocante</button>
        </div>

        
  

        {estado &&
          <form className='registro-convocante mb-5'>
            <div className='container d-grid gap-3'>
              <label>Nombre</label>
              <div className='row gap-3 ps-3 px-3'>
                <input className="form-control rounded col" placeholder="Nombre(s)" name='nombres' required></input>
                <input className="form-control rounded col" placeholder="Apellidos" name='apellidos' required></input>
              </div>
            </div>
            <div className='container d-grid gap-3'>
              <label>Fecha de Nacimiento</label>
              <input type="date" className="form-control" placeholder="fecha de Nacimiento" name='fechaNacimiento' required></input>
            </div>
            <div className='container d-grid gap-3'>
              <label>Identificación</label>
              <select className="form-select" aria-label="Default select example" defaultValue="" name='tipoDocumento' required>
                <option value="">Tipo de Documento</option>
              </select>
              <input className="form-control rounded" type="number" min="0" placeholder="Número de documento" name='numeroDocumento' required></input>
            </div>
            <div className='container d-grid gap-3'>
              <label>Datos adicionales</label>
              <div className=' d-grid gap-3 ps-3 px-3'>
                <div className='row gap-3'>
                  <input type="email" className="form-control rounded col" placeholder="Correo" name="email" required></input>
                  <input type="text" className="form-control rounded col" placeholder="Teléfono" name='telefono' required></input>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name="sexo" required>
                    <option value="">Sexo</option>
                    
                    opcionesSexo
                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name="tipoPersona" required>
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name='tipoVivienda' required>
                    <option value="">Tipo de Vivienda</option>

                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name='estratoSocioeconomico' required>
                    <option value="">Estrato Socieconómico</option>

                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" required>
                    <option value="">Departamento</option>

                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" required>
                    <option value="">Ciudad</option>
                  </select>
                </div>
                <div className='row gap-3'>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" required>
                    <option value="">Localidad</option>
                  </select>
                  <select className="form-select col" aria-label="Default select example" defaultValue="" name='barrio' required>
                    <option value="">Barrio</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary me-3" id='boton-aceptar-registro-convocante'>Registrar</button>
          </form>}

        <form className='contenedor-tabla-convocante'>
          <table className='table table-striped table-bordered table-responsive '>
            <thead >
              <tr>
                <th>Clase del convocante</th>
                <th>Tipo de documento</th>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* {convocantes.map((dato) => {
                return (
                  <tr key={dato["Id"]}>
                    <td key={dato["Tipo_persona_Id"]}>{dato["Tipo_persona_Id"]["Nombre"]}</td>
                    <td key={dato["Tipo_documento_Id"]["Id"]}>{dato["Tipo_documento_Id"]["Nombre"]}</td>
                    <td key={dato["Identificacion"]}>{dato["Identificacion"]}</td>
                    <td key={dato["Nombres"]}>{dato["Nombres"] + ' ' + dato["Apellidos"]}</td>
                    <td><button className='boton-tabla-eliminar' value={dato["Identificacion"]} onClick={eliminarConvocante}>Eliminar</button></td>
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


export default Convocantes