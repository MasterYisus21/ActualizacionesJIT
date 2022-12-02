import React, { useState, useCallback } from "react"
import { BarRectangulo } from '../../../components/BarRectangulo'
import { RectanguloCelular } from '../../../components/RectanguloCelular'
import { useDropzone } from "react-dropzone"

import './Solicitud.css'
function Solicitud() {

  const [myFiles, setMyFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  }, [myFiles])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  })

  const removeFile = file => () => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const files = myFiles.map(file => (
    <div className="wrapp-visualizacion-anexos" key={file.path}>
      {file.path} - {file.size} bytes{" "}
      <svg onClick={removeFile(file)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-close" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
    </div>
  ))

  return (
    <div>
      <div className='contenedor-rectangulo-verde'>
        <BarRectangulo text = "Consulta tu Soicitud"/>
      </div>
      <div className='contenedor-carta-consultar-expediente'>
        <div className='consultar-solicitud-main'>
          <div className='contenedor-rectangulo-pequeño-consultar'>
            <RectanguloCelular text="Radicado número 12345"/>
          </div>
          <div className='contenedor-cuerpo-consultar'>
            <div className='contenedor-radicado-fecha-estado'>
              <div className='contenedor-redicado-consultar'>
                <label className='titulos-consultar'>Radicado:</label>
                <label className='descripcion-consultar'>R2022102436546</label>
              </div>
              <div className='contenedor-fecha-consultar'>
                <label className='titulos-consultar'>Fecha:</label>
                <label className='descripcion-consultar'>24/10/2022</label>
              </div>
              <div className='contenedor-estado-consultar'>
                <label className='titulos-consultar'>Estado:</label>
                <label className='descripcion-consultar'>Audiencia Pendiente</label>
              </div>
            </div>
            <label className='titulos-consultar'>Comentario:</label>
            <label className='descripcion-consultar'>Es necesario anexar el registro civil</label>
            <div className='contenedor-carga-documentos'>
              <label className='titulos-consultar mb-4'>Cargar documentos solicitados</label>
              <section className="form-datos">
              <div className="dropzone" {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-drag-drop" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                </svg>
                <h4>Selecciona los archivos que desseas anexar</h4>
              </div>
              <aside className="lista-anexos">
                {files}
              </aside>
              { files.length > 0}
            </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solicitud