import React from 'react'
import { Button } from '../../../../components/Button'

//Importing css
import "./Documentos.css"

function Documentos() {


  const documentos = [
    {
      Nombre: "Documento1",
      Fecha_documento: "12/05/2022",
      Tamanio: "55Kb"
    },
    {
      Nombre: "Documento1",
      Fecha_documento: "12/05/2022",
      Tamanio: "55Kb"
    },
    {
      Nombre: "Documento1",
      Fecha_documento: "12/05/2022",
      Tamanio: "55Kb"
    },
  ]

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
            <th scope="col" className='text-center'>Tamaño</th>
            {/* <th scope="col" className='text-center'>Estado</th> */}
            <th scope="col" className='text-center'><div>Aprobado</div><div>No/Si</div></th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((dato) => {
            return (
              <tr>
                <th className='text-center' style={{ maxWidth: "35%" }} scope="row"><button className='btn' onClick={(event) => { }}>{dato["Nombre"]}</button></th>
                <td className='text-center'>{dato["Fecha_documento"]}</td>
                <td className='text-center'>{dato["Tamanio"]}</td>
                {/* <td className='text-center'>{dato["estado"]}</td> */}
                <td className='d-flex justify-content-center'>
                  {/* <ThreePositionSwitch key={dato["Id"]} initialValue={dato["Tipo_estado_Id"]["Id"]} id={dato["Id"]} /> */}
                </td>
                {/* <td>{cloneElement(ThreePositionSwitch, {initialValue: dato["estado"], id: 3})}</td> */}
              </tr>
            )
          })}

        </tbody>
      </table>
    </div >
  )
}

export default Documentos