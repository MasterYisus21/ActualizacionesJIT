import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Buscador, Tarjeta } from '../../../components'
import {useState, useEffect} from 'react'
import { axiosBasicInstanceApiExpedientes } from '../../../helpers/axiosInstances'
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
    axiosBasicInstanceApiExpedientes({
      method: 'get',
      url: "/personas/?"  + valoresBuscados.map(valor => { return '&search=' + valor }),
      // headers: req.headers,
      data: {}
    })
      .then(result => {
      //console.log(result.data);
        setResultadosBusqueda(result.data.results)
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
      <Buscador />
      <div className='wrapp-tarjetas'>
        <Link to="detalle/119/datosgenerales" className='text-decoration-none ' onClick={() => { setPagina("Caso #119") }}>
          <Tarjeta titulo="Caso #119" />  
        </Link>
      </div>
    </div>
  )
}

export default Expedientes