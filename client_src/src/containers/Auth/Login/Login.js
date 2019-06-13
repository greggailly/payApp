import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { PayContext } from '../../../utils/PayProvider'
import { Alert } from 'react-bootstrap'

import './Login.css'

const Login = () => {
    const [badge, setBadge] = useState('')
    const context = useContext(PayContext)

    useEffect(
        () => {
            document.addEventListener("keypress", _handleKey)
            clearTimer()
            return () => {
                document.removeEventListener("keypress", _handleKey)
            }
        },
        [badge]
    )

    const _handleKey = async e => {
        switch (e.keyCode) {
            case 13:
                await context.login(badge)
                setBadge('')
                clearMessage()
                break;
            default:
                var updatedBadge = badge
                updatedBadge += e.key
                setBadge(updatedBadge)
                setTimer()
                break;
        }
    }

    var timerHandle = null
    const setTimer = () => {
        if (timerHandle) {
            return
        }
        timerHandle = setTimeout(() => {
            setBadge('')
        }, (500));
    }

    const clearTimer = () => {
        if (timerHandle) {
            clearTimeout(timerHandle);
            timerHandle = 0;
        }
    }

    const clearMessage = () => {
        setTimeout(() => {
            context.clearError()
        }, (2500));
    }

    let redirectToShop = null
    if (context.state.isAuthenticated) {
        redirectToShop = <Redirect to="/shop" />
    }

    let loading = null
    if (context.state.err === null & !context.state.isLoading) {
        loading = (
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
        )
    } else if (context.state.err === null & context.state.isLoading) {
        loading = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    } else if (context.state.err != null) {
        loading = <Alert variant="warning" className="error">{context.state.err.message}</Alert>
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

export default Login
