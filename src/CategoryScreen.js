import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import CategoryComponent from './CategoryComponent.js';
import './category.css';
import { GridList, GridTile} from 'material-ui/GridList';
//import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

let CategoryScreen = (props) => {
    //console.log(this.props.categories);
    return (
    <MuiThemeProvider>
    <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
        <Subheader>Categories</Subheader>
        {
            
            props.categories.map((tile) => {
            //let link = tile.id;
            console.log(tile.img);
            return (
                <Link to={`/category/${tile.id}`}>
                <GridTile key={tile.img} title={tile.name}>
                    <img src={require(`${tile.img}`)} alt="category"/>
                </GridTile>
                </Link>
            )
            }
            )
        }
        </GridList>
    </div>
    </MuiThemeProvider>
    );
}

/*
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
 */

let mapStateToProps = (state, props) => {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps)(CategoryScreen);
