
import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './SolicitudesDetalle.css'

function SolicitudesDetalle() {
  return (
    <div>
      {['REMITIR', 'bottom', 'bottom', 'bottom'].map((nombre) => (
        <OverlayTrigger
          trigger="click"
          key='bottom'
          placement='bottom'
          className="tooltip-detalle"
          overlay={
            <Popover id={`popover-positioned-bottom`} className="tooltip-detalle">
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button className="tooltip-detalle" variant="secondary">{nombre}</Button>
        </OverlayTrigger>
      ))}
    </div>
  )
}

export default SolicitudesDetalle