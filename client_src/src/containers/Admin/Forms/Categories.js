import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import api from '../../../utils/axios'

const Categories = (props) => {
    const [category, setCategory] = useState({
        name: ''
    })

    const handleChange = e => {
        let updatedCategory = { ...category }
        updatedCategory[e.target.name] = e.target.value
        setCategory(updatedCategory)
    }

    const handleNew = async () => {
        const token = localStorage.getItem('payToken')
        const createdCategory = await api('post', '/categories', category, token)
        props.handleSuccess(createdCategory)
        props.handleClose()
    }

    return (
        <React.Fragment>
            <Modal.Header closeButton>
                <Modal.Title>Créer une catégorie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control required placeholder='Nom de la catégorie' type='text' name='name' onChange={handleChange} value={category.name} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Fermer</Button>
                <Button variant="primary" onClick={handleNew}>Enregistrer</Button>
            </Modal.Footer>
        </React.Fragment>
    )
}

export default Categories