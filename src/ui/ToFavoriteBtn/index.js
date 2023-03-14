import React from 'react';
import {BsFillHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from "../../redux/actionCreators";

const ToFavorite = ({el}) => {
    const {favorite} = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const found = favorite.some(f => f.id === el.id)
    return (
        <button
            onClick={() => dispatch(addToFavorite(el))}
            className={`${found ? 'text-red-700' : 'text-white'} h-10 mt-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
        ><BsFillHeartFill/>
        </button>
    );
};

export default ToFavorite;