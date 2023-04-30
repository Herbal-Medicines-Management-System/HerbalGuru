import React from 'react';
import "./BestSellers.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';

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
                    Turmeric: Turmeric is a popular Ayurvedic herb that has anti-inflammatory and antioxidant properties. It is often used in cooking and as a dietary supplement.Amla: Amla, also known as Indian gooseberry, is a fruit that is rich in vitamin C and has antioxidant and anti-inflammatory properties. It is often used in Ayurvedic medicine to support the immune system and promote healthy skin and hair.Neem: Neem is an Ayurvedic herb that has antibacterial and antifungal properties. It is often used in skincare products to treat acne and other skin conditions.
                </p>
            </div>
            <div className='bottom'>
                {data.map(item => (
                    <CardWithoutOldPrice item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;