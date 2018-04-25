import React from 'react';
import './product.css';

let ProductComponent = (props) => {
    return ( 
        <div className='product-component'>
            {props.name} $ {props.price}
        </div>
    );
}

export default ProductComponent;
