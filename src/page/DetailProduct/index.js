import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {allProduct} from "../Home/data";

const DetailProduct = () => {
    const [detail,setDetail] = useState({})
    const {productId} = useParams()
    console.log(productId)
    useEffect(() => {
        setDetail(allProduct?.find(el => el.id === +productId))
    },[])
    return (
        <div className='container pt-36'>
            <div className="detail">
                <img width={200} src={detail.image} alt="img"/>
            </div>
        </div>
    );
};

export default DetailProduct;