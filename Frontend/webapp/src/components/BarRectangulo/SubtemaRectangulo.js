import React from "react";

// Importing css
import "./BarRectangulo.css";

export default function SubtemaRectangulo({ text, icon, seccion, setSeccion }) {
    return (
      <div className="icono-subtemarectangulo-movil" onClick={()=>setSeccion(!seccion)}>
        <img className="img-subtemarectangulo" src={"/images/subtema.png"} alt="journal-icon" />
        <div className="texto-subtemarectangulo">
          <label>{text}</label>
        </div>
        <img className="icon-datos-solicitante" src={"/icons/" + icon + ".png"} alt="journal-icon" />
      </div>
    );
  }
