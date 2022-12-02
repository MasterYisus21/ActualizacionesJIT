import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Buscador, Button, Tarjeta } from '../../../components'
import { useState, useEffect } from 'react'
import { axiosBasicInstanceApiExpedientes, axiosTokenInstanceApiExpedientes } from '../../../helpers/axiosInstances'
// Importing css
import './Expedientes.css'

function Expedientes() {
  // Getting outlet context
  const outletContext = useOutletContext();
  // console.log(outletContext);
  const setPagina = outletContext?.setPagina

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [page, setPage] = useState(1)

  let currentPage = 1;

  const search = () => {

    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/?ordering=-numero_caso&count=10&page=" + page + valoresBuscados.map(valor => { return '&search=' + valor }),
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setResultadosBusqueda([...resultadosBusqueda, ...result.data.results])
      })
      .catch(err => {
        console.log("error");
      });

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
    <div className='wrapp-expedientes'>
      <Buscador valoresBuscados={valoresBuscados} setValoresBuscados={setValoresBuscados} required />

      <div className='wrapp-tarjetas'>
        {resultadosBusqueda.map(resultadoBusqueda => {
          return (
            <Link to={"detalle/" + resultadoBusqueda["id"] + "/datosgenerales"} className='text-decoration-none ' onClick={() => { setPagina("Caso #" + resultadoBusqueda["numero_caso"]) }}>
              <Tarjeta
                titulo={"Caso #" + resultadoBusqueda["numero_caso"]}
                radicado={resultadoBusqueda["numero_radicado"]}
                fecha={resultadoBusqueda["fecha_registro"]}
                estado={resultadoBusqueda["estado_expediente"]} />
            </Link>
          )
        })}
      </div>
      <Button
        onClick={e => { setPage(page + 1) }}
        text="Cargar más"
      />

    </div>
  )
}

export default Expedientes