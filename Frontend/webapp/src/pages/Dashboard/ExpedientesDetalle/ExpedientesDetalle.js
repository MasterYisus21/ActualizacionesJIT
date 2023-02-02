import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { Link, Outlet, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { axiosTokenInstanceApiExpedientes } from '../../../helpers/axiosInstances';

// importing css
import './ExpedientesDetalle.css'


function ExpedientesDetalle() {

    let { id } = useParams();

    const [estadosExpediente, setEstadosExpediente] = useState([])
    const [estadoExpediente, setEstadoExpediente] = useState(null)
    const [numeroExpediente, setNumeroExpediente] = useState(null)
    const [numeroRadicado, setNumeroRadicado] = useState(null)

    useEffect(() => {
        axiosTokenInstanceApiExpedientes({
            method: 'get',
            url: "/estados_expediente/",
            // headers: req.headers,
            data: {}
        })
            .then(result => {
                console.log(result.data.results);
                setEstadosExpediente(result.data.results)
            })
            .catch(err => {
                console.log(err);
            });
        return () => {
            setEstadosExpediente([])
        }
    }, [])

    useEffect(() => {
        axiosTokenInstanceApiExpedientes({
            method: 'get',
            url: "/expedientes/" + id,
            // headers: req.headers,
            data: {}
        })
            .then(result => {
                setEstadoExpediente({
                    id: result.data.estado_expediente_id,
                    nombre: result.data.estado_expediente
                })
                setNumeroExpediente(result.data.numero_caso)
                setNumeroRadicado(result.data.numero_radicado)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])


    useEffect(() => {
        console.log(estadoExpediente)
    }, [estadoExpediente])

    const changeEstadoExpediente = (estado) => {
        console.log(estado);
        const cambiarEstado = (estado) => {
            axiosTokenInstanceApiExpedientes({
                method: 'post',
                url: `/expedientes/${id}/estado`,
                // headers: req.headers,
                data: {
                    "estado_expediente_id": estado.id
                }
            })
                .then(result => {
                    setEstadoExpediente(estado)
                    toast.success('Se cambio el estado de la solicitud satisfactoriamente', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        }
        confirmAlert({
            title: `Confirmación`,
            message: `¿Estas seguro de cambiar el estado del caso a ${estado.nombre.toUpperCase()}`,
            buttons: [
                {
                    label: 'Si',
                    onClick: () => cambiarEstado(estado)

                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }


    return (

        <div className='modulo-solicitud-wrapper'>
            <div className='modulo-solicitud-content'>
                <div className='modulo-solicitud-content-navbar'>


                    <>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/datosgenerales"} className='modulo-solicitud-content-navbar-link'>Datos Generales</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/convocantes"} className='modulo-solicitud-content-navbar-link'>Convocantes</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/convocados"} className='modulo-solicitud-content-navbar-link'>Convocados</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/hechos"} className='modulo-solicitud-content-navbar-link'>Hechos</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/documentos"} className='modulo-solicitud-content-navbar-link'>Documentos</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/conciliador"} className='modulo-solicitud-content-navbar-link'>Conciliador</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/estudiantes"} className='modulo-solicitud-content-navbar-link'>Estudiantes</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/manejoconflicto"} className='modulo-solicitud-content-navbar-link'>Manejo Conflicto</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/audiencia"} className='modulo-solicitud-content-navbar-link'>Audiencia</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/resultado"} className='modulo-solicitud-content-navbar-link'>Resultado</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/evaluacionservicio"} className='modulo-solicitud-content-navbar-link'>Evaluacion del servicio</Link>
                        <Link to={"/dashboard/expedientes/detalle/" + id + "/seguimientos"} className='modulo-solicitud-content-navbar-link'>Seguimientos</Link>

                    </>

                </div>

                <div className='modulo-solicitud-content-main'>
                    <Outlet context={{ setEstadoExpediente }} />
                </div>
                <div className="wrapper">
                    <ul className="StepProgress">
                        {/* <li className={"StepProgress-item " + "is-done"}><strong>Nueva</strong></li>
                        <li className={"StepProgress-item " + "is-done"}><strong>Se requiere informacion</strong></li>
                        <li className={"StepProgress-item " + "is-done"}><strong>Asignada</strong></li>
                        <li className={"StepProgress-item " + "is-done"}><strong>Audiencia pendiente</strong></li>
                        <li className={"StepProgress-item " + "is-done"}><strong>Generacion de resultado</strong></li>
                        <li className={"StepProgress-item " + "is-done"}><strong>Resuelta</strong></li>
                        <li className={"StepProgress-item " + "is-done"}><strong>Cerrado</strong></li>
                        <li className={"StepProgress-item " + "is-done"}><strong>Anulada</strong></li> */}
                        {estadosExpediente.map((dato) => {
                            return (
                                <li
                                    key={`estadoExpediente${dato.id}`}
                                    style={{ cursor: 'pointer' }}
                                    className={`StepProgress-item ${dato.id <= estadoExpediente?.id ? 'is-done' : ''}`}
                                    onClick={e => changeEstadoExpediente(dato)}
                                >
                                    <strong>{dato.nombre}</strong>
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <div className='h6'>Número de expediente:</div>
                        <div className='h5'><strong>{numeroExpediente}</strong></div>
                        <div className='h6'>Número de radicado:</div>
                        <div className='h5'><strong>{numeroRadicado}</strong></div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default ExpedientesDetalle