import React from "react";

// Importing css
import "./BarRectangulo.css";

export default function SubtemaRectangulo({ text, icon }) {
    return (
      <div className="icono-subtemarectangulo-movil">
        <img className="img-subtemarectangulo" src={"/icons/subtema-rectangulo.svg"} alt="journal-icon" />
        <label className="texto-subtemarectangulo">{text}</label>
        <img className="icon-datos-solicitante" src={"/icons/" + icon + ".png"} alt="journal-icon" />
      </div>
    );
  }
