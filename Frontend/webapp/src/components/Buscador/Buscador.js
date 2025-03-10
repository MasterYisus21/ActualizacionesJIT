import React, { useState } from "react";


// Importing css
import "./Buscador.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export default function Buscador({ valoresBuscados, setValoresBuscados, filtros, setFiltros, setPage }) {

  const [title, setTitle] = useState("Todos")

  const agregar_busqueda = (e) => {
    e.preventDefault()
    setPage(1)
    console.log(e.target.campobuscar.value);
    setValoresBuscados([e.target.campobuscar.value])
  }

  const filtrar = (value) => {
    setPage(1)
    setTitle(value)
    console.log(value);
    setFiltros([value])
  }

  return (
    <form onSubmit={e => agregar_busqueda(e)} className="wrapp-buscador">
      <InputGroup className="buscador ">
        <DropdownButton
          variant="outline-secondary"
          title={title}
          id="input-group-dropdown-3"
        >
          <Dropdown.Item onClick={e => {setTitle("Todos"); setFiltros([])}}>Todos</Dropdown.Item>
          {filtros?.map(filtro => {
            return (
              <Dropdown.Item key={"filtro" + filtro["id"]} onClick={e => filtrar(filtro["nombre"])}>{filtro["nombre"]}</Dropdown.Item>
            )
          })}
          {/* <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
        </DropdownButton>

        <Form.Control name="campobuscar" aria-label="Text input with 2 dropdown buttons" />
        <Button type="submit" className="bg-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Button>

      </InputGroup>
    </form>
  );
}