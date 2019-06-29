import React, { useState, useEffect } from 'react'
import api from '../../../utils/axios'
import ReactTable from 'react-table'
import Suborders from './Suborders'

import 'react-table/react-table.css'


const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(
        () => {
            getOrders()
        }, []
    )

    const getOrders = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/orders', null, token)
        setOrders(res.data.orders)
    }

    const columns = [
        {
            id: 'datetime',
            Header: 'Date & Time',
            accessor: d => d.datetime
        },
        {
            id: 'username',
            Header: 'Username',
            accessor: d => d.userId.username
        },
        {
            Header: 'Price',
            accessor: 'price'
        }
    ]

    return (
        <div className="container mt-3 text-center" >
            <h2>Liste des commandes</h2>
            <ReactTable
                data={orders}
                columns={columns}
                showPageSizeOptions={false}
                defaultPageSize={12}
                filterable
                SubComponent={row => {
                    return (
                        <Suborders
                            list={row.original.list}
                        />
                    )
                }}
            />
        </div >
    )
}

export default Orders