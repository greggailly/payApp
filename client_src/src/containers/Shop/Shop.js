import React, { useEffect, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { PayContext } from './../../utils/PayProvider'

import Sidebar from './Sidebar/Sidebar'
import Admin from './../Admin/Admin'
import ProductsList from './ProductsList/ProductsList';
import Users from '../Admin/Users/Users'
import Reload from './../Admin/Reload/Reload'
import Products from './../Admin/Products/Products'
import Categories from './../Admin/Categories/Categories'
import Accounts from './../Admin/Accounts/Accounts'
import Orders from './../Admin/Orders/Orders'

import './Shop.css'

const Shop = (props) => {
    const context = useContext(PayContext)

    useEffect(
        () => {
            context.checkLogin()
            context.getProducts()
            context.getCategories()
        }, []
    )

    var adminBar = (
        <div className="row">
            <div className="col-md-12 no-padding">
                <Admin />
            </div>
        </div>
    )

    var admin = (
        <Switch>
            <Route path={props.match.path + '/reload'} component={Reload} />
            <Route path={props.match.path + '/users'} component={Users} />
            <Route path={props.match.path + '/products'} component={Products} />
            <Route path={props.match.path + '/categories'} component={Categories} />
            <Route path={props.match.path + '/accounts'} component={Accounts} />
            <Route path={props.match.path + '/orders'} component={Orders} />
            <Route exact path="/shop" component={ProductsList} />
        </Switch>
    )

    var user = (
        <Switch>
            <Route exact path="/shop" component={ProductsList} />
        </Switch>
    )

    return (
        <div className="container-fluid background ">
            <div className="row">
                <div className="col-md-9 no-padding">
                    {context.state.user.isAdmin ? adminBar : null}
                    {context.state.user.isAdmin ? admin : user}

                </div>
                <div className="col-md-3  no-padding">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Shop
