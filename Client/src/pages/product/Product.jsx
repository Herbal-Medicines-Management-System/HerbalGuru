import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import Banner from '../../components/Banner/Banner';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const images = [
    "/img/b1.webp",
    "/img/b1_back.jpg",
  ]

  return (
    <><Banner /><div className='product'>

      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>NOW Foods, Essential Oils, Lavender, 1 fl oz (30 ml)</h1>
        <h4>By Now Foods</h4>
        <span className='price'>Rs. 2500</span>
        <p>NOW Foods is a natural products company that offers a wide range of supplements, personal care products, and essential oils. The Essential Oils Lavender product is a 1 fl oz (30 ml) bottle of pure lavender essential oil, which is extracted from the flowers of the lavender plant through a steam distillation process. Lavender essential oil is popular for its calming and relaxing properties, and can be used in aromatherapy, massage, or as a natural fragrance for DIY beauty and cleaning products. NOW Foods' lavender essential oil is 100% pure and free of synthetic ingredients, and is tested for purity and quality.</p>
        <div className='qty'>
          <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className='item'>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className='info'>
          <span><b>Best By:</b> September 1 2025</span>
          <span><b>Date First Available:</b> June 24 2011</span>
          <span><b>Shipping Weight:</b> 0.2 lb</span>
          <span><b>Product Code:</b> NOW-07560</span>
          <span><b>UPC Code:</b> 733739075604</span>
          <span><b>Package Quantity:</b> 1</span>
          <span><b>Dimensions:</b> 3.6 x 1.02 x 1.3 in, 0.2 lb</span>
        </div>
        <hr />
      </div>
    </div></>
  );
};

export default Product;