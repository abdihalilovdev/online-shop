import {ADD_TO_FAVORITES} from "../ActionTypes";

const initialState = {
    favorite: JSON.parse(localStorage.getItem('favorite')) || [],
}

export const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES : {
            const found = state.favorite.some(el => el.id === action.payload.id)
            if (!found) {
                return {...state, favorite: [...state.favorite, action.payload]}
            }
            return {...state, favorite: state.favorite.filter(f => f.id !== action.payload.id)}
        }
        default : {
            return state
        }
    }
}