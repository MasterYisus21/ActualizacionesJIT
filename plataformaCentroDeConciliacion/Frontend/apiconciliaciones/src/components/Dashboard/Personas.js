import React from "react";
import "./css/Personas.css";

function Personas() {

    return (

        <div className='contenedor-personas'>
            <div className="imagen-personas">
                <img src="/images/persona.jpg"></img>
            </div>
            <div className="formulario-personas">
                <div className='registro-personas mt-2'>
                    <div className='container d-grid gap-1'>
                        <label className="m-0 p-1 h6 mt-1">Nombre</label>
                        <div className='row gap-3 ps-3 px-2 mb-2'>
                            <input className="form-control rounded col" placeholder="Nombre(s)"></input>
                            <input className="form-control rounded col" placeholder="Apellidos"></input>
                        </div>
                    </div>
                    <div className='container d-grid gap-1 mb-2'>
                        <label className="h6 mt-2">Fecha de Nacimiento</label>
                        <input type="date" class="form-control" placeholder="fecha de Nacimiento"></input>
                    </div>
                    <div className='container d-grid gap-2 mb-2'>
                        <label className="h6 mt-2 col">Identificación</label>
                        <div className='row gap-3 ps-3 px-3'>
                            <select className="form-control col" aria-label="Default select example">
                                <option selected>Tipo de Documento</option>
                                <option value="1">Cedula</option>
                                <option value="2">Documento de Identificación</option>
                                <option value="3">Pasaporte</option>
                            </select>
                            <input className="form-control rounded col" placeholder="Número de documento"></input>
                        </div>
                    </div>
                    <div className='container d-grid gap-1 mb-2'>
                        <label className="h6 mt-2">Datos adicionales</label>
                        <div className=' d-grid gap-2 ps-3 px-3 mb-2'>
                            <div className='row gap-3'>
                                <input type="email" className="form-control rounded col" placeholder="Correo"></input>
                                <input type="text" className="form-control rounded col" placeholder="Teléfono"></input>
                            </div>
                            <div className='row gap-3'>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Género</option>
                                    <option value="1">Femenino</option>
                                    <option value="2">Masculino</option>
                                    <option value="3">No Binario</option>
                                </select>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Tipo Persona</option>
                                    <option value="1">Jurídica</option>
                                    <option value="2">Natural</option>
                                </select>
                            </div>
                            <div className='row gap-3'>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Tipo de Vivienda</option>
                                    <option value="1">Propia</option>
                                    <option value="2">Arriendo</option>
                                </select>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Estrato Socieconómico</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className='row gap-3'>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Departamento</option>
                                    <option value="1">Cundinamarca</option>
                                    <option value="2">Boyacá</option>
                                    <option value="3">Meta</option>
                                </select>
                                <select className="form-select col" aria-label="">
                                    <option selected>Ciudad</option>
                                    <option value="1">Bototá</option>
                                    <option value="2">Medellín</option>
                                    <option value="3">Tunja</option>
                                </select>
                            </div>
                            <div className='row gap-3'>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Localidad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Barrio</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className='row gap-3'>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Perfil</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <select className="form-select col" aria-label="Default select example">
                                    <option selected>Tipo cargo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary p-1 me-3 mb-2" id='boton-aceptar-registro-personas'>Registrar</button>
                </div>
            </div>

        </div>
    )
}

export default Personas