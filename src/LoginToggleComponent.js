import React from 'react';
import './SideBarComponent.css';

let LoginToggleComponent = (props) => {
    
        console.log(props.isLoggedIn);
    if(props.isLoggedIn) {
        console.log(props.isLoggedIn);
        return (
            <div className='sidebar-item'>
                <a href="#/logout">Logout</a>
            </div>
        );
    } else {
        return (
            <div className='sidebar-item'>
                <a href="#/login">Login</a>
            </div>
        );
    }
}
export default LoginToggleComponent;
