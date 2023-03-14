import React from 'react';
import {ADD_TO_BASKET} from "../../redux/ActionTypes";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../redux/actionCreators";

const AddToBasketBtn = ({el}) => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(addToBasket(el))} type="button"
                className="text-white mt-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >Добавить в корзину
        </button>
    );
};

export default AddToBasketBtn;