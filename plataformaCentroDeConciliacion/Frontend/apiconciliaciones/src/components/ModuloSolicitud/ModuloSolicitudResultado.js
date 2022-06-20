import React, { useEffect, useState } from 'react'
import './css/ModuloSolicitudResultado.css';

function ModuloSolicitudResultado() {

    const [resultadoOpciones, setResultadoOpciones] = useState([])

    useEffect(() => {
        setResultadoOpciones([
            {
                id: 1,
                nombre: "Conciliación parcial"
            },
            {
                id: 2,
                nombre: "Conciliación Total"
            },
            {
                id: 3,
                nombre: "Inasistencia"
            },
            {
                id: 4,
                nombre: "Asunto no Conciliable"
            },
            {
                id: 5,
                nombre: "No acuerdo"
            },
            {
                id: 6,
                nombre: "Falta de competencia"
            },
            {
                id: 7,
                nombre: "Retiro de la solicitud"
            },
            {
                id: 8,
                nombre: "Acuerdo Extraconciliación"
            },
            {
                id: 9,
                nombre: "Otros"
            },
            {
                id: 10,
                nombre: "Falta de pago del servicio"
            },
            {
                id: 11,
                nombre: "Desistimiento de una o ambas partes"
            }
            
        ])


    }, []);
    return (
        <>
        <div className='modulo-solicitud-content-main-resultado'>
            <div className='modulo-solicitud-content-main-resultado-column'>
                <div className='modulo-solicitud-content-main-resultado-titulo'>Elegir resultado</div>
                <div className="mb-3">
                    <label htmlFor="tipoResultado" className="form-label">Tipo de Resultado:</label>
                    <select className="form-select" size="11" aria-label="size 11 select example">
                        {/* <option value="Conciliacion parcial" selected>Conciliacion parcial</option> */}
                        {resultadoOpciones.map(resultadoOpciones => <option key={resultadoOpciones["id"]} value={resultadoOpciones["id"]} >{resultadoOpciones["nombre"]} </option>)}
                    </select>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-resultado-column'>
                <div className='modulo-solicitud-content-main-resultado-titulo2'>Descargar documento</div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label"></label>
                    <input className="form-control" type="file" id="formFile"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fechasolicitud" className="form-label">Fecha de solicitud:</label>
                    <input type="date" className="form-control" id="fechasolicitud" name=''/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModuloSolicitudResultado