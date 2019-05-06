import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Dropdown, Navbar, NavDropdown, Nav } from 'react-bootstrap'

import './Admin.css'

class Admin extends Component {
    render() {
        return (
            <Navbar className="navbar" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav">
                        <NavLink to="/shop/reload" className="navlink">Recharger</NavLink>
                        <NavLink to="/shop/products" className="navlink">Produits</NavLink>
                        <NavDropdown title="Comptes" id="basic-nav-dropdown" bsPrefix="navlink">
                            <NavDropdown.Item><NavLink to="/shop/users" className="dropdown-link">Utilisateurs</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/shop/accounts" className="dropdown-link">Autre</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/shop" className="navlink">Retour</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div></div>
            </Navbar>
        )
    }
}

export default Admin