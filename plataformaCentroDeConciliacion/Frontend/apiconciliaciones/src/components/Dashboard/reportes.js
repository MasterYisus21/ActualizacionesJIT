import React from "react";
import './css/reportes.css';




function reportes() {

    return (
        <div className="contenedor-principal-reportes">
            <div className="contedor-encapsulamiento-gris">
                <div className="contenedor-opciones-reporte">

                    <div className="seleccionar-buscar">
                        <div className='seleccionar-reporte container'>
                            <label className="h5">Seleccionar reporte</label><br></br>
                            <select className="">
                                <option selected>reportes</option>
                                <option value="1">#1</option>
                                <option value="2">#2</option>
                                <option value="3">#3</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            name="cedula"
                            class="form-control form-control-sm rounded w-25"
                            placeholder="solicitud"
                            aria-label="Search"
                            aria-describedby="search-addon" />
                        <button>Buscar</button>
                    </div>

                    <div className="fecha-inicio-finalizacion container">
                        <img src="/icons/calendar.png" className="iconos-reportes"></img>
                        <input type="date" class="" placeholder="fecha de inicio"></input>
                        <input type="date" class="" placeholder="fecha de Nacimiento"></input>
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