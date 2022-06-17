import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fecha, setFecha] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const contact = {nombre, telefono, fecha, direccion, email};

        fetch('http://localhost:3000/contactos', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(contact)
        })

        navigate('/');

        // setModalShow(false);
    }
  return (
    <div>
        <h3>Agregar Contacto</h3>

        <Form style={{textAlign: 'left'}} onSubmit={handleSubmit}>

        <Form.Group size="lg">

        <Form.Label>Nombre</Form.Label>

        <Form.Control

            autoFocus

            id="nombre" value={nombre} type="text" class="nombre" onChange={(e) => setNombre(e.target.value)}

        />

        </Form.Group>

        <Form.Group size="lg" className="mb-3">

        <Form.Label>Telefono</Form.Label>

        <Form.Control

            id="telefono" type="text" className="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}

        />

        </Form.Group>

        <Form.Group size="lg" className="mb-3">

        <Form.Label>Fecha nacimiento</Form.Label>

        <Form.Control

            id="fecha" type="date" value={fecha} className="fecha" onChange={(e) => setFecha(e.target.value)}

        />

        </Form.Group>
        
        <Form.Group size="lg" className="mb-3">

        <Form.Label>Dirección</Form.Label>

        <Form.Control

            id="direccion" type="text" value={direccion} className="direccion" onChange={(e) => setDireccion(e.target.value)}

        />

        </Form.Group>

        <Form.Group size="lg" className="mb-3">

        <Form.Label>Email</Form.Label>

        <Form.Control

            id="email" type="email" value={email} className="validate" onChange={(e) => setEmail(e.target.value)}

        />

        </Form.Group>

        <Button type="submit">

        Crear

        </Button>

        </Form>


        {/* <div class="row">
    <form onSubmit={handleSubmit} class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Nombre" id="nombre" value={nombre} type="text" class="nombre" onChange={(e) => setNombre(e.target.value)} />
          <label for="first_name">Nombre</label>
        </div>
        <div className="input-field col s6">
          <input placeholder="Telefono" id="telefono" type="text" className="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          <label for="telefono">Telefono</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="fecha" type="date" value={fecha} className="fecha" onChange={(e) => setFecha(e.target.value)} />
          <label for="fecha">Fecha nacimiento</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="direccion" type="text" value={direccion} className="direccion" onChange={(e) => setDireccion(e.target.value)} />
          <label for="direccion">Dirección</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input placeholder='email' id="email" type="email" value={email} className="validate" onChange={(e) => setEmail(e.target.value)} />
          <label for="email">Email</label>
        </div>
      </div>
    </form>
        </div> */}
    </div>
  )
}
