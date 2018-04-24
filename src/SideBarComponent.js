import React from 'react';
import { Link } from 'react-router-dom';
import './SideBarComponent.css';
import LoginToggle from './LoginToggleComponent.js';

let SideBarComponent = () => (
    <div className='sidebar-container'>
        <div className='sidebar-item'>
            <Link to='/'>Home</Link>
        </div>
        
        <div className='sidebar-item'>
            <Link to='/categories'>Categories</Link>
        </div>

        <div className='sidebar-item'>
            <Link to='/products'>Products</Link>
        </div>

        <div className='sidebar-item'>
            <Link to='/cart'>Cart</Link>
        </div>

        <div className='sidebar-item'>
            <Link to='/'>Home</Link>
        </div>
        <LoginToggle className='sidebar-item'/>
    </div>
);

export default SideBarComponent;

