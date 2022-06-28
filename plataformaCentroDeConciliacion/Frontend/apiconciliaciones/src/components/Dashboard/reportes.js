import React from "react";
import './css/reportes.css';




function reportes() {

    return (
        <div className="contenedor-principal-reportes">
            <div className="contedor-encapsulamiento-gris">
                {/* <div className="contenedor-opciones-reporte"> */}

                <div className="seleccionar-buscar">
                    <div className='seleccionar-reporte'>
                        <label className="h3">Generar reporte</label><br></br>
                        <label className="h6">Seleccionar reporte</label><br></br>
                        <select className="input-reportes" defaultValue="" required>
                            <option value=""></option>
                            <option value="1">#1</option>
                            <option value="2">#2</option>
                            <option value="3">#3</option>
                        </select>
                    </div>
                </div>

                <div className="fecha-inicio-finalizacion">
                    <img src="/icons/calendar.png" className="iconos-reportes"></img>
                    <input type="date" className="input-fecha" placeholder="Fecha de inicio"></input>
                    <input type="date" className="input-fecha" placeholder="Fecha de finalización"></input>
                    <img src="/icons/sobresalir.png" className="iconos-reportes"></img>
                </div>
                <div>
                    <button className="btn btn-success">Descargar</button>
                </div>
                <br />
                {/* </div> */}
            </div>
        </div>
    )
}
export default reportes