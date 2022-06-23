import React, { useEffect, useRef, useState } from "react";
import "./css/Personas.css";
import config from '../../config.json'
import { useLocation, useParams } from 'react-router-dom';
import axiosApiInstance from "../Utilities/axiosApiInstance";
import axios from 'axios';

function Personas() {

    // const [isOpen, setIsOpen] = useState(false);
    const [opcionesTipoDocumento, setOpcionesTipoDocumento] = useState([])
    const [opcionesSexo, setOpcionesSexo] = useState([])
    const [opcionesTipoPersona, setOpcionesTipoPersona] = useState([])
    const [opcionesTipoVivienda, setOpcionesTipoVivienda] = useState([])
    const [opcionesEstratoSocieconomico, setOpcionesEstratoSocieconomico] = useState([])
    const [opcionesDepartamentos, setOpcionesDepartamentos] = useState([])
    const [opcionesCiudades, setOpcionesCiudades] = useState([])
    const [opcionesLocalidades, setOpcionesLocalidades] = useState([])
    const [opcionesBarrios, setOpcionesBarrios] = useState([])
    const [OpcionesTipoCargo, setOpcionesTipoCargo] = useState([])
    const [OpcionesPerfil, setOpcionesPerfil] = useState([])
    // const [personaBuscada, setPersonaBuscada] = useState({})

    // Estado para conocer si es registro nuevo
    const [nuevo, setNuevo] = useState(true)

    // Estado para los formularios
    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [tipoDocumento, setTipoDocumento] = useState("")
    const [numeroDocumento, setNumeroDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [genero, setGenero] = useState("")
    const [tipoPersona, setTipoPersona] = useState("")
    const [tipoVivienda, setTipoVivienda] = useState("")
    const [estratoSocioeconomico, setEstratoSocioeconomico] = useState("")
    const [localidad, setLocalidad] = useState("")
    const [barrio, setBarrio] = useState("")
    const [perfil, setPerfil] = useState("")
    const [tipoCargo, setTipoCargo] = useState("")


    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("")
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState("")

    // Refs
    const alertContainer = useRef("");


    const crearPersona = (event) => {
        event.preventDefault()
        // console.log(event.target.perfil.value === "")
        const data = {
            "Identificacion": parseInt(event.target.numeroDocumento.value),
            "Nombres": event.target.nombres.value,
            "Apellidos": event.target.apellidos.value,
            "Correo": event.target.email.value,
            "Telefono": parseInt(event.target.telefono.value),
            "Fecha_de_nacimiento": event.target.fechaNacimiento.value,
            "Tipo_documento_Id": parseInt(event.target.tipoDocumento.value),
            "Tipo_vivienda_Id": parseInt(event.target.tipoVivienda.value),
            "Barrio_Id": parseInt(event.target.barrio.value),
            "Tipo_persona_Id": parseInt(event.target.tipoPersona.value),
            "Estrato_socioeconomico_Id": parseInt(event.target.estratoSocioeconomico.value),
            "Tipo_estado_Id": 1,
            "Perfil_Id": event.target.perfil.value !== "" ? parseInt(event.target.perfil.value) : null,
            "Tipo_cargo_Id": event.target.perfil.value !== "" ? parseInt(event.target.Tipo_cargo.value) : null,
            "Genero_Id": parseInt(event.target.sexo.value),
        }

        console.log(data)
        if (nuevo) {
            axiosApiInstance.post(config.apiGatewayURL + '/personas/', data)
                .then(response => {
                    console.log(response)
                    if (response.status == 208) {
                        alertContainer.current.innerHTML = "<div class='alert alert-warning alert-dismissible' role='alert'>Persona ya existente</div>"
                    } else {
                        alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible' role='alert'>Creado o actualizado correctamente</div>"
                        setNuevo(false)
                    }
                    // setIsOpen(false)
                    // setConvocantes([...convocantes])
                })
                .catch(error => {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'>Error desconocido</div>"
                })
        } else {
            axiosApiInstance.patch(config.apiGatewayURL + '/personas/' + numeroDocumento, data)
                .then(response => {
                    console.log(response)

                    alertContainer.current.innerHTML = "<div class='alert alert-success alert-dismissible' role='alert'>Creado o actualizado correctamente</div>"

                    // setIsOpen(false)
                    // setConvocantes([...convocantes])
                })
                .catch(error => {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'>Error desconocido</div>"
                })
        }

        // api/gateway/v1/solicitudes/:Id/convocados/crear_personas


    }

    const obtenerOpcionesCrearPersona = () => {
        axiosApiInstance.get(config.apiGatewayURL + "/datos_persona")
            .then(response => {
                console.log(response.data)
                setOpcionesTipoDocumento(response.data["Tipo_documento"])
                setOpcionesSexo(response.data["Genero"])
                setOpcionesTipoPersona(response.data["Tipo_persona"])
                setOpcionesTipoVivienda(response.data["Tipo_vivienda"])
                setOpcionesEstratoSocieconomico(response.data["Estrato_socioeconomico"])
                setOpcionesDepartamentos(response.data["departamentos"])
                setOpcionesTipoCargo(response.data["Tipo_cargo"])
                setOpcionesPerfil(response.data["Perfil"])
            })
    }

    const obtenerOpcionesCiudades = (value) => {
        axiosApiInstance.get(config.apiGatewayURL + "/departamentos/" + value)
            .then((response) => {
                setOpcionesCiudades(response.data)
            })
    }

    const obtenerOpcionesLocalidades = (value, departamento) => {
        axiosApiInstance.get(config.apiGatewayURL + "/departamentos/" + (departamento ? departamento : departamentoSeleccionado) + '/ciudades/' + value)
            .then((response) => {
                setOpcionesLocalidades(response.data)
            })
    }

    const obtenerOpcionesBarrios = (value, departamento, ciudad) => {
        axiosApiInstance.get(config.apiGatewayURL + "/departamentos/" + (departamento ? departamento : departamentoSeleccionado) + '/ciudades/' + (ciudad ? ciudad : ciudadSeleccionada) + '/barrios/' + value)
            .then((response) => {
                console.log(response.data)
                setOpcionesBarrios(response.data)
            })
    }

    const consultarPersona = (event) => {
        event.preventDefault()
        axiosApiInstance.get(config.apiGatewayURL + '/personas/' + event.target.identificación.value)
            .then(response => {
                console.log(response.data)
                setNombres(response.data[0]["Nombres"])
                setApellidos(response.data[0]["Apellidos"])
                setFechaNacimiento(response.data[0]["Fecha_de_nacimiento"])
                setTipoDocumento(response.data[0]["Tipo_documento_Id"]["Id"])
                setNumeroDocumento(response.data[0]["Identificacion"])
                setCorreo(response.data[0]["Correo"])
                setTelefono(response.data[0]["Telefono"])
                setGenero(response.data[0]["Genero_Id"])
                setTipoPersona(response.data[0]["Tipo_persona_Id"]["Id"])
                setTipoVivienda(response.data[0]["Tipo_vivienda_Id"]["Id"])
                setEstratoSocioeconomico(response.data[0]["Estrato_socioeconomico_Id"]["Id"])
                setDepartamentoSeleccionado(response.data[0]["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Departamento_Id"]["Id"])

                obtenerOpcionesCiudades(response.data[0]["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Departamento_Id"]["Id"])

                setCiudadSeleccionada(response.data[0]["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Id"])

                obtenerOpcionesLocalidades(response.data[0]["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Id"], response.data[0]["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Departamento_Id"]["Id"])

                setLocalidad(response.data[0]["Barrio_Id"]["Localidad_Id"]["Id"])

                obtenerOpcionesBarrios(response.data[0]["Barrio_Id"]["Localidad_Id"]["Id"], response.data[0]["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Id"], response.data[0]["Barrio_Id"]["Localidad_Id"]["Ciudad_Id"]["Departamento_Id"]["Id"])

                setBarrio(response.data[0]["Barrio_Id"]["Id"])
                setPerfil(response.data[0]["Perfil_Id"]["Id"])
                setTipoCargo(response.data[0]["Tipo_cargo_Id"]["Id"])

                setNuevo(false)
            })
    }


    let location = useLocation();
    const UrlParams = useParams();

    useEffect(() => {
        obtenerOpcionesCrearPersona()
    }, [])

    return (

        <div className='contenedor-personas'>
            <div className="imagen-personas">
                <img src="/images/persona.jpg"></img>
            </div>
            <div className="d-flex flex-column align-items-center">
                <form className='solicitudes-view-column-2-seccion-buscar' onSubmit={consultarPersona}>
                    <input className='form-control' name="identificación" placeholder='Identificación' />
                    <button className='btn btn-success'> Buscar </button>
                </form>
                <form className="formulario-personas" onSubmit={event => crearPersona(event)}>
                    <div className='registro-personas mt-2'>

                        <div className='container d-grid gap-1'>
                            <label className="m-0 p-1 h6 mt-1">Nombre</label>
                            <div className='row gap-3 ps-3 px-2 mb-2'>
                                <input className="form-control rounded col" placeholder="Nombre(s)" name='nombres' required value={nombres} onChange={event => setNombres(event.target.value)}></input>
                                <input className="form-control rounded col" placeholder="Apellidos" name='apellidos' required value={apellidos} onChange={event => setApellidos(event.target.value)}></input>
                            </div>
                        </div>
                        <div className='container d-grid gap-1 mb-2'>
                            <label className="h6 mt-2">Fecha de Nacimiento</label>
                            <input type="date" className="form-control" placeholder="fecha de Nacimiento" name='fechaNacimiento' required value={fechaNacimiento} onChange={event => setFechaNacimiento(event.target.value)}></input>
                        </div>
                        <div className='container d-grid gap-2 mb-2'>
                            <label className="h6 mt-2 col">Identificación</label>
                            <div className='row gap-3 ps-3 px-3'>
                                <select className="form-select" aria-label="Default select example" defaultValue="" name='tipoDocumento' required value={tipoDocumento} onChange={event => setTipoDocumento(event.target.value)}>
                                    <option value="">Tipo de Documento</option>
                                    {opcionesTipoDocumento.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                </select>
                                <input className="form-control rounded col" placeholder="Número de documento" name="numeroDocumento" required value={numeroDocumento} onChange={event => { setNumeroDocumento(event.target.value) }}></input>
                            </div>
                        </div>
                        <div className='container d-grid gap-1 mb-2'>
                            <label className="h6 mt-2">Datos adicionales</label>
                            <div className=' d-grid gap-2 ps-3 px-3 mb-2'>
                                <div className='row gap-3'>
                                    <input type="email" className="form-control rounded col" placeholder="Correo" name="email" required value={correo} onChange={event => setCorreo(event.target.value)}></input>
                                    <input type="text" className="form-control rounded col" placeholder="Teléfono" name="telefono" required value={telefono} onChange={event => setTelefono(event.target.value)}></input>
                                </div>
                                <div className='row gap-3'>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" name="sexo" required value={genero} onChange={event => setGenero(event.target.value)}>
                                        <option value="">Sexo</option>
                                        {opcionesSexo.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                        opcionesSexo
                                    </select>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" name="tipoPersona" required value={tipoPersona} onChange={event => setTipoPersona(event.target.value)}>
                                        <option value="">Tipo Persona</option>
                                        {opcionesTipoPersona.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                </div>
                                <div className='row gap-3'>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" name='tipoVivienda' required value={tipoVivienda} onChange={event => setTipoVivienda(event.target.value)}>
                                        <option value="">Tipo de Vivienda</option>
                                        {opcionesTipoVivienda.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" name='estratoSocioeconomico' required value={estratoSocioeconomico} onChange={event => setEstratoSocioeconomico(event.target.value)}>
                                        <option value="">Estrato Socieconómico</option>
                                        {opcionesEstratoSocieconomico.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Numero"]}</option>) })}
                                    </select>
                                </div>
                                <div className='row gap-3'>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" onChange={e => { obtenerOpcionesCiudades(e.target.value); setDepartamentoSeleccionado(e.target.value) }} required value={departamentoSeleccionado}>
                                        <option value="">Departamento</option>
                                        {opcionesDepartamentos.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" onChange={e => { obtenerOpcionesLocalidades(e.target.value); setCiudadSeleccionada(e.target.value) }} required value={ciudadSeleccionada}>
                                        <option value="">Ciudad</option>
                                        {opcionesCiudades.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                </div>
                                <div className='row gap-3'>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" onChange={e => { obtenerOpcionesBarrios(e.target.value); setLocalidad(e.target.value) }} required value={localidad}>
                                        <option value="">Localidad</option>
                                        {opcionesLocalidades.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" name='barrio' required value={barrio} onChange={event => setBarrio(event.target.value)}>
                                        <option value="">Barrio</option>
                                        {opcionesBarrios.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                </div>
                                <hr />
                                <div className='row gap-3'>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" name="perfil" value={perfil} onChange={event => setPerfil(event.target.value)}>
                                        <option value="">Perfil</option>
                                        {OpcionesPerfil.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                    <select className="form-select col" aria-label="Default select example" defaultValue="" name="Tipo_cargo" value={tipoCargo} onChange={event => setTipoCargo(event.target.value)}>
                                        <option value="">Tipo cargo</option>
                                        {OpcionesTipoCargo.map(dato => { return (<option key={dato["Id"]} value={dato["Id"]}>{dato["Nombre"]}</option>) })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {nuevo ? <button className="btn btn-success p-1 me-3 mb-2" id='boton-aceptar-registro-personas'>Registrar</button> : <button className="btn btn-success p-1 me-3 mb-2" id='boton-aceptar-registro-personas'>Actualizar</button>}
                        
                        <div ref={alertContainer}></div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Personas