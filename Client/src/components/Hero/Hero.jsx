import React from 'react';
import "./Hero.scss";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {

    const transition = { duration: 3, type: "spring" }

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
                <motion.div
                    initial={{ bottom: "6rem" }}
                    whileInView={{ bottom: "0rem" }}
                    className='greenCircle'
                    transition={transition}
                ></motion.div>
                <motion.img
                    transition={transition}
                    initial={{ bottom: "-6rem" }}
                    whileInView={{ bottom: "0rem" }}
                    src='/img/hero.png' alt='hero' width={600} />
                <motion.div
                    transition={transition}
                    initial={{ right: "4%" }}
                    whileInView={{ right: "2%" }}
                    className='cart2'>
                    <RiShoppingBagFill />
                    <div className='shopnow'>
                        <button>
                            <Link className='link' to='/category/1'>Shop Now</Link>
                        </button>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
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