import React, { useRef } from 'react'
import { Buscador, Button, Popup } from '../../../components'
import TarjetaPersonas from '../../../components/Tarjeta/TarjetaPersonas'
import { useState, useEffect } from 'react'
import FileDownload from 'js-file-download'


// import css
import './Personas.css'
import { axiosTokenInstanceApiExpedientes } from '../../../helpers/axiosInstances'

function Personas() {

  const [estado, setEstado] = useState(false);

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [filtros, setFiltros] = useState([])
  const [filtrosAplicados, setFiltrosAplicados] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)
  const [modificar, setModificar] = useState(null)
  const [id, setId] = useState([])
  let resultados = useRef([])

  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/personas/?ordering=-id&count=14&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }) + filtrosAplicados.map(valor => { return '&search=' + valor }),
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

  //fetching filters
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/tipos_cargo/?count=20",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data.results);
        setFiltros(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });

  }, [])

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

  const descargarFormatoCargarEstudiantes = () => {
    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: "/personas/formato",
      // headers: req.headers,
      responseType: "blob",
      data: {}
    })
      .then(result => {
        console.log(result.data);
        FileDownload(result.data, "formato_personas.xlsx")
      })
      .catch(err => {
        console.log("error");
      });
  }

  const cargarFormatoCargarEstudiantes = (e) => {

    let data = new FormData()
    data.append('file', e.target.files[0])

    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: "/personas/cargar",
      // headers: req.headers,
      headers: { "Content-Type": "multipart/form-data" },
      data: data
    })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    setResultadosBusqueda([]);
    search()
  }, [valoresBuscados])

  useEffect(() => {
    search()
  }, [filtrosAplicados])

  useEffect(() => {
    if (page != 1) {
      search()
    }
  }, [page])

  return (
    <div className='wrapp-personas'>
      {estado &&
        <Popup 
        setEstado={setEstado} 
        estado={estado} 
        setResultadosBusqueda={setResultadosBusqueda} 
        resultadosBusqueda={resultadosBusqueda} 
        modificar={modificar}
        setModificar={setModificar}
        id={id}
        />
      }
      <div className='search-load-bar'>
        <Buscador
          valoresBuscados={valoresBuscados}
          setValoresBuscados={setValoresBuscados}
          filtros={filtros}
          setFiltros={setFiltrosAplicados}
          setPage={handlePageChange}
          required
        />

        <label>{valoresBuscados}</label>

        <svg onClick={() => setEstado(!estado)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people-fill icon-personas" viewBox="0 0 16 16" >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>

        {/* <button className='boton-cargar-personas'>Cargar Excel Estudiantes</button> */}

        <form onSubmit={e => { e.preventDefault(); e.target.document.click() }}>
          <input type="file" name="document" style={{ display: "none" }} onChange={e => { cargarFormatoCargarEstudiantes(e) }} />
          <button className='boton-cargar-personas'>Cargar Excel Estudiantes</button>
        </form>

        <button className='boton-cargar-personas' onClick={e => descargarFormatoCargarEstudiantes()}>Descargar Formato</button>
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
              setEstado={setEstado} 
              estado={estado}
              modificar={modificar}
              setModificar={setModificar}
              id={resultado.id}
              setId={setId}
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
