import React, { useState, useEffect, useContext } from 'react'

import api from './../../../utils/axios'
import { PayContext } from './../../../utils/PayProvider'
import { Button } from 'react-bootstrap'

const Products = () => {
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        img: '',
        starred: false,
        category: {},
        hasChanged: false
    })

    const context = useContext(PayContext)

    useEffect(
        () => {
            context.getProducts()
            setProducts(context.state.products)
            context.getCategories()
        }, []
    )

    const handleChange = e => {
        let updatedProducts = [...products]
        if (e.target.name === 'starred') {
            updatedProducts[e.target.id][e.target.name] = e.target.checked
        } else if (e.target.name === 'category') {
            const category = context.state.categories.find(category => category._id === e.target.value)
            updatedProducts[e.target.id][e.target.name] = category
        }
        else {
            updatedProducts[e.target.id][e.target.name] = e.target.value
        }
        updatedProducts[e.target.id].hasChanged = true
        setProducts(updatedProducts)
    }

    const handleSubmit = async e => {
        const id = e.currentTarget.id
        const productId = products[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('put', `/products/${productId}`, products[id], token)
            var newProducts = [...products]
            newProducts[id].hasChanged = false
            setProducts(newProducts)
        } catch (error) {
            throw new Error(error)
        }
    }

    const handleChangeNew = e => {
        let product = { ...newProduct }
        if (e.target.name === 'starred') {
            product.starred = e.target.checked
        } else if (e.target.name === 'category') {
            const category = context.state.categories.find(category => category._id === e.target.value)
            product.category = category
        }
        else {
            product[e.target.name] = e.target.value
        }
        product.hasChanged = true
        setNewProduct(product)
    }

    const handleNew = async e => {
        const token = localStorage.getItem('payToken')
        try {
            const res = await api('post', '/products', newProduct, token)
            let product = {
                name: '',
                price: '',
                img: '',
                starred: false,
                category: {},
                hasChanged: false
            }
            let updatedProducts = [...products].concat(res.data.createdProduct)
            setProducts(updatedProducts)
            setNewProduct(product)
        } catch (error) {
            throw new Error(error)
        }
    }

    const handleDelete = async e => {
        const id = e.currentTarget.id
        const productId = products[id]._id
        const token = localStorage.getItem('payToken')
        try {
            await api('delete', `/products/${productId}`, null, token)
            var updatedProducts = [...products]
            updatedProducts.splice(id, 1)
            setProducts(updatedProducts)
        } catch (error) {
            throw new Error(error)
        }
    }

    const options = context.state.categories.map((category, i) => {
        return (
            <option key={i} value={category._id}>{category.name}</option>
        )
    })

    const productsList = products.map((product, i) => {
        return (
            <div key={i} className="row text-center mb-3" >
                <div className="col-md-2"><input className="form-control" id={i} name="name" value={product.name} onChange={handleChange} /></div>
                <div className="col-md-2"><input type="number" className="form-control" id={i} name="price" value={product.price} onChange={handleChange} /></div>
                <div className="col-md-2"><input className="form-control" id={i} name="img" value={product.img} onChange={handleChange} /></div>
                <div className="col-md-3">
                    <select id={i} name="category" value={product.category._id} onChange={handleChange} className="form-control">
                        {options}
                    </select>
                </div>
                <div className="col-md-1"><input id={i} name="starred" className="form-control" type="checkbox" checked={product.starred} onChange={handleChange} /></div>
                <div className="col-md-2">
                    <Button className="mr-2" variant="success" id={i} onClick={handleSubmit} disabled={!product.hasChanged ? true : false}><i className="fas fa-check"></i></Button>
                    <Button variant="danger" id={i} onClick={handleDelete}><i className="fas fa-trash-alt"></i></Button>
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
                <div className="col-md-2"><input className="form-control" value={newProduct.name} name="name" onChange={handleChangeNew} /></div>
                <div className="col-md-2"><input type="number" className="form-control" value={newProduct.price} name="price" onChange={handleChangeNew} /></div>
                <div className="col-md-2"><input className="form-control" value={newProduct.img} name="img" onChange={handleChangeNew} /></div>
                <div className="col-md-3">
                    <select value={newProduct.category._id} name="category" onChange={handleChangeNew} className="form-control" required>
                        <option value="">Choosir Catégorie</option>
                        {options}
                    </select>
                </div>
                <div className="col-md-1"><input type="checkbox" className="form-control" checked={newProduct.starred} name="starred" onChange={handleChangeNew} /></div>
                <div className="col-md-2">
                    <Button className="mr-2" variant="success" onClick={handleNew} disabled={!newProduct.hasChanged ? true : false}>Créer</Button>
                </div>
            </div>
        </div>
    )
}

export default Products