import React, { useEffect, useRef, useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BarRectangulo } from '../../components/BarRectangulo'
import { RectanguloCelular } from '../../components/RectanguloCelular'
import { axiosBasicInstanceApiSolicitudes,  axiosBasicInstanceApiExpedientes} from '../../helpers/axiosInstances'
import { Buscador, Button } from '../../components';

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
  const [solexp, setSolexp] = useState("solicitudes")
  let resultados = useRef([]);
  const [numPages, setNumPages] = useState(1);
  let currentPage = 1;

  const search = () => {

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
        resultados.current = [...resultados.current, ...result.data.solicitudes.results];
        
      } else{
        resultados.current = result.data.solicitudes.results;
        
      }
      setResultadosBusqueda(resultados.current)
      setNumPages(Math.ceil(result.data.solicitudes.count / 8));
      })
      .catch(err => {
        console.log("error");
      });


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
            <Row className="g-2">
              <Form className='form-consulta-solicitud'onSubmit={e => { e.preventDefault(); setPage(1); setDocumento(e.target.documento.value); }}>
                <Col className='seleccionable-cedula'>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Soicitud - Expediente"
                  >

                    {/* seleccionable tipo de cedula */}

                    <Form.Select className='opciones-cedula' aria-label="Floating label select example">
                      <option>Abre el menú para ver las opciones</option>
                      <option value="1">Solicitud</option>
                      <option value="2">Expediente</option>

                    </Form.Select>
                  </FloatingLabel>
                </Col>


                <input className='' type="text" placeholder='Documento' name='documento'></input>
                <button>buscar</button>
              </Form>
            </Row>


          </div>
        </div>
        <div className='cuerpo-consulta'>
          <div className='contenedor-casos-consulta'>
            {resultadosBusqueda.map(resultado => {
              return (
                <Link key={resultado["id"]} to={"solicitudes/" + resultado["id"]} className='text-decoration-none '>
                <div className='carta-caso-consulta' >
                  <div className='contenedor-rectangulo-tarjeta-consultar'>
                    <RectanguloCelular text={resultado["numero_radicado"]} />
                  </div>
                  <div className='contenedor-caso-consulta'>
                    <div className='lado-izquierdo'>
                      <div className='orden-lado-izquierdo'>
                        <label className='estado-consulta'>Estado:</label>
                        <label className='fecha-consulta'>{resultado["estado_solicitud"]}</label>
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
                </Link>
              )
            })}
            <Button
              onClick={e => { setPage(page + 1) }}
              className="span2"
              text="Cargar más"
            />
          </div>
        </div>
      </div>

  )
}

export default Consultar