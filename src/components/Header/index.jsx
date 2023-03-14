import React from 'react';
import {NavLink,Link} from "react-router-dom";
import logo from '../../img/logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {setCurrency} from "../../redux/actionCreators";
import favorite from "../../page/Favorite";

const Home = () => {
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state.basket)
    const {currency} = useSelector(state => state.main)
    const CURRENCIES = {
        $:'USA',
        RUB:'RUB',
        SOM:'KGS',
        TENGE:'KZT',
        SUM:'UZS',
    }
    return (
        <div className='bg-emerald-400 fixed left-0 right-0 top-0'>
            <div className='flex items-center justify-between container py-4'>
                <div>
                   <Link to={'/'}><img width={50} src={logo} alt="img"/></Link>
                </div>
                <nav className='flex header-nav'>
                    <NavLink className='text-amber-500 font-bold mx-3 text-xl hover: text-amber-400' to={'/'}>Home</NavLink>
                    <NavLink className='text-amber-500 font-bold mx-3 text-xl hover: text-amber-400' to={'/favorite'}>Favorite{favorite.length}</NavLink>
                    <NavLink className='text-amber-500 font-bold mx-3 text-xl hover: text-amber-400' to={'/basket'}>Basket{basket.length}</NavLink>
                </nav>
                <div>
                    <select
                        onChange={(event) => dispatch(setCurrency(event))}
                            className="text-[16px] border-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            Object.keys(CURRENCIES).map(el => (
                                <option value={el} selected={el === currency}>{CURRENCIES[el]}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Home;