import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'
import axios from 'axios'
import * as serviceWorker from './serviceWorker';

const token = localStorage.getItem('payToken')

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
