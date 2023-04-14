import React from 'react';
import "./BestSellers.scss";
import Card from '../Card/Card';

const BestSellers = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "/img/item16.webp",
            img2: "/img/item16_back.webp",
            title: "Eucerin, Roughness Relief Lotion, Fragrance Free, 16.9 fl oz (500 ml)",
            price: 2500,
        },
        {
            id: 2,
            img: "/img/item17.webp",
            img2: "/img/item17_back.jpg",
            title: "Eucerin, Advanced Repair Hand Creme, Fragrance Free, 2.7 oz (78 g)",
            price: 1800,
        },
        {
            id: 3,
            img: "/img/item18.webp",
            img2: "/img/item18_back.webp",
            title: "NOW Foods, Solutions, XyliWhite, Toothpaste Gel, Refreshmint, (181 g)",
            price: 1200,
        },
        {
            id: 4,
            img: "/img/item19.webp",
            img2: "/img/item19_back.webp",
            title: "Arm & Hammer, UltraMax, Solid Antiperspirant Deodorant, (28 g)",
            price: 4000,
        },
        {
            id: 5,
            img: "/img/item20.webp",
            img2: "/img/item20_back.webp",
            title: "Carmex, Classic Lip Balm, Medicated, 0.35 oz (10 g)",
            price: 1500,
        },

    ]

    return (
        <div className='bestSellers'>
            <div className='top'>
                <h1>{type} seller</h1>
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

export default BestSellers;