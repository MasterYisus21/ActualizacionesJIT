import React from 'react'
import './css/SolicitudesView.css'

function SolicitudesView() {
  return (
    <div className='solicitudes-view'>
        <div className='solicitudes-view-column-1'>
            <div className='solicitudes-view-column-1-tabla-1'>
                <div className='solicitudes-view-column-1-tabla-1-header'>
                    <div className='content20'>
                        <img src="icons/asignacion_icon_1.png"></img>
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
                <div className='div-table-rounded'>
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
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td className='display-flex'>
                                <a href="#">
                                    <div className='beautiful-icon-container-1'>
                                        <img className='icon' src='icons/eye_icon_1.png'/>
                                    </div>
                                </a>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td className='display-flex'>
                                <a href="#">
                                    <div className='beautiful-icon-container-1'>
                                        <img className='icon' src='icons/eye_icon_1.png'/>
                                    </div>
                                </a>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td className='display-flex'>
                                <a href="#">
                                    <div className='beautiful-icon-container-1'>
                                        <img className='icon' src='icons/eye_icon_1.png'/>
                                    </div>
                                </a>
                            </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <div>Tabla2</div>
        </div>
        <div className='solicitudes-view-column-2'>
            <div>Buscar</div>
            <div>Tabla 3</div>
        </div>
    </div>
  )
}

export default SolicitudesView