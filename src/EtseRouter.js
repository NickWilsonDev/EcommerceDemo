import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import SideBarComponent from './SideBarComponent';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import ProductScreen from './ProductScreen';
import CartScreen from './CartScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';

import './index.css';

let EtseRouter = () => (
    <Router>
        <div className='content-container'>
            <SideBarComponent />

            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/categories' component={CategoryScreen} />
            <Route exact path='/products' component={ProductScreen} />
            <Route exact path='/cart' component={CartScreen} />
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/logout' component={HomeScreen} />
            <Route exact path='/userProfile' component={ProfileScreen} />
        </div>
    </Router>
);

export default EtseRouter;

// probably will add more routes later
