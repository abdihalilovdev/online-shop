import {
    ADD_TO_BASKET,
    ADD_TO_FAVORITES,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    GET_PRODUCT,
    SET_CURRENCY
} from "../ActionTypes";

const initialState = {
    products: [],
    favorite: [],
    basket: [],
    currency: localStorage.getItem('currency') || '$',
    allCurrencies: {
        $:1,
        SOM:87,
        RUB:76,
        TENGE:500,
        SUM:11196,
    }
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT : {
            return {...state, products: action.payload}
        }
        case SET_CURRENCY : {
            return {...state,currency: action.payload}
        }
        default : {
            return state
        }
    }
}