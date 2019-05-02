import React, { Component } from 'react'
import api from '../../../utils/axios'

class Accounts extends Component {
    state = {
        accounts: []
    }

    componentDidMount() {
        const token = localStorage.getItem('payToken')
        api('get', '/accounts', null, token)
            .then(res => {
                this.setState({ accounts: res.data.accounts })
            })
    }

    render() {
        const accounts = this.state.accounts.map((account, i) => {
            return (
                <tr className="text-center" key={i}>
                    <td>{account.name}</td>
                    <td>{account.value} &euro;</td>
                    <td></td>
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
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Accounts