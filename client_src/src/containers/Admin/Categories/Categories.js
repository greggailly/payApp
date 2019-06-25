import React, { useState, useEffect, useContext } from 'react'

import { PayContext } from './../../../utils/PayProvider'
import Modalview from '../../../components/Modalview/Modalview'
import ReactTable from 'react-table'
import api from '../../../utils/axios'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const context = useContext(PayContext)

    useEffect(
        () => {
            context.getCategories()
            setCategories(context.state.categories)
        }
        , [])

    const handleChangeValue = async (e, cellInfo) => {
        e.preventDefault()
        const id = cellInfo.row._original._id
        let updatedCategories = [...categories]
        updatedCategories[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
        try {
            const token = localStorage.getItem('payToken')
            console.log(updatedCategories[cellInfo.index])
            await api('put', `/categories/${id}`, updatedCategories[cellInfo.index], token)
            setCategories(updatedCategories)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async e => {
        const id = e.currentTarget.id
        const categoryId = categories[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('delete', `/categories/${categoryId}`, null, token)
            var updatedCategories = [...categories]
            updatedCategories.splice(id, 1)
            setCategories(updatedCategories)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSuccess = (newCategory) => {
        let updatedCategories = [...categories, newCategory.data.createdCategory]
        setCategories(updatedCategories)
    }

    const renderEditable = (cellInfo) => {
        const data = categories
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
            Header: 'Nom',
            accessor: 'name',
            Cell: renderEditable
        },
        {
            header: 'Action',
            Cell: renderActions,
            maxWidth: 100
        }
    ]

    return (
        <div className="container mt-3 text-center">
            <div className="row">
                <div className="col-8"><h2>Liste des catégories</h2></div>
                <div className="col-4">
                    <Modalview
                        name='catégorie'
                        entity='categories'
                        handleSuccess={handleSuccess}
                    /></div>
            </div>
            <ReactTable
                data={categories}
                columns={columns}
                showPageSizeOptions={false}
                defaultPageSize={15}
            />
        </div>
    )
}

export default Categories