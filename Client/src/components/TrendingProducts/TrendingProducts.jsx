import React from 'react';
import "./TrendingProducts.scss";
import Card from '../Card/Card';

const TrendingProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "/img/item6.jpg",
            img2: "/img/item6_back.jpg",
            title: "One-A-Day, Women's Petites Complete Multivitamin, 160 Tablets",
            price: 2500,
        },
        {
            id: 2,
            img: "/img/item7.webp",
            img2: "/img/item7_back.webp",
            title: "Nature's Way, Willow Bark, 400 mg, 100 Vegan Capsules",
            price: 1800,
        },
        {
            id: 3,
            img: "/img/item8.webp",
            img2: "/img/item8_back.webp",
            title: "O'Keeffe's, Lip Repair, Cooling Relief, Lip Balm, 0.15 oz (4.2 g)",
            price: 1200,
        },
        {
            id: 4,
            img: "/img/item9.jpg",
            img2: "/img/item9_back.webp",
            title: "The Spice Lab, Nashville Hot Chicken Seasoning, 6.5 oz (184 g)",
            price: 4000,
        },
        {
            id: 5,
            img: "/img/item10.webp",
            img2: "/img/item10_back.webp",
            title: "Six Star, Creatine X3, Fruit Punch, 2.18 lbs (990 g)",
            price: 1500,
        },
    ]


    return (
        <div className='trendingProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className='bottom'>
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;