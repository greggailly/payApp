import React, { useState, useEffect } from 'react'
import api from '../../../utils/axios'

import { Button } from 'react-bootstrap'

const Accounts = () => {
    const [accounts, setAccounts] = useState([])
    const [name, setName] = useState('')
    const [value, setValue] = useState(0)

    useEffect(
        () => {
            getAccounts()
        }, [])

    const getAccounts = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/accounts', null, token)
        setAccounts(res.data.accounts)
    }

    const handleChangeValue = e => {
        e.preventDefault()
        const id = e.target.id
        var updatedAccounts
        updatedAccounts[id].value = e.target.value
        setAccounts(updatedAccounts)
    }

    const handleSubmit = async e => {
        const id = e.currentTarget.id
        const accountId = accounts[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('put', `/accounts/${accountId}`, accounts[id], token)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async e => {
        const id = e.currentTarget.id
        const accountId = accounts[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('delete', `/accounts/${accountId}`, null, token)
            var updatedAccounts = [...accounts]
            updatedAccounts.splice(id, 1)
            setAccounts(updatedAccounts)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeNewName = e => {
        setName(e.target.value)
    }

    const handleChangeNewValue = e => {
        setValue(e.target.value)
    }

    const handleNew = async e => {
        e.preventDefault()
        const account = {
            name,
            value
        }
        const res = await api('post', '/accounts', account)
        setAccounts(accounts.concat(res.data.account))
        setName('')
        setValue(0)
    }

    const accountsRender = accounts.map((account, i) => {
        return (
            <tr className="text-center" key={i}>
                <td>{account.name}</td>
                <td>
                    <div className="row justify-content-center">
                        <div className="col-md-3"><input className="form-control" id={i} value={account.value} onChange={handleChangeValue} /></div>
                    </div>
                </td>
                <td>
                    <Button className="mr-2" variant="success" id={i} onClick={handleSubmit}><i className="fas fa-check"></i></Button>
                    <Button variant="danger" id={i} onClick={handleDelete}><i className="fas fa-trash-alt"></i></Button>
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
                    {accountsRender}
                    <tr className="text-center" >
                        <td>
                            <div className="row justify-content-center">
                                <div className="col-md-3"><input className="form-control" value={name} onChange={handleChangeNewName} /></div>
                            </div>
                        </td>
                        <td>
                            <div className="row justify-content-center">
                                <div className="col-md-3"><input className="form-control" value={value} onChange={handleChangeNewValue} /></div>
                            </div>
                        </td>
                        <td>
                            <Button className="mr-2" variant="success" onClick={handleNew}><i className="fas fa-check"></i></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default Accounts