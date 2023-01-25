import React, { useRef } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Buscador, Button, Tarjeta } from "../../../components";
import { useState, useEffect } from "react";
import {
  axiosBasicInstanceApiExpedientes,
  axiosTokenInstanceApiExpedientes,
} from "../../../helpers/axiosInstances";
// Importing css
import "./Expedientes.css";

function Expedientes() {
  // Getting outlet context
  const outletContext = useOutletContext();
  // console.log(outletContext);
  const setPagina = outletContext?.setPagina;

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [valoresBuscados, setValoresBuscados] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [filtrosAplicados, setFiltrosAplicados] = useState([]);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  let resultados = useRef([]);

  const search = () => {
    // console.log(e.target.documento.value)
    axiosTokenInstanceApiExpedientes({
      method: "get",
      url:
        "/expedientes/?ordering=-numero_caso&count=14&page=" + page  + "&search=" + valoresBuscados.map(valor => { return ',' + valor }) + filtrosAplicados.map(valor => { return ',' + valor }),
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        console.log(result.data);
        if (page != 1) {
          resultados.current = [...resultados.current, ...result.data.results];
        } else {
          resultados.current = result.data.results;
        }
        setResultadosBusqueda(resultados.current);
        setNumPages(Math.ceil(result.data.count / 14));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //fetching filters
  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: "get",
      url: "/estados_expediente/?count=20",
      // headers: req.headers,
      data: {},
    })
      .then((result) => {
        console.log(result.data.results);
        setFiltros(result.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  const handlePageChange = (page) => {
    if (page <= numPages) {
      setPage(page);
    }
  };

  const handleScroll = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (
      e.target.scrollHeight - e.target.scrollTop - 200 <
      e.target.clientHeight
    ) {
      // console.log("almost bottom");
      handlePageChange(page + 1);
    }
  };

  useEffect(() => {
    setResultadosBusqueda([]);
    search();
  }, [valoresBuscados]);

  useEffect(() => {
    search();
  }, [filtrosAplicados]);

  useEffect(() => {
    if (page != 1) {
      search();
    }
  }, [page]);

  return (
    <div className="wrapp-expedientes">
      <Buscador
        valoresBuscados={valoresBuscados}
        setValoresBuscados={setValoresBuscados}
        filtros={filtros}
        setFiltros={setFiltrosAplicados}
        setPage={handlePageChange}
        required
      />

      <div className="wrapp-tarjetas" onScroll={(e) => handleScroll(e)}>
        {resultadosBusqueda.map((resultadoBusqueda) => {
          return (
            <Link
              key={"expediente" + resultadoBusqueda["id"]}
              to={
                "detalle/" +
                resultadoBusqueda["expediente_id"] +
                "/datosgenerales"
              }
              className="text-decoration-none "
              onClick={() => {
                setPagina("Caso #" + resultadoBusqueda["numero_caso"]);
              }}
            >
              <Tarjeta
                titulo={"Caso #" + resultadoBusqueda["numero_caso"]}
                radicado={resultadoBusqueda["numero_radicado"]}
                fecha={resultadoBusqueda["fecha_registro"]}
                estado={resultadoBusqueda["estado_expediente"]}
              />
            </Link>
          );
        })}
        <Button
          onClick={(e) => {
            handlePageChange(page + 1);
          }}
          className="span2"
          text="Cargar más"
        />
      </div>
    </div>
  );
}

export default Expedientes;
