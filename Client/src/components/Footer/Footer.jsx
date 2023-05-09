import React from 'react';
import "./Footer.scss";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='item'>
                    <h1>Categories</h1>
                    <div className="item">
                        <Link className="link" to="/category/1">
                            <span>Bath</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/category/2">
                            <span>Beauty</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/category/3">
                            <span>Grocery</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/category/4">
                            <span>Healthy Home</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/category/5">
                            <span>Sports</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/category/6">
                            <span>Supplements</span>
                        </Link>
                    </div>
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