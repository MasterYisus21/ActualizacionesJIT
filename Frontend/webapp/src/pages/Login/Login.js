import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { axiosBasicInstanceApiExpedientes } from "../../helpers/axiosInstances";
// import { Link } from "react-router-dom";

// Importing css
import "./Login.css";

function Login() {

    let navigate = useNavigate();

    const autenticar = (e) => {
        e.preventDefault()
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        axiosBasicInstanceApiExpedientes({
            method: 'post',
            url: "/auth/ingresar/", /// Posible cambio de url
            // headers: req.headers,
            data: data
        })
            .then(response => {
                localStorage.setItem("tokens", JSON.stringify({ access_token: response.data["access_token"], refresh_token: response.data["refresh_token"] }))
                localStorage.setItem("usuario", JSON.stringify({ nombres: response.data["nombres"], identificacion: response.data["identity"] }))
                localStorage.setItem("modulos", JSON.stringify(response.data["modulos"]))
                navigate('/dashboard/solicitudes', { replace: true })
            })
            .catch(err => {
                console.log(err);
                if (err.response.status == 401) {
                    toast.warning(`Usuario o contraseña invalidos`, {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                }
            });
        // localStorage.setItem("tokens", JSON.stringify({ access_token: "aquiVaElAccessToken", refresh_token: "aquiVaElRefreshToken" }))
        // localStorage.setItem("usuario", JSON.stringify({ nombres: "aquiVaElNombreDelUsuario", identificacion: "aquiVaLaIdentificacionDelUsuario" }))
        // navigate('/dashboard/expedientes', { replace: true })
    }

    return (

        <div className='wrapper-main'>
            <div className="main">
                <div className="login">

                    <div className="logo">
                        <img src="images/logo_universidad_texto.png" alt="logo_universidad_texto" />
                    </div>
                    <form className="form-inicio-sesion" onSubmit={autenticar}>
                        <input className="form-control rounded col btn-login" placeholder="Usuario" name='username' required></input>
                        <input className="form-control rounded col btn-login" placeholder="Contraseña" name='password' type="password" required></input>
                        <div className="link-boton-login"><button className="boton-login">Ingresar</button></div>
                    </form>
                    {/* <Link to="../../dashboard/expedientes" className="link-boton-login">
                        <button className="boton-login" form="form-inicio">Ingresar</button>
                    </Link> */}
                </div>
                <div className="intro">
                    <div className="intro-triangle"></div>
                    <div className="intro-text">
                        <div className="texto-guia">
                            <label className="h3 texto-titulo">Sistema Centros de Conciliación</label>
                            <label className="texto-parrafo">Busca ser una de las entidades en prestación de servicios sociales y jurídicos más eficaz y comprometida con la causa de las personas que a diario acuden a sus servicios, contribuyendo al desarrollo de nuestro país.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>

    );
}

export default Login;
