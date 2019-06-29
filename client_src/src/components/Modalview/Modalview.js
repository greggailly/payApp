import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import './ModalView.css'

import Accounts from '../../containers/Admin/Forms/Accounts'
import Categories from '../../containers/Admin/Forms/Categories'

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
            case 'categories':
                return <Categories handleClose={handleClose} handleSuccess={props.handleSuccess} />
                break;
            default:
                return 'Error in creating form'
                break;
        }
    }

    return (
        <React.Fragment>
            <div className="modalView">
                <Button onClick={handleShow}>Nouv(eau/elle) {props.name}</Button>
                <Modal show={show} onHide={handleClose} centered>
                    {form()}
                </Modal>
            </div>
        </React.Fragment>
    )
}

export default ModalView