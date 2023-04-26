import React from 'react';
import "./CardWithoutOldPrice.scss";
import { Link } from "react-router-dom";

const CardWithoutOldPrice = ({ item }) => {

    return (

        <Link className="link" to={`/product/${item.id}`}>
            <div className="cardWithoutOldPrice">
                <div className="image">
                    <img src={'http://localhost:1337' + item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />
                    <img src={'http://localhost:1337' + item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
                </div>
                <h2>{item?.attributes?.title}</h2>
                <div className="prices">
                    <h3>Rs. {item?.attributes?.price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default CardWithoutOldPrice;