import React from "react";

// Importing css
import "./BarRectanguloPequeño.css";

export default function BarRectanguloPequeño({ text }) {
  return (
    <div className="icono-rectangulo-movil">
      <img className="img-rectangulo2" src={"/icons/rectangulo_movil.svg"} alt="journal-icon" />
      <label className="texto-rectangulo2">{text}</label>
    </div>
  );
}
