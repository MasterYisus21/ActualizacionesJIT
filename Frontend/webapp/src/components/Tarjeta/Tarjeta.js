import React from "react";
import { BarRectanguloPequeño } from "../BarRectanguloPequeño";


// Importing css
import "./Tarjeta.css";

export default function Tarjeta({ titulo, radicado, fecha, estado }) {
  return (
      <div className="tarjeta">
        <div className="heading-tarjeta">
            <BarRectanguloPequeño text={titulo}/>
        </div>
        <div className="body-tarjeta">
          
          <div>
            <h5 className="subtitle-tarjeta">Radicado:</h5>
            <h5>{radicado}</h5>
          </div>
          <div>
            <h5 className="subtitle-tarjeta">Fecha:</h5>
            <h5>{fecha}</h5>
          </div>
          <div>
            <h5 className="subtitle-tarjeta">Estado:</h5>
            <h5>{estado}</h5>
          </div>
        
        </div>
      </div>
 
  );
}