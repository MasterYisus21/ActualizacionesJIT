import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SearchableSelect } from '../../../../components';
import { axiosTokenInstanceApiExpedientes } from '../../../../helpers/axiosInstances';

//Importing css

import './Hechos.css'

function Hechos() {

    const [departamento, setDepartamento] = useState("")
    const [departamentoInitial, setDepartamentoInitial] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [ciudadInitial, setCiudadInitial] = useState("")

    // Getting solicitud id from urlParams
    let { id } = useParams();

    const hechoId = useRef()

    useEffect(() => {
        console.log(document.querySelector('[name="ciudad"]').value);

    }, [departamento])

    // Fetch Database for initial Data
    useEffect(() => {
        axiosTokenInstanceApiExpedientes({
            method: 'get',
            url: "/expedientes/" + id + "/hechos",
            // headers: req.headers,
            data: {}
        })
            .then(result => {
                console.log(result.data.results[0]);
                hechoId.current = result.data.results[0]["id"]
                setDepartamentoInitial({id: result.data.results[0]["departamento_id"], nombre: result.data.results[0]["departamento"]})
                // setDepartamentoInitial({id: result.data.results[0]["departamento_id"], nombre: result.data.results[0]["departamento"]})
                setCiudadInitial({id: result.data.results[0]["ciudad_id"], nombre: result.data.results[0]["ciudad"]})
                document.getElementById("resumen_hechos").value = result.data.results[0]["descripcion"]
                document.getElementById("pretensiones_hechos").value = result.data.results[0]["pretension"]
                result.data.results[0]["cuantia_indeterminada"] ? document.getElementById("cuantia_hechos").disabled = true : document.getElementById("cuantia_hechos").disabled = false
                if (result.data.results[0]["cuantia_indeterminada"] !== "true") { console.log("true"); document.getElementById("cuantia_hechos").value = result.data.results[0]["cuantia"] };
                document.getElementById("cuantia_hechos_indeterminada").checked = result.data.results[0]["cuantia_indeterminada"]
            })
            .catch(err => {
                console.log("error");
            });
    }, [])

    // Save Data
    const saveInfo = (event) => {
        event.preventDefault()
        const data = {
            "ciudad_id": event.target.ciudad.value,
            "descripcion": event.target.resumen_hechos.value,
            "pretension": event.target.pretensiones_hechos.value,
            "cuantia": event.target.cuantia_hechos.value,
            "cuantia_indeterminada": event.target.cuantia_hechos_indeterminada.checked,
        }
        axiosTokenInstanceApiExpedientes({
            method: 'patch',
            url: `/hechos/${hechoId.current}`,
            // headers: req.headers,
            data: data
        })
            .then(result => {
                console.log(result.data);
            })
            .catch(err => {
                console.log(err);
            });
    }




    return (
        <form className='modulo-solicitud-content-main-hechos' onSubmit={(e) => { saveInfo(e) }}>
            <div className='modulo-solicitud-content-main-hechos-lugar'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h6>Lugar de los hechos</h6></div>
                <div>
                    <label htmlFor="Departamento" className="form-label">Departamento:</label>
                    <SearchableSelect
                        axiosInstance={axiosTokenInstanceApiExpedientes}
                        url={"/paises/1"}
                        name={"departamento"}
                        identifier={"id"}
                        initialValue={departamentoInitial}
                        onChange={(val) => { setDepartamento(val); setCiudad("") }}
                    />
                </div>
                <div>
                    <label htmlFor="ciudad" className="form-label">Ciudad:</label>
                    <SearchableSelect
                        axiosInstance={axiosTokenInstanceApiExpedientes}
                        url={"/paises/1/departamentos/" + departamento}
                        name={"ciudad"}
                        identifier={"id"}
                        initialValue={ciudadInitial}
                        onChange={(val) => { setCiudad(val) }}
                    />
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-resumen'>
                <div>
                    <label htmlFor="resumen_hechos">Resumen de los hechos:</label>
                    <textarea className="form-control form-control-sm text-area-hechos" id="resumen_hechos" name="resumen_hechos" required></textarea>
                </div>
                <div>
                    <label htmlFor="pretensiones_hechos">Pretensiones iniciales:</label>
                    <textarea className="form-control form-control-sm text-area-hechos" id="pretensiones_hechos" name='pretensiones_hechos' required></textarea>
                </div>
            </div>
            <div className='modulo-solicitud-content-main-hechos-determinacion-cuantia'>
                <div className='modulo-solicitud-content-main-hechos-lugar-titulo'><h6>Determinacion De la cuantia</h6></div>
                <div className="mb-3" style={{ display: "flex", width: "35%", justifyContent: "space-evenly" }}>
                    <label htmlFor="cuantia_hechos" className="form-label">Cuantía:</label>
                    <input type="text" className="form-control form-control-sm" id="cuantia_hechos" name='cuantia_hechos' placeholder="" required />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cuantia_hechos_indeterminada" onChange={e => { if (e.target.checked) { document.getElementById("cuantia_hechos").disabled = true; document.getElementById("cuantia_hechos").value = "" } else { document.getElementById("cuantia_hechos").disabled = false } }} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Cuantía indeterminada
                    </label>
                </div>
                <div className={{ display: "flex" }}>
                    <button className="modulo-solicitud-content-main-column2-save-button">
                        <img src='/icons/save.svg' alt='imagen guardar' className="modulo-solicitud-content-main-column2-save-button-img" />
                        <p>GUARDAR</p>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Hechos