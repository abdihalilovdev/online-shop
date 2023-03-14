import React, {useState} from 'react';
import {useSelector} from "react-redux";

const ModalImage = ({el}) => {
    const [modal,setModal] = useState(true)
    return (
        <div>
                <img
                    onClick={() => setModal(false)}
                    width={45} src={el.image} alt=""/>
            <div onClick={() => setModal(true)}  hidden={modal} className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 '/>
            <div
                hidden={modal}
                className='fixed left-[38%] top-[16%]'>
                <img className='rounded' width={400} src={el.image} alt=""/>
            </div>
        </div>
    );
};

export default ModalImage;