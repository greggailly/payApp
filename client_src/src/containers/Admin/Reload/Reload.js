import React, { useState, useEffect } from 'react'

import api from './../../../utils/axios';
import { Button } from 'react-bootstrap'

const Reload = () => {
    const [badge, setBadge] = useState('')
    const [value, setValue] = useState(0)
    const [accounts, setAccounts] = useState([])

    useEffect(
        () => {
            getAccounts()
        }, []
    )

    const getAccounts = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/accounts', null, token)
        setAccounts(res.data.accounts)
    }

    const handleChange = e => {
        console.log(e.target.name)
        switch (e.target.name) {
            case 'badge':
                setBadge(e.target.value)
                break
            case 'value':
                setValue(e.target.value)
                break
            default:
                break
        }
    }

    const handleSubmit = async e => {
        const user = {
            badge,
            solde: value
        }
        const token = localStorage.getItem('payToken')
        try {
            await api('post', 'users', user, token)
            var caisseAccount = accounts.find(account => account.name === 'Caisse')
            var newValue = parseFloat(caisseAccount.value)
            newValue = newValue + parseFloat(newValue)
            caisseAccount.value = newValue
            await api('put', `/accounts/${caisseAccount._id}`, caisseAccount, token)
            setBadge('')
            setValue(0)
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <div className="m-5">
            <div className="row text-center mb-3" >
                <div className="col-md-3">Badge</div>
                <div className="col-md-3">Montant</div>
                <div className="col-md-4"></div>
            </div>
            <div className="row text-center mb-3" >
                <div className="col-md-3"><input type="password" className="form-control" name="badge" value={badge} onChange={handleChange} /></div>
                <div className="col-md-3"><input type="number" className="form-control" name="value" value={value} onChange={handleChange} /></div>
                <div className="col-md-4">
                    <Button className="mr-2" variant="success" onClick={handleSubmit}>Recharger</Button>
                </div>
            </div>
        </div>
    )
}


export default Reload
