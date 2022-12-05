import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Buscador, Button } from '../../../../components';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

// Importing css
import './Convocantes.css'

function Convocantes() {

  const [estado, setEstado] = useState(false);

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)

  let { id } = useParams();
  let resultados = useRef([])

  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/convocantes/?ordering=-numero_caso&count=14&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }),
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        if (page != 1) {
          resultados.current = [...resultados.current, ...result.data.results]
        } else {
          resultados.current = result.data.results
        }
        setResultadosBusqueda(resultados.current)
        setNumPages(Math.ceil(result.data.count / 14))
      })
      .catch(err => {
        console.log("error");
      });
  }

  const handlePageChange = (page) => {
    if (page <= numPages) {
      setPage(page)
    }
  }

  const handleScroll = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (e.target.scrollHeight - e.target.scrollTop - 200 < e.target.clientHeight) {
      // console.log("almost bottom");
      handlePageChange(page + 1)
    }
  }

  useEffect(() => {
    setResultadosBusqueda([]);
    search()
  }, [valoresBuscados])

  useEffect(() => {
    if (page != 1) {
      search()
    }
  }, [page])

  return (
    <>
      <div className='container-convocante'>

        <h2>Informacion del convocante</h2>
        <div className='navbar-convocante'>
          <Buscador
            valoresBuscados={valoresBuscados}
            setValoresBuscados={setValoresBuscados}
            setPage={handlePageChange}
            required
          />
          <button className='boton-crear-convocante' onClick={() => setEstado(!estado)}>Crear Convocante</button>
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
            <button className="boton-crear-convocante" id='boton-aceptar-registro-convocante'>Registrar</button>
          </form>}

        <div className='contenedor-tabla-convocante' onScroll={e => handleScroll(e)}>
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
              {resultadosBusqueda.map((resultadoBusqueda) => {
                return (
                  <tr key={resultadoBusqueda["id"]}>
                    <td>{resultadoBusqueda["nombres_persona"]}</td> {/* Clase del convocado natural, juridica */}
                    <td>{resultadoBusqueda["tipo_documento_persona"]}</td>
                    <td>{resultadoBusqueda["identificacion_persona"]}</td>
                    <td>{resultadoBusqueda["nombres_persona"]}</td>
                    <td><button className='boton-tabla-eliminar' value={resultadoBusqueda["id"]} onClick={() => { }}>Eliminar</button></td>
                  </tr>
                )
              })}
            </tbody>
            <Button
              onClick={e => { handlePageChange(page + 1) }}
              className="span2"
              text="Cargar más"
            />
          </table>
        </div>
      </div>
    </>
  )
}


export default Convocantes