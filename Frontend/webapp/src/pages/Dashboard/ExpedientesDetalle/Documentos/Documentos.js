import React, { useEffect, useRef, useState } from 'react'
import FileDownload from 'js-file-download'
import { confirmAlert } from 'react-confirm-alert'
import { useParams } from 'react-router-dom'
import { ThreePositionSwitch } from '../../../../components'
import { Button } from '../../../../components/Button'
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances'

//Importing css
import "./Documentos.css"

function Documentos() {

  const [documentos, setDocumentos] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)

  let { id } = useParams();

  let resultados = useRef([])

  const search = async () => {

    // console.log(e.target.documento.value)
    await axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: "/expedientes/" + id + "/documentos/?ordering=-id&count=20&page=" + page,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        console.log(resultados.current);
        if (page != 1) {
          resultados.current = [...resultados.current, ...result.data.results]
        } else {
          resultados.current = result.data.results
        }
        setDocumentos(resultados.current)
        setNumPages(Math.ceil(result.data.count / 14))
      })
      .catch(err => {
        console.log("error");
      });
  }

  const handlePageChange = (page) => {
    if (page <= numPages) {
      setPage(page)
    }
  }

  const handleScroll = (e) => {
    // console.log('scrollTop: ', e.target.scrollHeight - e.target.scrollTop);
    // console.log('clientHeight: ', e.target.clientHeight);
    if (e.target.scrollHeight - e.target.scrollTop - 200 < e.target.clientHeight) {
      // console.log("almost bottom");
      handlePageChange(page + 1)
    }
  }

  useEffect(() => {
    search()
  }, [])


  useEffect(() => {
    if (page != 1) {
      search()
    }
  }, [page])

  const uploadDocument = (e) => {
    e.preventDefault()
    console.log(e.target.fileInput.files[0]);

    let data = new FormData()
    data.append('files', e.target.fileInput.files[0])

    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: `/documentos/${id}`,
      // url: `/documentos/2022-452`,
      headers: { "Content-Type": "multipart/form-data" },
      data: data
    })
      .then(result => {
        setDocumentos([result.data[0], ...documentos])
        e.target.reset();
      })
      .catch(err => {
        console.log("error");
      });
  }

  const downloadDocument = (event, idDocumento, nombre) => {
    event.preventDefault()
    console.log(idDocumento)
    console.log(nombre)

    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `/documentos/${idDocumento}`,
      // url: `/documentos/2022-452`,
      responseType: "blob",
      data: {}
    })
      .then(response => {
        // console.log(response)
        // window.open("someLink", "_blank")
        // console.log(response.data);
        FileDownload(response.data, nombre)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const modifyDocument = (e) => {
    e.preventDefault()
    console.log("Modificar")
    e.target.document.click()
  }

  const handleDocumentChange = (e, idDocumento) => {
    e.preventDefault()
    console.log("handleDocumentChange")
    const data = new FormData()
    data.append('files', e.target.files[0])
    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: `/expedientes/${id}/documentos/${idDocumento}`,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(result => {
        console.log(result.data.id);
        const documentsTransition = [...documentos]
        const index = documentsTransition.findIndex(object => {
          return object.id === idDocumento;
        });
        documentsTransition[index] = { id: result.data.id, nombre: result.data.nombre, fecha: result.data.fecha }
        setDocumentos(documentsTransition)
        console.log(`index ${index}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleDeleteDocument = (idDocumento, nombre) => {
    function deleteDocument(idDocumento) {
      // alert(`deleted person ${idPersona}`)
      axiosTokenInstanceApiExpedientes({
        method: 'delete',
        url: "/documentos/" + idDocumento,
        // headers: req.headers,
        data: {}
      })
        .then(result => {
          setDocumentos(documentos.filter((documento) => {
            return documento["id"] != idDocumento
          }))
        })
        .catch(err => {
          console.log(err);
        });

    }
    confirmAlert({
      title: `Confirmación para eliminar`,
      message: `¿Estás seguro de borrar a ${nombre.toUpperCase()} del caso?.`,
      buttons: [
        {
          label: 'Si',
          onClick: () => deleteDocument(idDocumento)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  }


  return (
    <div className='modulo-solicitudes-documentos-container'>
      <h2>Documentos</h2>
      <div className='modulo-solicitudes-documentos-buscar'>
        <form className='display-flex modulo-solicitudes-documentos-buscar-form' onSubmit={e => uploadDocument(e)}>
          <div className="mb-3">
            <input className="form-control" type="file" name={"fileInput"} id="fileInput" required />
            <div>Formatos aceptados: pdf, jpg </div>
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
      <div className='contenedor-tabla-convocado' onScroll={e => handleScroll(e)}>
        <table className="table table-striped table-hover table-sm">
          <thead>
            <tr>
              <th scope="col" className='text-center'>Documento</th>
              <th scope="col" className='text-center'>Fecha</th>
              <th scope="col" className='text-center'><div>Aprobado</div><div>No/Si</div></th>
              <th scope="col" className='text-center'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((dato) => {
              return (
                <tr key={dato["id"]}>
                  <th className='text-center' style={{ maxWidth: "35%" }} scope="row"><button className='btn' onClick={(event) => { downloadDocument(event, dato["id"], dato["nombre"]) }}>{dato["nombre"]}</button></th>
                  <td className='text-center'>{dato["fecha"]}</td>
                  {/* <td className='text-center'>{dato["estado"]}</td> */}
                  <td className=''>
                    <ThreePositionSwitch documentoId={dato["id"]} name={`documento${dato["id"]}`} className={''} state={dato["estado"]} />
                  </td>
                  <td>
                    <form onSubmit={e => modifyDocument(e)}>
                      <input type="file" name="document" style={{ display: "none" }} onChange={e => handleDocumentChange(e, dato["id"])} />
                      <button className='boton-tabla-eliminar'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </button>
                      <button className='boton-tabla-eliminar' type="button" onClick={(e) => { handleDeleteDocument(dato["id"], dato["nombre"]) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </button>
                    </form>

                  </td>
                </tr>
              )
            })}
          </tbody>
          {(page < numPages) &&
            <Button
              onClick={e => { handlePageChange(page + 1) }}
              className="span2"
              text="Cargar más"
            />
          }
        </table>
      </div>
    </div >
  )
}

export default Documentos