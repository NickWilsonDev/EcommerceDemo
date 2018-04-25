import React from 'react';
import { connect } from 'react-redux';
import CartComponent from './CartComponent.js';
import './cart.css';

let CartScreen = (props) => {

    if (props.cart.length === 0) {
        return (
            <div>
                <div>CartScreen</div>
                <div>Your cart is empty.</div>
            </div>
        );
    } else {
        return (
            <div>
                <div>CartScreen</div>
                <div className='cart-container'> {
                    props.cart.map((data) => {
                        return (
                            <CartComponent key={data.id} name={data.name} price={data.price} />
                        );
                    })
                }
                </div>
            </div>
        );
    }
}


let mapStateToProps = (state, props) => {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps)(CartScreen);
