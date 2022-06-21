import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useHistory, useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    nombre: "",
    telefono : "",
    fecha: "",
    direccion: "",
    email: ""
}


export const Edit = () => {

    const [user, setUser] = useState(initialValue);

    const { nombre, telefono, fecha, direccion, email } = user;

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch (
            `http://localhost:3000/contactos/${id}`
            )
            .then(response => response.json())
            .then(data => setUser(data));

    }, []);

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const updateContact = async (e) => {
        e.preventDefault();
        await fetch (
            `http://localhost:3000/contactos/${id}`, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "token-value",
                  },
                body: JSON.stringify(user),
            })
            .then(response => response.json())
            .then(data => setUser(data));
        
            navigate('/');
    }

  return (
    <div>
        <h3>Editar Contacto</h3>
        <Form style={{textAlign: 'left'}} onSubmit={updateContact}>

        <Form.Group size="lg sm">

        <Form.Label>Nombre</Form.Label>

        <Form.Control

            autoFocus

            id="nombre" value={nombre} type="text" name="nombre" class="nombre" onChange={(e) => onValueChange(e)}

        />

        </Form.Group>

        <Form.Group size="lg" className="mb-3">

        <Form.Label>Telefono</Form.Label>

        <Form.Control

            id="telefono" type="text" name="telefono" className="telefono" value={telefono} onChange={(e) => onValueChange(e)}

        />

        </Form.Group>

        <Form.Group size="lg" className="mb-3">

        <Form.Label>Fecha nacimiento</Form.Label>

        <Form.Control

            id="fecha" type="date" value={fecha} name="fecha" className="fecha" onChange={(e) => onValueChange(e)}

        />

        </Form.Group>

        <Form.Group size="lg" className="mb-3">

        <Form.Label>Dirección</Form.Label>

        <Form.Control

            id="direccion" type="text" value={direccion} name="direccion" className="direccion" onChange={(e) => onValueChange(e)}

        />

        </Form.Group>

        <Form.Group size="lg" className="mb-3">

        <Form.Label>Email</Form.Label>

        <Form.Control

            id="email" type="email" value={email} className="validate" name="email" onChange={(e) => onValueChange(e)}

        />

        </Form.Group>

        <Button type="submit">

        Editar

        </Button>

        </Form>
    </div>
  )
}