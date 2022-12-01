// import React from 'react'
import axios from "axios"
import { useEffect, useId, useState } from "react"
// import axiosApiInstance from "../axiosApiInstance"
import "./SearchableSelect.css"

let cancelToken = ""

function SearchableSelect({ axiosInstance, url, name, identifier, initialValue }) {
    const [texto, setTexto] = useState("")
    const [opened, setOpened] = useState(false)
    const auxId = useId()
    const [options, setOptions] = useState([])


    const getData = async (textoABuscar) => {
        if (cancelToken) {
            console.log(cancelToken)
            cancelToken.cancel()
        }
        cancelToken = axios.CancelToken.source()

        if (textoABuscar != null) {
            await axiosInstance.get(url + '?count=5&search=' + textoABuscar, {cancelToken: cancelToken.token})
                .then(response => {
                    console.log(response.data)
                    console.log(response.data.results[0][identifier])
                    setOptions(response.data.results)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    useEffect(() => {
        setTexto(initialValue ? initialValue : "");
    }, [])

    useEffect(() => {
      getData(initialValue)
    }, [])
    
    

    return (
        <div className="select-box" onFocus={e => setOpened(true)}>
            <div className={"options-container" + (opened ? " active" : "")}>
                <div className="option">
                    <input type="radio" className="radio" id={"b" + auxId} name={name} value={texto} onClick={e => setOpened(false)} />
                    <label htmlFor={"b" + auxId} className="radio-label">Estas buscando: {texto}</label>
                </div>
                {options?.map((object) => {
                    return (
                        <div key={object.id} className="option">
                            <input type="radio" id={"a" + auxId + object[identifier]} className="radio" name={name} value={object["id"]} onClick={e => { setTexto(object.nombre + " - " + object[identifier]); setOpened(false); }} />
                            <label htmlFor={"a" + auxId + object[identifier]} className="radio-label">{object.nombre} - {object[identifier]}</label>
                        </div>
                    )
                })}
            </div>

            <div className="selected">
                <input type="text" placeholder="" value={texto} onChange={e => { setTexto(e.target.value); getData(e.target.value) }} />
            </div>

            {/* <div className="search-box">
                    <input type="text" placeholder="Buscar..." />
                </div> */}
        </div>

    )
}

export default SearchableSelect