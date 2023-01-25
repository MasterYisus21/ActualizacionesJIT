import React, { useEffect, useRef, useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BarRectangulo } from '../../components/BarRectangulo'
import { RectanguloCelular } from '../../components/RectanguloCelular'
import { axiosBasicInstanceApiSolicitudes, axiosBasicInstanceApiExpedientes } from '../../helpers/axiosInstances'
import { Buscador, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { Link } from "react-router-dom";

// Importing css
import './Consultar.css'
import { confirmAlert } from 'react-confirm-alert';
import { toast, ToastContainer } from 'react-toastify';


function Consultar() {


  const navigate = useNavigate();
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
    if(documento !== ''){
    if (!solexp) {
      // console.log(e.target.documento.value)
      axiosBasicInstanceApiSolicitudes({
        method: 'get',
        url: "/estados_solicitudes/" + documento + "/?ordering=-id&count=8&page=" + page + valoresBuscados.map(valor => { return valor }) + filtrosAplicados.map(valor => { return valor }),
        // headers: req.headers,
        data: {}
      })

        .then(result => {
          if (page != 1) {
            console.log(result.data);
            resultados.current = [...resultados.current, ...result.data.results];

          } else {
            resultados.current = result.data.results;

          }
          setResultadosBusqueda(resultados.current)
          setNumPages(Math.ceil(result.data.count / 8));
        })
        .catch(err => {
          console.log("error");
        });
    } else {
      axiosBasicInstanceApiSolicitudes({
        method: 'get',
        url: "/estados_expedientes/" + documento + "/?ordering=-id&count=8&page=" + page + valoresBuscados.map(valor => { return valor }) + filtrosAplicados.map(valor => { return valor }),
        // headers: req.headers,
        data: {}
      })

        .then(result => {
          if (page != 1) {
            console.log(result.data);
            resultados.current = [...resultados.current, ...result.data.results];

          } else {
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

  }

  const notificar=(idSolicitud)=>{
    const confirmar=()=>{
      
    if (!solexp) {
    axiosBasicInstanceApiSolicitudes({
      method: 'post',
      url: "/solicitudes/" + idSolicitud + "/informacion_solicitudes",
      // headers: req.headers,
      data:{}
    })

      .then(result => { 
        console.log(result.data);
        toast.success('Se ha enviado la información al correo electrónico registrado', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
      .catch(err => {
        console.log("error");
      });
      swal({
        title:"Digita el código enviado a tu correo",
        text:"",
        icon:"success",
        content:"input",
        button:"Aceptar"
      })
      .then(valor => {
        console.log(valor);
      })
      
    }else{
      axiosBasicInstanceApiSolicitudes({
        method: 'post',
        url: "/solicitudes/" + idSolicitud + "/enviar_resultados",
        // headers: req.headers,
        data: {}
      })
  
        .then(result => { 
          console.log(result.data);
          toast.success('Se ha enviado la información al correo electrónico registrado', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
        .catch(err => {
          console.log("error");
        });
      }
    }
      confirmAlert({
        title: `Confirmación`,
        message: `¿Quieres que enviemos un código a tu correo para ver la información de tu solicitud?`,
        buttons: [
          {
            label: 'Si',
            onClick: () => confirmar()
            
          },
          {
            label: 'No',
            onClick: () => { }
          }
        ]
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

    <div className='as' onScroll={e => handleScroll(e)}>

      <div className='contenedor-rectangulo-verde'>
        <BarRectangulo text="Consulta tu solicitud" />
      </div>
      <button
        className="btn-regresar"
        onClick={() => {
          navigate("/");
        }}
      >
        Regresar
      </button>

      <div className='contenedor-consultar-documento'>
        <div className='rectangulo-pregunta-documento'>

          <Form className='form-consulta-solicitud' onSubmit={e => { e.preventDefault(); setPage(1); setDocumento(e.target.documento.value); }}>
            <div className='contenedor-botones-solicitud-expediente'>
              <button className={solexp ? "boton-consultar-solicitud" : "boton-consultar-solicitud-activado"} type='button' onClick={() => {setSolexp(false); setResultadosBusqueda([]); setDocumento(''); setPage(1)}}>Solicitud</button>
              <button className={!solexp ? "boton-consultar-solicitud" : "boton-consultar-solicitud-activado"} type='button' onClick={() => {setSolexp(true);  setResultadosBusqueda([]); setDocumento(''); setPage(1)}}>Expediente</button>
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
              
              <div className='carta-caso-consulta' onClick={e =>notificar(resultado["id"])}>
                <div className='contenedor-rectangulo-tarjeta-consultar'>
                  <RectanguloCelular text={resultado["numero_caso"] || resultado["numero_radicado"]} />
                </div>
                <div className='contenedor-caso-consulta'>
                  <div className='lado-izquierdo'>
                    <div className='orden-lado-izquierdo'>
                      <label className='estado-consulta'>Estado:</label>
                      <label className='fecha-consulta'>{resultado["estado_solicitud"] || resultado["estado_expediente"]}</label>
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
      <ToastContainer />
      
    </div>

  )
}

export default Consultar