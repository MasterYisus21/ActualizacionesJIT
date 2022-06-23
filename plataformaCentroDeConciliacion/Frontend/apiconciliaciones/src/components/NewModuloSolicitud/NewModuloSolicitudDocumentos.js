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
            <input className='form-control' type="text" placeholder='Buscar documento' />
          </div>
          <div className="mb-3">
            <button className='border-0 bg-transparent '>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </button>
          </div>
        </form>
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