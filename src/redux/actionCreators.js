import {
    ADD_TO_BASKET,
    ADD_TO_FAVORITES,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    GET_PRODUCT,
    SET_CURRENCY
} from "./ActionTypes";
import basket from "../page/Basket";
import axios from "axios";


export const fetchProduct = () => {
    return async (dispatch) => {
        try {
            const url = await axios('https://fakestoreapi.com/products/')
            const {data} = await url
            dispatch({type: GET_PRODUCT, payload: data})
        } catch (e) {
            console.log(e)
        }
    }
}


/** BASKET **/

export const addToBasket = (product) => {

    let basket = JSON.parse(localStorage.getItem('basket')) || []
    const found = basket.find(el => el.id === product.id)
    if (found) {
        basket = basket.map(el => el.id === product.id ? {...el, quantity: el.quantity + 1} : el)
    } else {
        basket = [...basket, {...product, quantity: 1}]
    }
    localStorage.setItem('basket', JSON.stringify(basket))

    return {type: ADD_TO_BASKET, payload: product}
}
export const decreaseQuantity = (id) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    basket = basket.map(b => b.id === id ? {...b, quantity: b.quantity - 1} : b)
    localStorage.setItem('basket', JSON.stringify(basket))

    return {type: DECREASE_QUANTITY, payload: id}
}

export const deleteFromBasket = (product) => {

    let basket = JSON.parse(localStorage.getItem('basket')) || []
    basket = basket.filter(el => el.id !== product.id)
    localStorage.setItem('basket', JSON.stringify(basket))

    return {type: DELETE_FROM_BASKET, payload: product}
}

/** FAVORITES **/

export const addToFavorite = (product) => {

    let favorite = JSON.parse(localStorage.getItem('favorite')) || []
    const found = favorite.find(el => el.id === product.id)
    if (found) {
        favorite = favorite.filter(el => el.id !== product.id)
    } else {
        favorite.push(product)
    }
    localStorage.setItem('favorite', JSON.stringify(favorite))


    return {type: ADD_TO_FAVORITES, payload: product}
}

/** CURRENCIES **/

export const setCurrency = (e) => {
    localStorage.setItem('currency', e.target.value)
    return {type: SET_CURRENCY, payload: e.target.value}
}