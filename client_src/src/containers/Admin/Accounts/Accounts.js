import React, { useState, useEffect } from 'react'
import api from '../../../utils/axios'
import ReactTable from 'react-table'

import Modalview from '../../../components/Modalview/Modalview'

const Accounts = () => {
    const [accounts, setAccounts] = useState([])

    useEffect(
        () => {
            getAccounts()
        }, [])

    const getAccounts = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/accounts', null, token)
        setAccounts(res.data.accounts)
    }

    const renderEditable = (cellInfo) => {
        const data = accounts
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    handleChangeValue(e, cellInfo)
                }}
                dangerouslySetInnerHTML={{
                    __html: data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    const renderActions = (cellInfo) => {
        return (
            <i id={cellInfo.index} onClick={handleDelete} className="fas fa-trash-alt"></i>
        )
    }

    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
            Cell: renderEditable
        },
        {
            Header: 'Value',
            accessor: 'value',
            Cell: renderEditable
        },
        {
            Header: 'Actions',
            Cell: renderActions,
            maxWidth: 100,
            filterable: false
        }
    ]

    const handleChangeValue = async (e, cellInfo) => {
        e.preventDefault()
        const id = cellInfo.row._original._id
        let updatedAccounts = [...accounts]
        updatedAccounts[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
        try {
            const token = localStorage.getItem('payToken')
            await api('put', `/accounts/${id}`, updatedAccounts[cellInfo.index], token)
            setAccounts(updatedAccounts)
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

    const handleSuccess = (createdAccount) => {
        let updatedAccounts = [...accounts, createdAccount.data.account]
        setAccounts(updatedAccounts)
    }

    return (
        <div className="container mt-3 text-center" >
            <div className="row">
                <div className="col-8"><h2>Liste des comptes non-utilisateurs</h2></div>
                <div className="col-4"><Modalview
                    name='compte'
                    entity='accounts'
                    handleSuccess={handleSuccess}
                /></div>
            </div>
            <ReactTable
                data={accounts}
                columns={columns}
                showPageSizeOptions={false}
                defaultPageSize={12}
                filterable
            />
        </div >
    )
}

export default Accounts