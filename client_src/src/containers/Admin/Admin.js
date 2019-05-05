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
                    <Nav className="mr-auto">
                        <NavLink to="/shop" className="navlink">React-Bootstrap</NavLink>
                        <NavLink to="/shop" className="navlink">React-Bootstrap</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="navlink">
                            <NavDropdown.Item><NavLink to="/shop" className="navlink">React-Bootstrap</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/shop" className="navlink">React-Bootstrap</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/shop" className="navlink">React-Bootstrap</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Admin