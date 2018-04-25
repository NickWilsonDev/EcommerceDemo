import React from 'react';
import { connect } from 'react-redux';
import ProductComponent from './ProductComponent.js';
import './product.css';

let ProductScreen = (props) => {
    return (
        <div>
            <div>ProductScreen</div>
            <div className='product-container'> {
                props.products.map((data) => {
                    return (
                        <ProductComponent key={data.id} name={data.name} price={data.price} />
                    );
                })
            }
            </div>
        </div>
    );
}

let mapStateToProps = (state, props) => {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps)(ProductScreen);
