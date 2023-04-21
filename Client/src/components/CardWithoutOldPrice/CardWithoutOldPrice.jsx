import React from 'react';
import "./CardWithoutOldPrice.scss";
import { Link } from "react-router-dom";

const CardWithoutOldPrice = ({ item }) => {
    console.log(item);
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="cardWithoutOldPrice">
                <div className="image">
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>Rs. {item.price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default CardWithoutOldPrice;