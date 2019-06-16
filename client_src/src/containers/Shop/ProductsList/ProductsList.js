import React, { useContext } from 'react'

import Products from './../../../components/Products/Products'
import Catbar from './../../../components/Catbar/Catbar'
import { PayContext } from './../../../utils/PayProvider'

import './ProductsList.css'

const ProductsList = (props) => {
    const context = useContext(PayContext)
    return (
        <div className="container-fluid">
            <div className="row fullHeight">
                <div className="col-md catbar">
                    <Catbar categories={context.state.categories} />
                </div>
                <div className="col-md-10">
                    <Products
                        products={context.state.products}
                        clickProduct={context.clickProduct}
                        solde={context.state.user.solde}
                        search={props.location.search.split('=')[1]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductsList
