import React from "react";
import { BarRectanguloPequeño } from "../BarRectanguloPequeño";

// Importing css
import "./Tarjeta.css";

export default function TarjetaPersonas({
  titulo,
  correo,
  celular,
  rol,
  apellidos,
  setEstado,
  estado,
  modificar,
  setModificar,
  id,
  setId,
}) {
  if (rol == null) {
    rol = "Asignar";
  }

  return (
    <div
      className="tarjeta-personas"
      onClick={() => {
        setEstado(!estado);
        setModificar("modificar");
        setId(id);
      }}
    >
      <div className="heading-tarjeta">
        <BarRectanguloPequeño text={titulo} apellido={apellidos} />
      </div>
      <div className="body-tarjeta-personas">
        <h6>Correo: {correo}</h6>
        <h6>Cel: {celular}</h6>
      </div>
      <div className="wrapp-indicador-persona">
        <h6 className={"indicador-persona-" + rol}>{rol}</h6>
      </div>
    </div>
  );
}
