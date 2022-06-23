import React, { cloneElement, useEffect, useState } from 'react'
import { ThreePositionSwitch } from '../Utilities'
import './css/NewModuloSolicitudDocumentos.css'

function NewModuloSolicitudDocumentos() {
  const [documentos, setDocumentos] = useState([])

  useEffect(() => {
    setDocumentos([
      { documento: 1, fecha: "22/06/2022", estado: 11 },
      { documento: 2, fecha: "22/06/2022", estado: 11 },
      { documento: 3, fecha: "22/06/2022", estado: 11 },
      { documento: 4, fecha: "22/06/2022", estado: 11 },
      { documento: 5, fecha: "22/06/2022", estado: 11 },
      { documento: 6, fecha: "22/06/2022", estado: 11 },
      { documento: 7, fecha: "22/06/2022", estado: 11 },
    ])
  }, [])

  return (
    <div className='modulo-solicitudes-documentos-container'>
      <h6>Cargar Documento</h6>
      <div className='modulo-solicitudes-documentos-buscar'>
        <form className='display-flex modulo-solicitudes-documentos-buscar-form'>
          <div className="mb-3">
            {/* <label htmlFor="formFile" className="form-label">Default file input example</label> */}
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <button type='button' className='border-0 btn btn-success btn-sm'>
              Cargar
            </button>
          </div>
        </form>
      </div>
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Documento</th>
            <th scope="col" className='text-center'>Fecha</th>
            <th scope="col" className='text-center'>Estado</th>
            <th scope="col" className='text-center'><div>Aprobado</div><div>No/Si</div></th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((dato) => {
            return (
              <tr>
                <th className='text-center' scope="row">{dato["documento"]}</th>
                <td className='text-center'>{dato["fecha"]}</td>
                <td className='text-center'>{dato["estado"]}</td>
                <td className='d-flex justify-content-center'><ThreePositionSwitch key={dato["documento"]} initialValue={dato["estado"]} id={3} /></td>
                {/* <td>{cloneElement(ThreePositionSwitch, {initialValue: dato["estado"], id: 3})}</td> */}
              </tr>
            )
          })}

        </tbody>
      </table>
    </div >
  )
}

export default NewModuloSolicitudDocumentos