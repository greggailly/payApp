import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { PayContext } from '../../../utils/PayProvider'
import { Alert } from 'react-bootstrap'

import './Login.css'

class Login extends Component {
    state = {
        badge: ''
    }

    _handleKey = async e => {
        switch (e.keyCode) {
            case 13:
                await this.context.login(this.state.badge)
                this.setState({ badge: '' })
                this.clearMessage()
                break;
            default:
                var badge = this.state.badge
                badge += e.key
                this.setState({ badge })
                this.setTimer()
                break;
        }
    }

    setTimer = () => {
        if (this.timerHandle) {
            return;
        }
        this.timerHandle = setTimeout(() => {
            this.setState({ badge: '' });
        }, (500));
    }

    clearTimer = () => {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    clearMessage = () => {
        this.messageTimer = setTimeout(() => {
            this.context.clearError()
        }, (5000));
    }

    componentDidMount() {
        document.addEventListener("keypress", this._handleKey)
    }

    componentDidUpdate() {
        this.clearTimer()
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this._handleKey)
    }

    handleChange = e => {
        this.setState({ badge: e.target.value })
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
        if (this.context.state.err != null) {
            error = <Alert variant="warning">{this.context.state.err.message}</Alert>
        }

        let loading = null
        if (this.context.state.isLoading) {
            loading = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        }

        return (
            <div className='container-fluid background pt-5'>
                {redirectToShop}
                <div className="row login">
                    <div className="col align-self-center">
                        <div className='text-center'>
                            {error}
                            <h1>Veuillez passer votre badge...</h1>
                            {loading}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

Login.contextType = PayContext

export default Login
