import React from 'react';
import './category.css';

let CategoryComponent = (props) => {
    return ( 
        <div className='category-component'>
            {props.name}
        </div>
    );
}

export default CategoryComponent;
