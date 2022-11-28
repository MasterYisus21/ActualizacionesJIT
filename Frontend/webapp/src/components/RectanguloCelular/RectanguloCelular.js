import React from "react";

// Importing css
import "./RectanguloCelular.css";

export default function RectanguloCelular({ text }) {
  return (
    <div className="icono-rectangulo-movil">
      <img className="img-rectangulo2" src={"/icons/rectangulo_movil_celular.svg"} alt="journal-icon" />
      <label className="texto-rectangulo2">{text}</label>
    </div>
  );
}
