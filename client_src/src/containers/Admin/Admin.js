import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Admin.css'

class Admin extends Component {
    render() {
        return (
            <div className="admin d-flex justify-content-stretch">
                <NavLink to="/shop/reload" className="btn btn-sidebar">Recharger</NavLink>
                <NavLink to="/shop/users" className="btn btn-sidebar">Utilisateurs</NavLink>
                <NavLink to="/shop/products" className="btn btn-sidebar">Produits</NavLink>
                <NavLink to="/shop/accounts" className="btn btn-sidebar">Comptes</NavLink>
                <NavLink to="/shop" className="btn btn-sidebar">Retour</NavLink>
            </div>
        )
    }
}

export default Admin