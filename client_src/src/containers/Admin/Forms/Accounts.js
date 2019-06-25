import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import api from '../../../utils/axios'

const Accounts = (props) => {
    const [account, setAccount] = useState({
        name: '',
        value: ''
    })

    const handleChange = e => {
        let updatedAccount = { ...account }
        updatedAccount[e.target.name] = e.target.value
        setAccount(updatedAccount)
    }

    const handleNew = async () => {
        const token = localStorage.getItem('payToken')
        const createdAccount = await api('post', '/accounts', account, token)
        props.handleSuccess(createdAccount)
        props.handleClose()
    }

    return (
        <React.Fragment>
            <Modal.Header closeButton>
                <Modal.Title>Créer un compte</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control required placeholder='Nom du compte' type='text' name='name' onChange={handleChange} value={account.name} />
                    <Form.Label>Valeur</Form.Label>
                    <Form.Control required placeholder='Valeur intitiale' type='number' name='value' onChange={handleChange} value={account.value} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Fermer</Button>
                <Button variant="primary" onClick={handleNew}>Enregistrer</Button>
            </Modal.Footer>
        </React.Fragment>
    )
}

export default Accounts