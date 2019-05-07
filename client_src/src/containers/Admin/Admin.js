import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

import './Admin.css'

class Admin extends Component {
    render() {
        return (
            <Navbar className="navbar" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav">
                        <NavLink to="/shop/reload" className="navlink">Recharger</NavLink>
                        <NavDropdown title="Comptes" id="basic-nav-dropdown" bsPrefix="navlink">
                            <NavDropdown.Item><NavLink to="/shop/users" className="dropdown-link">Utilisateurs</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/shop/accounts" className="dropdown-link">Autre</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Produits" id="basic-nav-dropdown" bsPrefix="navlink">
                            <NavDropdown.Item><NavLink to="/shop/products" className="dropdown-link">Liste des produits</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/shop/categories" className="dropdown-link">Catégories</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/shop/orders" className="navlink">Commandes</NavLink>
                        <NavLink to="/shop" className="navlink">Retour</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Admin