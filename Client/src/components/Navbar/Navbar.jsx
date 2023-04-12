import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <img src="/img/sl.png" alt="sri_lanka_flag" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <Link className='link' to="/category/1">Bath</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/category/2">Beauty</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/category/3">Grocery</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/category/4">Healthy Home</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/category/5">Sports</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/category/6">Supplements</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link to="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className='cartIcon'>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;