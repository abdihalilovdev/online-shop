import React from 'react';
import {useSelector} from "react-redux";
import BasketRow from "./BasketRow";

const BasketTable = () => {
    const {basket} = useSelector(state => state.basket)
    const {allCurrencies, currency} = useSelector(state => state.main)
    const totalPrice = Math.round(basket.reduce((acc, el) => acc + el.price * el.quantity * allCurrencies[currency], 0))

    return (
        <div className="relative overflow-x-auto pt-11 rounded">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 container">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Delete
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketRow key={el.id} el={el}/>)
                }
                </tbody>
            </table>
            <h1 className='text-center my-4 font-mono text-white mx-auto text-xl bg-emerald-400 py-4 px-8 rounded w-[300px]'>Total price:{totalPrice} {currency}</h1>
        </div>

    );
};

export default BasketTable;