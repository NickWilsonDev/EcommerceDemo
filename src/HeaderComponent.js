import React from 'react';
import './Header.css';
import shoppingCart from './img/shopping-cart.svg';

let HeaderComponent = () => (
    <div className='header-container'>
        <div className='header-item title'>
            Etsetera
        </div>
        <div className='header-item title'>
            <a href='#/userProfile'>Profile</a>
        </div>

        <div className='header-item'>
            <a href="#/cart">
                <img src={shoppingCart} alt='Shopping Cart'/>
            </a>
        </div>
    </div>
);

export default HeaderComponent;
