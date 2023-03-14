import {ADD_TO_BASKET, DECREASE_QUANTITY, DELETE_FROM_BASKET} from "../ActionTypes";


const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [],
}

export const BasketReducer = (state = initialState,action) => {
    switch (action.type){

        case ADD_TO_BASKET : {
            const found = state.basket.find(el => el.id === action.payload.id)
            if (found) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1}
                        : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        }
        case DELETE_FROM_BASKET : {
            return {...state, basket: state.basket.filter(el => el.id !== action.payload.id)}
        }
        case DECREASE_QUANTITY :
            // return {
            //     ...state,
            //     basket: state.basket.map(el => el.id === action.payload ?  : el)
            // }

        {
            return {
                ...state, basket: state.basket.map(el => {
                    if (el.id === action.payload && el.quantity > 1) {
                        return {...el, quantity: el.quantity - 1}
                    } else return el
                })
            }
        }

        default : {
            return state
        }
    }
}