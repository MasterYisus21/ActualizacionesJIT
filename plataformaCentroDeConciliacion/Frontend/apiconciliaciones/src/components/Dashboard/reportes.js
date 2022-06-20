import React from "react";
import './css/reportes.css';




function reportes() {

    return (
        <div className="contenedor-principal-reportes">
            <div className="contedor-encapsulamiento-gris">
                <div className="contenedor-opciones-reporte">

                    <div className="seleccionar-buscar">
                        <div className='seleccionar-reporte container'>
                            <label className="h4">Seleccionar reporte</label><br></br>
                            <select className="input-reportes" defaultValue="">
                                <option value="">reportes</option>
                                <option value="1">#1</option>
                                <option value="2">#2</option>
                                <option value="3">#3</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            name="cedula"
                            className="input-busqueda"
                            placeholder="solicitud"
                            aria-label="Search"
                            aria-describedby="search-addon" />
                        <button className="boton-busqueda">Buscar</button>
                    </div>

                    <div className="fecha-inicio-finalizacion">
                        <img src="/icons/calendar.png" className="iconos-reportes"></img>
                        <input type="text" className="input-fecha" placeholder="Fecha de inicio"></input>
                        <input type="text" className="input-fecha" placeholder="Fecha de finalización"></input>
                        <img src="/icons/sobresalir.png" className="iconos-reportes"></img>
                    </div>

                </div>
                <div className="tabla-reportes-encapsulamiento-blanco">
                    <div className="tabla-reportes">
                        hola
                    </div>
                </div>
            </div>
        </div>
    )
}
export default reportes