import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import api from './../../../utils/axios'

import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        name: '',
        badge: '',
        hasChanged: false,
        isAdmin: false
    })

    useEffect(
        () => {
            getUsers()
        }, []
    )

    const getUsers = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/users', null, token)
        const userArray = res.data.users.map(user => {
            return { ...user, hasChanged: false }
        })
        setUsers(userArray)
    }

    const handleChange = e => {
        var updatedUsers = [...users]
        if (e.target.name === 'isAdmin') {
            updatedUsers[e.target.id][e.target.name] = e.target.checked
        } else {
            updatedUsers[e.target.id][e.target.name] = e.target.value
        }
        updatedUsers[e.target.id].hasChanged = true
        setUsers(updatedUsers)
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

    var userList = users.map((user, i) => {
        return (

            <div className="row text-center mb-3" key={i}>
                <div className="col-md-3"><input className="form-control" id={i} value={user.username} onChange={handleChange} /></div>
                <div className="col-md-3"><input className="form-control" id={i} value={user.badge} onChange={handleChange} /></div>
                <div className="col-md-2"><Form.Check id={i} checked={user.isAdmin} onChange={handleChange} /></div>
                <div className="col-md-4">
                    <Button className="mr-2" variant="success" id={i} onClick={handleSubmit} disabled={!user.hasChanged ? true : false}><i className="fas fa-check"></i></Button>
                    <Button variant="danger" id={i} onClick={handleDelete}><i className="fas fa-trash-alt"></i></Button>
                </div>
            </div>
        )
    })

    return (
        <div className="m-5">
            <div className="row text-center mb-3" >
                <div className="col-md-3">Nom</div>
                <div className="col-md-3">Badge</div>
                <div className="col-md-2">Administrateur</div>
                <div className="col-md-4"></div>
            </div>
            {userList}
            <div className="row text-center mb-3" >
                <div className="col-md-3"><input className="form-control" value={newUser.name} onChange={handleChangeNew} /></div>
                <div className="col-md-3"><input className="form-control" value={newUser.badge} onChange={handleChangeNew} /></div>
                <div className="col-md-2"><Form.Check value={newUser.isAdmin} onChange={handleChangeNew} /></div>
                <div className="col-md-4">
                    <Button className="mr-2" variant="success" onClick={handleNew} disabled={!newUser.hasChanged ? true : false}>Créer</Button>
                </div>
            </div>
        </div>
    )
}

export default Users