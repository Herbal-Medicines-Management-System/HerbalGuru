import React from 'react';
import "./Banner.scss";

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='herbal'>
                    <img src='/img/herbal.png' ale='herbal' />
                </div>
                <div className='content'>
                    <span>upto</span>
                    <h3>20% off</h3>
                    <p>offer ends after 5 days</p>
                </div>
                <div className='women'>
                    <img src='/img/women.png' ale='women' />
                </div>
            </div>
        </div>
    );
};

export default Banner;