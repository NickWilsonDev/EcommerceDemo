import React from 'react';
import './cart.css';

let CartComponent = (props) => {
    return ( 
        <div className='cart-component'>
            {props.name} $ {props.price}
        </div>
    );
}

export default CartComponent;
