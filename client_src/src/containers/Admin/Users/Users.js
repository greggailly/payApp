import React, { useState, useEffect } from 'react'
import api from './../../../utils/axios'
import ReactTable from 'react-table'
import Modalview from '../../../components/Modalview/Modalview'

import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            getUsers()
        }, []
    )

    const renderEditable = (cellInfo) => {
        const data = users
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    handleChange(e, cellInfo)
                }}
                dangerouslySetInnerHTML={{
                    __html: data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    const renderCheckbox = cellInfo => {
        const data = users
        return (
            <input type="checkbox" checked={data[cellInfo.index][cellInfo.column.id]} onChange={e => {
                handleChange(e, cellInfo)
            }} />
        )
    }

    const renderActions = (cellInfo) => {
        return (
            <i id={cellInfo.index} onClick={handleDelete} className="fas fa-trash-alt"></i>
        )
    }

    const columns = [
        {
            Header: 'Nom',
            accessor: 'username',
            Cell: renderEditable
        },
        {
            Header: 'Badge',
            accessor: 'badge',
            Cell: renderEditable
        },
        {
            Header: 'Administrateur',
            accessor: 'isAdmin',
            Cell: renderCheckbox
        },
        {
            Header: 'Solde',
            accessor: 'solde'
        },
        {
            Header: 'Action',
            Cell: renderActions,
            maxWidth: 100,
            filterable: false
        }
    ]

    const getUsers = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/users', null, token)
        setUsers(res.data.users)
    }

    const handleChange = async (e, cellInfo) => {
        e.preventDefault()
        const id = cellInfo.row._original._id
        var updatedUsers = [...users]
        if (cellInfo.column.id === 'isAdmin') {
            console.log(e.target)
            updatedUsers[cellInfo.index][cellInfo.column.id] = e.target.checked
        } else {
            updatedUsers[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
        }
        try {
            const token = localStorage.getItem('payToken')
            await api('put', `/users/${id}`, updatedUsers[cellInfo.index], token)
            setUsers(updatedUsers)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSuccess = (newUser) => {
        let updatedUsers = [...users, newUser.data.createdUser]
        setUsers(updatedUsers)
    }



    const handleDelete = async e => {
        const id = e.currentTarget.id
        const userId = users[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('delete', `/users/${userId}`, null, token)
            var updatedUsers = [...users]
            updatedUsers.splice(id, 1)
            setUsers(updatedUsers)
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <div className="container mt-3 text-center">
            <div className="row">
                <div className="col-8"><h2>Liste des utilisateurs</h2></div>
                <div className="col-4">
                    <Modalview
                        name='utilisateur'
                        entity='users'
                        handleSuccess={handleSuccess}
                    />
                </div>
            </div>
            <ReactTable
                data={users}
                columns={columns}
                showPageSizeOptions={false}
                defaultPageSize={12}
                filterable
            />
        </div>
    )
}

export default Users