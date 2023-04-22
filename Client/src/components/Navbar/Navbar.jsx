import React, {  useState } from "react";


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import newRequest from "../../utils/newRequest";
import Cart from "../Cart/Cart";
import { useSelector } from 'react-redux';




const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [cart, setcart] = useState(false);
  const products = useSelector(state => state.cart.products);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='/img/sl.png' alt='sri_lanka_flag' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='/category/1'>
              Bath
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/category/2'>
              Beauty
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/category/3'>
              Grocery
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/category/4'>
              Healthy Home
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/category/5'>
              Sports
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/category/6'>
              Supplements
            </Link>
          </div>
        </div>
        <div className='center'>
          <Link to='/'>
            <img src='/img/logo.png' alt='logo' />
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>

          {!currentUser && (
            <div className='item'>
              <Link className='link' to='/login'>
                Sign in
              </Link>
            </div>
          )}

          {!currentUser?.isSeller && (
            <div className='item'>
              <Link className='link' to='/register'>
                Join
              </Link>
            </div>
          )}

          <div className='icons'>
            <SearchIcon />
            
            {currentUser && (
              
                <div className='userProfile' onClick={() => setOpen(!open)}>
               
                  <img
                    src={currentUser.img || 'https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg'}
                    alt='pro pic'
                  />
                  <span className='username'>{currentUser?.username}</span>
                  {open && (<div className='options'>
                    {currentUser?.isSeller && (
                      <>
                        <span>My Products</span>
                        <span>Add New Product</span>
                      </>
                    )}
                    <span>Orders</span>
                    <span>Messages</span>
                    <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                  </div>)}
                </div>
               
            )}
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon' onClick={() => setcart(!cart)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {cart && <Cart />}
    </div>
  );
};

export default Navbar;
