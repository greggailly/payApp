import React, { Component } from 'react'

import api from './../../../utils/axios'

class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        const token = localStorage.getItem('payToken')
        api('get', '/categories', null, token)
            .then(res => {
                this.setState({ categories: res.data.categories })
            })
    }

    render() {
        const categories = this.state.categories.map((category, i) => {
            return (
                <tr id={i}>
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
                        <th>
                            <td>Nom</td>
                            <td></td>
                        </th>
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