import React, { useEffect, useState } from 'react'
import './css/SolicitudesView.css'
import config from '../../config.json';
import { Link } from 'react-router-dom';
import axiosApiInstance from '../Utilities/axiosApiInstance';

function SolicitudesView() {

    const [misSolicitudes, setMisSolicitudes] = useState([]);
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        axiosApiInstance.get(config.apiGatewayURL + "/solicitudes_view")
            .then((response) => {
                console.log(response.data)
                if (response.data.length > 0) {
                    setMisSolicitudes(response.data)
                }

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        // setHistorial([
        //     { Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: 7, Flag_requiere_documento: true },
        //     { Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: 5, Flag_requiere_documento: false },
        //     { Id: 5, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: 234, Flag_requiere_documento: false },
        //     { Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: 7, Flag_requiere_documento: true },
        //     { Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 7 }, Flag_requiere_documento: true },
        //     { Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 7 }, Flag_requiere_documento: true },
        //     { Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 5 }, Flag_requiere_documento: false },
        //     { Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 5 }, Flag_requiere_documento: false },
        //     { Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 5 }, Flag_requiere_documento: false },
        //     { Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 7 }, Flag_requiere_documento: true },
        //     { Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 5 }, Flag_requiere_documento: false },
        //     { Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 5 }, Flag_requiere_documento: false },
        //     { Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 5 }, Flag_requiere_documento: false },
        //     { Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud_Id: { Id: 7 }, Flag_requiere_documento: true },
        // ])

        axiosApiInstance.get(config.apiGatewayURL + "/solicitudes_view/historico")
        .then((response) => {
            console.log(response.data)
            if (response.data.length > 0) {
                setHistorial(response.data)
            }

        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className='solicitudes-view'>
            <div className='solicitudes-view-column-1'>
                <div className='solicitudes-view-column-1-tabla-1'>
                    <div className='solicitudes-view-column-1-tabla-1-header position-sticky'>
                        <div className='contentfitcontent'>
                            <img className='small-image' src="/icons/asignacion_icon_1.png"></img>
                        </div>
                        <div className='div-green-table-header content100'>
                            <div>
                                Asignadas a mí
                            </div>
                            <div className='beautiful-icon-container-3'>
                                Ver solicitudes
                            </div>
                        </div>
                    </div>
                    <div className='div-table-rounded solicitudes-view-mis-solicitudes-div'>
                        <table className="table table-hover table-bordered">
                            <thead className='table-light'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fecha de solicitud</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {misSolicitudes.map((datos) => {
                                    if (datos["Estado"] != "Resuelta") {
                                        return (
                                            <tr key={datos["Solicitud_Id"]}>
                                                <th scope="row">{datos["Solicitud_Id"]}</th>
                                                <td>{datos["Fecha_registro"]}</td>
                                                <td>{datos["Tipo_Estado"]}</td>
                                                <td className='display-flex'>
                                                    <Link to={"/dashboard/modulo-solicitudes/" + datos["Solicitud_Id"] + "/datos_generales"}>
                                                        <div className='beautiful-icon-container-1'>
                                                            <img className='icon' src='/icons/eye_icon_1.png' />
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='solicitudes-view-column-1-tabla-1'>
                    <div className='solicitudes-view-column-1-tabla-2-header position-sticky'>
                        <div className='div-green-table-header content100'>
                            <div>
                                Resueltas
                            </div>
                        </div>
                    </div>
                    <div className='div-table-rounded solicitudes-view-mis-solicitudes-div'>
                        <table className="table table-hover table-bordered">
                            <thead className='table-light'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fecha de solicitud</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {misSolicitudes.map((datos) => {
                                    if (datos["Estado"] == "Resuelta") {
                                        return (
                                            <tr key={datos["Solicitud_Id"]}>
                                                <th scope="row">{datos["Solicitud_Id"]}</th>
                                                <td>{datos["Fecha_registro"]}</td>
                                                <td>{datos["Tipo_Estado"]}</td>
                                                <td className='display-flex'>
                                                    <Link to={"/dashboard/modulo-solicitudes/" + datos["Solicitud_Id"] + "/datos_generales"}>
                                                        <div className='beautiful-icon-container-1'>
                                                            <img className='icon' src='/icons/eye_icon_1.png' />
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className='solicitudes-view-column-2'>
                <div className='solicitudes-view-column-2-seccion-buscar'>
                    <input className='form-control' placeholder='Solicitud' />
                    <button className='btn btn-success'> Buscar </button>
                </div>
                <div className='solicitudes-view-column-2-tabla-1'>
                    <div className='solicitudes-view-column-1-tabla-2-header position-sticky'>
                        <div className='div-green-table-header content100'>
                            <div>
                                Historial
                            </div>
                        </div>
                    </div>
                    <div className='div-table-rounded solicitudes-view-mis-solicitudes-div'>
                        <table className="table table-sm table-hover table-bordered">
                            <thead className='table-light'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Solicitud</th>
                                    <th scope="col">Documento requerido</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {historial.map((datos) => {
                                    return (
                                        <tr key={datos["Id"]}>
                                            <th scope="row">{datos["Id"]}</th>
                                            <td>{datos["Fecha"]}</td>
                                            <td>{datos["Descripcion"]}</td>
                                            <td>{datos["Tipo_estado_Id"]}</td>
                                            <td>{datos["Solicitud_Id"]}</td>
                                            <td>{datos["Flag_requiere_documento"] ? <div className='state action-required-state'>si</div> : <div className='state success-state'>no</div>}</td>
                                            {/* <td>{datos["Descripcion"]}</td> */}
                                            
                                            <td className='display-flex'>
                                                <a href="#">
                                                    <div className='beautiful-icon-container-1'>
                                                        <img className='icon' src='/icons/eye_icon_1.png' />
                                                    </div>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SolicitudesView