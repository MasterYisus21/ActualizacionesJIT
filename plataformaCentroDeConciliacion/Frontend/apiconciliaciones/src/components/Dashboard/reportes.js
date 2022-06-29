
import React, { useState } from 'react'
import axiosApiInstance from "../Utilities/axiosApiInstance";
import './css/Reportes.css';
import config from '../../config.json'
import FileDownload from 'js-file-download'




function Reportes() {
    const [reporte, setReporte] = useState("")

    const descargarDocumento = (e) => {

        e.preventDefault()
        // console.log(id)
        // console.log(nombre)
        axiosApiInstance.post(config.apiGatewayURL + '/reportes/' + reporte,{}, { responseType: "blob" })
            .then(response => {
                console.log(response)
                FileDownload(response.data, "reporte.docx")
            })
    }

    return (
        <form className="contenedor-principal-reportes" onSubmit={e => descargarDocumento(e)}>
            <img src="/images/reportes.png" ></img>
            <div className="contedor-encapsulamiento-gris">
                {/* <div className="contenedor-opciones-reporte"> */}

                <div className="seleccionar-buscar">
                    <div className='seleccionar-reporte'>
                        <label className="h3">Generar reporte</label><br></br>
                        <label className="h6">Seleccionar reporte</label><br></br>
                        <select className="input-reportes" value={reporte} onChange={e=> setReporte(e.target.value)} required>
                            <option value=""></option>
                            <option value="1">Reporte de Información SNIES</option>
                            <option value="2">Consolidado</option>
                            {/* <option value="3">#3</option> */}
                        </select>
                    </div>
                </div>

                <div className="fecha-inicio-finalizacion">
                    <img src="/icons/calendar.png" className="iconos-reportes"></img>
                    <input type="date" className="input-fecha" placeholder="Fecha de inicio" required></input>
                    <input type="date" className="input-fecha" placeholder="Fecha de finalización" required></input>
                    <img src="/icons/sobresalir.png" className="iconos-reportes"></img>
                </div>
                <div>
                    <button className="btn btn-success">Descargar</button>
                </div>
                <br />
                {/* </div> */}
            </div>
        </form>
    )
}

export default Reportes