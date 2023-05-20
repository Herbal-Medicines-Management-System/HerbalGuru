import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import Banner from '../../components/Banner/Banner';
import CustomersViwed from '../../components/CustomersViwed/CustomersViwed';
import Star from '../../components/Star/Star';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Review from "../../components/Review/Review"

const Product = () => {

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  

  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  );


  const stars = [
    {
      stars: 4,
    }
  ]

  const reviews = [
    {
      reviews: 26,
    }
  ]

  return (
    <><><Banner /><div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                  src={"http://localhost:1337" +
                  data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img")} />
              <img
                  src={"http://localhost:1337" +
                  data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img2")} />
            </div>
            <div className="mainImg">
              <img
                  src={"http://localhost:1337" +
                  data?.attributes[selectedImg]?.data?.attributes?.url}
                alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <h4>By Now Foods</h4>
            <Star stars={stars} reviews={reviews} />
            <span className="price">Rs. {data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="qty">
              <button
                onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() => dispatch(
                addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity,
                })
              )}
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
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
        </>
      )}
    </div></><Review/><CustomersViwed type="customers" /></>
  );
};

export default Product;