import React, { Component } from 'react'

import api from './../../../utils/axios';
import { Button } from 'react-bootstrap'

class Reload extends Component {
    state = {
        badge: '',
        value: 0,
        accounts: []
    }

    componentDidMount() {
        const token = localStorage.getItem('payToken')
        api('get', '/accounts', null, token)
            .then(res => {
                this.setState({ accounts: res.data.accounts })
            })
    }

    handleChangeBadge = e => {
        this.setState({ badge: e.target.value })
    }

    handleChangeValue = e => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = e => {
        const user = {
            badge: this.state.badge,
            solde: this.state.value
        }
        const token = localStorage.getItem('payToken')
        api('post', 'users', user, token)
            .then(res => {
                var caisseAccount = this.state.accounts.find(account => account.name === 'Caisse')
                var value = parseFloat(caisseAccount.value)
                value = value + parseFloat(this.state.value)
                caisseAccount.value = value
                api('put', `/accounts/${caisseAccount._id}`, caisseAccount, token)
                    .then(caisseRes => {
                        console.log(caisseRes)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                this.setState({ badge: '', value: '' })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="m-5">
                <div className="row text-center mb-3" >
                    <div className="col-md-3">Badge</div>
                    <div className="col-md-3">Montant</div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row text-center mb-3" >
                    <div className="col-md-3"><input type="password" className="form-control" value={this.state.badge} onChange={this.handleChangeBadge} /></div>
                    <div className="col-md-3"><input type="number" className="form-control" value={this.state.value} onChange={this.handleChangeValue} /></div>
                    <div className="col-md-4">
                        <Button className="mr-2" variant="success" onClick={this.handleSubmit}>Recharger</Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Reload
