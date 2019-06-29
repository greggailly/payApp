import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import api from './../../../utils/axios'
import ReactTable from 'react-table'

import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        name: '',
        badge: '',
        isAdmin: false
    })

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
            Cell: renderEditable
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
            console.log(cellInfo.column)
            updatedUsers[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
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

    const handleSubmit = async e => {
        const id = e.currentTarget.id
        const userId = users[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('put', `/users/${userId}`, users[id], token)
            var updatedUsers = [...users]
            updatedUsers[id].hasChanged = false
            setUsers(updatedUsers)
        } catch (error) {
            throw new Error(error)
        }
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

    const handleChangeNew = e => {
        let user = { ...newUser }
        if (e.target.name === 'isAdmin') {
            user.isAdmin = e.target.checked
        } else {
            user[e.Target.name] = e.target.value
        }
        user.hasChanged = true
        setNewUser(user)
    }

    const handleNew = async e => {
        const userCreated = {
            username: newUser.name,
            badge: newUser.badge,
            isAdmin: newUser.isAdmin
        }
        const token = localStorage.getItem('payToken')
        try {
            const res = await api('put', 'signup', userCreated, token)
            let updatedUserList = [...users]
            updatedUserList.concat(res.data.createdUser)
            setUsers(updatedUserList)
        } catch (error) {
            throw new Error(error)
        }
    }



    return (
        <div className="container mt-3 text-center">
            <div className="row">
                <div className="col-8"><h2>Liste des utilisateurs</h2></div>
                {/* <div className="col-4">
                    <Modalview
                        name='catégorie'
                        entity='categories'
                        handleSuccess={handleSuccess}
                    />
                </div> */}
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