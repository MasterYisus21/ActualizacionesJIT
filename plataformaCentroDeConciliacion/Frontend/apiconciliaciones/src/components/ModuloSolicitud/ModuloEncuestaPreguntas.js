import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from '../../config.json';
import './css/ModuloEncuesta.css';


function ModuloEncuestaPreguntas() {

    const [preguntas, setPreguntas] = useState([])
    const UrlParams = useParams();
    const navigate = useNavigate();

    const guardarPreguntas = (event) => {
        event.preventDefault()
        const data = [{
            preguntas: preguntas.map(dato => {
                return ({
                    "idpregunta": dato["Id"],
                    "idrespuesta": event.target["a" + dato["Id"]].value
                })
            })
        },
        {
            idpersona: UrlParams["Id_persona"]
        },
        {
            idmedioConocimiento: 1
        }]
        console.log(data)
        axios.post(config.apiGatewayURL + '/solicitudes/' + UrlParams["Id_solicitud"] + "/respuestas", data)
        .then(response =>{
            // console.log(response)
            navigate("/dashboard/modulo-solicitudes/" + UrlParams["Id_solicitud"] + "/encuestas")
        })
    }

    useEffect(() => {
        axios.get(config.apiGatewayURL + '/preguntas')
            .then(response => {
                console.log(response.data)
                setPreguntas(response.data)
            })
    }, [])

    return (
        <form className="contenedor-main-encuesta" onSubmit={event => guardarPreguntas(event)}>
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
                        {preguntas.map(dato => {
                            return (
                                <tr key={dato["Id"]}>
                                    <td className="w-50 p-2">
                                        {dato["Pregunta"]}
                                    </td>
                                    <td className="w-50 p-2">
                                        <div className="btn-group" role="group">
                                            <input type="radio" className="btn-check" id={"btnradio1" + dato["Id"]} name={"a" + dato["Id"]} value="1" />
                                            <label className="btn btn-outline-primary" htmlFor={"btnradio1" + dato["Id"]}>1</label>

                                            <input type="radio" className="btn-check" id={"btnradio2" + dato["Id"]} name={"a" + dato["Id"]} value="2" />
                                            <label className="btn btn-outline-primary" htmlFor={"btnradio2" + dato["Id"]}>2</label>

                                            <input type="radio" className="btn-check" id={"btnradio3" + dato["Id"]} name={"a" + dato["Id"]} value="3" defaultChecked={true} />
                                            <label className="btn btn-outline-primary" htmlFor={"btnradio3" + dato["Id"]}>3</label>

                                            <input type="radio" className="btn-check" id={"btnradio4" + dato["Id"]} name={"a" + dato["Id"]} value="4" />
                                            <label className="btn btn-outline-primary" htmlFor={"btnradio4" + dato["Id"]}>4</label>

                                            <input type="radio" className="btn-check" id={"btnradio5" + dato["Id"]} name={"a" + dato["Id"]} value="5" />
                                            <label className="btn btn-outline-primary" htmlFor={"btnradio5" + dato["Id"]}>5</label>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-center gap-3">
                <label>Medio por el que conocio el servicio: </label>
                <button className="boton-medio-conocimiento">Medio de conocimiento</button>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default ModuloEncuestaPreguntas