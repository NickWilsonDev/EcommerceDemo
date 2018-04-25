/* Store.js  our data store for redux */

import { createStore } from 'redux';
import reducer from './reducers.js';

let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

