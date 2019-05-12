import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import './Catbar.css'

const Catbar = (props) => {
    const categories = props.categories.map((category, i) => {
        return (
            <Link to={`/shop?category=${category.name}`} key={i}>
                <Button variant="catbar" className="mt-auto"><h3>{category.name}</h3></Button>
            </Link>
        )
    })

    return (
        <div>
            <Link to="/shop">
                <Button variant="catbar" className="mt-auto"><h3>Accueil</h3></Button>
            </Link>
            {categories}
        </div>
    )
}

export default Catbar