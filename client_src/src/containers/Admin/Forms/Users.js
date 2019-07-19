import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import api from '../../../utils/axios'

const Users = (props) => {
    const [user, setUser] = useState({
        username: '',
        badge: '',
        isAdmin: false
    })

    const handleChange = e => {
        let updatedUser = { ...user }
        if (e.target.name === 'isAdmin') {
            updatedUser[e.target.name] = e.target.checked
        } else {
            updatedUser[e.target.name] = e.target.value
        }
        setUser(updatedUser)
    }

    const handleNew = async () => {
        const token = localStorage.getItem('payToken')
        const createdUser = await api('put', '/signup', user, token)
        props.handleSuccess(createdUser)
        props.handleClose()
    }

    return (
        <React.Fragment>
            <Modal.Header closeButton>
                <Modal.Title>Créer un utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control required placeholder='Nom du nouvel utilisateur' type='text' name='username' onChange={handleChange} value={user.username} />
                    <Form.Label>Badge</Form.Label>
                    <Form.Control required placeholder='Badge' type='password' name='badge' onChange={handleChange} value={user.badge} />
                    <Form.Label>Administrateur</Form.Label>
                    <Form.Control required type='checkbox' name='isAdmin' onChange={handleChange} value={user.isAdmin} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Fermer</Button>
                <Button variant="primary" onClick={handleNew}>Enregistrer</Button>
            </Modal.Footer>
        </React.Fragment>
    )
}

export default Users