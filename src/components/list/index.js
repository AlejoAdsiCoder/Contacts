import { Button, Table } from 'react-bootstrap';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, Route} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function List() {

    const [items, setItems] = useState([]);
    const [filterName, setFilterName] =  useState("");
    const [filterEmail, setFilterEmail] =  useState("");
    const [filterTel, setFilterTel] =  useState("");
    const [searchResults, setSearchResults] = useState([]);

    const getFiltersName = e => {

        setFilterName(e.target.value);
    }

    const getFiltersEmail = e => {

        setFilterEmail(e.target.value);
    }

    const getFiltersTel = e => {

        setFilterTel(e.target.value);
    }

    

    useEffect(() => {
        getContacts();

        const filteredNames = items.filter(e => e.nombre.toLowerCase().includes(filterName));
        setSearchResults(filteredNames);

        const filteredEmails = items.filter(e => e.email.toLowerCase().includes(filterEmail));
        setSearchResults(filteredEmails);

        const filteredTel = items.filter(e => e.telefono.toLowerCase().includes(filterTel));
        setSearchResults(filteredTel);

    }, [filterName, filterEmail, filterTel, items]);

    const getContacts = async () =>{
        fetch (
            `http://localhost:3000/contactos`
            )
            .then(response => response.json())
            .then(data => setItems(data));
    }

    const deleteData = async (id) => {
        await fetch(`http://localhost:3000/contactos/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}
          })
          .then(res => res.text()) // or res.json()
          .then(res => console.log(res))

          getContacts();
    }

  return (
    <div>
        <section>
                <h2>Contactos</h2>
                    
            </section>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Nombre</InputGroup.Text>
                    <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    id="Name"
                    value={filterName}
                    onChange={getFiltersName}
                    />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Telefono</InputGroup.Text>
                    <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    id="Telefono"
                    value={filterTel}
                    onChange={getFiltersTel}
                    />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                    <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    id="Email"
                    value={filterEmail}
                    onChange={getFiltersEmail}
                    />
            </InputGroup>
        <Table striped>
            
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Fecha de nacimiento</th>
                <th>Dirección</th>
                <th>Correo electrónico</th>
                
            </tr>
            </thead>
           <tbody>
            
                {searchResults.map(item => (
                    <tr>
                        <>
                            <td>{item.nombre}</td>
                            <td>{item.telefono}</td>
                            <td>{item.fecha_nacimiento}</td>
                            <td>{item.direccion}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={{ pathname: `/edit/${item.id}`}}>
                                    <Button variant="danger">Editar</Button>
                                </Link>
                                <Button variant="secondary" onClick={() => deleteData(item.id)}>Eliminar</Button>
                            </td>
                        </>
                    </tr>
                    ))
                }
                <tr>

                </tr>
            </tbody>          
        </Table>
</div>
  )
}

