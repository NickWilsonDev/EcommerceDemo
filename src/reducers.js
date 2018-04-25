/* reducers.js */

let categories = [
    { "id": 1, "name": "Technology" },
    { "id": 2, "name": "Food and Beverage" },
    { "id": 3, "name": "Educational" },
    { "id": 4, "name": "Board Games"}
];

let products = [
    { "id": 1, "name": "Coffee Maker", "categoryId": 2, "price": 19.99 },
    { "id": 2, "name": "Redux Help", "categoryId": 3, "price": 9.99 },
    { "id": 3, "name": "Super Amazing Computer", "categoryId": 1, "price": 10000 },
    { "id": 4, "name": "Werewolf", "categoryId": 4, "price": 14.99 }
];

let users = [
    { "id": 1, "firstname": "Seth", "lastname": "Zim" },
    { "id": 2, "firstname": "Jonathan", "lastname": "Martin" },
    { "id": 3, "firstname": "Joshua", "lastname": "Martin" }
];

let cart = [];

const initialState = {
    categories: categories,
    products: products,
    users: users,
    cart: cart
};

let reducer = (oldState = initialState, action) => {
    console.log('actiontype : ' + action.type);


    return oldState;
};

export default reducer;
