import React from "react";
import { BarRectanguloPequeño } from "../BarRectanguloPequeño";

// Importing css
import "./Tarjeta.css";

export default function TarjetaPersonas({ titulo }) {
  return (
      <div className="tarjeta-personas">
        <div className="heading-tarjeta">
            <BarRectanguloPequeño text={titulo}/>
        </div>
        <div className="body-tarjeta-personas"> 
            <h6>Correo: juan.benavidez@gmail.com</h6>
            <h6>Cel: 3254504423</h6>
        </div>
        <div className="wrapp-indicador-persona">
            <h6 className="indicador-persona">Estudiante</h6>
        </div>
      </div>
 
  );
}