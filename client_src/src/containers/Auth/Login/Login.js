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
        }, (2500));
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

        let loading = null
        if (this.context.state.err === null & !this.context.state.isLoading) {
            loading = (
                <div class="sk-folding-cube">
                    <div class="sk-cube1 sk-cube"></div>
                    <div class="sk-cube2 sk-cube"></div>
                    <div class="sk-cube4 sk-cube"></div>
                    <div class="sk-cube3 sk-cube"></div>
                </div>
            )
        } else if (this.context.state.err === null & this.context.state.isLoading) {
            loading = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        } else if (this.context.state.err != null) {
            loading = <Alert variant="warning" className="error">{this.context.state.err.message}</Alert>
        }

        return (
            <div className='container-fluid background pt-5'>
                {redirectToShop}
                <div className="row login">
                    <div className="col align-self-center">
                        <div className="row">
                            <div className="col-md-12 text-center title">
                                <h1>Veuillez passer votre badge...</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center loading">
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
