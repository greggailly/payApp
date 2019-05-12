import React from 'react'

import Product from './Product/Product'

import './Products.css'

const Products = (props) => {
    const productsList = props.products.map(product => {
        if (props.search) {
            if (product.category.name === props.search) {
                return (
                    <Product
                        key={product._id}
                        product={product}
                        clickProduct={props.clickProduct}
                        solde={props.solde} />
                )
            }
        }
        else {
            if (product.starred) {
                return (
                    <Product
                        key={product._id}
                        product={product}
                        clickProduct={props.clickProduct}
                        solde={props.solde} />
                )
            }
        }
        return null
    })
    return (
        <div className="products d-flex flex-wrap">
            {productsList}
        </div>
    )
}

export default Products