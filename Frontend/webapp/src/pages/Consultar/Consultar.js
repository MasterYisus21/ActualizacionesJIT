import React, { useEffect, useRef, useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BarRectangulo } from '../../components/BarRectangulo'
import { RectanguloCelular } from '../../components/RectanguloCelular'
import { axiosBasicInstanceApiSolicitudes,  axiosBasicInstanceApiExpedientes} from '../../helpers/axiosInstances'
import { Buscador, Button } from '../../components';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from "react-router-dom";

// Importing css
import './Consultar.css'


function Consultar() {

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [documento, setDocumento] = useState()
  const [valoresBuscados, setValoresBuscados] = useState([])
  const [filtros, setFiltros] = useState([])
  const [filtrosAplicados, setFiltrosAplicados] = useState([])
  const [page, setPage] = useState(1)
  const [solexp, setSolexp] = useState(false)
  let resultados = useRef([]);
  const [numPages, setNumPages] = useState(1);
  let currentPage = 1;

  const search = () => {
    if(!solexp){
    // console.log(e.target.documento.value)
    axiosBasicInstanceApiSolicitudes({
      method: 'get',
      url: "/estados_solicitudes/" + documento + "/?ordering=-id&count=8&page=" + page + valoresBuscados.map(valor => { return valor }) + filtrosAplicados.map(valor => { return valor }),
      // headers: req.headers,
      data: {}
    })
    
      .then(result => {
        if (page != 1){
        console.log(result.data);
        resultados.current = [...resultados.current, ...result.data.results];
        
      } else{
        resultados.current = result.data.results;
        
      }
      setResultadosBusqueda(resultados.current)
      setNumPages(Math.ceil(result.data.count / 8));
      })
      .catch(err => {
        console.log("error");
      });
    }else{
      axiosBasicInstanceApiSolicitudes({
        method: 'get',
        url: "/estados_expedientes/" + documento + "/?ordering=-id&count=8&page=" + page + valoresBuscados.map(valor => { return valor }) + filtrosAplicados.map(valor => { return valor }),
        // headers: req.headers,
        data: {}
      })
      
        .then(result => {
          if (page != 1){
          console.log(result.data);
          resultados.current = [...resultados.current, ...result.data.results];
          
        } else{
          resultados.current = result.data.results;
          
        }
        setResultadosBusqueda(resultados.current)
        setNumPages(Math.ceil(result.data.count / 8));
        })
        .catch(err => {
          console.log("error");
        });
    }


  }

  const handlePageChange = (page) => {
    console.log("hola")
    console.log(numPages);
    if (page <= numPages) {
      setPage(page);
      console.log("hola")
    }
  };

  const handleScroll = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (
      e.target.scrollHeight - e.target.scrollTop - 300 <
      e.target.clientHeight
    ) {
      console.log("almost bottom");
      handlePageChange(page + 1);
    }
  };



  useEffect(() => {
    setResultadosBusqueda([]);
    search()
  }, [documento])

  useEffect(() => {
    console.log("pages");
    if (page != 1) {
      search();
    }
  }, [page]);
  // useEffect(() => {
  //   if (page != 1) {
  //     search()
  //   }
  // }, [page])

  // useEffect(() => {
  //   setResultadosBusqueda([]);
  //   search()
  // }, [valoresBuscados])

  // useEffect(() => {
  //   search()
  // }, [filtrosAplicados])



  return (

      <div className='as'  onScroll={e => handleScroll(e)}>
        <div className='contenedor-rectangulo-verde'>
          <BarRectangulo text="Consulta tu solicitud" />
        </div>
        <div className='contenedor-consultar-documento'>
          <div className='rectangulo-pregunta-documento'>

              <Form className='form-consulta-solicitud'onSubmit={e => { e.preventDefault(); setPage(1); setDocumento(e.target.documento.value); }}>
                <div className='contenedor-botones-solicitud-expediente'>
                  <button className={solexp?"boton-consultar-solicitud":"boton-consultar-solicitud-activado"} onClick={()=>setSolexp(false)}>Solicitud</button>
                  <button className={!solexp?"boton-consultar-solicitud":"boton-consultar-solicitud-activado"} onClick={()=>setSolexp(true)}>Expediente</button>
                </div>
                <input className='entrada-cedula-buscar' type="text" placeholder='Documento' name='documento'></input>
                <button className='boton-ingreso2'>buscar</button>
              </Form>
          </div>
        </div>
        <div className='cuerpo-consulta'>
          <div className='contenedor-casos-consulta'>
            {resultadosBusqueda.map(resultado => {
              return (
                
                <div className='carta-caso-consulta' >
                  <div className='contenedor-rectangulo-tarjeta-consultar'>
                    <RectanguloCelular text={resultado["numero_caso"]||resultado["numero_radicado"]} />
                  </div>
                  <div className='contenedor-caso-consulta'>
                    <div className='lado-izquierdo'>
                      <div className='orden-lado-izquierdo'>
                        <label className='estado-consulta'>Estado:</label>
                        <label className='fecha-consulta'>{resultado["estado_solicitud"]||resultado["estado_expediente"]}</label>
                      </div>
                    </div>
                    <div className='centro'>
                      <div className='orden-centro'>
                        <label className='estado-consulta'>Radicado:</label>
                        <label className='fecha-consulta'>{resultado["numero_radicado"]}</label>
                      </div>
                    </div>
                    <div className='lado-derecho'>
                      <div className='orden-lado-izquierdo'>
                        <label className='estado-consulta'>Fecha:</label>
                        <label className='fecha-consulta'>{resultado["fecha_registro"]}</label>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
              )
            })}
          </div>
        </div>
      </div>

  )
}

export default Consultar