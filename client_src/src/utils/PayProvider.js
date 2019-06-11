import React, { Component } from 'react'

import api from './axios'

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
        err: null,
        isLoading: false,
        category: null,
        categories: []
    }

    getCategories = async () => {
        const token = localStorage.getItem('payToken')
        try {
            const res = await api('get', '/categories', null, token)
            this.setState({ categories: res.data.categories })
        } catch (error) {
            throw new Error(error)
        }
    }

    login = async (badge) => {
        this.setState({ isLoading: true })
        this.setState({ error: null })
        try {
            const res = await api('post', '/login', { badge: badge })
            if (res.status === 200) {
                localStorage.setItem('payToken', res.data.token)
                localStorage.setItem('userId', res.data.user._id)
                this.setState({ user: res.data.user, isAuthenticated: true, isLoading: false })
            } else {
                const err = new Error("Impossible de vous connecter...")
                err.statusCode = 401;
                this.setState({ err, isLoading: false })
            }
        } catch (error) {
            const err = new Error("Impossible de vous connecter...")
            err.statusCode = 401;
            this.setState({ err, isLoading: false })
        }
    }

    checkLogin = async () => {
        const userId = localStorage.getItem('userId')
        if (userId && this.state.username == null) {
            const token = localStorage.getItem('payToken')
            const res = await api('get', `/users/${userId}`, null, token)
            this.setState({ user: res.data.user, isAuthenticated: true })
        }
    }

    logout = () => {
        this.setState({ isAuthenticated: false, list: [], user: {}, orderValidated: false })
        localStorage.removeItem('payToken')
        localStorage.removeItem('userId')
    }

    getProducts = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/products', null, token)
        var products = []
        res.data.products.forEach(product => {
            products.push(product)
        });
        this.setState({ products })
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

    clearError = () => {
        this.setState({ err: null })
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
                getCategories: this.getCategories,
                clearError: this.clearError,
            }}>
                {this.props.children}
            </PayContext.Provider>
        )
    }
}
