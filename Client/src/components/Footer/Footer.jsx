import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='item'>
                    <h1>Categories</h1>
                    <span>Bath</span>
                    <span>Beauty</span>
                    <span>Grocery</span>
                    <span>Healthy Home</span>
                    <span>Sports</span>
                    <span>Supplements</span>
                </div>
                <div className='item'>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className='item'>
                    <h1>About</h1>
                    <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </span>
                </div>
                <div className='item'>
                    <h1>Contact</h1>
                    <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </span>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <span className='logo_text'>herbalguru</span>
                    <span className='copyright'>&copy; Copyright 2023. All Rights Reserved</span>
                </div>
                <div className='right'>
                    <img src="/img/payment.png" alt="payment" />
                </div>
            </div>
        </div>
    );
};

export default Footer;