import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import Accounts from '../../containers/Admin/Forms/Accounts'

const ModalView = (props) => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const form = () => {
        switch (props.entity) {
            case 'accounts':
                return <Accounts handleClose={handleClose} handleSuccess={props.handleSuccess} />
                break;
            default:
                return 'Error in creating form'
                break;
        }
    }

    return (
        <React.Fragment>
            <Button onClick={handleShow}>Nouveau {props.name}</Button>
            <Modal show={show} onHide={handleClose}>
                {form()}
            </Modal>
        </React.Fragment>
    )
}

export default ModalView