import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { PayContext } from './../../../utils/PayProvider'

class Logout extends Component {
    componentDidMount() {
        this.context.logout()
    }

    render() {
        return (
            <Redirect to="/login" />
        )
    }
}

Logout.contextType = PayContext

export default Logout
