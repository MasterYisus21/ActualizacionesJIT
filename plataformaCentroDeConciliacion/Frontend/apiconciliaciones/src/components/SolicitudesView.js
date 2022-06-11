import React, { useEffect, useState } from 'react'
import './css/SolicitudesView.css'

function SolicitudesView() {

    const [misSolicitudes, setMisSolicitudes] = useState([]);
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        setMisSolicitudes([
            {Id: 1, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 2, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 3, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 4, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 5, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 6, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 7, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Iniciada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Cerrada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Cerrada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Cerrada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Cerrada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Cerrada"},
            {Id: 8, Fecha_Solicitud: "22/08/2021",Estado: "Cerrada"},
            
        ])
    }, [])

    useEffect(() => {
        setHistorial([
            {Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 7}, Flag_requiere_documento: true},
            {Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 5}, Flag_requiere_documento: false},
            {Id: 5, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 234}, Flag_requiere_documento: false},
            {Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 7}, Flag_requiere_documento: true},
            {Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 7}, Flag_requiere_documento: true},
            {Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 7}, Flag_requiere_documento: true},
            {Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 5}, Flag_requiere_documento: false},
            {Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 5}, Flag_requiere_documento: false},
            {Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 5}, Flag_requiere_documento: false},
            {Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 7}, Flag_requiere_documento: true},
            {Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 5}, Flag_requiere_documento: false},
            {Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 5}, Flag_requiere_documento: false},
            {Id: 4, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 5}, Flag_requiere_documento: false},
            {Id: 3, Fecha: "06/06/2022", Descripcion: "desc", Solicitud: {Id: 7}, Flag_requiere_documento: true},
        ])
    }, [])
  
  return (
    <div className='solicitudes-view'>
        <div className='solicitudes-view-column-1'>
            <div className='solicitudes-view-column-1-tabla-1'>
                <div className='solicitudes-view-column-1-tabla-1-header position-sticky'>
                    <div className='contentfitcontent'>
                        <img className='small-image' src="icons/asignacion_icon_1.png"></img>
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
                    <table className="table table-hover">
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
                                if(datos["Estado"] != "Cerrada"){
                                return (
                                <tr>
                                    <th scope="row">{datos["Id"]}</th>
                                    <td>{datos["Fecha_Solicitud"]}</td>
                                    <td>{datos["Estado"]}</td>
                                    <td className='display-flex'>
                                        <a href="#">
                                            <div className='beautiful-icon-container-1'>
                                                <img className='icon' src='icons/eye_icon_1.png'/>
                                            </div>
                                        </a>
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
                    <table className="table table-hover">
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
                                if(datos["Estado"] == "Cerrada"){
                                return (
                                <tr>
                                    <th scope="row">{datos["Id"]}</th>
                                    <td>{datos["Fecha_Solicitud"]}</td>
                                    <td>{datos["Estado"]}</td>
                                    <td className='display-flex'>
                                        <a href="#">
                                            <div className='beautiful-icon-container-1'>
                                                <img className='icon' src='icons/eye_icon_1.png'/>
                                            </div>
                                        </a>
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
                <input className='form-control-lg' placeholder='Solicitud'/>
                <button className='btn btn-success btn-lg'> Buscar </button>
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
                    <table className="table table-hover">
                        <thead className='table-light'>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Solicitud</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Documento requerido</th>
                            <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {historial.map((datos) => {
                                return (
                                <tr>
                                    <th scope="row">{datos["Id"]}</th>
                                    <td>{datos["Solicitud"]["Id"]}</td>
                                    <td>{datos["Fecha"]}</td>
                                    <td>{datos["Flag_requiere_documento"] ? <div className='state action-required-state'>si</div>: <div className='state success-state'>no</div>}</td>
                                    {/* <td>{datos["Descripcion"]}</td> */}
                                    <td className='display-flex'>
                                        <a href="#">
                                            <div className='beautiful-icon-container-1'>
                                                <img className='icon' src='icons/eye_icon_1.png'/>
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