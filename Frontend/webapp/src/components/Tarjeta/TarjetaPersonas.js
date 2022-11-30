import React from "react";
import { BarRectanguloPequeño } from "../BarRectanguloPequeño";

// Importing css
import "./Tarjeta.css";

export default function TarjetaPersonas({ titulo, correo, celular, rol }) {
  return (
      <div className="tarjeta-personas">
        <div className="heading-tarjeta">
            <BarRectanguloPequeño text={titulo}/>
        </div>
        <div className="body-tarjeta-personas"> 
            <h6>Correo:{correo}</h6>
            <h6>Cel: {celular}</h6>
        </div>
        <div className="wrapp-indicador-persona">
            <h6 className="indicador-persona">{rol}</h6>
        </div>
      </div>
 
  );
}