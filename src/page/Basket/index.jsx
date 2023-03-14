import React from 'react';
import BasketTable from "./BasketTable";
import {SlBasket} from "react-icons/sl";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(state => state.basket)
    return (
        <div>
            <h1 className='text-center flex items-center justify-center font-mono text-[26px] mt-10'>Basket <SlBasket/>
            </h1>
            {
                basket.length > 0 ? <BasketTable/> :
                    <Link to={'/'}>
                        <div
                            className='bg-amber-500 rounded py-2 px-4 font-mono text-[18px] text-center mx-auto my-4 w-[200px]'>
                            ADD PRODUCT +
                        </div>
                    </Link>
            }
        </div>
    );
};

export default Basket;