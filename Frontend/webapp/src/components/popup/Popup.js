import React from 'react'

// import css
import './Popup.css'

export default function Popup({text, setEstado, estado}){
    return (
        <div className='wrapp-popup'>
            <div className='popup'>
                <div className='titulo-popup'>
                    <h1>Crear Persona</h1>
                </div>
                <div className='form-popup'>
                    <div className='wrapp-boton-cerrar'>
                        <svg className='boton-cerrar-popup' onClick={() => setEstado(!estado)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </div>
                    
                    <h2>Mundo</h2>
                </div>
            </div>
        </div>
    )
}