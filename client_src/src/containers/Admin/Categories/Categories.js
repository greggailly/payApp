import React, { Component } from 'react'

import api from './../../../utils/axios'

class Categories extends Component {
    state = {
        categories: []
    }

    async componentDidMount() {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/categories', null, token)
        this.setState({ categories: res.data.categories })
    }

    render() {
        const categories = this.state.categories.map((category, i) => {
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
                        {categories}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Categories