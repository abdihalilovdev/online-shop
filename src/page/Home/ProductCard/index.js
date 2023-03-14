import React from 'react';
import {useSelector} from "react-redux";
import AddToBasketBtn from "../../../ui/AddToBasketBtn";
import NavigateToBasketBtn from "../../../ui/NavigateToBasketBtn";
import ToFavoriteBtn from "../../../ui/ToFavoriteBtn";
import {Link} from "react-router-dom";

const ProductCart = ({el}) => {
    const {allCurrencies,currency} = useSelector(state => state.main)
    const {basket} = useSelector(state => state.basket)
    const found = basket.some(b => b.id === el.id)

    return (
        <div className='w-[20%] mx-4 my-10 flex items-center flex-col'>
            <Link to={`/product/detail/${el.id}`}>
                <img className='border-none rounded' src={el.image} alt="img" style={{
                    width:'250px',
                    height:'350px'
                }}/>
            </Link>
            <h1 className='my-2 font-bold text-xl'>{el.title}</h1>
            <p className='text-xl font-bold'>{Math.round(el.price * allCurrencies[currency])} {currency}</p>
            <div className='flex items-center'>
                {found ? <NavigateToBasketBtn/> : <AddToBasketBtn el={el}/>}
                <ToFavoriteBtn el={el}/>
            </div>
        </div>
    );
};

export default ProductCart;