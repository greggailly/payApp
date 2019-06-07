import React, { Component } from 'react'
import api from '../../../utils/axios'

import { Button } from 'react-bootstrap'

class Accounts extends Component {
    state = {
        accounts: [],
        name: '',
        value: 0
    }

    async componentDidMount() {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/accounts', null, token)
        this.setState({ accounts: res.data.accounts })
    }

    handleChangeValue = e => {
        e.preventDefault()
        const id = e.target.id
        var accounts = this.state.accounts
        accounts[id].value = e.target.value
        this.setState({ accounts })
    }

    handleSubmit = async e => {
        const id = e.currentTarget.id
        const accountId = this.state.accounts[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('put', `/accounts/${accountId}`, this.state.accounts[id], token)
        } catch (error) {
            console.log(error)
        }
    }

    handleDelete = async e => {
        const id = e.currentTarget.id
        const accountId = this.state.accounts[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('delete', `/accounts/${accountId}`, null, token)
            var accounts = this.state.accounts
            accounts.splice(id, 1)
            this.setState({ accounts })
        } catch (error) {
            console.log(error)
        }
    }

    handleChangeNewName = e => {
        this.setState({ name: e.target.value })
    }

    handleChangeNewValue = e => {
        this.setState({ value: e.target.value })
    }

    handleNew = async e => {
        e.preventDefault()
        const account = {
            name: this.state.name,
            value: this.state.value
        }
        const res = await api('post', '/accounts', account)
        this.setState({
            accounts: this.state.accounts.concat(res.data.account),
            name: '',
            value: 0
        })
    }

    render() {
        const accounts = this.state.accounts.map((account, i) => {
            return (
                <tr className="text-center" key={i}>
                    <td>{account.name}</td>
                    <td>
                        <div className="row justify-content-center">
                            <div className="col-md-3"><input className="form-control" id={i} value={account.value} onChange={this.handleChangeValue} /></div>
                        </div>
                    </td>
                    <td>
                        <Button className="mr-2" variant="success" id={i} onClick={this.handleSubmit}><i className="fas fa-check"></i></Button>
                        <Button variant="danger" id={i} onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></Button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="container mt-3 text-center" >
                <h2>Liste des comptes non-utilisateurs</h2>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr className="text-center">
                            <th>Nom</th>
                            <th>Montant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts}
                        <tr className="text-center" >
                            <td>
                                <div className="row justify-content-center">
                                    <div className="col-md-3"><input className="form-control" value={this.state.name} onChange={this.handleChangeNewName} /></div>
                                </div>
                            </td>
                            <td>
                                <div className="row justify-content-center">
                                    <div className="col-md-3"><input className="form-control" value={this.state.value} onChange={this.handleChangeNewValue} /></div>
                                </div>
                            </td>
                            <td>
                                <Button className="mr-2" variant="success" onClick={this.handleNew}><i className="fas fa-check"></i></Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Accounts