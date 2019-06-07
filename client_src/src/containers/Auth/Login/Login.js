import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { PayContext } from '../../../utils/PayProvider'
import { Alert } from 'react-bootstrap'

import './Login.css'

class Login extends Component {
    state = {
        badge: ''
    }

    handleChange = e => {
        this.setState({ badge: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.context.login(this.state.badge)
    }

    handleErase = e => {
        this.setState({ badge: '' })
    }

    render() {
        let redirectToShop = null
        if (this.context.state.isAuthenticated) {
            redirectToShop = <Redirect to="/shop" />
        }

        let error = null
        if (this.context.state.error != null) {
            error = <Alert variant="warning">{this.context.state.error.message}</Alert>
        }

        let loading = <button className="btn btn-primary mt-2" onClick={this.handleErase} >Effacer</button>
        if (this.context.state.isLoading) {
            loading = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        }

        return (
            <div className='container-fluid background pt-5'>
                {redirectToShop}
                <div className='text-center'>
                    {error}
                    <div className='card mx-auto'>
                        <div className='card-header bg-dark text-white'><h2>Connexion</h2></div>
                        <div className='card-body'>
                            <div className='col-md-6 offset-md-3'>
                                <form className='form-group mt-3' onSubmit={this.handleSubmit}>
                                    <input
                                        type='password'
                                        value={this.state.badge}
                                        onChange={this.handleChange}
                                        placeholder='Badge'
                                        className='form-control'
                                        required
                                        autoFocus />
                                </form>
                                {loading}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

Login.contextType = PayContext

export default Login
