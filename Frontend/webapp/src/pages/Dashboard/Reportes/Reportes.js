import fileDownload from 'js-file-download';
import React, { useEffect, useState } from 'react'
import { axiosTokenInstanceApiExpedientes } from '../../../helpers/axiosInstances';

// Impirting css
import './Reportes.css'

function Reportes() {

  const [tiposReporte, setTiposReporte] = useState([])

  useEffect(() => {
    axiosTokenInstanceApiExpedientes({
      method: 'get',
      url: `/tipos_reporte/`,
      // headers: req.headers,
      data: {}
    })
      .then(result => {
        console.log(result.data);
        setTiposReporte(result.data.results)
      })
      .catch(err => {
        console.log(err);
      });

  }, [])

  const generarReporte = (e) => {
    e.preventDefault()
    const data = {
      "Fecha_inicio": e.target.fechaInicio.value,
      "Fecha_fin": e.target.fechaFinal.value
    }
    axiosTokenInstanceApiExpedientes({
      method: 'post',
      url: `/reportes/${e.target.reporte.value}`,
      // url: `/documentos/2022-452`,
      responseType: "blob",
      data: data
    })
      .then(response => {
        const tempTiposReporte = [...tiposReporte]
        const index = tempTiposReporte.findIndex(object => {
          return object.id == e.target.reporte.value;
        });
        // documentsTransition[index] = { id: result.data.id, nombre: result.data.nombre, fecha: result.data.fecha }
        fileDownload(response.data, tempTiposReporte[index].nombre)
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <form className="contenedor-principal-reportes" onSubmit={e => generarReporte(e)}>
      <img src={"/images/Reportes.png"}></img>
      <div className="contedor-encapsulamiento-gris">

        <div className="seleccionar-buscar">
          <div className='seleccionar-reporte'>
            <label className="h3">Generar reporte</label><br></br>
            <label className="h6">Seleccionar reporte</label><br></br>
            <select className="input-reportes" name='reporte' required>
              <option value="">Seleccione una opción.</option>
              {tiposReporte.map(dato => {
                return (<option key={`tipoReporte${dato.id}`} value={dato.id}>{dato.nombre}</option>)
              })}
            </select>
          </div>
        </div>

        <div className="fecha-inicio-finalizacion">
          <img src={"/images/calendar.png"} className="iconos-reportes"></img>
          <input type="date" className="input-fecha" name='fechaInicio' placeholder="Fecha de inicio" required></input>
          <input type="date" className="input-fecha" name='fechaFinal' placeholder="Fecha de finalización" required></input>
          <img src={"/images/sobresalir.png"} className="iconos-reportes"></img>
        </div>
        <div>
          <button className="btn btn-reportes">Descargar</button>
        </div>
        <br />
      </div>
    </form>
  )
}

export default Reportes