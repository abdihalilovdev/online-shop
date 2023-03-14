import {combineReducers, createStore,applyMiddleware} from "redux";
import {mainReducer} from "./Reducers/Reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "./Reducers/BasketReducer";
import {FavoriteReducer} from "./Reducers/FavoriteReducer";
import thunk from "redux-thunk";

const rootState = combineReducers({
 main:mainReducer,
 basket:BasketReducer,
 favorites:FavoriteReducer,
})


 export const store = createStore(rootState,composeWithDevTools(applyMiddleware(thunk)))