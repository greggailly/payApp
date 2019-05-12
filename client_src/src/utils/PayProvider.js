import React, { Component } from 'react'

import api from './axios'
import Categories from './../containers/Admin/Categories/Categories';

export const PayContext = React.createContext()

export class PayProvider extends Component {
    state = {
        user: {
            isAdmin: false
        },
        products: [],
        list: [],
        isAuthenticated: false,
        orderValidated: false,
        error: null,
        isLoading: false,
        category: null,
        categories: []
    }

    getCategories = () => {
        const token = localStorage.getItem('payToken')
        api('get', '/categories', null, token)
            .then(res => {
                this.setState({ categories: res.data.categories })
            })
            .catch(err => {
                console.log(err)
            })
    }

    login = (badge) => {
        this.setState({ isLoading: true })
        this.setState({ error: null })
        api('post', '/login', { badge: badge })
            .then(res => {
                localStorage.setItem('payToken', res.data.token)
                localStorage.setItem('userId', res.data.user._id)
                this.setState({ user: res.data.user, isAuthenticated: true, isLoading: false })
            })
            .catch(err => {
                const error = new Error("Impossible de vous connecter...")
                error.statusCode = 401;
                this.setState({ error, isLoading: false })
            })
    }

    checkLogin = () => {
        const userId = localStorage.getItem('userId')
        if (userId && this.state.username == null) {
            const token = localStorage.getItem('payToken')
            api('get', `/users/${userId}`, null, token)
                .then(res => {
                    this.setState({ user: res.data.user, isAuthenticated: true })
                })
        }
    }

    logout = () => {
        this.setState({ isAuthenticated: false, list: [], user: {}, orderValidated: false })
        localStorage.removeItem('payToken')
        localStorage.removeItem('userId')
    }

    getProducts = () => {
        const token = localStorage.getItem('payToken')
        api('get', '/products', null, token)
            .then(res => {
                var products = []
                res.data.products.forEach(product => {
                    products.push(product)
                });
                this.setState({ products })
            })
    }

    clickProduct = (product) => {
        this.setState({
            list: this.state.list.concat(product),
            user: { ...this.state.user, solde: this.state.user.solde - product.price }
        })
    }

    removeItem = (itemIndex) => {
        var list = this.state.list
        const price = list[itemIndex].price
        list.splice(itemIndex, 1)
        this.setState({
            list,
            user: { ...this.state.user, solde: this.state.user.solde + price }
        })
    }

    render() {
        return (
            <PayContext.Provider value={{
                state: this.state,
                login: this.login,
                checkLogin: this.checkLogin,
                logout: this.logout,
                getProducts: this.getProducts,
                clickProduct: this.clickProduct,
                removeItem: this.removeItem,
                validate: this.validate,
                getCategories: this.getCategories
            }}>
                {this.props.children}
            </PayContext.Provider>
        )
    }
}
