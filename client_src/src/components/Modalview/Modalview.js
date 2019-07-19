import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import './ModalView.css'

import Accounts from '../../containers/Admin/Forms/Accounts'
import Categories from '../../containers/Admin/Forms/Categories'
import Users from '../../containers/Admin/Forms/Users'

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
            case 'categories':
                return <Categories handleClose={handleClose} handleSuccess={props.handleSuccess} />
            case 'users':
                return <Users handleClose={handleClose} handleSuccess={props.handleSuccess} />
            default:
                return 'Error in creating form'
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