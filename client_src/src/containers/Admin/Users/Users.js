import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import api from './../../../utils/axios'

import './Users.css'

class Users extends Component {
    state = {
        users: [],
        newName: '',
        newBadge: '',
        hasChanged: false,
        isAdmin: false
    }

    componentDidMount() {
        const token = localStorage.getItem('payToken')
        api('get', '/users', null, token)
            .then(res => {
                const users = res.data.users.map(user => {
                    return { ...user, hasChanged: false }
                })
                this.setState({ users })
            })
    }

    handleChangeName = e => {
        const id = e.target.id
        var users = this.state.users
        users[id].username = e.target.value
        users[id].hasChanged = true
        this.setState({ users })
    }

    handleChangeBadge = e => {
        const id = e.target.id
        var users = this.state.users
        users[id].badge = e.target.value
        users[id].hasChanged = true
        this.setState({ users })
    }

    handleChangeAdmin = e => {
        const id = e.currentTarget.id
        var users = this.state.users
        users[id].isAdmin = !users[id].isAdmin
        users[id].hasChanged = true
        this.setState({ users })
    }

    handleSubmit = e => {
        const id = e.currentTarget.id
        const userId = this.state.users[id]._id
        const token = localStorage.getItem('payToken')
        api('put', `/users/${userId}`, this.state.users[id], token)
            .then(res => {
                var users = this.state.users
                users[id].hasChanged = false
                this.setState({ users })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleDelete = e => {
        const id = e.currentTarget.id
        const userId = this.state.users[id]._id
        const token = localStorage.getItem('payToken')
        api('delete', `/users/${userId}`, null, token)
            .then(res => {
                var users = this.state.users
                users.splice(id, 1)
                this.setState({ users })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleNewName = e => {
        this.setState({ newName: e.target.value, hasChanged: true })
    }

    handleNewBadge = e => {
        this.setState({ newBadge: e.target.value, hasChanged: true })
    }

    handleNewAdmin = e => {
        this.setState({ isAdmin: !this.state.isAdmin, hasChanged: true })
    }

    handleNew = e => {
        const user = {
            username: this.state.newName,
            badge: this.state.newBadge,
            isAdmin: this.state.isAdmin
        }
        const token = localStorage.getItem('payToken')
        api('put', 'signup', user, token)
            .then(res => {
                const users = this.state.users.concat(user)
                this.setState({ newName: '', newBadge: '', hasChanged: false, users })
            })
    }

    render() {
        var userList = this.state.users.map((user, i) => {
            return (

                <div className="row text-center mb-3" key={i}>
                    <div className="col-md-3"><input className="form-control" id={i} value={user.username} onChange={this.handleChangeName} /></div>
                    <div className="col-md-3"><input className="form-control" id={i} value={user.badge} onChange={this.handleChangeBadge} /></div>
                    <div className="col-md-2"><Form.Check id={i} checked={user.isAdmin} onChange={this.handleChangeAdmin} /></div>
                    <div className="col-md-4">
                        <Button className="mr-2" variant="success" id={i} onClick={this.handleSubmit} disabled={!user.hasChanged ? true : false}><i className="fas fa-check"></i></Button>
                        <Button variant="danger" id={i} onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></Button>
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
                    <div className="col-md-3"><input className="form-control" value={this.state.newName} onChange={this.handleNewName} /></div>
                    <div className="col-md-3"><input className="form-control" value={this.state.newBadge} onChange={this.handleNewBadge} /></div>
                    <div className="col-md-2"><Form.Check value={this.state.isAdmin} onChange={this.handleNewAdmin} /></div>
                    <div className="col-md-4">
                        <Button className="mr-2" variant="success" onClick={this.handleNew} disabled={!this.state.hasChanged ? true : false}>Créer</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users