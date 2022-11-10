import React from "react";

import { Link } from "react-router-dom";

// Importing css
import "./Login.css";

function Login() {
  return (
    
  <div className='wrapper-main'>
            <div className="main">
                <div className="login">

                    <div className="logo">
                        <img src="images/logo_universidad_texto.png" />
                    </div>
                    <form className="form-inicio-sesion">
                      <input className="form-control rounded col" placeholder="Usuario" name='nombres' required></input>                    
                      <input className="form-control rounded col w-100" placeholder="Contraseña" name='contraseña' type="password" required></input>                
                    </form>
                    <button className="boton-login" form="form-inicio">Ingresar</button>
                </div>
                <div className="intro">
                    <div className="intro-triangle"></div>
                    <div className="intro-text">
                        <div className="texto-guia">
                          <label className="h3 texto-titulo">Sistema Centros de Conciliación</label>
                          <label className="h6 texto-parrafo">Busca ser una de las entidades en prestación de servicios sociales y jurídicos más eficaz y comprometida con la causa de las personas que a diario acuden a sus servicios, contribuyendo al desarrollo de nuestro país.
                          </label>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        
        );
}

export default Login;
