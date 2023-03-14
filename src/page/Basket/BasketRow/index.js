import React from 'react';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {FaTrash} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import ModalImage from "./ModalImage";
import {addToBasket, decreaseQuantity, deleteFromBasket} from "../../../redux/actionCreators";

const BasketRow = ({el}) => {
    const dispatch = useDispatch()
    const {allCurrencies,currency} = useSelector(state => state.main)
    const price = Math.round(el.price * el.quantity * allCurrencies[currency])
    return (
       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 rounded">
           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {el.title}
           </th>
           <td className="px-6 py-4">
               <ModalImage el={el}/>
           </td>
           <td className="px-6 py-4 font-bold text-[18px] mt-4 flex items-center">
               <AiOutlineMinusCircle onClick={() => dispatch(decreaseQuantity(el.id))} className={`text-[20px] ${el.quantity !== 1 && 'text-blue-700'}`}/>
               <span className='mx-2'>{el.quantity}</span>
               <AiOutlinePlusCircle onClick={() => dispatch(addToBasket(el))} className='text-[20px] text-blue-700'/>
           </td>
           <td className="px-6 py-4">
               {price}
           </td>
           <td className="px-10 cursor-pointer py-4">
               <FaTrash onClick={() => dispatch(deleteFromBasket(el))}/>
           </td>
       </tr>

    );
};

export default BasketRow;