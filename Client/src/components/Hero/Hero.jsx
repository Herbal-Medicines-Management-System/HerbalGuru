import React from 'react';
import "./Hero.scss";
import { Link } from 'react-router-dom';

import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
    return (
        <div className='hero'>
            {/* left side */}
            <div className='h_sides'>
                <span className='text1'>skin protection cream</span>
                <div className='text2'>
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man childern rejoiced.</span>
                </div>
            </div>

            {/* middle side */}
            <div className='wrapper'>
                <div className='greenCircle'></div>
                <img src='/img/hero.png' alt='hero' width={600} />
                <div className='cart2'>
                    <RiShoppingBagFill />
                    <div className='shopnow'>
                        <button>
                            <Link className='link' to='/category/1'>Shop Now</Link>
                        </button>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className='h_sides'>
                <div className='traffic'>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className='customers'>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;