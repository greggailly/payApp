import React, { useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { PayContext } from './../../../utils/PayProvider'

const Logout = () => {
    const context = useContext(PayContext)

    useEffect(
        () => {
            context.logout()
        }, []
    )

    return (
        <Redirect to="/login" />
    )
}

export default Logout
