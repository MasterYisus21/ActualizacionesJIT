import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Buscador, Button, Tarjeta } from '../../../components'
import { axiosTokenInstanceApiSolicitudes } from '../../../helpers/axiosInstances';

/* import css */
import './Solicitudes.css'

function Solicitudes() {

  const outletContext = useOutletContext();
  // console.log(outletContext);
  const setPagina = outletContext?.setPagina


  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)

  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiSolicitudes({
      method: 'get',
      url: "/solicitudes/?ordering=-numero_radicado&count=14&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }),
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
    <div className='wrapp-solicitudes'>
      <Buscador
        valoresBuscados={valoresBuscados}
        setValoresBuscados={setValoresBuscados}
        setPage={handlePageChange}
        required
      />
      <div className='wrapp-tarjetas' onScroll={e => handleScroll(e)}>
        {resultadosBusqueda.map(resultadoBusqueda => {
          return (
            <Link key={"solicitud" + resultadoBusqueda["id"]} to={"detalle/" + resultadoBusqueda["id"]} className='text-decoration-none ' onClick={() => { setPagina("Radicado #" + resultadoBusqueda["numero_radicado"]) }}>
              <Tarjeta
                titulo={"Radicado #" + resultadoBusqueda["numero_radicado"]}
                radicado={resultadoBusqueda["numero_radicado"]}
                fecha={resultadoBusqueda["fecha_registro"]}
                estado={resultadoBusqueda["estado_expediente"]} />
            </Link>
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

export default Solicitudes