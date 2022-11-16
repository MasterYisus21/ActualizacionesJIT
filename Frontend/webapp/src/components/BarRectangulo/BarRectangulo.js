import React from "react";

// import { Link } from "react-router-dom";

// Importing css
import "./BarRectangulo.css";

export default function BarRectangulo({ text }) {
  return (
    <div className="icono-rectangulo-movil">
      <img className="img-rectangulo" src={"/icons/rectangulo_movil.svg"} alt="journal-icon" />
      <label className="texto-rectangulo">{text}</label>
    </div>
  );
}
