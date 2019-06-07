import React, { Component } from 'react'

import api from './../../../utils/axios'
import { PayContext } from './../../../utils/PayProvider'
import { Button } from 'react-bootstrap'

class Products extends Component {
    state = {
        products: [],
        name: '',
        price: '',
        img: '',
        starred: false,
        hasChanged: false,
        selectedOption: '',
        categories: []
    }

    componentDidMount() {
        const token = localStorage.getItem('payToken')
        api('get', '/products', null, token)
            .then(res => {
                var products = res.data.products.map(product => {
                    return (
                        { ...product, hasChanged: false }
                    )
                })
                this.setState({ products })
            })
        api('get', '/categories', null, token)
            .then(res => {
                this.setState({ categories: res.data.categories })
            })
    }

    handleChangeName = e => {
        const id = e.target.id
        var products = this.state.products
        products[id].name = e.target.value
        products[id].hasChanged = true
        this.setState({ products })
    }

    handleChangePrice = e => {
        const id = e.target.id
        var products = this.state.products
        products[id].price = e.target.value
        products[id].hasChanged = true
        this.setState({ products })
    }

    handleChangeImg = e => {
        const id = e.target.id
        var products = this.state.products
        products[id].img = e.target.value
        products[id].hasChanged = true
        this.setState({ products })
    }

    handleChangeStarred = e => {
        const id = e.target.id
        var products = this.state.products
        products[id].starred = e.target.checked
        products[id].hasChanged = true
        this.setState({ products })
    }

    handleChangeCategory = e => {
        const id = e.target.id
        var products = this.state.products
        const category = this.state.categories.find(category => category._id === e.target.value)
        products[id].category = category
        products[id].hasChanged = true
        this.setState({ products })
    }

    handleSubmit = e => {
        const id = e.currentTarget.id
        const productId = this.state.products[id]._id
        const token = localStorage.getItem('payToken')
        api('put', `/products/${productId}`, this.state.products[id], token)
            .then(res => {
                var products = this.state.products
                products[id].hasChanged = false
                this.setState({ products })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleNewName = e => {
        this.setState({ name: e.target.value, hasChanged: true })
    }

    handleNewPrice = e => {
        this.setState({ price: e.target.value, hasChanged: true })
    }

    handleNewImg = e => {
        this.setState({ img: e.target.value, hasChanged: true })
    }

    handleNewCategory = e => {
        this.setState({ selectedOption: e.target.value, hasChanged: true })
    }

    handleNewStarred = e => {
        this.setState({ starred: e.target.checked })
    }

    handleNew = e => {
        const product = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img,
            starred: this.state.starred,
            category: this.state.selectedOption
        }
        const token = localStorage.getItem('payToken')
        api('post', '/products', product, token)
            .then(res => {
                this.setState({
                    name: '',
                    price: '',
                    img: '',
                    starred: false,
                    selectedOption: '',
                    hasChanged: false,
                    products: this.state.products.concat(res.data.createdProduct)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleDelete = e => {
        const id = e.currentTarget.id
        const productId = this.state.products[id]._id
        const token = localStorage.getItem('payToken')
        api('delete', `/products/${productId}`, null, token)
            .then(res => {
                var products = this.state.products
                products.splice(id, 1)
                this.setState({ products })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        const options = this.state.categories.map((category, i) => {
            return (
                <option key={i} value={category._id}>{category.name}</option>
            )
        })

        const productsList = this.state.products.map((product, i) => {
            return (
                <div key={i} className="row text-center mb-3" >
                    <div className="col-md-2"><input className="form-control" id={i} value={product.name} onChange={this.handleChangeName} /></div>
                    <div className="col-md-2"><input type="number" className="form-control" id={i} value={product.price} onChange={this.handleChangePrice} /></div>
                    <div className="col-md-2"><input className="form-control" id={i} value={product.img} onChange={this.handleChangeImg} /></div>
                    <div className="col-md-3">
                        <select id={i} value={product.category._id} onChange={this.handleChangeCategory} className="form-control">
                            {options}
                        </select>
                    </div>
                    <div className="col-md-1"><input id={i} className="form-control" type="checkbox" checked={product.starred} onChange={this.handleChangeStarred} /></div>
                    <div className="col-md-2">
                        <Button className="mr-2" variant="success" id={i} onClick={this.handleSubmit} disabled={!product.hasChanged ? true : false}><i className="fas fa-check"></i></Button>
                        <Button variant="danger" id={i} onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></Button>
                    </div>
                </div>
            )
        })

        return (
            <div className="m-5">
                <div className="row text-center mb-3" >
                    <div className="col-md-2">Nom</div>
                    <div className="col-md-2">Prix</div>
                    <div className="col-md-2">Image</div>
                    <div className="col-md-3">Catégorie</div>
                    <div className="col-md-1">Starred</div>
                    <div className="col-md-2"></div>
                </div>
                {productsList}
                <div className="row text-center mb-3" >
                    <div className="col-md-2"><input className="form-control" value={this.state.name} onChange={this.handleNewName} /></div>
                    <div className="col-md-2"><input type="number" className="form-control" value={this.state.price} onChange={this.handleNewPrice} /></div>
                    <div className="col-md-2"><input className="form-control" value={this.state.img} onChange={this.handleNewImg} /></div>
                    <div className="col-md-3">
                        <select value={this.state.selectedOption} onChange={this.handleNewCategory} className="form-control" required>
                            <option value="">Choosir Catégorie</option>
                            {options}
                        </select>
                    </div>
                    <div className="col-md-1"><input type="checkbox" className="form-control" checked={this.state.starred} onChange={this.handleNewStarred} /></div>
                    <div className="col-md-2">
                        <Button className="mr-2" variant="success" onClick={this.handleNew} disabled={!this.state.hasChanged ? true : false}>Créer</Button>
                    </div>
                </div>
            </div>
        )
    }
}

Products.contextType = PayContext

export default Products