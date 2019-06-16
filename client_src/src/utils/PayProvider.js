import React, { useState } from 'react'

import api from './axios'

export const PayContext = React.createContext()

export const PayProvider = (props) => {
    const [user, setUser] = useState({ isAdmin: false })
    const [products, setProducts] = useState([])
    const [list, setList] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [orderValidated] = useState(false)
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [categories, setCategories] = useState([])

    const state = {
        user,
        products,
        list,
        isAuthenticated,
        orderValidated,
        err,
        isLoading,
        categories
    }

    const getCategories = async () => {
        const token = localStorage.getItem('payToken')
        try {
            const res = await api('get', '/categories', null, token)
            setCategories(res.data.categories)
        } catch (error) {
            throw new Error(error)
        }
    }

    const login = async (badge) => {
        setIsLoading(true)
        setErr(null)
        try {
            const res = await api('post', '/login', { badge: badge })
            if (res.status === 200) {
                localStorage.setItem('payToken', res.data.token)
                localStorage.setItem('userId', res.data.user._id)
                setUser(res.data.user)
                setIsAuthenticated(true)
                setIsLoading(false)
            } else {
                const err = new Error("Impossible de vous connecter...")
                err.statusCode = 401;
                setErr(err)
                setIsLoading(false)
            }
        } catch (error) {
            const err = new Error("Impossible de vous connecter...")
            err.statusCode = 401;
            setErr(err)
            setIsLoading(false)
        }
    }

    const checkLogin = async () => {
        const userId = localStorage.getItem('userId')
        if (userId && user.username == null) {
            const token = localStorage.getItem('payToken')
            const res = await api('get', `/users/${userId}`, null, token)
            setUser(res.data.user)
            setIsAuthenticated(true)
        }
    }

    const logout = () => {
        setIsAuthenticated(false)
        setList([])
        setUser({})
        localStorage.removeItem('payToken')
        localStorage.removeItem('userId')
    }

    const getProducts = async () => {
        const token = localStorage.getItem('payToken')
        const res = await api('get', '/products', null, token)
        var productsList = []
        res.data.products.forEach(product => {
            productsList.push(product)
        });
        setProducts(productsList)
    }

    const clickProduct = (product) => {
        setList(list.concat(product))
        setUser({ ...user, solde: user.solde - product.price })
    }

    const removeItem = (itemIndex) => {
        const price = list[itemIndex].price
        var updatedList = list
        updatedList.splice(itemIndex, 1)
        setList(updatedList)
        setUser({ ...user, solde: user.solde + price })
    }

    const clearError = () => {
        setErr(null)
    }

    return (
        <PayContext.Provider value={{
            state,
            login,
            checkLogin,
            logout,
            getProducts,
            clickProduct,
            removeItem,
            getCategories,
            clearError
        }}>
            {props.children}
        </PayContext.Provider>
    )
}
