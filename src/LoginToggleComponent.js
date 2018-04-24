import React from 'react';
import './SideBarComponent.css';

let LoginToggleComponent = (props) => {

    if(props.isLoggedIn != null) {
        return (
            <div className='sidebar-item'>
                <a href="#/logout">Logout</a>
            </div>
        );
    } else {
        return (
            <div className='sidebar-item'>
                <a href="#/login">Logout</a>
            </div>
        );
    }
}
export default LoginToggleComponent;
