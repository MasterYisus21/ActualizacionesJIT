import React from "react";
import { BarRectanguloPequeño } from "../BarRectanguloPequeño";


// Importing css
import "./Tarjeta.css";

export default function Tarjeta({ titulo }) {
  return (
      <div className="tarjeta">
        <div className="heading-tarjeta">
            <BarRectanguloPequeño text={titulo}/>
        </div>
        <div className="body-tarjeta">
          
          <div>
            <h5 className="subtitle-tarjeta">Radicado:</h5>
            <h5>R2022102436546</h5>
          </div>
          <div>
            <h5 className="subtitle-tarjeta">Fecha:</h5>
            <h5>24/10/2022</h5>
          </div>
          <div>
            <h5 className="subtitle-tarjeta">Estado:</h5>
            <h5>Audiencia Pendiente</h5>
          </div>
        
        </div>
      </div>
 
  );
}