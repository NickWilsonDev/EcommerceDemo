import React from 'react';
import { connect } from 'react-redux';
import CategoryComponent from './CategoryComponent.js';
import './category.css'

let CategoryScreen = (props) => {
    //console.log(this.props.categories);
    return ( 
        <div>
            <div>Categories</div>
            <div className='category-container'>{
                props.categories.map((data) => {
                    return (
                        <CategoryComponent key={data.id} name={data.name} />
                    );
                })
                }
            </div>
        </div>
    );
}

let mapStateToProps = (state, props) => {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps)(CategoryScreen);
