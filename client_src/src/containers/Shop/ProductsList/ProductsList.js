import React, { Component } from 'react'

import Products from './../../../components/Products/Products'
import Catbar from './../../../components/Catbar/Catbar'
import { PayContext } from './../../../utils/PayProvider'

import './ProductsList.css'

class ProductsList extends Component {
    componentDidMount() {
        this.context.getCategories()
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md catbar">
                        <Catbar categories={this.context.state.categories} />
                    </div>
                    <div className="col-md-10">
                        <Products
                            products={this.context.state.products}
                            clickProduct={this.context.clickProduct}
                            solde={this.context.state.user.solde}
                            search={this.props.location.search.split('=')[1]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ProductsList.contextType = PayContext

export default ProductsList
