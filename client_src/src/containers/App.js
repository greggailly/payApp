import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { PayProvider } from '../utils/PayProvider'

import Shop from './Shop/Shop'
import Login from './Auth/Login/Login'
import Logout from './Auth/Logout/Logout'

import '../styles/Buttons.css'
import '../styles/App.css'


const App = () => {
  return (
    <PayProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/shop" component={Shop} />
        <Redirect exact from="/" to="/logout" />
      </Switch>
    </PayProvider>
  );
}

export default App;
