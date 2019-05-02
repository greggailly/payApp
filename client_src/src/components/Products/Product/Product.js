import React from 'react'
import { Card } from 'react-bootstrap'

import './Product.css'

const Product = (props) => {
    var isShowed = "productCard text-center"
    if (props.solde < props.product.price) {
        isShowed = "productCard productCardDisabled text-center"
    }

    return (
        <Card className={isShowed} onClick={(props.solde >= props.product.price) ? () => props.clickProduct(props.product) : null}>
            <Card.Header>
                <strong>{props.product.name}</strong>
            </Card.Header>
            <Card.Body>
                <img src={props.product.img} alt="produit" className="productImage" />
            </Card.Body>
            <Card.Footer>
                {props.product.price} &euro;
            </Card.Footer>
        </Card>
    )
}

export default Product