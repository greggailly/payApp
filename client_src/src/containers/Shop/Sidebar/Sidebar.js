import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { PayContext } from './../../../utils/PayProvider'
import api from '../../../utils/axios'
import List from './../../../components/List/List'
import Infos from './../../../components/Infos/Infos'
import Button from 'react-bootstrap/Button'

import './Sidebar.css'

const Sidebar = () => {
    const [orderValidated, setOrderValidated] = useState(false)
    const context = useContext(PayContext)

    const validate = async () => {
        const token = localStorage.getItem('payToken')
        await api('post', 'orders', {
            list: context.state.list,
            userId: context.state.user._id
        }, token)
        setOrderValidated(true)
    }

    return (
        <div className="sidebar d-flex flex-column">
            {orderValidated ? <Redirect to="/logout" /> : null}
            <Link to="/logout"><Button variant="sidebar"><h3>Deconnexion</h3></Button></Link>
            <Infos user={context.state.user} />
            <List
                list={context.state.list}
                removeItem={context.removeItem} />
            <Button variant="sidebar" className="mt-auto" onClick={validate}><h3>Valider</h3></Button>
        </div >
    )
}

export default Sidebar
