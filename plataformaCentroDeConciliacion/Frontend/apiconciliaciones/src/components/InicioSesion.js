import React, { useEffect, useRef } from 'react'
import './css/InicioSesion.css';
import axios from "axios";
import config from '../config.json'
import { useNavigate } from 'react-router-dom';

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
            localStorage.setItem("conciliacionesToken", JSON.stringify({access_token: response.data["access_token"], refresh_token: response.data["refresh_token"]}))
            navigate('/dashboard', { replace: true} )
        })
        .catch(error => {
            console.log(error)
            if(error.response.status == 401) {
                alertContainer.current.innerHTML = "<div class='alert alert-danger alert-dismissible' role='alert'>Credenciales invalidas</div>"
            }
        })
    }

    useEffect(()=>{
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
                    <div ref={alertContainer} ></div>
                    <a href="#">¿Has olvidado tu contraseña?</a>
                    <button className="boton-login" form="form-inicio">Ingresar</button>

                </div>
                <div className="intro">
                    <div className="intro-triangle"></div>
                    <div className="intro-text">
                        <h2>SISTEMA<br /> CENTRO DE CONCILIACIÓN</h2>
                        <p><b>Busca ser una de las entidades en prestación de servicios sociales y juridicos mas eficaz y comprometida con la causa de las personas que a diario acuden a sus servicios, contribuyendo al desarrollo de nuestro país.</b></p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default InicioSesion