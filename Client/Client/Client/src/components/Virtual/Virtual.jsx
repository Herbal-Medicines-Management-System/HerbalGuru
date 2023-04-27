import React from 'react'
import "./Virtual.scss"
import ReactCompareImage from 'react-compare-image';
import { motion } from 'framer-motion';

const Virtual = () => {

    return (
        <div className='virtual'>
            <div className='left'>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong Shade Again!</span>
                <span>Try Now!</span>
                <img src="/img/wave.png" alt="Wave" />
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <ReactCompareImage />
                    <img className='leftImage' src='/img/before.jpg' alt='' />
                    <img className='rightImage' src='/img/after.jpg' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Virtual;