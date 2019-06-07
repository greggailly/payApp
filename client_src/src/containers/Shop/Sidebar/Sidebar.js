import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { PayContext } from './../../../utils/PayProvider'
import api from '../../../utils/axios'
import List from './../../../components/List/List'
import Infos from './../../../components/Infos/Infos'
import Button from 'react-bootstrap/Button'

import './Sidebar.css'

class Sidebar extends Component {
    state = {
        orderValidated: false
    }

    validate = async () => {
        const token = localStorage.getItem('payToken')
        await api('post', 'orders', {
            list: this.context.state.list,
            userId: this.context.state.user._id
        }, token)
        this.setState({ orderValidated: true })
    }

    render() {
        return (
            <div className="sidebar d-flex flex-column">
                {this.state.orderValidated ? <Redirect to="/logout" /> : null}
                <Link to="/logout"><Button variant="sidebar"><h3>Deconnexion</h3></Button></Link>
                <Infos user={this.context.state.user} />
                <List
                    list={this.context.state.list}
                    removeItem={this.context.removeItem} />
                <Button variant="sidebar" className="mt-auto" onClick={this.validate}><h3>Valider</h3></Button>
            </div >
        )
    }
}

Sidebar.contextType = PayContext

export default Sidebar
