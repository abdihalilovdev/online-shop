import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCart from "./ProductCard";
import {fetchProduct} from "../../redux/actionCreators";

const Home = ({el}) => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.main)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    console.log(products)

    return (
        <div className='container flex items-center justify-between flex-wrap mx-auto pt-20'>
            {
                products.map(el => <ProductCart key={el.id} el={el}/>)
            }
        </div>
    );
};

export default Home;