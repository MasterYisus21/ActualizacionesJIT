import React, { useEffect, useRef } from 'react'
import './css/InicioSesion.css';
import axios from "axios";
import config from '../config.json'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function InicioSesion({ loggedIn, setLoggedIn }) {

    let navigate = useNavigate();
    const alertContainer = useRef("");

    const login = (event) => {
        event.preventDefault()
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        // axios.post(config.apiGatewayURL + '/auth/ingresar', data)
        axios.post('http://127.0.0.1:3001' + '/auth/ingresar', data)
            .then(response => {
                console.log(response.data)
                setLoggedIn(true)
                localStorage.setItem("conciliacionesToken", JSON.stringify({ access_token: response.data["access_token"], refresh_token: response.data["refresh_token"], nombres:  response.data["nombres"], apellidos:  response.data["apellidos"]}))
                localStorage.setItem("nombreUsuario", JSON.stringify({ nombres:  response.data["nombres"], apellidos:  response.data["apellidos"]}))
                navigate('/dashboard', { replace: true })
            })
            .catch(error => {
                console.log(error)
                if (error.response.status == 401) {
                    alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'>Credenciales invalidas</div>"
                }
            })
    }

    useEffect(() => {
        // localStorage.removeItem("conciliacionesToken")
    }, [])


    return (
        <div className='wrapper-main'>
            <div className="main">
                <div className="login">

                    <div className="logo">
                        <img src="images/logo@2x.png" />
                    </div>
                    <form className="form-inicio-sesion" id="form-inicio" onSubmit={login}>
                        <div className="user">
                            <img src="images/people.png" />
                            <input type="text" name='username' required />
                        </div>
                        <div className="password">
                            <img src="images/padlock.png" />
                            <input type="password" name="password" required />
                        </div>
                    </form>
                    <div ref={alertContainer}></div>
                    <button className="boton-login" form="form-inicio">Ingresar</button>

                </div>
                <div className="intro">
                    <div className="intro-triangle"></div>
                    <div className="intro-text">
                        <h2>SISTEMA<br /> CENTRO DE CONCILIACIÓN</h2>
                        <p><b>Busca ser una de las entidades en prestación de servicios sociales y juridicos mas eficaz y comprometida con la causa de las personas que a diario acuden a sus servicios, contribuyendo al desarrollo de nuestro país.</b></p>
                    </div>
                    <Link to="/nueva-solicitud/crear">
                        <button className='boton-entrar-sin-registro'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            Hey! Haz tu solicitud aquí
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default InicioSesion