import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThreePositionSwitch } from '../../../../components'
import { Button } from '../../../../components/Button'
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances'

//Importing css
import "./Documentos.css"

function Documentos() {

  const [documentos, setDocumentos] = useState([])


  let { id } = useParams();

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/documentos",
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data.results);
        setDocumentos(result.data.results)
      })
      .catch(err => {
        console.log("error");
      });
  }, [])


  return (
    <div className='modulo-solicitudes-documentos-container'>
      <h2>Documentos</h2>
      <div className='modulo-solicitudes-documentos-buscar'>
        <form className='display-flex modulo-solicitudes-documentos-buscar-form'>
          <div className="mb-3">
            <input className="form-control" type="file" id="formFile" onChange={(event) => { }} />
            <div>Formatos aceptados: pdf, jpg, png, gif </div>
            <div>Tamaño maximo del archivo: 10 Mb </div>
          </div>
          <div className="mb-3">
            <Button
              className={""}
              text={"Cargar"}
            />
          </div>
        </form>
      </div>
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Documento</th>
            <th scope="col" className='text-center'>Fecha</th>
            {/* <th scope="col" className='text-center'>Estado</th> */}
            <th scope="col" className='text-center'><div>Aprobado</div><div>No/Si</div></th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((dato) => {
            return (
              <tr key={dato["id"]}>
                <th className='text-center' style={{ maxWidth: "35%" }} scope="row"><button className='btn' onClick={(event) => { }}>{dato["nombre"]}</button></th>
                <td className='text-center'>{dato["fecha"]}</td>
                {/* <td className='text-center'>{dato["estado"]}</td> */}
                <td className=''>
                  <ThreePositionSwitch name={`documento${dato["id"]}`} className={'approved'} />
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div >
  )
}

export default Documentos