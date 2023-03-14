import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {BsFillBookmarkCheckFill} from "react-icons/bs";
import FavoriteList from "./FavoriteList";

const Favorite = () => {
    const {favorite} = useSelector(state => state.favorites)
    const [mainState,setMainState] = useState(false)
    return (
        <div className='container pt-20'>
            <h1 className='text-center flex items-center justify-center font-mono text-[26px] mt-10'>
                Favorite
                <BsFillBookmarkCheckFill/>
            </h1>
            <ul className='w-[630px] mx-auto my-10 rounded'>
                {
                    favorite.map(el => <FavoriteList
                        key={el.id}
                        el={el}
                        mainState={mainState}
                        setMainState={setMainState}
                    />)
                }
            </ul>
        </div>
    );
};

export default Favorite;