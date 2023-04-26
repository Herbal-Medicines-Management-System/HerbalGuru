import React from 'react';
import "./Star.scss";

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Star = () => {
    
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.5;
        debugger;

        return (
            <span key={index}>
                {5 >= index + 1 ? (<FaStar className='icon' />) : 5 >= number ? (<FaStarHalfAlt className='empty-icon' />) : (<AiOutlineStar className='icon' />)}
            </span>
        )
    });
    return (
        <div className='star'>
            {ratingStar}
            <p>28 customer reviews</p>
        </div>
    );
};

export default Star;;