import React, {useState} from 'react';
import {BsArrowLeftShort, BsTrashFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {addToFavorite} from "../../../redux/actionCreators";

const FavoriteList = ({el}) => {
    const [isScrolled,setIsScrolled] = useState(false)
    const dispatch = useDispatch()
    const deleteFromFav = (product) => {
        dispatch(addToFavorite(product))
    }
    return (
        <li className='flex hover:bg-gray-50/70 transition-all relative items-center overflow-hidden justify-between list-none my-2 font-mono cursor-pointer text-xl w-full rounded shadow-md'>
            <div className='flex items-center justify-between  my-2  w-full py-2 px-4'>
                {el.title}
                <div>
                    <BsArrowLeftShort
                    onClick={() => setIsScrolled(!isScrolled)}
                    className={`text-3xl ${isScrolled ? 'rotate-180' : 'rotate-0'}`}/>
                </div>
            </div>
            <div
                onClick={() => deleteFromFav(el)}
                className={` transition-all ${isScrolled ? 'right-0' : 'mr-[-100%]'} transition-all top-0 py-3 px-2 border rounded text-white border-none bg-red-500 text-xl`}>
                <BsTrashFill/>
            </div>
        </li>
    );
};

export default FavoriteList;