import React from "react";
import './css/ModuloEncuesta.css';

function ModuloEncuesta() {
    return (
        <div className="contenedor-main-encuesta">
            <div className="cantenedor-descripcion-califcaion ">

                <label className="h4">
                    Seleciona de 1 a 5 tu calificacion siendo 1 el más bajo y 5 el más alto
                </label>

            </div>

            <div className="tabla-pregunta-respuesta">

                <table className="table table-bordered">
                    <thead className="">
                        <tr className="">
                            <th>
                                <h6>
                                    Pregunta
                                </h6>
                            </th>
                            <th>
                                <h6>
                                    Calificación
                                </h6>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-50 p-2">
                                <tr><h6>pregunta</h6></tr>
                                <tr><h6>pregunta</h6></tr>
                                <tr><h6>pregunta</h6></tr>
                                <tr><h6>pregunta</h6></tr>
                                <tr><h6>pregunta</h6></tr>
                                <tr><h6>pregunta</h6></tr>
                                <tr><h6>pregunta</h6></tr>
                            </td>
                            <td className="w-50 p-2">
                                <tr><h6>Calificación</h6></tr>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-center gap-3">
                <label>Medio por el que conocio el servicio: </label>
                <button className="boton-medio-conocimiento">Medio de conocimiento</button>
            </div>
        </div>
    )
}

export default ModuloEncuesta

