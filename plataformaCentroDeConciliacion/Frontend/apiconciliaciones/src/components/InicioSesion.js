import React from 'react'
import './css/InicioSesion.css';

function InicioSesion() {
    return (
        <div className='wrapper-main'>
            <div className="main">
                <div className="login">
                    
                        <div className="logo">
                            <img src="images/logo@2x.png" />
                        </div>
                        <form className="form-inicio-sesion" id="form-inicio">
                        <div className="user">
                            <img src="images/people.png" />
                            <input type="text" required />                    
                        </div>
                        <div className="password">
                            <img src="images/padlock.png" />
                            <input type="password" required />                    
                        </div>
                        </form>
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