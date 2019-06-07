import React, { Component } from 'react'
import api from '../../../utils/axios'

import './Orders.css'

class Orders extends Component {
    state = {
        orders: [],
    }

    async componentDidMount() {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/orders', null, token)
        this.setState({ orders: res.data.orders })
    }

    render() {
        const orders = this.state.orders.map((order, i) => {
            return (
                <tr className="text-center" key={i}>
                    <td>{order.userId.username}</td>
                    <td>{order.price}</td>
                </tr>
            )
        })

        return (
            <div className="container mt-3 text-center" >
                <h2>Liste des commandes</h2>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr className="text-center">
                            <th>Utilisateur</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Orders