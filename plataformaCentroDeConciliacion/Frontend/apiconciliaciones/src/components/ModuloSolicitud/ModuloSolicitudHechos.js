import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './css/ModuloSolicitudHechos.css';
import config from '../../config.json'
import Select from 'react-select'
import { useParams, useNavigate } from 'react-router-dom';


function ModuloSolicitudHechos() {

    const [departamentoOpciones, setDepartamentoOpciones] = useState([])
    const [ciudadesOpciones, setCiudadesOpciones] = useState([])
    const [ciudad, setCiudad] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [resumen, setResumen] = useState('')
    const [pretensiones, setPretensiones] = useState('')
    const [cuantiaIndeterminada, setCuantiaIndeterminada] = useState(false)
    const [cuantia, setCuantia] = useState("")

    const UrlParams = useParams()

    useEffect(() => {
        axios.get(config.apiGatewayURL + "/departamentos")
        .then((response) => {
            setDepartamentoOpciones(response.data)
        })

    }, []);

    useEffect(() => {
        axios.get(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/hechos")
        .then((response) => {
            setDepartamento(response.data[0]["Ciudad_Id"]["Departamento_Id"]["Id"])
            obtenerCiudadesOpciones(response.data[0]["Ciudad_Id"]["Departamento_Id"]["Id"])
            setCiudad(response.data[0]["Ciudad_Id"]["Id"])
            setResumen(response.data[0]["Descripcion_hecho"])
            setPretensiones(response.data[0]["Descripcion_pretension"])
            setCuantia(response.data[0]["Cuantia"])
            setCuantiaIndeterminada(response.data[0]["Cuantia_indeterminada"])
        })
    }, [])

    const obtenerCiudadesOpciones = (value) => {
        axios.get(config.apiGatewayURL + "/departamentos/" + value)
        .then((response) => {
            setCiudadesOpciones(response.data)
        })
    }

    const postform = (event) => {
        event.preventDefault()
        const datos = {
            "Descripcion_hecho": event.target.resumen.value,
            "Descripcion_pretension": event.target.pretensiones.value,
            "Cuantia": cuantia,
            "Cuantia_indeterminada": cuantiaIndeterminada,
            "Ciudad_Id": event.target.Ciudad.value
        }
        axios.post(config.apiGatewayURL + "/solicitudes/" + UrlParams["Id_solicitud"] + "/hechos", datos)
            .then((response) => {
                console.log(response.data)
        })
    }

    return (
    <>
        <form className='modulo-solicitud-content-main-hechos' onSubmit={postform}>
            <div className='modulo-solicitud-content-main-hechos-lugar'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h4>Lugar de los hechos</h4></div>
                <div className="mb-3">
                    <label htmlFor="Departamento" className="form-label">Departamento:</label>
                    <select className="form-select" aria-label="Default select example" id="Departamento" name='Departamento' onChange={e => {obtenerCiudadesOpciones(e.target.value); setDepartamento(e.target.value)}} value={departamento} required>
                        <option value="" label={"Selecciona uno"} disabled></option>
                        {departamentoOpciones.map(departamento => <option key={departamento["Id"]} value={departamento["Id"]} label={departamento["Nombre"]}> </option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Ciudad" className="form-label">Ciudad:</label>
                    <select className="form-select" aria-label="Default select example" id="Ciudad" name='Ciudad' value={ciudad} onChange={(e) => {setCiudad(e.target.value)}} required>
                        <option value="" label={"Selecciona uno"} disabled></option>
                        {ciudadesOpciones.map(ciudades => <option key={ciudades["Id"]} value={ciudades["Id"]} >{ciudades["Nombre"]} </option>)}
                    </select>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-resumen'>
                <div>
                    <label htmlFor="resumen">Resumen de los hechos:</label>
                    <textarea className="form-control" rows="8" id="resumen" name="resumen" value={resumen} onChange={(e) => {setResumen(e.target.value)}} required></textarea>
                </div>
                <div>
                    <label htmlFor="pretensiones">Pretensiones iniciales:</label>
                    <textarea className="form-control" rows="8" id="pretensiones" name='pretensiones' value={pretensiones} onChange={(e) => {setPretensiones(e.target.value)}} required></textarea>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-determinacion-cuantia'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h4>Determinacion De la cuantia</h4></div>
                <div className="mb-3" style={{display: "flex", width: "35%", justifyContent: "space-evenly"}}>
                    <label htmlFor="cuantia" className="form-label">Cuantía:</label>
                    <input type="text" className="form-control" id="cuantia" name='cuantia' placeholder="" value={cuantia} style={{width: "60%"}} onChange={e => setCuantia(e.target.value)} disabled={cuantiaIndeterminada} required />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={cuantiaIndeterminada} id="flexCheckDefault" onChange={() => {if(!cuantiaIndeterminada){setCuantia('0')}; setCuantiaIndeterminada(!cuantiaIndeterminada)}} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Cuantía indeterminada
                    </label>
                </div>
                <button className="modulo-solicitud-content-main-column2-save-button">
                    <img src='/images/guardarIcon.png' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                    <p>GUARDAR</p>
                </button>
            </div>
        </form>
    </>
    )
}

export default ModuloSolicitudHechos