import React from 'react'
import { Buscador, Button, Popup } from '../../../components'
import TarjetaPersonas from '../../../components/Tarjeta/TarjetaPersonas'
import { useState, useEffect } from 'react'
// import css
import './Personas.css'
import { axiosTokenInstanceApiExpedientes } from '../../../helpers/axiosInstances'

function Personas() {

  const [estado, setEstado] = useState(false);

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)

  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/personas/?ordering=-id&count=14&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }),
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        if (page != 1) {
          setResultadosBusqueda([...resultadosBusqueda, ...result.data.results])
        } else {
          setResultadosBusqueda(result.data.results)
        }

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
    <div className='wrapp-personas'>
      {estado &&
        <Popup setEstado={setEstado} estado={estado} />
      }
      <div className='search-load-bar'>
        <Buscador
          valoresBuscados={valoresBuscados}
          setValoresBuscados={setValoresBuscados}
          setPage={handlePageChange}
          required
        />

        <label>{valoresBuscados}</label>
        <svg onClick={() => setEstado(!estado)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people-fill icon-personas" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
        <button className='boton-cargar-personas'>Cargar Excel Estudiantes</button>
      </div>

      <div className='wrapp-tarjetas-personas' onScroll={e => handleScroll(e)}>
        {resultadosBusqueda.map(resultado => {
          console.log(resultado);
          return (
            <TarjetaPersonas
              titulo={resultado["nombres"]}
              apellidos={resultado["apellidos"]}
              correo={resultado["correo"]}
              celular={resultado["celular"]}
              rol={resultado["tipo_cargo"]}
            />
          )
        })}
        <Button
          onClick={e => { handlePageChange(page + 1) }}
          className="span2"
          text="Cargar más"
        />
      </div>

    </div>
  )
}

export default Personas
