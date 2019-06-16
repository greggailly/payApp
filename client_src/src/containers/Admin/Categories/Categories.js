import React, { useState, useEffect, useContext } from 'react'

import { PayContext } from './../../../utils/PayProvider'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const context = useContext(PayContext)

    useEffect(
        () => {
            context.getCategories()
            setCategories(context.state.categories)
        }
        , [])

    const categoriesRender = categories.map((category, i) => {
        return (
            <tr key={i}>
                <td>{category.name}</td>
                <td></td>
            </tr>
        )
    })
    return (
        <div className="container mt-3">
            <div className="text-center"><h2>Liste des catégories</h2></div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categoriesRender}
                </tbody>
            </table>
        </div>
    )
}

export default Categories