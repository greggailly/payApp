import React, { Component } from 'react'

import Products from './../../../components/Products/Products'
import { PayContext } from './../../../utils/PayProvider'

class ProductsList extends Component {
    render() {
        return (
            <Products
                products={this.context.state.products}
                clickProduct={this.context.clickProduct}
                solde={this.context.state.user.solde} />
        )
    }
}

ProductsList.contextType = PayContext

export default ProductsList
